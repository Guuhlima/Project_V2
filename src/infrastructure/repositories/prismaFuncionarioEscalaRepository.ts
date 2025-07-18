import { prisma } from "../db/prisma";
import { FuncionarioEscalaRepository } from "../../domain/repositories/funcionarioEscalaRepository";
import { CriarFuncionarioEscalaInputDTO } from "../../application/dtos/funcionarioEscala/consultarFuncionarioEscala.dto"
import { FuncionarioEscala } from "../../domain/entities/FuncionarioEscala";

export class PrismaFuncionarioEscalaRepository implements FuncionarioEscalaRepository {
    async consultarEscala(id_funcionario: number, dia_semana: number): Promise<FuncionarioEscala> {
        const escala = await prisma.funcionarioEscala.findFirst({
            where: { id_funcionario, dia_semana },
            orderBy: { dia_semana: 'desc' }
        });

        if (!escala) {
            throw new Error('Escala não encontrada');
        }

        return escala;
    }

    async atualizarEscala(id_funcionario: number, dia_semana: number, dadosAtualizacao: Partial<FuncionarioEscala>): Promise<number> {
        const result = await prisma.funcionarioEscala.updateMany({
            where: { id_funcionario, dia_semana },
            data: dadosAtualizacao
        });

        return result.count;
    }

    async adicionarEscala(escala: CriarFuncionarioEscalaInputDTO): Promise<FuncionarioEscala> {
        const novaEscala = await prisma.funcionarioEscala.create({
            data: escala,
        });

        return novaEscala;
    }
}
