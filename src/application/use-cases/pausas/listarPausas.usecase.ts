import { PausasRepository } from "../../../domain/repositories/pausasRepository";
import { PausasInputDTO, PausasOutputDTO } from "../../dtos/pausas/listarPausas.dto";

export class ListarPausasUseCase{
    constructor(private repo: PausasRepository){}

    async execute(input: PausasInputDTO): Promise<PausasOutputDTO> {
        const { id } = input

        const pausas = await this.repo.listarPausas(id);
        
        if(!pausas) throw new Error('Erro ao listar pausas');

        return {
            pausas: {
                id: pausas.id,
                pausa: pausas.pausa,
                trava: pausas.trava,
                tempo: pausas.tempo,
                id_olus: pausas.id_olus,
                id_pausa_olos: pausas.id_pausa_olos,
                id_pausa_aspect: pausas.id_pausa_aspect,
                grava_afd: pausas.grava_afd,
                tipo: pausas.tipo,
                trava_sistema: pausas.trava_sistema,
                fixo_variavel: pausas.fixo_variavel
            }
        };
    }
}