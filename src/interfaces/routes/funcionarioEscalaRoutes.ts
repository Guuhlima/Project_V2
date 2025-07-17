import { FastifyInstance } from "fastify";
import { FuncionarioEscalaBodySchema, FuncionarioEscalaParamsSchema } from "../../shared/schemas/funcionarioEscalasSchemas";
import { FuncionarioEscalaController } from "../http/controllers/funcionarioEscala.controller";
import { ConsultarFuncionarioEscalaUseCase } from "../../application/use-cases/funcionarioEscala/consultarFuncionarioEscala.usecase";
import { PrismaFuncionarioEscalaRepository } from "../../infrastructure/repositories/prismaFuncionarioEscalaRepository";

export async function FuncionarioEscalaRoutes(app: FastifyInstance){
    const repo = new PrismaFuncionarioEscalaRepository

    const controller = new FuncionarioEscalaController (
        new ConsultarFuncionarioEscalaUseCase(repo),
    )

    app.get('/wocc/escala/:id_funcionario/:dia_semana', {
        schema: {
            params: FuncionarioEscalaParamsSchema,
        }
    }, controller.consultarFuncionarioEscala.bind(controller));
}
