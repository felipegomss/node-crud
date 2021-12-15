import { Response, Request } from "express";
import { GetAllCategoriesService } from "./../services/GetAllCategoriesService";
import { GetAllVideosService } from "./../services/GetAllVideosService";

export class GetAllController {
  async handle(request: Request, response: Response) {
    const serviceCat = new GetAllCategoriesService();

    const categories = await serviceCat.execute();

    const serviceVid = new GetAllVideosService();

    const videos = await serviceVid.execute();

    return response.json({ videos, categories });
  }
}
