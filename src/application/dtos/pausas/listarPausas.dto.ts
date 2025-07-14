export interface PausasInputDTO {
    id: number,
}

export interface PausasOutputDTO {
    pausas: {
        id: number,
        pausa: string,
        trava: string,
        tempo: number,
        id_olus: number,
        id_pausa_olos: number,
        id_pausa_aspect: number,
        grava_afd: number,
        tipo: number,
        trava_sistema: number,
        fixo_variavel: number,
    }
}