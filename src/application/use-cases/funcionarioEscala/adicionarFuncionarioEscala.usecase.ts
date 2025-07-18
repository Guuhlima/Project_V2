// src/application/useCases/funcionarioEscala/AdicionarFuncionarioEscalaUseCase.ts
import { FuncionarioEscalaRepository } from "../../../domain/repositories/funcionarioEscalaRepository";
import { FuncionarioEscalaInputDTO, BaseOutputDTO } from "../../dtos/funcionarioEscala/funcionarioEscala.dto";
import { NotFoundError } from "../../../shared/errors/NotFoundError";

export class AdicionarFuncionarioEscalaUseCase {
  constructor(private repo: FuncionarioEscalaRepository) {}

    async execute(input: FuncionarioEscalaInputDTO): Promise<BaseOutputDTO> {
        const novaEscala = await this.repo.adicionarEscala({
            ...input,
            tipo_escala: 1,
        });

        return {
            message: "Escala criada com sucesso",
            novaEscala: {
                escala: {
                    id_funcionario: novaEscala.id_funcionario,
                    dia_semana: novaEscala.dia_semana,
                    tipo_escala: novaEscala.tipo_escala,
                    ini_expediente: novaEscala.ini_expediente,
                    ini_intervalo: novaEscala.ini_intervalo,
                    fim_intervalo: novaEscala.fim_intervalo,
                    ini_pausa1: novaEscala.ini_pausa1,
                    fim_pausa1: novaEscala.fim_pausa1,
                    ini_pausa2: novaEscala.ini_pausa2,
                    fim_pausa2: novaEscala.fim_pausa2,
                    fim_expediente: novaEscala.fim_expediente,
                }
            },
        };
    }
}
