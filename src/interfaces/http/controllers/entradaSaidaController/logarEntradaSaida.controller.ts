import { FastifyRequest, FastifyReply } from "fastify";
import { LogarEntradaUseCase } from "../../../../application/use-cases/entradaSaida/logarEntrada.usecase";
import { LogarEntradaBody } from "../../../../shared/schemas/entradaSaidaSchemas";

export class LogarEntradaController {
  constructor(private readonly logarEntrada: LogarEntradaUseCase) {}

  logar = async (
    request: FastifyRequest<{ Body: LogarEntradaBody }>,
    reply: FastifyReply
  ) => {
    try {
      const result = await this.logarEntrada.execute(request.body);
      return reply.send(result);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({
        message: "Erro ao registrar entrada",
        code: "ENTRADA_ERR_LOGAR",
      });
    }
  };
}
