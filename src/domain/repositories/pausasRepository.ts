import { Pausas } from "../entities/Pausas";

export interface PausasRepository {
    listarPausas(id: number): Promise<Pausas | null>
}