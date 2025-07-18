import { FastifyInstance } from "fastify";
import { FuncionarioEscalaBodySchema, FuncionarioEscalaParamsSchema, FuncionarioEscalaAdicionarSchema } from "../../shared/schemas/funcionarioEscalasSchemas";
import { FuncionarioEscalaController } from "../http/controllers/funcionarioEscala.controller";
import { ConsultarFuncionarioEscalaUseCase } from "../../application/use-cases/funcionarioEscala/consultarFuncionarioEscala.usecase";
import { AdicionarFuncionarioEscalaUseCase } from "../../application/use-cases/funcionarioEscala/adicionarFuncionarioEscala.usecase";
import { PrismaFuncionarioEscalaRepository } from "../../infrastructure/repositories/prismaFuncionarioEscalaRepository";

export async function funcionarioEscalaRoutes(app: FastifyInstance){
    const repo = new PrismaFuncionarioEscalaRepository

    const controller = new FuncionarioEscalaController (
        new ConsultarFuncionarioEscalaUseCase(repo),
        new AdicionarFuncionarioEscalaUseCase(repo)
    )

    app.get('/wocc/escala/:id_funcionario/:dia_semana', {
        schema: {
            params: FuncionarioEscalaParamsSchema
        }
    }, controller.consultarFuncionarioEscala.bind(controller));

    app.post('/wocc/escala/adicionarEscala/:id_funcionario', {
        schema: {
            params: FuncionarioEscalaAdicionarSchema
        }
    }, controller.adicionarFuncionarioEscala.bind(controller));
}
