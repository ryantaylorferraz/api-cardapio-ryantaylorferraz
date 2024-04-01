import { z } from "zod";

export const MenuSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    description: z.string().min(10),
    size: z.number().min(1),
    serving: z.number().min(1),
    price: z.number().min(1),
})


export const MenuSchemaCreate = MenuSchema.omit({id: true})
export const MenuSchemaUpdate = MenuSchema.partial()