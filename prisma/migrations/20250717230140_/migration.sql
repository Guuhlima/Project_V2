/*
  Warnings:

  - The primary key for the `funcionario_escala` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "winover"."funcionario_escala" DROP CONSTRAINT "funcionario_escala_pkey",
ADD CONSTRAINT "funcionario_escala_pkey" PRIMARY KEY ("id_funcionario", "dia_semana");
