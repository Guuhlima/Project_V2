import { FastifyInstance } from "fastify";
import { PausasParamsSchema } from "../../shared/schemas/pausasSchemas";
import { PausasController } from "../http/controllers/pausasController/pausas.controller";    
import { ListarPausasUseCase } from "../../application/use-cases/pausas/listarPausas.usecase";
import { PrismaPausasRepository } from "../../infrastructure/repositories/prismaPausasRepository";

export async function pausasRoutes(app: FastifyInstance){
    const repo = new PrismaPausasRepository()

    const controller = new PausasController(
        new ListarPausasUseCase(repo),
    )

    app.get('/wocc/listar/pausas/:id', {
        schema:{
            params: PausasParamsSchema
        }
    }, controller.listarPausasPorId.bind(controller));
}