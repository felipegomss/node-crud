import { Video } from "./../entities/Videos";
import { getRepository } from "typeorm";
export class DeleteVideoService {
  async execute(id: string) {
    const repo = getRepository(Video);

    if (!(await repo.findOne(id))) {
      return new Error("Video dons't exists!");
    }

    await repo.delete(id);
  }
}
