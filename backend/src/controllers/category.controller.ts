import type { NextFunction, Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export const CategoryController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, description } = req.body;
      const newCategory = await CategoryService.createCategory({
        name,
        description,
      });
      res.json(newCategory);
    } catch (error) {
      next(error);
    }
  },

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await CategoryService.findAll();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  },

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const NumId = Number(id);
      const category = await CategoryService.findById(NumId);
      res.json(category);
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const NumId = Number(id);
      const { name, description } = req.body;
      const updatedCategory = await CategoryService.updateCategory(NumId, {
        name,
        description,
      });
      res.json(updatedCategory);
    } catch (error) {
      next(error);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const NumId = Number(id);
      const deletedCategory = await CategoryService.deleteCategory(NumId);
      res.json(deletedCategory);
    } catch (error) {
      next(error);
    }
  },
};
