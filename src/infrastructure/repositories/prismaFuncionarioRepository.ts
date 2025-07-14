import { FuncionarioRepository } from '../../domain/repositories/funcionarioRepository';
import { prisma } from '../../infrastructure/db/prisma';
import { Funcionario } from "../../domain/entities/Funcionario";

export class PrismaFuncionarioRepository implements FuncionarioRepository {
    async findByValor(valor: string): Promise<Funcionario[]> {
        const result = await prisma.funcionario.findMany({
            where: {
                OR: [{ matricula: Number(valor) }, { login: valor}],
            },
        });

        return result.map(item => ({
            id: String(item.id),
            matricula: item.matricula,
            nome: item.nome,
            login: item.login,
            ativo: item.ativo,
            matricula_supervisor: item.matricula_supervisor,
            dia_nao_trabalhado: item.dia_nao_trabalhado,
            id_campanha: item.id_campanha,
            ramal: item.ramal,
            data_admissao: item.data_admissao,
            senha_aspect: item.senha_aspect,
            id_cargo: item.id_cargo,
            foto: item.foto,
            primeiro_acesso: item.primeiro_acesso !== null ? String(item.primeiro_acesso) : '',
            data_nascimento: item.data_nascimento,
            ativa_desktop: item.ativa_desktop ?? false,
            tipo_intervalo: item.tipo_intervalo ?? 0,
            jornada_semanal: item.jornada_semanal,
            tipo_escala: item.tipo_escala,
            aprovador_HE: item.aprovador_HE ?? false,
            aprovador_escalas_excepcionais: item.apovador_escalas_excepcionais ?? false,
            id_centro_custo: item.id_centro_custo ?? 0,
            telefone: item.telefone,
            quartil: typeof item.quartil === 'boolean' ? String(item.quartil) : item.quartil ?? '',
            data_atualiz_senha: item.data_atualiz_senha,
            data_atualiz_tel: item.data_atualiz_tel,
            desc_horario: item.desc_horario,
            p1_inicio: item.p1_inicio ?? '',
            p2_inicio: item.p2_inicio ?? '',
            p3_inicio: item.p3_inicio ?? '',
            p1_fim: item.p1_fim ?? '',
            p2_fim: item.p2_fim ?? '',
            p3_fim: item.p3_fim ?? '',
            intervalo_inicio: item.intervalo_inicio ?? '',
            intervalo_fim: item.intervalo_fim ?? '',
            hora_entrada: item.hora_entrada ?? '',
            hora_saida: item.hora_saida ?? '',
            senha: item.senha ?? '',
            empresa: item.empresa ?? '',
            ult_atualizacao: item.ult_atualizacao ? item.ult_atualizacao.toISOString() : '',
            login_santander: item.login_santander ?? '',
            id_operacao_santander: item.id_operacao_santander ?? 0,
            segmento_santander: item.segmento_santander ?? '',
            escala_inicia_em_semana_par: item.escala_inicia_em_semana_par,
            versao: item.versao,
            cpf: item.cpf ?? undefined,
            pis: item.pis ?? undefined,
            hash: item.hash ?? undefined,
        }))
    }
}