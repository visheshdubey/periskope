/*
  Warnings:

  - You are about to drop the column `Labels` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `Members` on the `Group` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Group" DROP COLUMN "Labels",
DROP COLUMN "Members",
ADD COLUMN     "memberCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Label" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT 'gray',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "groupsId" INTEGER NOT NULL,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Label" ADD CONSTRAINT "Label_groupsId_fkey" FOREIGN KEY ("groupsId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
