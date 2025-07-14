import { EntradaSaidaRepository } from "../../../domain/repositories/entradaSaidaRepository";
import { FinalizarEntradaInputDTO, BaseOutputDTO } from "../../dtos/entradaSaida/finalizarEntrada.dto";

export class FinalizarEntradaUseCase{
    constructor(private repo: EntradaSaidaRepository) {}

    async execute(input: FinalizarEntradaInputDTO): Promise<BaseOutputDTO>{
        const { matricula } = input;

        const count = await this.repo.atualizarSaida(Number(matricula), new Date());

        if (count === 0) throw new Error("Nenhum registro foi encontrado para atualizar");

        return { message: "Dia finalizado com sucesso!"}
    }
}