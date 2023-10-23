/*
  Warnings:

  - You are about to drop the column `category` on the `Services` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Services` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Services" DROP COLUMN "category",
DROP COLUMN "type",
ADD COLUMN     "sub_category_id" INTEGER NOT NULL DEFAULT 1;

-- DropEnum
DROP TYPE "CategoryType";

-- DropEnum
DROP TYPE "ServiceType";

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Аллергология и иммунология',

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategories" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Прием',

    CONSTRAINT "SubCategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "SubCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategories" ADD CONSTRAINT "SubCategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
