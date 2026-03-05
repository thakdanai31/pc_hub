import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { authenticate } from "../middlewares/authenticate";
import { authorize } from "../middlewares/authorize";
import { validate } from "../middlewares/validate";
import {
  CreateProductDto,
  IdParamDto,
  UpdateProductDto,
} from "../dto/product.dto";

const router = Router();

router.get("/", ProductController.findAll);
router.get("/:id", validate(IdParamDto, "params"), ProductController.findById);
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(CreateProductDto),
  ProductController.create,
);
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validate(IdParamDto, "params"),
  validate(UpdateProductDto),
  ProductController.update,
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validate(IdParamDto, "params"),
  ProductController.delete,
);

router.delete(
  "/remove/:id",
  authenticate,
  authorize("ADMIN", "EMPLOYEE"),
  validate(IdParamDto, "params"),
  ProductController.remove,
);

router.put(
  "/restore/:id",
  authenticate,
  authorize("ADMIN"),
  validate(IdParamDto, "params"),
  ProductController.restore,
);

export default router;
