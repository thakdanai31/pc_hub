import { ProductModel } from "../models/product.model";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "../dto/product.dto";
import { AppError } from "../errors/AppError";

export const ProductService = {
  async finAll() {
    return ProductModel.getAll();
  },

  async findById(id: number) {
    const product = await ProductModel.getById(id);
    if (!product) {
      throw new AppError(404, `Product ID ${id} not found`);
    }
    return product;
  },

  async createProduct(payload: CreateProductInput) {
    return await ProductModel.create(payload);
  },

  async updateProduct(id: number, payload: UpdateProductInput) {
    return await ProductModel.update(id, payload);
  },

  async deleteProduct(id: number) {
    const product = await ProductModel.getById(id);
    if (!product) {
      throw new AppError(404, `Product ID ${id} not found`);
    }
    return await ProductModel.hardDelete(id);
  },

  async removeProduct(id: number) {
    const product = await ProductModel.getById(id);
    if (!product) {
      throw new AppError(404, `Product ID ${id} not found`);
    }
    return await ProductModel.softDelete(id);
  },

  async restoreProduct(id: number) {
    const product = await ProductModel.getById(id);
    if (!product) {
      throw new AppError(404, `Product ID ${id} not found`);
    }
    if (product.status !== "INACTIVE") {
      throw new AppError(400, "Product is Active now (no change)");
    }
    return await ProductModel.restore(id);
  },
};
