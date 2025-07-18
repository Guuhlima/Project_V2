import { Type, Static } from "@sinclair/typebox";

export const FuncionarioEscalaBodySchema = Type.Object ({
    id_funcionario: Type.Number(),
    dia_semana: Type.Number(),
    tipo_escala: Type.Number(),
    ini_expediente: Type.String(),
    ini_intervalo: Type.String(),
    fim_intervalo: Type.String(),
    ini_pausa1: Type.String(),
    fim_pausa1: Type.String(),
    ini_pausa2: Type.String(),
    fim_pausa2: Type.String(),
    fim_expediente: Type.String(),
})

export const FuncionarioEscalaParamsSchema = Type.Object ({
    id_funcionario: Type.Number(),
    dia_semana: Type.Number(),
})

export const FuncionarioEscalaAdicionarSchema = Type.Object ({
    id_funcionario: Type.Number(),
})

export type FuncionarioEscalaBody = Static<typeof FuncionarioEscalaBodySchema>;
export type FuncionarioEscalaParams = Static<typeof FuncionarioEscalaParamsSchema>;
export type FuncionarioEscalaAdicionarParams = Static<typeof FuncionarioEscalaAdicionarSchema>