import { Static, Type } from '@sinclair/typebox';

export const EntradaSaidaSchema = Type.Object({
  id: Type.Optional(Type.Number()),
  matricula: Type.Number(),
  id_campanha: Type.Number(),
  entrada: Type.String({ format: 'date-time' }),
  saida: Type.Optional(Type.Union([Type.String({ format: 'date-time' }), Type.Null()])),
  status: Type.Integer(),
});

export const LogarEntradaBodySchema = Type.Object({
  matricula: Type.String(),
  id_campanha: Type.Number(),
  hash: Type.String(),
});

export const AtualizarPorIdParamsSchema = Type.Object({
  id: Type.String(),
});


export const EntradaSaidaParamsSchema = Type.Object({
  matricula: Type.String(),
});

export const LogarEntradaResponseSchema = Type.Object({
  message: Type.String(),
  entrada: EntradaSaidaSchema,
});

export const FinalizarEntradaBodySchema = Type.Object({
  matricula: Type.String(),
  id_campanha: Type.Number()
});

export const AtualizarEntradaBodySchema = Type.Object({
  matricula: Type.String(),
  status: Type.Integer()
});

export const EntradaSaidaResponseSchema = Type.Object({
  message: Type.String(),
  entrada: EntradaSaidaSchema
});


export type LogarEntradaBody = Static<typeof LogarEntradaBodySchema>;
export type LogarEntradaResponse = Static<typeof LogarEntradaResponseSchema>;
export type EntradaSaidaParams = Static<typeof EntradaSaidaParamsSchema>;
export type AtualizarPorIdParams = Static<typeof AtualizarPorIdParamsSchema>