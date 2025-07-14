/*
  Warnings:

  - You are about to drop the column `aprovador_HE` on the `Funcionario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "winover"."Funcionario" DROP COLUMN "aprovador_HE",
ADD COLUMN     "aprovador_he" BOOLEAN;
