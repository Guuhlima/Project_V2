/*
  Warnings:

  - Changed the type of `trava` on the `pausas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "winover"."pausas" DROP COLUMN "trava",
ADD COLUMN     "trava" INTEGER NOT NULL;
