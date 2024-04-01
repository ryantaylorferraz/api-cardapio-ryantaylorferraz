import { NextFunction, Request, Response } from "express";
import { MenuDataBase } from "../database/MenuDatabase";
import { AppError } from "../errors/AppError";

export class NameValidate {
    static execute(req: Request, res: Response, next: NextFunction) {
        if(MenuDataBase.some(menu => menu.title === req.body)){
            throw new AppError(404, "Product is existent")
        }
        next();
    }
}