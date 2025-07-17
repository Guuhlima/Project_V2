import { FastifyInstance } from "fastify";
import {
  LogarEntradaBodySchema,
  EntradaSaidaParamsSchema,
  AtualizarPorIdParamsSchema,
  FinalizarEntradaBodySchema,
  AtualizarEntradaBodySchema,
  EntradaSaidaResponseSchema
} from "../../shared/schemas/entradaSaidaSchemas";

import { AtualizarStatusUseCase } from "../../application/use-cases/entradaSaida/atualizarStatus.usecase";
import { LogarEntradaUseCase } from "../../application/use-cases/entradaSaida/logarEntrada.usecase";
import { FinalizarEntradaUseCase } from "../../application/use-cases/entradaSaida/finalizarEntrada.usecase";
import { ConsultarEntradaUseCase } from "../../application/use-cases/entradaSaida/consultarEntrada.usecase";
import { AtualizarStatusPorIdUseCase } from "../../application/use-cases/entradaSaida/atualizarStatusPorId.usecase";
import { PrismaEntradaSaidaRepository } from "../../infrastructure/repositories/prismaEntradaSaidaRepository";
import { EntradaSaidaController } from "../http/controllers/entradaSaida.controller";

export async function entradaSaidaRoutes(app: FastifyInstance) {
  const repo = new PrismaEntradaSaidaRepository();

  const controller = new EntradaSaidaController(
    new LogarEntradaUseCase(repo),
    new FinalizarEntradaUseCase(repo),
    new ConsultarEntradaUseCase(repo),
    new AtualizarStatusUseCase(repo),
    new AtualizarStatusPorIdUseCase(repo)
  );

  app.post('/wocc/entradasaida/logar', {
    schema: {
      body: LogarEntradaBodySchema,
      response: {
        200: EntradaSaidaResponseSchema
      }
    }
  }, controller.logar.bind(controller));

  app.post('/wocc/entradasaida/finalizar', {
    schema: {
      body: FinalizarEntradaBodySchema
    }
  }, controller.finalizar.bind(controller));

  app.patch('/wocc/entradasaida/atualizar', {
    schema: {
      body: AtualizarEntradaBodySchema
    }
  }, controller.atualizar.bind(controller));

  app.patch('/wocc/entradasaida/atualizar/:id', {
    schema: {
      params: AtualizarPorIdParamsSchema,
      body: AtualizarEntradaBodySchema
    }
  }, controller.atualizarPorId.bind(controller));

  app.get('/wocc/entradasaida/consultar/:matricula', {
    schema: {
      params: EntradaSaidaParamsSchema,
      response: {
        200: EntradaSaidaResponseSchema
      }
    }
  }, controller.consultar.bind(controller));
}
