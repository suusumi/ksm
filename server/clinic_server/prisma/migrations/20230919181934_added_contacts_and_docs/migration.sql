-- AlterTable
ALTER TABLE "Specialists" ALTER COLUMN "filial" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Contacts" (
    "id" SERIAL NOT NULL,
    "first_tel" TEXT,
    "second_tel" TEXT,
    "mail" TEXT,
    "street" TEXT,
    "city" TEXT NOT NULL DEFAULT 'Волгоград',
    "vk_link" TEXT NOT NULL,
    "tg_link" TEXT NOT NULL,
    "wa_link" TEXT NOT NULL,
    "email_link" TEXT NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT 'doc',
    "file_name" TEXT,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);
