-- CreateTable
CREATE TABLE "Pedra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vendido" BOOLEAN NOT NULL DEFAULT false,
    "vendedor" TEXT,
    "comprador" TEXT,
    "contatoComprador" TEXT
);
