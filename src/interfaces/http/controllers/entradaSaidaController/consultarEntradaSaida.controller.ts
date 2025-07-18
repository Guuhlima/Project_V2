import { FastifyRequest, FastifyReply } from "fastify";
import { ConsultarEntradaUseCase } from "../../../../application/use-cases/entradaSaida/consultarEntrada.usecase";
import { EntradaSaidaParams } from "../../../../shared/schemas/entradaSaidaSchemas";

export class ConsultarEntradaSaidaController{
    constructor(
        private readonly consultarEntrada: ConsultarEntradaUseCase,
    ) {}

    async consultar(
        request: FastifyRequest<{ Params: EntradaSaidaParams }>,
        reply: FastifyReply
    ) {
        try {
            const { matricula } = request.params;
            const result = await this.consultarEntrada.execute({ matricula });
            return reply.send(result);
        } catch (error) {
            return reply.status(500).send({ message: "Erro ao consultar entrada", error })
        }
    }
}