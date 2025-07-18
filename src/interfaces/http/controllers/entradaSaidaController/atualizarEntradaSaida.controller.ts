import { FastifyRequest, FastifyReply } from "fastify";
import { AtualizarStatusUseCase } from "../../../../application/use-cases/entradaSaida/atualizarStatus.usecase";

export class AtualizarEntradaSaidaController{
    constructor(
        private readonly atualizarStatus: AtualizarStatusUseCase,
    ) {}

    async atualizar(request: FastifyRequest, reply: FastifyReply){
        try {
            const body = request.body as any;
            const result = await this.atualizarStatus.execute(body);
            return reply.send(result);
        } catch (error) {
            return reply.status(500).send({ message: "Erro ao atualizar entrada", error})
        }
    }
}