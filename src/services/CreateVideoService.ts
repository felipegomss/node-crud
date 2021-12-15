import { Category } from "./../entities/Category";
import { Video } from "./../entities/Videos";
import { getRepository } from "typeorm";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Video | Error> {
    const repo = getRepository(Video);
    const repoCategory = getRepository(Category);

    if (!(await repoCategory.findOne(category_id))) {
      return new Error("Category doesn't exists!");
    }

    const video = repo.create({ name, description, category_id, duration });

    await repo.save(video);
    return video;
  }
}
