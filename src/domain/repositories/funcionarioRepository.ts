import { Funcionario } from "../entities/Funcionario";

export interface FuncionarioRepository {
    findByValor(valor: string): Promise<Funcionario[]>;
}