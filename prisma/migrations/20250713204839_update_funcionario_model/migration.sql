-- CreateTable
CREATE TABLE "winover"."entrada_saida" (
    "id" SERIAL NOT NULL,
    "matricula" INTEGER NOT NULL,
    "id_campanha" INTEGER NOT NULL,
    "entrada" TIMESTAMP(3) NOT NULL,
    "saida" TIMESTAMP(3),
    "status" INTEGER NOT NULL,

    CONSTRAINT "entrada_saida_pkey" PRIMARY KEY ("id")
);
