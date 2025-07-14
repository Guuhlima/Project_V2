import { EntradaSaidaRepository } from "../../../domain/repositories/entradaSaidaRepository";
import { ConsultarEntradaInputDTO, ConsultarEntradaOutputDTO } from "../../dtos/entradaSaida/consultarEntrada.dtos";

export class ConsultarEntradaUseCase {
    constructor(private repo: EntradaSaidaRepository){}

    async execute(input: ConsultarEntradaInputDTO): Promise<ConsultarEntradaOutputDTO> {
        const { matricula } = input;

        const entrada = await this.repo.consultarEntradaSaida(Number(matricula));

        if(!entrada) throw new Error('Não foi encontrada nenhuma entrada');

        return {
            entrada: {
                id: entrada.id!,
                matricula: String(entrada.matricula),
                id_campanha: entrada.id_campanha,
                entrada: entrada.entrada,
                saida: entrada.saida ?? null,
                status: entrada.status,
            },
        };
    }
}