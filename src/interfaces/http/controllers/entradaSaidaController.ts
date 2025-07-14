import { FastifyRequest, FastifyReply } from "fastify";
import { LogarEntradaUseCase } from "../../../application/use-cases/entradaSaida/logarEntrada.usecase";
import { FinalizarEntradaUseCase } from "../../../application/use-cases/entradaSaida/finalizarEntrada.usecase";
import { ConsultarEntradaUseCase } from "../../../application/use-cases/entradaSaida/consultarEntrada.usecase";
import { AtualizarStatusUseCase } from "../../../application/use-cases/entradaSaida/atualizarStatus.usecase";
import { AtualizarStatusPorIdUseCase } from "../../../application/use-cases/entradaSaida/atualizarStatusPorId.usecase";
import { EntradaSaidaParams, AtualizarPorIdParams } from "../../../shared/schemas/entradaSaidaSchemas";

export class EntradaSaidaController{
    constructor(
        private readonly logarEntrada: LogarEntradaUseCase,
        private readonly finalizarEntrada: FinalizarEntradaUseCase,
        private readonly consultarEntrada: ConsultarEntradaUseCase,
        private readonly atualizarStatus: AtualizarStatusUseCase,
        private readonly atualizarStatusId: AtualizarStatusPorIdUseCase,
    ) {}

    async logar(request: FastifyRequest, reply: FastifyReply){
        const body = request.body as any;
        const result = await this.logarEntrada.execute(body);
        return reply.send(result);
    }

    async finalizar(request: FastifyRequest, reply: FastifyReply){
        const body = request.body as any;
        const result = await this.finalizarEntrada.execute(body);
        return reply.send(result);
    }

    async atualizar(request: FastifyRequest, reply: FastifyReply){
        const body = request.body as any;
        const result = await this.atualizarStatus.execute(body);
        return reply.send(result);
    }

    async atualizarPorId(request: FastifyRequest<{Params: AtualizarPorIdParams}>, reply: FastifyReply){
        const body = request.body as any;
        const id = request.params.id;
        const result = await this.atualizarStatusId.execute({ ...body, id})
        return reply.send(result);
    }

    async consultar(
        request: FastifyRequest<{ Params: EntradaSaidaParams }>,
        reply: FastifyReply
    ) {
        const { matricula } = request.params;
        const result = await this.consultarEntrada.execute({ matricula });
        return reply.send(result);
    }

}