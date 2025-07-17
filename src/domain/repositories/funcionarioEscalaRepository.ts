import { FuncionarioEscala } from "../entities/FuncionarioEscala";

export interface FuncionarioEscalaRepository {
    consultarEscala(id_funcionario: number, dia_semana: number): Promise<FuncionarioEscala>;
    atualizarEscala(id_funcionario: number, dia_semana: number, dadosAtualizacao: Partial<FuncionarioEscala>): Promise<number>;
    adicionarEscala(escala: FuncionarioEscala): Promise<FuncionarioEscala>;
}
