export interface LogarEntradaInputDTO {
  matricula: string;
  id_campanha: number;
  hash: string;
}

export interface LogarEntradaOutputDTO {
  message: string;
  entrada: {
    id?: number;
    matricula: string;
    id_campanha: number;
    entrada: Date;
    status: number;
  };
}
