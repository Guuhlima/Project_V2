import { FastifyRequest, FastifyReply } from "fastify";
import { ConsultarFuncionarioEscalaUseCase } from "../../../application/use-cases/funcionarioEscala/consultarFuncionarioEscala.usecase";
import { AdicionarFuncionarioEscalaUseCase } from "../../../application/use-cases/funcionarioEscala/adicionarFuncionarioEscala.usecase";
import { FuncionarioEscalaBody, FuncionarioEscalaParams, FuncionarioEscalaAdicionarParams } from "../../../shared/schemas/funcionarioEscalasSchemas";

export class FuncionarioEscalaController {
    constructor(
        private readonly consultarEscala: ConsultarFuncionarioEscalaUseCase,
        private readonly adicionarEscala: AdicionarFuncionarioEscalaUseCase
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

    async adicionarFuncionarioEscala(request: FastifyRequest<{ Params: FuncionarioEscalaAdicionarParams , Body: FuncionarioEscalaBody}>, reply: FastifyReply) {
        try {
            const { id_funcionario } = request.params;

            const { dia_semana, tipo_escala, ini_expediente, ini_intervalo, fim_intervalo , 
                ini_pausa1, fim_pausa1, 
                ini_pausa2, fim_pausa2, 
                fim_expediente 
            } = request.body;
            
            const result = await this.adicionarEscala.execute({ id_funcionario, dia_semana, tipo_escala, ini_expediente, ini_intervalo, fim_intervalo , 
                ini_pausa1, fim_pausa1, 
                ini_pausa2, fim_pausa2, 
                fim_expediente 
            });

            return reply.send(result);
        } catch (error) {
            return reply.status(500).send({ message: "Erro ao criar escala", error})
        }
    }
}