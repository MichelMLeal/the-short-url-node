/*
  Warnings:

  - You are about to alter the column `long_url` on the `urlshort` table. The data in that column could be lost. The data in that column will be cast from `VarChar(600)` to `VarChar(555)`.

*/
-- AlterTable
ALTER TABLE `urlshort` MODIFY `long_url` VARCHAR(555) NOT NULL;
