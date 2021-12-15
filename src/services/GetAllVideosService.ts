import { Video } from "./../entities/Videos";
import { getRepository } from "typeorm";

export class GetAllVideosService {
  async execute() {
    const repo = getRepository(Video);
    const videos = await repo.find({
      relations: ["category"],
    });

    return videos;
  }
}
