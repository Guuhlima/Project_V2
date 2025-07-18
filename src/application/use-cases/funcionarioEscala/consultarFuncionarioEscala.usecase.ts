import { FuncionarioEscalaRepository } from "../../../domain/repositories/funcionarioEscalaRepository";
import { FuncionarioEscalaOutput } from "../../dtos/funcionarioEscala/funcionarioEscala.dto";
import { ConsultarFuncionarioEscalaInput } from "../../dtos/funcionarioEscala/consultarFuncionarioEscala.dto"
import { NotFoundError } from "../../../shared/errors/NotFoundError";

export class ConsultarFuncionarioEscalaUseCase {
    constructor(private repo: FuncionarioEscalaRepository) {}

    async execute(input: ConsultarFuncionarioEscalaInput): Promise<FuncionarioEscalaOutput> {
        const { id_funcionario, dia_semana } = input;

        const escala = await this.repo.consultarEscala(id_funcionario, dia_semana);

        if(!escala) {
            throw new NotFoundError ('Escala')
        }

        return {
            escala: {
                id_funcionario: escala.id_funcionario,
                dia_semana: escala.dia_semana,
                tipo_escala: escala.tipo_escala,
                ini_expediente: escala.ini_expediente,
                ini_intervalo: escala.ini_intervalo,
                fim_intervalo: escala.fim_expediente,
                ini_pausa1: escala.ini_pausa1,
                fim_pausa1: escala.fim_pausa1,
                ini_pausa2: escala.ini_pausa2,
                fim_pausa2: escala.fim_pausa2,
                fim_expediente: escala.fim_expediente
            }
        }
    }
}