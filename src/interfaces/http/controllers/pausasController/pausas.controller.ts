import { FastifyRequest, FastifyReply } from "fastify";
import { ListarPausasUseCase } from "../../../../application/use-cases/pausas/listarPausas.usecase";
import { PausasParams } from "../../../../shared/schemas/pausasSchemas";

export class PausasController{
    constructor(
        private readonly listarPausas: ListarPausasUseCase
    ) {}

    async listarPausasPorId(request: FastifyRequest<{ Params: PausasParams }>, reply: FastifyReply) {
        try {
            const { id } = request.params as any;
            const result = await this.listarPausas.execute({ id })
            return reply.send(result)
        } catch (error) {
            return reply.status(500).send({ message: "Erro ao listar pausas", error});
        }
    }
}
