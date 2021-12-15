import { Video } from "./../entities/Videos";
import { getRepository } from "typeorm";

type UpdateCategoryRequest = {
  id: string;
  name: string;
  description: string;
  category_id: string;
};

export class UpdateVideoService {
  async execute({ id, name, description, category_id }: UpdateCategoryRequest) {
    const repo = getRepository(Video);

    const video = await repo.findOne(id);

    if (!video) {
      return new Error("Category doesn't exists!");
    }

    video.name = name ? name : video.name;
    video.description = description ? description : video.description;
    video.category_id = category_id ? category_id : video.category_id;

    await repo.save(video);

    return video;
  }
}
