import { FastifyRequest, FastifyReply } from "fastify";
import { FinalizarEntradaUseCase } from "../../../../application/use-cases/entradaSaida/finalizarEntrada.usecase";

export class FinalizarEntradaController{
    constructor(
        private readonly finalizarEntrada: FinalizarEntradaUseCase,
    ) {}

    async finalizar(request: FastifyRequest, reply: FastifyReply){
        try {
            const body = request.body as any;
            const result = await this.finalizarEntrada.execute(body);
            return reply.send(result);
        } catch (error) {
            return reply.status(500).send({ message: "Erro ao finalizar entrada", error })
        }
    }

}