import { EntradaSaidaRepository } from "../../../domain/repositories/entradaSaidaRepository";
import { LogarEntradaInputDTO, LogarEntradaOutputDTO } from "../../dtos/entradaSaida/logarEntrada.dto";

export class LogarEntradaUseCase {
    constructor(private repo: EntradaSaidaRepository) {}

    async execute(input: LogarEntradaInputDTO): Promise<LogarEntradaOutputDTO> {
        const { matricula, id_campanha } = input;

        const entrada = await this.repo.registrarEntrada({
            matricula: Number(matricula),
            id_campanha,
            entrada: new Date(),
            status: 2,
        });

        return {
        message: "Entrada registrada com sucesso",
            entrada: {
                id: entrada.id,
                matricula: String(entrada.matricula),
                id_campanha: entrada.id_campanha,
                entrada: entrada.entrada,
                status: entrada.status,
            },
        };
    }
}
