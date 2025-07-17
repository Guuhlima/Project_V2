import { EntradaSaidaRepository } from "../../../domain/repositories/entradaSaidaRepository";
import { ConsultarEntradaInputDTO, ConsultarEntradaOutputDTO } from "../../dtos/entradaSaida/consultarEntrada.dtos";
import { NotFoundError } from "../../../shared/errors/NotFoundError";

export class ConsultarEntradaUseCase {
  constructor(private repo: EntradaSaidaRepository) {}

  async execute(input: ConsultarEntradaInputDTO): Promise<ConsultarEntradaOutputDTO> {
    const { matricula } = input;

    const entrada = await this.repo.consultarEntradaSaida(Number(matricula));

    if (!entrada) {
      throw new NotFoundError('Entrada');
    }

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
