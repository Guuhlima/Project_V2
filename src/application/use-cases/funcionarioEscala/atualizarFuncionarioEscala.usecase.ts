import { FuncionarioEscalaRepository } from "../../../domain/repositories/funcionarioEscalaRepository";
import { FuncionarioEscalaInput, BaseOutputDTO } from "../../dtos/funcionarioEscala/funcionarioEscalaDTO";
import { NotFoundError } from "../../../shared/errors/NotFoundError";

export class AtualizarFuncionarioEscalaUseCase {
    constructor(private repo: FuncionarioEscalaRepository) {}

    async execute(input: FuncionarioEscalaInput): Promise<BaseOutputDTO> {
        const { id_funcionario, dia_semana, ...dadosAtualizacao } = input;

        const atualizados = await this.repo.atualizarEscala(id_funcionario, dia_semana, dadosAtualizacao);

        if (atualizados === 0) {
            throw new NotFoundError(`Nenhuma escala encontrada para o funcionário ${id_funcionario} no dia ${dia_semana}`);
        }

        return { message: `Escala atualizada com sucesso para o funcionário ${id_funcionario}` };
    }
}
