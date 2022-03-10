-- CreateTable
CREATE TABLE `urlShort` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `linkId` VARCHAR(255) NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `long_url` VARCHAR(255) NOT NULL,
    `group` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


ALTER TABLE `urlShort` MODIFY COLUMN `long_url` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL;
