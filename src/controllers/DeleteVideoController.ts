import { GetAllVideosService } from "./../services/GetAllVideosService";
import { DeleteVideoService } from "./../services/DeleteVideoService";
import { Response, Request } from "express";

export class DeleteVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteVideoService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    const getService = new GetAllVideosService();

    const videos = await getService.execute();

    return response.json({
      message: "Deleted! Remaining videos:",
      videos,
    });
  }
}
