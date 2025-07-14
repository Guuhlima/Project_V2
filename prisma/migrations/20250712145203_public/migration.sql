-- CreateTable
CREATE TABLE "funcionario" (
    "id" SERIAL NOT NULL,
    "matricula" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "cpf" TEXT,
    "pis" TEXT,
    "hash" TEXT,
    "ativo" INTEGER NOT NULL,
    "matricula_supervisor" INTEGER NOT NULL,
    "dia_nao_trabalhado" BOOLEAN NOT NULL,
    "id_campanha" INTEGER NOT NULL,
    "agentid" TEXT NOT NULL,
    "agentid_aspect" TEXT NOT NULL,
    "ramal" INTEGER NOT NULL,
    "tipo_escala" INTEGER NOT NULL,
    "escala_inicia_em_semana_par" BOOLEAN NOT NULL,
    "versao" TEXT NOT NULL,
    "primeiro_acesso" INTEGER NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "jornada_semanal" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_atualiz_tel" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id")
);
