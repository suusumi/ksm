-- CreateEnum
CREATE TYPE "SpecFilial" AS ENUM ('KIM20', 'PlPavBortsov1', 'Kozlovskaya45A', 'KIM18A');

-- AlterTable
ALTER TABLE "Specialists" ADD COLUMN     "filial" "SpecFilial" NOT NULL DEFAULT 'PlPavBortsov1';
