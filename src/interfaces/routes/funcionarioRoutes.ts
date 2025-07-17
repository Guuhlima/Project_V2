import { FastifyInstance } from "fastify";
import { FuncionarioParamsSchema, FuncionarioBodySchema } from "../../shared/schemas/funcionarioSchemas";
import { ConsultarFuncionariosController } from "../http/controllers/funcionario.controller";

export async function funcionarioRoutes(app: FastifyInstance) {
    app.post('/wocc/funcionario/consultar/:valor', {
        schema: {
            params: FuncionarioParamsSchema,
            body: FuncionarioBodySchema,
        },
    },
    ConsultarFuncionariosController
    )
}