import { FastifyRequest, FastifyReply } from "fastify";
import { AtualizarStatusPorIdUseCase } from "../../../../application/use-cases/entradaSaida/atualizarStatusPorId.usecase";
import { AtualizarPorIdParams } from "../../../../shared/schemas/entradaSaidaSchemas";

export class AtualizarPorIdController{
    constructor(
        private readonly atualizarStatusId: AtualizarStatusPorIdUseCase,
    ) {}

    async atualizarPorId(request: FastifyRequest<{Params: AtualizarPorIdParams}>, reply: FastifyReply){
        try {
            const body = request.body as any;
            const id = request.params.id;
            const result = await this.atualizarStatusId.execute({ ...body, id})
            return reply.send(result);
        } catch (error) {
            return reply.status(500).send({ message: "Erro ao atualizar entrada", error })
        }
    }
}