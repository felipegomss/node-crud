import { GetAllCategoriesService } from "./../services/GetAllCategoriesService";
import { DeleteCategoryService } from "./../services/DeleteCategoryService";
import { Response, Request } from "express";
export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteCategoryService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    const getService = new GetAllCategoriesService();

    const categories = await getService.execute();

    return response.json({
      message: "Deleted! Remaining categories:",
      categories,
    });
  }
}
