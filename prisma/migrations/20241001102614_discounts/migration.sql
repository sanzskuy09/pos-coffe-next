-- CreateTable
CREATE TABLE `discounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dicsCode` VARCHAR(10) NOT NULL,
    `discAmount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trxId` VARCHAR(50) NOT NULL,
    `orderId` VARCHAR(10) NOT NULL,
    `salesDate` VARCHAR(50) NOT NULL,
    `status` VARCHAR(191) NULL,
    `totalAmount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
