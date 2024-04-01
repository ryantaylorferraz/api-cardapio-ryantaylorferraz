import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

interface IRequest {
  body?: AnyZodObject;
  params?: AnyZodObject;
  query?: AnyZodObject;
}

export class RequestValidate {
  static execute(schemas: IRequest) {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
      }
      if (schemas.params) {
        req.params = await schemas.params.parseAsync(req.params);
      }
      if (schemas.query) {
        req.query = await schemas.query.parseAsync(req.query);
      }

      next();
    };
  }
}
