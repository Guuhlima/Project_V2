import { EntradaSaidaRepository } from "../../../domain/repositories/entradaSaidaRepository";
import { AtualizarStatusPorIdInputDTO, BaseOutputDTO } from "../../dtos/entradaSaida/atualizarStatus.dto";

export class AtualizarStatusPorIdUseCase{
    constructor(private repo: EntradaSaidaRepository) {}

    async execute(input: AtualizarStatusPorIdInputDTO): Promise<BaseOutputDTO>{
        const {id, matricula, status} = input

        const count = await this.repo.atualizarStatusPorId(Number(id), Number(matricula), status);

        if(count === 0) throw new Error('Erro ao atualizar status');

        return { message: `Erro ao atualizar ${status}`}
    }
}