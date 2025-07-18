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
import { LogarEntradaController } from "../http/controllers/entradaSaidaController/logarEntradaSaida.controller";
import { FinalizarEntradaController } from "../http/controllers/entradaSaidaController/finalizarEntradaSaida.controller";
import { AtualizarEntradaSaidaController } from "../http/controllers/entradaSaidaController/atualizarEntradaSaida.controller";
import { AtualizarPorIdController } from "../http/controllers/entradaSaidaController/atualizarPorIdEntradaSaida.controller";
import { ConsultarEntradaSaidaController } from "../http/controllers/entradaSaidaController/consultarEntradaSaida.controller";

export async function entradaSaidaRoutes(app: FastifyInstance) {
  const repo = new PrismaEntradaSaidaRepository();

  const consultarEntradaSaidaController = new ConsultarEntradaSaidaController (
    new ConsultarEntradaUseCase(repo)
  )

  const logarEntradaSaidaController = new LogarEntradaController (
    new LogarEntradaUseCase(repo)
  )

  const finalizarEntradaController = new FinalizarEntradaController (
    new FinalizarEntradaUseCase(repo)
  )

  const atualizarEntradaSaida = new AtualizarEntradaSaidaController (
    new AtualizarStatusUseCase(repo)
  )

  const atualizarPorIdEntradaSaida = new AtualizarPorIdController (
    new AtualizarStatusPorIdUseCase(repo)
  )

  app.post("/wocc/entradasaida/logar", {
    schema: {
      body: LogarEntradaBodySchema,
      response: { 200: EntradaSaidaResponseSchema }
    },
  }, logarEntradaSaidaController.logar);
  
  app.post('/wocc/entradasaida/finalizar', {
    schema: {
      body: FinalizarEntradaBodySchema
    }
  }, finalizarEntradaController.finalizar.bind(finalizarEntradaController));

  app.patch('/wocc/entradasaida/atualizar', {
    schema: {
      body: AtualizarEntradaBodySchema
    }
  }, atualizarEntradaSaida.atualizar.bind(atualizarEntradaSaida));

  app.patch('/wocc/entradasaida/atualizar/:id', {
    schema: {
      params: AtualizarPorIdParamsSchema,
      body: AtualizarEntradaBodySchema
    }
  }, atualizarPorIdEntradaSaida.atualizarPorId.bind(atualizarPorIdEntradaSaida));

  app.get('/wocc/entradasaida/consultar/:matricula', {
    schema: {
      params: EntradaSaidaParamsSchema,
      response: {
        200: EntradaSaidaResponseSchema
      }
    }
  }, consultarEntradaSaidaController.consultar.bind(consultarEntradaSaidaController));
}
