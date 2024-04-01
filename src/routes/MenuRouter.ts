import { Router } from "express";
import { MenuController } from "../controllers/MenuController";
import { RequestValidate } from "../middlewares/RequestValidate.middleware";
import { MenuSchemaCreate, MenuSchemaUpdate } from "../schemas/menu.schema";
import { IdValidate } from "../middlewares/IdValidate.middleware";
import { NameValidate } from "../middlewares/NameValidate.middlewares";

export const MenuRouter = Router();

const menuController = new MenuController();

MenuRouter.get("/", menuController.get);
MenuRouter.post(
  "/",
  RequestValidate.execute({ body: MenuSchemaCreate }),
  NameValidate.execute,
  menuController.create
);
MenuRouter.patch(
  "/:id",
  RequestValidate.execute({ body: MenuSchemaUpdate }),
  IdValidate.execute,
  menuController.update
);
MenuRouter.delete("/:id", IdValidate.execute, menuController.delete);
