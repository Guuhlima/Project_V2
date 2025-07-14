export interface ConsultarEntradaInputDTO {
  matricula: string;
}

export interface ConsultarEntradaOutputDTO {
  entrada: {
    id: number;
    matricula: string;
    id_campanha: number;
    entrada: Date;
    saida: Date | null;
    status: number;
  };
}
