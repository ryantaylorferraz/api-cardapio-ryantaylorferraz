import { NextFunction, Request, Response } from "express";
import { MenuDataBase } from "../database/MenuDatabase";
import { AppError } from "../errors/AppError";

export class IdValidate {
    static execute(req: Request, res: Response, next: NextFunction){
        if(!MenuDataBase.some(menu => menu.id === Number(req.params.id))) {
            throw new AppError(404, "Product not found")
        }

        next();
    }
}