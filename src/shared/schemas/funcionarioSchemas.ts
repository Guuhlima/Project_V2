import { Static, Type } from '@sinclair/typebox';

export const FuncionarioParamsSchema = Type.Object({
    valor: Type.String(),
});

export const FuncionarioBodySchema = Type.Optional(
    Type.Object({
        cpf: Type.Optional(Type.Boolean()),
        pis: Type.Optional(Type.Boolean()),
        hash: Type.Optional(Type.Boolean()),
    })
);

export type FuncionarioParams = Static<typeof FuncionarioParamsSchema>
export type FuncionarioBody = Static<typeof FuncionarioBodySchema>

