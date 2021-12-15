import { Category } from "./../entities/Category";
import { getRepository } from "typeorm";

type UpdateCategoryRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: UpdateCategoryRequest) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error("Category doesn't exists!");
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await repo.save(category);

    return category;
  }
}
