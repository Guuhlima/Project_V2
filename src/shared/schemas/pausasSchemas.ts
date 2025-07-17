import { Static, Type } from "@sinclair/typebox";

export const PausasParamsSchema = Type.Object({
    id: Type.Number(),
})

export const PausasBodySchema = Type.Object({
    matricula: Type.Number(),
    id_campanha: Type.Number(),
    id_tipo_pausa: Type.Number()
})

export type PausasBody = Static<typeof PausasParamsSchema> 
export type PausasParams = Static<typeof PausasBodySchema>