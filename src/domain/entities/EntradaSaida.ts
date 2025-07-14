export interface EntradaSaida {
  id: number;
  matricula: number;
  id_campanha: number;
  entrada: Date;
  saida?: Date | null;
  status: number;
}
