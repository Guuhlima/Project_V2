/*
  Warnings:

  - Added the required column `tempo` to the `pausas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "winover"."pausas" ADD COLUMN     "tempo" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "trava" SET DATA TYPE TEXT;
