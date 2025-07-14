import { Static, Type } from "@sinclair/typebox";

export const PausasParamsSchema = Type.Object({
    id: Type.Number(),
})

export const PausasBodySchema = Type.Object({
    
})

export type PausasBody = Static<typeof PausasParamsSchema> 
export type PausasParams = Static<typeof PausasBodySchema>