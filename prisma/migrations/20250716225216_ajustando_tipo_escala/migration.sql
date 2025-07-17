/*
  Warnings:

  - Changed the type of `tipo_escala` on the `FuncionarioEscala` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "winover"."FuncionarioEscala" DROP COLUMN "tipo_escala",
ADD COLUMN     "tipo_escala" INTEGER NOT NULL;
