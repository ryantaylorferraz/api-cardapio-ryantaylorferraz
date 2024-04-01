import { z } from "zod";
import { MenuSchema, MenuSchemaCreate, MenuSchemaUpdate } from "../schemas/menu.schema";

export type TMenu = z.infer<typeof MenuSchema>

export type TMenuCreate = z.infer<typeof MenuSchemaCreate>
export type TMenuUpdate = z.infer<typeof MenuSchemaUpdate>