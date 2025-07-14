import { Pausas } from "../../domain/entities/Pausas";
import { PausasRepository } from "../../domain/repositories/pausasRepository";
import { prisma } from "../db/prisma";

export class PrismaPausasRepository implements PausasRepository{
    async listarPausas(id: number): Promise<Pausas | null> {
        return await prisma.pausas.findUnique({ where: { id } });
    }
}