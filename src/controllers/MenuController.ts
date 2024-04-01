import { Request, Response } from "express";
import { MenuService } from "../services/MenuService";

export class MenuController {
    get(req: Request, res: Response){
        const get = new MenuService()
        const response = get.getMenu();
        return res.status(200).json(response)
    }

    create(req: Request, res: Response){
        const create = new MenuService()
        const response = create.createMenu(req.body);
        
        return res.status(201).json(response)
    }

    update(req: Request, res: Response){
        const update = new MenuService()
        const response = update.updateMenu(req.params.id, req.body);

        return res.status(200).json(response)
    }

    delete(req: Request, res: Response){
        const deleteMenu = new MenuService()
        deleteMenu.delete(req.params.id);

        return res.status(200).json()
    }
}