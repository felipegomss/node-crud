import { GetAllController } from "./controllers/GetAllController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { UpdateCategoryCrontoller } from "./controllers/UpdateCategoryCrontoller";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { CreateCategoryController } from "./controllers/CreateCaregoryController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateVideoCrontoller } from "./controllers/UpdateVideoCrontoller";
import { DeleteVideoController } from "./controllers/DeleteVideoController";
import { Router } from "express";

const routes = Router();

routes.get("/", new GetAllController().handle);

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/category/:id", new UpdateCategoryCrontoller().handle);
routes.delete("/category/:id", new DeleteCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.put("/video/:id", new UpdateVideoCrontoller().handle);
routes.delete("/video/:id", new DeleteVideoController().handle);

export { routes };
