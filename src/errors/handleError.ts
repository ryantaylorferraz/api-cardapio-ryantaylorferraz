import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "./AppError";

export class handleError {
    static execute(err: Error, req: Request, res: Response, next: NextFunction){
        if(err instanceof AppError){
            return res.status(err.statusCode).json({error: err.message})
        } else if(err instanceof ZodError){
            return res.status(400).json(err)
        }
         else {
            return res.status(500).json({Error: "Internal server error"})
        }
    }
}