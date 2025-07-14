-- CreateTable
CREATE TABLE "winover"."pausas" (
    "id" SERIAL NOT NULL,
    "pausa" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "trava" DOUBLE PRECISION NOT NULL,
    "id_olus" INTEGER NOT NULL,
    "id_pausa_olos" INTEGER NOT NULL,
    "id_pausa_aspect" INTEGER NOT NULL,
    "grava_afd" INTEGER NOT NULL,
    "tipo" INTEGER NOT NULL,
    "trava_sistema" INTEGER NOT NULL,
    "fixo_variavel" INTEGER NOT NULL,

    CONSTRAINT "pausas_pkey" PRIMARY KEY ("id")
);
