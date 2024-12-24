-- CreateTable
CREATE TABLE "OnBoardedUser" (
    "id" SERIAL NOT NULL,
    "wallet" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OnBoardedUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OnBoardedUser_wallet_key" ON "OnBoardedUser"("wallet");
