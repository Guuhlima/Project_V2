export interface ConsultarFuncionarioInputDTO {
    valor: string;
    cpf?: boolean;
    pis?: boolean;
    hash?: boolean;
}

export interface FuncionarioOutputDTO {
    id: string;
    matricula: number;
    nome: string;
    login: string;
    ativo: number;
    matricula_supervisor: number;
    dia_nao_trabalhado: boolean;
    id_campanha: number;
    ramal: number;
    data_admissao: string;
    senha_aspect: string | null;
    id_cargo: string | null;
    foto: string | null;
    primeiro_acesso: number | null;
    data_nascimento: string;
    ativa_desktop: boolean | null;
    tipo_intervalo: number;
    jornada_semanal: number;
    tipo_escala: number;
    aprovador_HE: string;
    aprovador_escalas_excepcionais: string;
    id_centro_custo: number;
    telefone: string;
    quartil: string | boolean;
    data_atualiz_tel: string;
    data_atualiz_senha: string;
    desc_horario: string;
    p1_inicio: string | null;
    p2_inicio: string | null;
    p3_inicio: string | null;
    p1_fim: string | null;
    p2_fim: string | null,
    p3_fim: string | null;
    intervalo_inicio: string;
    intervalo_fim: string;
    hora_entrada: string;
    hora_saida: string;
    senha: string;
    empresa: string | null;
    ult_atualizacao: string;
    login_santander: string | null;
    id_operacao_santander: number;
    segmento_santander: string | null; 
    escala_inicia_em_semana_par: boolean;
    versao: string;
    cpf?: string;
    pis?: string;
    hash?: string;
}