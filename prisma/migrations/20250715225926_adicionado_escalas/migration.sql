-- CreateTable
CREATE TABLE "winover"."FuncionarioEscala" (
    "id_funcionario" INTEGER NOT NULL,
    "dia_semana" INTEGER NOT NULL,
    "tipo_escala" TEXT NOT NULL,
    "ini_expediente" TEXT NOT NULL,
    "ini_intervalo" TEXT NOT NULL,
    "fim_intervalo" TEXT NOT NULL,
    "ini_pausa1" TEXT NOT NULL,
    "fim_pausa1" TEXT NOT NULL,
    "ini_pausa2" TEXT NOT NULL,
    "fim_pausa2" TEXT NOT NULL,
    "fim_expediente" TEXT NOT NULL,

    CONSTRAINT "FuncionarioEscala_pkey" PRIMARY KEY ("id_funcionario")
);

-- AddForeignKey
ALTER TABLE "winover"."FuncionarioEscala" ADD CONSTRAINT "FuncionarioEscala_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "winover"."Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
