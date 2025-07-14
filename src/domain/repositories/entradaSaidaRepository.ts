import { EntradaSaida } from "../entities/EntradaSaida";

export interface EntradaSaidaRepository{
    registrarEntrada(data: EntradaSaida): Promise<EntradaSaida>;
    atualizarSaida(matricula: number, saida: Date): Promise<number>;
    atualizarStatusPorMatricula(matricula: number, status: number): Promise<number>;
    atualizarStatusPorId(id: number, matricula: number, status: number): Promise<number>;
    consultarEntradaSaida(matricula: number): Promise<EntradaSaida>;
}
