import type { NextFunction, Request, Response } from "express";
import { ProductService } from "../services/product.service";
import id from "zod/v4/locales/id.js";

export const ProductController = {
  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await ProductService.finAll();
      res.json(products);
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const product = await ProductService.findById(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const newProduct = await ProductService.createProduct(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const updatedProduct = await ProductService.updateProduct(id, body);
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const deletedProduct = await ProductService.deleteProduct(id);
      res.json({ message: `Deleted Product ID ${deletedProduct.id}` });
    } catch (error) {
      next(error);
    }
  },
  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const removedProduct = await ProductService.removeProduct(id);
      res.json({ message: `Removed Product ID ${removedProduct.id}` });
    } catch (error) {
      next(error);
    }
  },
  async restore(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const restoredProduct = await ProductService.restoreProduct(id);
      res.json({ message: `Restored Product ID ${restoredProduct.id}` });
    } catch (error) {
      next(error);
    }
  },
};
