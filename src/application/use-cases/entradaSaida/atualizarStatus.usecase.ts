import { EntradaSaidaRepository } from "../../../domain/repositories/entradaSaidaRepository";
import { AtualizarStatusInputDTO, BaseOutputDTO } from "../../dtos/entradaSaida/atualizarStatus.dto";

export class AtualizarStatusUseCase{
    constructor(private repo: EntradaSaidaRepository) {}

    async execute(input: AtualizarStatusInputDTO): Promise<BaseOutputDTO> {
        const { matricula, status } = input;

        const count = await this.repo.atualizarStatusPorMatricula(Number(matricula), status)

        if(count === 0) throw new Error('Erro ao atualizar status');

        return { message: `Status atualizado para ${status}`}
    }
}