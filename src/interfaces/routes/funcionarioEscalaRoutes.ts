import { FastifyInstance } from "fastify";
import { FuncionarioEscalaBodySchema, FuncionarioEscalaParamsSchema, FuncionarioEscalaAdicionarSchema } from "../../shared/schemas/funcionarioEscalasSchemas";
import { ConsultarFuncionarioEscalaController } from "../http/controllers/funcionarioEscalaController/consultarFuncionarioEscala.controller";
import { AdicionarFuncionarioEscalaController } from "../http/controllers/funcionarioEscalaController/adicionarFuncionarioEscala.controller"
import { ConsultarFuncionarioEscalaUseCase } from "../../application/use-cases/funcionarioEscala/consultarFuncionarioEscala.usecase";
import { AdicionarFuncionarioEscalaUseCase } from "../../application/use-cases/funcionarioEscala/adicionarFuncionarioEscala.usecase";
import { PrismaFuncionarioEscalaRepository } from "../../infrastructure/repositories/prismaFuncionarioEscalaRepository";

export async function funcionarioEscalaRoutes(app: FastifyInstance){
    const repo = new PrismaFuncionarioEscalaRepository

    const consultarController = new ConsultarFuncionarioEscalaController(
    new ConsultarFuncionarioEscalaUseCase(repo)
    );

    const adicionarController = new AdicionarFuncionarioEscalaController(
    new AdicionarFuncionarioEscalaUseCase(repo)
    );

    app.get('/wocc/escala/:id_funcionario/:dia_semana', {
        schema: {
            params: FuncionarioEscalaParamsSchema
        }
    }, consultarController.consultarFuncionarioEscala.bind(consultarController));

    app.post('/wocc/escala/adicionarEscala/:id_funcionario', {
        schema: {
            params: FuncionarioEscalaAdicionarSchema
        }
    }, adicionarController.adicionarFuncionarioEscala.bind(adicionarController));
}
