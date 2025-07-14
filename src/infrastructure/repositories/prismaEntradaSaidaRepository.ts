import { EntradaSaidaRepository } from '../../domain/repositories/entradaSaidaRepository';
import { EntradaSaida } from '../../domain/entities/EntradaSaida';
import { prisma } from '../db/prisma';

export class PrismaEntradaSaidaRepository implements EntradaSaidaRepository {
  async registrarEntrada(data: EntradaSaida): Promise<EntradaSaida> {
    return prisma.entradaSaida.create({ data });
  }

  async atualizarSaida(matricula: number, saida: Date): Promise<number> {
    const result = await prisma.entradaSaida.updateMany({
      where: { matricula },
      data: { saida, status: 0 }
    });
    return result.count;
  }

  async atualizarStatusPorMatricula(matricula: number, status: number): Promise<number> {
    const result = await prisma.entradaSaida.updateMany({
      where: { matricula },
      data: { status }
    });
    return result.count;
  }

  async atualizarStatusPorId(id: number, matricula: number, status: number): Promise<number> {
    const result = await prisma.entradaSaida.updateMany({
      where: {
        OR: [
          { id },
          { matricula }
        ]
      },
      data: { status }
    });
    return result.count;
  }

  async consultarEntradaSaida(matricula: number): Promise<EntradaSaida> {
    const entrada = await prisma.entradaSaida.findFirst({
      where: { matricula },
      orderBy: { entrada: 'desc' }
    });

    if (!entrada) throw new Error('Entrada não encontrada');

    return entrada;
  }
}
