/*
  Warnings:

  - You are about to drop the `Funcionario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FuncionarioEscala` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "winover"."FuncionarioEscala" DROP CONSTRAINT "FuncionarioEscala_id_funcionario_fkey";

-- DropTable
DROP TABLE "winover"."Funcionario";

-- DropTable
DROP TABLE "winover"."FuncionarioEscala";

-- CreateTable
CREATE TABLE "winover"."funcionario" (
    "id" SERIAL NOT NULL,
    "matricula" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "cpf" VARCHAR,
    "pis" VARCHAR,
    "hash" VARCHAR,
    "ativo" INTEGER NOT NULL,
    "matricula_supervisor" INTEGER NOT NULL,
    "dia_nao_trabalhado" BOOLEAN NOT NULL,
    "id_campanha" INTEGER NOT NULL,
    "agentid" TEXT NOT NULL,
    "agentid_aspect" TEXT NOT NULL,
    "id_tipo_discador" INTEGER,
    "ramal" INTEGER NOT NULL,
    "data_admissao" TIMESTAMP(3),
    "senha_aspect" TEXT,
    "id_cargo" INTEGER,
    "foto" TEXT,
    "primeiro_acesso" INTEGER NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "ativa_desktop" BOOLEAN,
    "tipo_intervalo" INTEGER,
    "jornada_semanal" INTEGER NOT NULL,
    "tipo_escala" INTEGER NOT NULL,
    "aprovador_he" BOOLEAN,
    "apovador_escalas_excepcionais" BOOLEAN,
    "id_centro_custo" INTEGER,
    "telefone" TEXT NOT NULL,
    "quartil" TEXT,
    "data_atualiz_tel" TIMESTAMP(3) NOT NULL,
    "data_atualiz_senha" TIMESTAMP(3),
    "desc_horario" TEXT,
    "p1_inicio" TEXT,
    "p2_inicio" TEXT,
    "p3_inicio" TEXT,
    "p1_fim" TEXT,
    "p2_fim" TEXT,
    "p3_fim" TEXT,
    "intervalo_inicio" TEXT,
    "intervalo_fim" TEXT,
    "hora_entrada" TEXT,
    "hora_saida" TEXT,
    "senha" TEXT,
    "empresa" TEXT,
    "ult_atualizacao" TIMESTAMP(3),
    "login_santander" TEXT,
    "id_operacao_santander" INTEGER,
    "segmento_santander" TEXT,
    "escala_inicia_em_semana_par" BOOLEAN NOT NULL,
    "versao" TEXT NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "winover"."funcionario_escala" (
    "id_funcionario" INTEGER NOT NULL,
    "dia_semana" INTEGER NOT NULL,
    "tipo_escala" INTEGER NOT NULL,
    "ini_expediente" TEXT NOT NULL,
    "ini_intervalo" TEXT NOT NULL,
    "fim_intervalo" TEXT NOT NULL,
    "ini_pausa1" TEXT NOT NULL,
    "fim_pausa1" TEXT NOT NULL,
    "ini_pausa2" TEXT NOT NULL,
    "fim_pausa2" TEXT NOT NULL,
    "fim_expediente" TEXT NOT NULL,

    CONSTRAINT "funcionario_escala_pkey" PRIMARY KEY ("id_funcionario")
);

-- AddForeignKey
ALTER TABLE "winover"."funcionario_escala" ADD CONSTRAINT "funcionario_escala_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "winover"."funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
