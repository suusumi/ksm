-- AlterTable
ALTER TABLE "Contacts" ALTER COLUMN "vk_link" DROP NOT NULL,
ALTER COLUMN "tg_link" DROP NOT NULL,
ALTER COLUMN "wa_link" DROP NOT NULL,
ALTER COLUMN "email_link" DROP NOT NULL;
