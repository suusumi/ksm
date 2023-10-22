-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_sub_category_id_fkey";

-- DropForeignKey
ALTER TABLE "SubCategories" DROP CONSTRAINT "SubCategories_category_id_fkey";

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "SubCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategories" ADD CONSTRAINT "SubCategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
