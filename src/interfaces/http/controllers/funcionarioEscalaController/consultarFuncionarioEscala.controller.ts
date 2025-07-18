import { FastifyRequest, FastifyReply } from "fastify";
import { ConsultarFuncionarioEscalaUseCase } from "../../../../application/use-cases/funcionarioEscala/consultarFuncionarioEscala.usecase";
import { FuncionarioEscalaParams } from "../../../../shared/schemas/funcionarioEscalasSchemas";

export class ConsultarFuncionarioEscalaController {
    constructor(
        private readonly consultarEscala: ConsultarFuncionarioEscalaUseCase,
    ) {}

    async consultarFuncionarioEscala(request: FastifyRequest<{ Params: FuncionarioEscalaParams}>, reply: FastifyReply) {
        try {
            const { id_funcionario, dia_semana } = request.params;
            const result = await this.consultarEscala.execute({ id_funcionario, dia_semana });
            return reply.send(result)
        } catch (error) {
            return reply.status(500).send({ message: "Erro ao consultar escala", error})
        }
    } 
}