export interface AtualizarStatusInputDTO{
    matricula: string,
    status: number
}

export interface AtualizarStatusPorIdInputDTO{
    id: string,
    matricula: string,
    status: number,
}

export interface BaseOutputDTO{
    message: string;
}