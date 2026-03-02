import { ProductModel } from "../models/product.model";
import type { CreateProductInput } from "../types/product";

export const ProductService = {
  async finAll() {
    return ProductModel.getAll();
  },

  async createProduct(categoryId: number, payload: CreateProductInput) {
    return await ProductModel.create(categoryId, payload);
  },
};
