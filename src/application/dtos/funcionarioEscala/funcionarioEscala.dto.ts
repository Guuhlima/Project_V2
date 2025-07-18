export interface FuncionarioEscalaInputDTO {
  id_funcionario: number;
  dia_semana: number;
  tipo_escala: number;
  ini_expediente: string;
  ini_intervalo: string;
  fim_intervalo: string;
  ini_pausa1: string;
  fim_pausa1: string;
  ini_pausa2: string;
  fim_pausa2: string;
  fim_expediente: string;
}


export interface FuncionarioEscalaOutputDTO {
    escala: {
        id_funcionario: number;
        dia_semana: number;
        tipo_escala: number;
        ini_expediente: string;
        ini_intervalo: string;
        fim_intervalo: string;
        ini_pausa1: string;
        fim_pausa1: string;
        ini_pausa2: string;
        fim_pausa2: string;
        fim_expediente: string;
    }
}


export interface BaseOutputDTO {
  message: string;
  novaEscala?: {
    escala: {
      id_funcionario: number;
      dia_semana: number;
      tipo_escala: number;
      ini_expediente: string;
      ini_intervalo: string;
      fim_intervalo: string;
      ini_pausa1: string;
      fim_pausa1: string;
      ini_pausa2: string;
      fim_pausa2: string;
      fim_expediente: string;
    };
  };
}
