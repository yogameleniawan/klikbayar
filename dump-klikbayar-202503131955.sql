-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: klikbayar
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banners` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES ('01958823-b590-7270-99fb-0eceab6f2d55','01958823-b58a-7210-9436-0b4c0bf97adf','2025-03-11 19:16:36','2025-03-11 19:16:36');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `digi_products`
--

DROP TABLE IF EXISTS `digi_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `digi_products` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `buyer_sku_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seller_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `buyer_product_status` tinyint(1) NOT NULL,
  `seller_product_status` tinyint(1) NOT NULL,
  `unlimited_stock` tinyint(1) NOT NULL,
  `stock` int NOT NULL,
  `multi` tinyint(1) NOT NULL,
  `start_cut_off` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_cut_off` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `digi_products`
--

LOCK TABLES `digi_products` WRITE;
/*!40000 ALTER TABLE `digi_products` DISABLE KEYS */;
INSERT INTO `digi_products` VALUES ('01958823-b738-73e9-9fcc-6d5fcf3e0428','Axis 10.000','Pulsa','AXIS','Umum',10835,'ax10','NUR PULSA',1,1,1,0,1,'23:55','0:5','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b73b-72f1-a159-d2150be55d09','Axis 5.000','Pulsa','AXIS','Umum',5955,'ax5','Lucky 7 Cell',1,1,1,0,1,'0:0','0:0','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b73e-71ac-a119-7f0ed48d3f96','Axis Pulsa Transfer 10.000','Pulsa','AXIS','Pulsa Transfer',10450,'axt10','1112 Reload',1,1,1,0,1,'23:30','0:10','Pulsa Transfer','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b741-7329-83f2-bda2a5bf39f2','by.U 10.000','Pulsa','by.U','Umum',10212,'byu10','Omega Tronik',1,1,1,0,1,'23:45','0:15','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b743-71ea-88da-f10eeb8264e1','Free Fire 12 Diamond','Games','FREE FIRE','Umum',1699,'ff12','BOPO Digital',1,1,1,0,1,'0:0','0:0','Jumlah diamond sesuai diamond normal, bonus tidak dihitung','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b746-73df-b1b8-d8e47c6c84ad','Free Fire 140 Diamond','Games','FREE FIRE','Umum',18382,'ff140','Gamestore Indonesia',1,1,1,0,1,'0:0','0:0','Jumlah diamond sesuai diamond normal, bonus tidak dihitung','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b749-731c-9f64-ea413462ffc0','Free Fire 355 Diamond','Games','FREE FIRE','Umum',44288,'ff355','TOKO KELONTONG 24 JAM',1,1,1,0,1,'23:45','0:5','Jumlah diamond sesuai diamond normal, bonus tidak dihitung','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b74c-732f-b99f-69c20559491e','Free Fire 50 Diamond','Games','FREE FIRE','Umum',6435,'ff50','Mumtazshop',1,1,1,0,1,'0:0','0:0','Jumlah diamond sesuai diamond normal, bonus tidak dihitung','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b74f-706c-840e-b713aa30b53b','Free Fire 70 Diamond','Games','FREE FIRE','Umum',9191,'ff70','Gamestore Indonesia',1,1,1,0,1,'0:0','0:0','Jumlah diamond sesuai diamond normal, bonus tidak dihitung','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b751-70a8-a751-d4d5ccc53768','Go Pay 100.000','E-Money','GO PAY','Customer',100275,'go100','TopLink Indonesia',1,1,1,0,1,'23:45','0:15','Masukan no HP','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b754-7034-b228-06b0c71e0f78','Go Pay 50.000','E-Money','GO PAY','Customer',50270,'go50','Kenzie Komunika',1,1,1,0,1,'23:45','0:15','Masukan no HP','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b757-7351-aaa9-6c2fd3f96443','Indosat 10.000','Pulsa','INDOSAT','Umum',11691,'i10','Payfast ID',1,1,1,0,1,'23:55','0:5','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b759-720a-94f9-2e27028895a6','Indosat 20.000','Pulsa','INDOSAT','Umum',20435,'i20','NH RELOAD',1,1,1,0,1,'23:30','0:20','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b75c-705a-a49e-1c233c94b2f7','Indosat 25.000','Pulsa','INDOSAT','Umum',25210,'i25','CV  DFLASH TEKNOLOGI INDO',1,1,1,0,1,'23:40','0:15','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b75f-73dd-a10f-176655475dc5','Indosat 30.000','Pulsa','INDOSAT','Umum',30279,'i30','Bestpay agen kuota',1,1,1,0,1,'23:30','0:30','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b762-7253-a672-e01fb4c36bd1','Indosat 5.000','Pulsa','INDOSAT','Umum',5805,'i5','Desra',1,1,1,0,1,'23:59','0:1','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b764-73cb-8ce0-d754a92c07a9','Indosat 50.000','Pulsa','INDOSAT','Umum',49825,'i50','Center pulsa',1,1,1,0,1,'23:45','0:15','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b767-7056-afea-74992164726a','Indosat Pulsa Transfer 10.000','Pulsa','INDOSAT','Pulsa Transfer',10400,'it10','AMAZONE',1,1,1,0,1,'23:45','0:15','Pulsa Transfer','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b76a-703f-953a-ab0d02c03975','Indosat Pulsa Transfer 5.000','Pulsa','INDOSAT','Pulsa Transfer',5590,'it5','HARMA RELOAD H2H',1,1,1,0,1,'23:30','0:30','Pulsa Transfer','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b76d-712b-ad31-6309af773bb4','MOBILELEGEND - 10 Diamond','Games','MOBILE LEGENDS','Umum',2870,'ml10','JURAGAN CASH',1,1,1,0,1,'0:0','0:0','no pelanggan = gabungan antara user_id dan zone_id','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b76f-71a6-999b-1b7b3f653ed2','MOBILELEGEND - 12 Diamond','Games','MOBILE LEGENDS','Umum',3836,'ml12','Dinar Pay',1,1,1,0,1,'23:45','0:5','no pelanggan = gabungan antara user_id dan zone_id','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b772-71f5-8cba-e61cc098ce5d','MOBILELEGEND - 5 Diamond','Games','MOBILE LEGENDS','Umum',1680,'ml5','BCA PULSA  CV BALI CAKRA AMERTA',1,1,1,0,1,'23:30','0:15','no pelanggan = gabungan antara user_id dan zone_id','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b774-73d1-83ae-eb5970c3a023','MOBILE LEGENDS Weekly Diamond Pass','Games','MOBILE LEGENDS','Membership',26568,'mlweek','HEXA DIAMOND',1,1,1,0,1,'0:0','0:0','-','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b777-711f-a6b4-3c532b4daf16','1.200 PB Cash','Games','POINT BLANK','Umum',9425,'PB12','BCA PULSA  CV BALI CAKRA AMERTA',0,1,1,0,1,'23:30','0:15','1200 Point Blank Cash','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b77a-70db-b7e6-771bf34ddc5f','12.000 PB Cash','Games','POINT BLANK','Umum',93175,'PB12K','BCA PULSA  CV BALI CAKRA AMERTA',0,1,1,0,1,'23:30','0:15','12000 PB Cash','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b77d-7008-b552-a9215fe23be0','2.400 PB Cash','Games','POINT BLANK','Umum',18625,'PB24','BCA PULSA  CV BALI CAKRA AMERTA',0,1,1,0,1,'23:30','0:15','2400 PB Cash','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b780-7190-a103-4a8ca9238900','24.000 PB Cash','Games','POINT BLANK','Umum',175979,'PB24K','Omah Pulsa',0,1,1,0,1,'23:55','0:5','24000 PB Cash','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b782-711a-9792-6b045f8b98e2','6.000 PB Cash','Games','POINT BLANK','Umum',46925,'PB60','BCA PULSA  CV BALI CAKRA AMERTA',0,1,1,0,1,'23:30','0:15','6000 PB Cash','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b785-7087-b8da-691d4f2edf98','Telkomsel 10.000','Pulsa','TELKOMSEL','Umum',10155,'s10','Omega Tronik',1,1,1,0,1,'23:45','0:15','Reguler','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b788-701e-a3a3-5c753016148c','Telkomsel 100.000','Pulsa','TELKOMSEL','Umum',98770,'s100','DYNAMIC RELOAD',1,1,1,0,1,'23:45','0:15','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b78a-71cf-95e3-e2a221b2f2f8','Telkomsel 15.000','Pulsa','TELKOMSEL','Umum',14910,'s15','Omega Tronik',1,1,1,0,1,'23:45','0:15','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b78d-703d-adcc-1ec25285693a','Telkomsel 20.000','Pulsa','TELKOMSEL','Umum',19850,'s20','PT SELULAR MEDIA INFOTAMA',1,1,1,0,1,'23:30','0:30','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b790-72eb-929e-0a8dc8780dea','Telkomsel 25.000','Pulsa','TELKOMSEL','Umum',24740,'s25','Maxtop Indonesia',1,1,1,0,1,'23:45','0:15','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b792-7225-8e9e-51302f000e4f','Telkomsel 30.000','Pulsa','TELKOMSEL','Umum',29475,'s30','payfi mobile',1,1,1,0,1,'23:50','0:15','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b795-7261-abf4-5f59d668d3ca','Telkomsel 5.000','Pulsa','TELKOMSEL','Umum',5283,'s5','Kitty Reload',1,1,1,0,1,'23:30','0:20','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b798-7321-9b09-7db7ba22d335','Telkomsel 50.000','Pulsa','TELKOMSEL','Umum',49925,'s50','GEEVE',1,1,1,0,1,'23:45','0:15','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b79b-70f3-8ade-5bf8825c8997','Smartfren 10.000','Pulsa','SMARTFREN','Umum',9905,'sm10','Minions Reload',1,1,1,0,1,'23:30','0:30','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b79e-7126-98cc-c22e70ff877a','Telkomsel Pulsa Transfer 100.000','Pulsa','TELKOMSEL','Pulsa Transfer',98625,'st100','Kitty Reload',1,1,1,0,1,'23:30','0:30','Pulsa Transfer','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7a1-70dd-9752-2527a87c3797','Telkomsel Pulsa Transfer 50.000','Pulsa','TELKOMSEL','Pulsa Transfer',49601,'st50','HARMA RELOAD H2H',1,1,1,0,1,'23:30','0:30','Pulsa Transfer','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7a4-7190-9e48-a6fb0bd30fdc','Three 10.000','Pulsa','TRI','Umum',11355,'t10','BCA PULSA  CV BALI CAKRA AMERTA',1,1,1,0,1,'23:30','0:15','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7a6-71fa-b943-2ca2f32215b9','Three 20.000','Pulsa','TRI','Umum',20785,'t20','Milena Reload',1,1,1,0,1,'23:30','0:30','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7aa-7181-aa49-e3ce98fcd66c','Three 5.000','Pulsa','TRI','Umum',5830,'t5','Kitty Reload',1,1,1,0,1,'23:30','0:30','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7ad-700c-baae-5b3c78edb2c9','Three Pulsa Transfer 10.000','Pulsa','TRI','Pulsa Transfer',10202,'tt10','Omega Tronik',1,1,1,0,1,'23:45','0:15','Pulsa Transfer','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7b0-71f9-b1f1-8c79f01a5054','Three Pulsa Transfer 35.000','Pulsa','TRI','Pulsa Transfer',33897,'tt35','PARIS STORE',1,1,1,0,1,'23:30','0:5','Pulsa Transfer','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7b3-7110-859d-55c66ae1cf22','Valorant 1.000 VP','Games','Valorant','Umum',103480,'VAL1000','KiosGame',1,1,1,0,1,'0:0','0:0','Masukkan ID','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7b6-7395-8130-8c0e070ce6c5','Valorant 11.000 VP','Games','Valorant','Umum',1015149,'VAL110000','Lapakgamingdotcom',1,1,1,0,1,'0:0','0:0','Masukkan ID','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7ba-7289-a251-e807455d2c22','Valorant 2.050 VP','Games','Valorant','Umum',206930,'VAL2050','KiosGame',1,1,1,0,1,'0:0','0:0','Masukkan ID','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7bd-70e9-a536-3326fcf8c632','Valorant 3.650 VP','Games','Valorant','Umum',359337,'VAL3650','Lapakgamingdotcom',1,1,1,0,1,'0:0','0:0','Masukkan ID','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7c0-73da-b711-b31769bb6acd','Valorant 475 VP','Games','Valorant','Umum',51925,'VAL475','CV  DFLASH TEKNOLOGI INDO',1,1,1,0,1,'23:40','0:15','Masukkan ID','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7c3-7330-9be5-9d64040cbf5d','Valorant 5.350 VP','Games','Valorant','Umum',516362,'VAL5350','Lapakgamingdotcom',1,1,1,0,1,'0:0','0:0','Masukkan ID','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7c6-720e-b963-36e1963e2cf7','Xl 10.000','Pulsa','XL','Umum',10828,'x10','Omega Tronik',1,1,1,0,1,'23:45','0:15','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7c8-73de-9ab4-de5c1669b611','Xl 5.000','Pulsa','XL','Umum',5845,'x5','CV  DFLASH TEKNOLOGI INDO',1,1,1,0,1,'23:40','0:15','Reguler','2025-03-11 19:16:37','2025-03-11 19:16:37'),('01958823-b7cb-70e0-a9d6-75947b38c51d','Xl Pulsa Transfer 10.000','Pulsa','XL','Pulsa Transfer',10430,'xt10','Kitty Reload',1,1,1,0,1,'23:30','0:30','Pulsa Transfer','2025-03-11 19:16:37','2025-03-11 19:16:37');
/*!40000 ALTER TABLE `digi_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES ('01958823-b585-73b1-962c-c7fc56f75c46','images/67cfade41ebd2_5e7e78a7-674e-4b81-b68b-f09ff0880555.webp','67cfade41ebd2_5e7e78a7-674e-4b81-b68b-f09ff0880555.webp','2025-03-11 19:16:36','2025-03-11 19:16:36'),('01958823-b58a-7210-9436-0b4c0bf97adf','images/67cfade42791b_c87afb55-35d7-4197-b18a-99811ca4f718.jpg','67cfade42791b_c87afb55-35d7-4197-b18a-99811ca4f718.jpg','2025-03-11 19:16:36','2025-03-11 19:16:36');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2025_01_11_080350_create_digi_products_table',1),(5,'2025_01_15_011930_create_files_table',1),(6,'2025_01_15_061040_create_banners_table',1),(7,'2025_01_18_071947_create_permission_tables',1),(8,'2025_03_07_024542_add_google_id_to_users_table',1),(9,'2025_03_10_014404_create_product_categories_table',1),(10,'2025_03_10_014410_create_products_table',1),(11,'2025_03_10_100857_create_product_details_table',1),(12,'2025_03_11_042826_create_personal_access_tokens_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_permissions`
--

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_roles`
--

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_categories` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `product_categories` VALUES ('01958823-b7d0-70b0-80b6-ad6ec71ab9cc','Pulsa','iphone','2025-03-11 19:16:37','2025-03-11 19:49:54'),('01958823-b7d3-71f4-b25f-bdc635312c9b','Games','gamepad','2025-03-11 19:16:37','2025-03-11 19:49:59'),('01958823-b7d6-72c6-9787-d46332871f3b','E-Money','wallet','2025-03-11 19:16:37','2025-03-11 19:50:04'),('01958857-a92d-7126-80fe-fc640e6834c7','Semua','layer','2025-03-11 20:13:21','2025-03-11 20:21:49');
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_details` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `margin` int NOT NULL,
  `discount` int NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `product_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `digi_product_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_details`
--

LOCK TABLES `product_details` WRITE;
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` VALUES ('01958d2d-d437-7055-b5a4-3a96909ca946',5,3,1,'01958823-b7dd-732b-8fb3-6097cda7e7de','01958823-b7b3-7110-859d-55c66ae1cf22','2025-03-12 18:45:45','2025-03-12 18:45:45'),('01958d2d-d43b-72ca-acec-ae250e8a1f73',10,5,1,'01958823-b7dd-732b-8fb3-6097cda7e7de','01958823-b7b6-7395-8130-8c0e070ce6c5','2025-03-12 18:45:45','2025-03-12 18:45:45'),('01958d2d-d43e-73f0-aaa5-86f6083af1db',10,7,1,'01958823-b7dd-732b-8fb3-6097cda7e7de','01958823-b7ba-7289-a251-e807455d2c22','2025-03-12 18:45:45','2025-03-12 18:45:45'),('01958d2d-d441-7251-bffa-4503b888ee56',20,10,1,'01958823-b7dd-732b-8fb3-6097cda7e7de','01958823-b7bd-70e9-a536-3326fcf8c632','2025-03-12 18:45:45','2025-03-12 18:45:45'),('01958d2d-d444-7276-a774-f9c765a6b00c',30,0,1,'01958823-b7dd-732b-8fb3-6097cda7e7de','01958823-b7c0-73da-b711-b31769bb6acd','2025-03-12 18:45:45','2025-03-12 18:45:45'),('01958d2d-d447-7099-b4ea-e6935b98f9ee',30,20,1,'01958823-b7dd-732b-8fb3-6097cda7e7de','01958823-b7c3-7330-9be5-9d64040cbf5d','2025-03-12 18:45:45','2025-03-12 18:45:45');
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `input` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_category_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('01958823-b7dd-732b-8fb3-6097cda7e7de','Valorant','Valorant (bergaya sebagai VALORANT) adalah permainan video POP (penembak orang pertama) taktis multipemain gratis yang dikembangkan dan diterbitkan oleh Riot Games, untuk Microsoft Windows.','Riot','valorant','[{\"label\":\"Valorant ID\",\"name\":\"customer_no\",\"type\":\"text\",\"placeholder\":\"Contoh: valorant#123\"}]','01958823-b58a-7210-9436-0b4c0bf97adf','01958823-b585-73b1-962c-c7fc56f75c46','01958823-b7d3-71f4-b25f-bdc635312c9b','2025-03-11 19:16:37','2025-03-12 18:45:45');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_has_permissions`
--

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('YPnhzzDgjWIxkeRhb6cg0XFZQCZ0comdRJqHk7X6',51,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiMHo2bHZzUllSckFKSFhGUWc4OFI3NmZONVdxVFJ3ZGxZU1JpNEZoTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jaGVja291dC92YWxvcmFudCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjUxO30=',1741850985);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `google_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Gene Kuhlman','xking@example.com','2025-03-11 19:16:35','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','Az9Cl5IDOs','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(2,'Hilda Tremblay','okautzer@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','8RgJgyLHfs','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(3,'Eldridge Rodriguez','julius14@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','i3RwjU2V3V','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(4,'Opal Hudson DVM','littel.josefa@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','W93NxXeABs','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(5,'Sally Legros','skonopelski@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','KA386sxtE7','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(6,'Mikel Kozey','reichel.valentina@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','bXkIBrDyNQ','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(7,'Joelle Grant','dahlia78@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','5Gin15Uu2a','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(8,'Henri Legros','scotty54@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','Gb9dYipLTf','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(9,'Brody Langworth','cathryn75@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','19B8r2Ucuy','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(10,'Alivia McKenzie III','harber.rodger@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','03w2raRoOs','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(11,'Eldora Koepp IV','mbecker@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','B13S6AqAPT','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(12,'Felicity Zboncak MD','madelyn75@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','NUWRYnUGvj','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(13,'Reymundo Abshire','kling.jeramy@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','V0umRVgZie','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(14,'Mazie Ebert','stiedemann.cheyanne@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','eRSzMXgkrA','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(15,'Filiberto Botsford','blanda.ansel@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','nA9hL90sMi','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(16,'Dr. Lila Kuvalis IV','ronny.reichel@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','u8mszWOGVk','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(17,'Palma Bahringer','llittel@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','wkY16KXkWN','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(18,'Kaci Carroll III','kennedi56@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','kIj5l1gAuj','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(19,'Ibrahim Mueller','kaycee.rath@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','HyYP6JPNhW','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(20,'Myrna Lebsack','rowe.helmer@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','TD0WwlGGhi','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(21,'Kaley Wisozk IV','zohara@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','RLd9kjuNDJ','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(22,'Mr. Alexandro Torp DDS','aauer@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','qxXuHsuOU3','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(23,'Jordan Stanton I','senger.aaliyah@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','uKdDrkIuOh','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(24,'Mitchell Leffler','lupe.morissette@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','dwOscF4mk1','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(25,'Prof. Alda Bartell PhD','pietro.kreiger@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','0iDuzOWeYO','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(26,'Mr. Louisa Pagac','gwatsica@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','nxWcvqkejM','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(27,'Ms. Lenna Fritsch','tmclaughlin@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','nwYG4xEeqi','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(28,'Caroline Feeney','shanel.jaskolski@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','SyoXy987UK','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(29,'Dario Little','koby.watsica@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','5dbX4Ny4q4','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(30,'Kory Smith','leta43@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','GPcWeFPk3c','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(31,'Whitney Erdman','neoma21@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','aL5Hsd23Af','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(32,'Petra Kutch','adrienne.kreiger@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','yJ8Buo4f97','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(33,'Maryjane Kreiger','trever50@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','TMhDI5wZZA','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(34,'Zane Armstrong MD','charity43@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','fL507o6Fst','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(35,'Mr. Forest Johnson MD','monserrate.larkin@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','7CHb0XL7Uj','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(36,'Malika Kuhlman','asia73@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','OC9tBfv33w','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(37,'Samir Stanton','carmela62@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','PaMEaisu3V','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(38,'Dr. Gia Schowalter','wschumm@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','hTtFrCgIOR','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(39,'Dr. Lindsey Gislason','eleazar.donnelly@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','S0lj84idTB','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(40,'Dr. Donny Schumm','bayer.americo@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','fBaOaiJNAZ','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(41,'Mrs. Martine Kuhn V','christophe.kessler@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','ryyxnWjeaW','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(42,'Mr. Eusebio Rippin','ashton79@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','J7YsrmfEsf','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(43,'Danielle Leffler II','white.letitia@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','b1psHstKdQ','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(44,'Prof. Carlie Williamson I','adams.toni@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','yEziJYmgIs','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(45,'Albina Klocko','keenan27@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','fnrDMnDeuu','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(46,'Annamae McLaughlin','trystan.maggio@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','I1hOLv9H6A','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(47,'Ms. Chasity Zemlak','delores06@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','CXdWLgxHjf','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(48,'Earline Wuckert DDS','dsatterfield@example.com','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','gYUXuLsq62','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(49,'Mr. Cedrick Mueller','schultz.stefan@example.org','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','8s8GMcRXPl','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(50,'Prof. Jerry Kuhn','edyth06@example.net','2025-03-11 19:16:36','$2y$12$GD.PHvDtshc91rGwcrWcLe7T1eu73pwV9k/QV/7xTk8W6f9LE9Fum','0rdLN3myCK','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL),(51,'Admin','admin@test.com','2025-03-11 19:16:36','$2y$12$g1qM5nz32eSYXFivBe9g0exZm/RLkk4UM.h9rNIJmDJKS7x7aa3cG','SG8dtORHep','2025-03-11 19:16:36','2025-03-11 19:16:36',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'klikbayar'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-13 19:55:38
