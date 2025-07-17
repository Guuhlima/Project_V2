import { FuncionarioRepository } from "../../../domain/repositories/funcionarioRepository";
import { ConsultarFuncionarioInputDTO, FuncionarioOutputDTO } from "../../dtos/funcionarios/consultarFuncionario.dto";

export class ConsultarFuncionarioUseCase {
    constructor(private repo: FuncionarioRepository) {}

    async execute(input: ConsultarFuncionarioInputDTO): Promise<FuncionarioOutputDTO[]> {
        const { valor, cpf, pis, hash } = input;

        const funcionarios = await this.repo.findByValor(valor);

        return funcionarios.map(func => ({
            id: func.id,
            matricula: func.matricula,
            nome: func.nome,
            login: func.login,
            ativo: func.ativo,
            matricula_supervisor: func.matricula_supervisor,
            dia_nao_trabalhado: func.dia_nao_trabalhado,
            id_campanha: func.id_campanha,
            ramal: func.ramal,
            data_admissao: func.data_admissao?.toISOString() ?? '',
            senha_aspect: func.senha_aspect?.toString() ?? '',
            id_cargo: func.id_cargo !== null ? String(func.id_cargo) : null,
            foto: func.foto ?? '',
            primeiro_acesso: func.primeiro_acesso !== null ? Number(func.primeiro_acesso) : null,
            data_nascimento: func.data_nascimento?.toISOString() ?? '',
            ativa_desktop: func.ativa_desktop,
            tipo_intervalo: func.tipo_intervalo,
            jornada_semanal: func.jornada_semanal,
            tipo_escala: func.tipo_escala,
            aprovador_HE: func.aprovador_HE?.toString(),
            aprovador_escalas_excepcionais: func.aprovador_escalas_excepcionais?.toString(),
            id_centro_custo: func.id_centro_custo,
            telefone: func.telefone,
            quartil: func.quartil,
            data_atualiz_senha: func.data_atualiz_senha?.toISOString() ?? '',
            data_atualiz_tel: func.data_atualiz_tel?.toISOString() ?? '',
            desc_horario: func.desc_horario ?? '',
            p1_inicio: func.p1_inicio,
            p2_inicio: func.p2_inicio,
            p3_inicio: func.p3_inicio,
            p1_fim: func.p1_fim ?? '',
            p2_fim: func.p2_fim,
            p3_fim: func.p3_fim,
            intervalo_inicio: func.intervalo_inicio,
            intervalo_fim: func.intervalo_fim,
            hora_entrada: func.hora_entrada,
            hora_saida: func.hora_saida,
            senha: func.senha,
            empresa: func.empresa,
            ult_atualizacao: func.ult_atualizacao,
            login_santander: func.login_santander,
            id_operacao_santander: func.id_operacao_santander,
            segmento_santander: func.segmento_santander,
            escala_inicia_em_semana_par: func.escala_inicia_em_semana_par,
            versao: func.versao,
            ...(cpf && { cpf: func.cpf }),
            ...(pis && { pis: func.pis }),
            ...(hash && { hash: func.hash }),
        }));
    }
}