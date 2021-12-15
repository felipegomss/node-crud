import { UpdateVideoService } from "./../services/UpdateVideoService";
import { Request, Response } from "express";
export class UpdateVideoCrontoller {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, category_id } = request.body;

    const service = new UpdateVideoService();

    const result = await service.execute({
      id,
      name,
      description,
      category_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
