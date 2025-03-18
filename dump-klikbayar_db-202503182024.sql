-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: klikbayar_db
-- ------------------------------------------------------
-- Server version	8.1.0

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
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES ('0195a1e9-7afa-7364-a6b7-0972d12bf582','0195a1e9-7aeb-7297-865c-cab4018a5b5a','2025-03-17 02:23:08','2025-03-17 02:23:08');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('35c7c24fff98a38e86ac1be0f1818a10264c8c19','i:1;',1742270549),('35c7c24fff98a38e86ac1be0f1818a10264c8c19:timer','i:1742270548;',1742270549),('445bdbd80201bbc5e0591b57d5479e175657cb3f','i:1;',1742288425),('445bdbd80201bbc5e0591b57d5479e175657cb3f:timer','i:1742288425;',1742288425),('661240f1dd849025a3f431ab546141e78c89cbff','i:1;',1742269627),('661240f1dd849025a3f431ab546141e78c89cbff:timer','i:1742269627;',1742269627),('yogameleniawan@gmail.com|172.26.0.1','i:1;',1742260608),('yogameleniawan@gmail.com|172.26.0.1:timer','i:1742260608;',1742260608);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `buyer_sku_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `seller_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `buyer_product_status` tinyint(1) NOT NULL,
  `seller_product_status` tinyint(1) NOT NULL,
  `unlimited_stock` tinyint(1) NOT NULL,
  `stock` int NOT NULL,
  `multi` tinyint(1) NOT NULL,
  `start_cut_off` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_cut_off` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
INSERT INTO `failed_jobs` VALUES (1,'5743a5b8-4008-43af-a523-099b957cae80','database','default','{\"uuid\":\"5743a5b8-4008-43af-a523-099b957cae80\",\"displayName\":\"App\\\\Events\\\\NotificationEvent\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\",\"command\":\"O:38:\\\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\\\":14:{s:5:\\\"event\\\";O:28:\\\"App\\\\Events\\\\NotificationEvent\\\":1:{s:7:\\\"message\\\";s:18:\\\"Hello from Reverb!\\\";}s:5:\\\"tries\\\";N;s:7:\\\"timeout\\\";N;s:7:\\\"backoff\\\";N;s:13:\\\"maxExceptions\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;}\"}}','Error: The script tried to call a method on an incomplete object. Please ensure that the class definition \"App\\Events\\NotificationEvent\" of the object you are trying to operate on was loaded _before_ unserialize() gets called or provide an autoloader to load the class definition in /var/www/vendor/laravel/framework/src/Illuminate/Broadcasting/BroadcastEvent.php:181\nStack trace:\n#0 /var/www/vendor/laravel/framework/src/Illuminate/Broadcasting/BroadcastEvent.php(181): method_exists(Object(__PHP_Incomplete_Class), \'middleware\')\n#1 /var/www/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(120): Illuminate\\Broadcasting\\BroadcastEvent->middleware()\n#2 /var/www/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(69): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Broadcasting\\BroadcastEvent))\n#3 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Jobs/Job.php(102): Illuminate\\Queue\\CallQueuedHandler->call(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Array)\n#4 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(442): Illuminate\\Queue\\Jobs\\Job->fire()\n#5 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(392): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#6 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(178): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#7 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(149): Illuminate\\Queue\\Worker->daemon(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#8 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(132): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#9 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#10 /var/www/vendor/laravel/framework/src/Illuminate/Container/Util.php(43): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#11 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(95): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#12 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(35): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#13 /var/www/vendor/laravel/framework/src/Illuminate/Container/Container.php(754): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#14 /var/www/vendor/laravel/framework/src/Illuminate/Console/Command.php(213): Illuminate\\Container\\Container->call(Array)\n#15 /var/www/vendor/symfony/console/Command/Command.php(279): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#16 /var/www/vendor/laravel/framework/src/Illuminate/Console/Command.php(182): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#17 /var/www/vendor/symfony/console/Application.php(1094): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#18 /var/www/vendor/symfony/console/Application.php(342): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#19 /var/www/vendor/symfony/console/Application.php(193): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#20 /var/www/vendor/laravel/framework/src/Illuminate/Foundation/Console/Kernel.php(198): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#21 /var/www/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1235): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#22 /var/www/artisan(13): Illuminate\\Foundation\\Application->handleCommand(Object(Symfony\\Component\\Console\\Input\\ArgvInput))\n#23 {main}','2025-03-18 03:30:11'),(2,'0296da81-e294-4532-966d-f6eb4b4a0f10','database','default','{\"uuid\":\"0296da81-e294-4532-966d-f6eb4b4a0f10\",\"displayName\":\"App\\\\Events\\\\NotificationEvent\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\",\"command\":\"O:38:\\\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\\\":14:{s:5:\\\"event\\\";O:28:\\\"App\\\\Events\\\\NotificationEvent\\\":1:{s:7:\\\"message\\\";s:18:\\\"Hello from Reverb!\\\";}s:5:\\\"tries\\\";N;s:7:\\\"timeout\\\";N;s:7:\\\"backoff\\\";N;s:13:\\\"maxExceptions\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;}\"}}','Error: The script tried to call a method on an incomplete object. Please ensure that the class definition \"App\\Events\\NotificationEvent\" of the object you are trying to operate on was loaded _before_ unserialize() gets called or provide an autoloader to load the class definition in /var/www/vendor/laravel/framework/src/Illuminate/Broadcasting/BroadcastEvent.php:181\nStack trace:\n#0 /var/www/vendor/laravel/framework/src/Illuminate/Broadcasting/BroadcastEvent.php(181): method_exists(Object(__PHP_Incomplete_Class), \'middleware\')\n#1 /var/www/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(120): Illuminate\\Broadcasting\\BroadcastEvent->middleware()\n#2 /var/www/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(69): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Broadcasting\\BroadcastEvent))\n#3 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Jobs/Job.php(102): Illuminate\\Queue\\CallQueuedHandler->call(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Array)\n#4 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(442): Illuminate\\Queue\\Jobs\\Job->fire()\n#5 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(392): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#6 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(178): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#7 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(149): Illuminate\\Queue\\Worker->daemon(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#8 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(132): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#9 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#10 /var/www/vendor/laravel/framework/src/Illuminate/Container/Util.php(43): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#11 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(95): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#12 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(35): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#13 /var/www/vendor/laravel/framework/src/Illuminate/Container/Container.php(754): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#14 /var/www/vendor/laravel/framework/src/Illuminate/Console/Command.php(213): Illuminate\\Container\\Container->call(Array)\n#15 /var/www/vendor/symfony/console/Command/Command.php(279): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#16 /var/www/vendor/laravel/framework/src/Illuminate/Console/Command.php(182): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#17 /var/www/vendor/symfony/console/Application.php(1094): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#18 /var/www/vendor/symfony/console/Application.php(342): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#19 /var/www/vendor/symfony/console/Application.php(193): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#20 /var/www/vendor/laravel/framework/src/Illuminate/Foundation/Console/Kernel.php(198): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#21 /var/www/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1235): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#22 /var/www/artisan(13): Illuminate\\Foundation\\Application->handleCommand(Object(Symfony\\Component\\Console\\Input\\ArgvInput))\n#23 {main}','2025-03-18 03:30:11'),(3,'9cd12534-8e38-4463-b8fb-25feae68227d','database','default','{\"uuid\":\"9cd12534-8e38-4463-b8fb-25feae68227d\",\"displayName\":\"App\\\\Events\\\\NotificationEvent\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\",\"command\":\"O:38:\\\"Illuminate\\\\Broadcasting\\\\BroadcastEvent\\\":14:{s:5:\\\"event\\\";O:28:\\\"App\\\\Events\\\\NotificationEvent\\\":1:{s:7:\\\"message\\\";s:18:\\\"Hello from Reverb!\\\";}s:5:\\\"tries\\\";N;s:7:\\\"timeout\\\";N;s:7:\\\"backoff\\\";N;s:13:\\\"maxExceptions\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;}\"}}','Error: The script tried to call a method on an incomplete object. Please ensure that the class definition \"App\\Events\\NotificationEvent\" of the object you are trying to operate on was loaded _before_ unserialize() gets called or provide an autoloader to load the class definition in /var/www/vendor/laravel/framework/src/Illuminate/Broadcasting/BroadcastEvent.php:181\nStack trace:\n#0 /var/www/vendor/laravel/framework/src/Illuminate/Broadcasting/BroadcastEvent.php(181): method_exists(Object(__PHP_Incomplete_Class), \'middleware\')\n#1 /var/www/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(120): Illuminate\\Broadcasting\\BroadcastEvent->middleware()\n#2 /var/www/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(69): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Broadcasting\\BroadcastEvent))\n#3 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Jobs/Job.php(102): Illuminate\\Queue\\CallQueuedHandler->call(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Array)\n#4 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(442): Illuminate\\Queue\\Jobs\\Job->fire()\n#5 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(392): Illuminate\\Queue\\Worker->process(\'database\', Object(Illuminate\\Queue\\Jobs\\DatabaseJob), Object(Illuminate\\Queue\\WorkerOptions))\n#6 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(178): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\DatabaseJob), \'database\', Object(Illuminate\\Queue\\WorkerOptions))\n#7 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(149): Illuminate\\Queue\\Worker->daemon(\'database\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#8 /var/www/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(132): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'database\', \'default\')\n#9 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#10 /var/www/vendor/laravel/framework/src/Illuminate/Container/Util.php(43): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#11 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(95): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#12 /var/www/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(35): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#13 /var/www/vendor/laravel/framework/src/Illuminate/Container/Container.php(754): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#14 /var/www/vendor/laravel/framework/src/Illuminate/Console/Command.php(213): Illuminate\\Container\\Container->call(Array)\n#15 /var/www/vendor/symfony/console/Command/Command.php(279): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#16 /var/www/vendor/laravel/framework/src/Illuminate/Console/Command.php(182): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#17 /var/www/vendor/symfony/console/Application.php(1094): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#18 /var/www/vendor/symfony/console/Application.php(342): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#19 /var/www/vendor/symfony/console/Application.php(193): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#20 /var/www/vendor/laravel/framework/src/Illuminate/Foundation/Console/Kernel.php(198): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#21 /var/www/vendor/laravel/framework/src/Illuminate/Foundation/Application.php(1235): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#22 /var/www/artisan(13): Illuminate\\Foundation\\Application->handleCommand(Object(Symfony\\Component\\Console\\Input\\ArgvInput))\n#23 {main}','2025-03-18 03:30:11');
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES ('0195a1e9-7aeb-7297-865c-cab4018a5b5a','images/67d7878c00b4a_banner.png','67d7878c00b4a_banner.png','2025-03-17 02:23:08','2025-03-17 02:23:08'),('0195a1ea-e31a-720f-8059-3603b36c7c5a','images/67d787e834150_image.png','67d787e834150_image.png','2025-03-17 02:24:40','2025-03-17 02:24:40'),('0195a245-fca5-70dd-9817-a78eb54c7b33','images/67d79f3a81057_gopay.png','67d79f3a81057_gopay.png','2025-03-17 04:04:10','2025-03-17 04:04:10'),('0195a246-741c-7034-926a-98322942495e','images/67d79f591b15b_dana.jpg','67d79f591b15b_dana.jpg','2025-03-17 04:04:41','2025-03-17 04:04:41'),('0195a318-8f6a-708c-83af-8c82d7fa8b3b','images/67d7d522a0e2f_bri.png','67d7d522a0e2f_bri.png','2025-03-17 07:54:10','2025-03-17 07:54:10'),('0195a31f-272b-736e-8e4b-45afd21bab3e','images/67d7d6d2ae5a4_linkaja.png','67d7d6d2ae5a4_linkaja.png','2025-03-17 08:01:22','2025-03-17 08:01:22');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
  `queue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_methods` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fee` int NOT NULL DEFAULT '0',
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` VALUES ('0195a23e-3dfe-7374-b060-6838cb96bf7f','Gopay','gopay','E-Wallet',0,'<ol><li>Buka aplikasi Gojek di smartphone Anda</li><li>Ketuk ikon \"Bayar\" yang ada di halaman utama</li><li>Arahkan kamera ke QR Code yang disediakan oleh merchant</li><li>Sistem akan otomatis memindai dan menampilkan detail pembayaran</li><li>Periksa jumlah yang harus dibayar</li><li>Masukkan PIN GoPay Anda untuk mengkonfirmasi pembayaran</li><li>Tunggu hingga muncul notifikasi bahwa pembayaran berhasil</li></ol>','gopay.png','2025-03-17 03:55:42','2025-03-17 04:04:10'),('0195a246-742d-712c-9f35-7784600a242e','Dana','dana','E-Wallet',0,'<ol><li>Buka aplikasi DANA di smartphone Anda</li><li>Ketuk ikon \"Scan\" atau \"Pindai\" yang ada di bagian bawah layar</li><li>Arahkan kamera ke QR Code QRIS yang disediakan oleh merchant</li><li>Sistem akan otomatis memindai dan menampilkan detail pembayaran</li><li>Periksa nama merchant dan jumlah yang harus dibayar</li><li>Anda dapat menambahkan catatan jika diperlukan</li><li>Ketuk tombol \"Bayar\" untuk melanjutkan</li><li>Masukkan PIN DANA Anda untuk mengkonfirmasi pembayaran</li><li>Tunggu hingga muncul notifikasi bahwa pembayaran berhasil</li></ol>','dana.jpg','2025-03-17 04:04:41','2025-03-17 04:04:41'),('0195a318-8f87-71f7-ae22-6e1eba46c575','Bank BRI','bri','Bank',0,'<ol><li>Buka aplikasi BRImo</li><li>Login menggunakan username dan password atau fingerprint</li><li>Klik ikon QRIS</li><li>Scan QR Code merchant</li><li>Verifikasi nama merchant</li><li>Pilih sumber dana</li><li>Masukkan nominal pembayaran</li><li>Cek detail pembayaran</li><li>Klik \"Bayar\"</li><li>Masukkan PIN BRImo untuk konfirmasi pembayaran</li></ol>','bri.png','2025-03-17 07:54:10','2025-03-17 07:54:10'),('0195a31f-2740-70b4-a8df-3576f0fb6322','Linkaja','linkaja','E-Wallet',0,'<ol><li>Buka aplikasi LinkAja</li><li>Pilih menu \"Bayar\"</li><li>Scan QR code yang ditunjukkan oleh merchant</li><li>Masukkan nominal yang akan dibayarkan</li><li>Masukkan PIN LinkAja</li><li>Tunggu notifikasi transaksi berhasil</li></ol>','linkaja.png','2025-03-17 08:01:22','2025-03-17 08:01:22');
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
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
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `margin` int NOT NULL,
  `discount` int NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `product_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `digi_product_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `input` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_category_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('01958823-b7dd-732b-8fb3-6097cda7e7de','Valorant','Valorant (bergaya sebagai VALORANT) adalah permainan video POP (penembak orang pertama) taktis multipemain gratis yang dikembangkan dan diterbitkan oleh Riot Games, untuk Microsoft Windows.','Riot','valorant','[{\"label\":\"Valorant ID\",\"name\":\"customer_no\",\"type\":\"text\",\"placeholder\":\"Contoh: valorant#123\"}]','0195a1e9-7aeb-7297-865c-cab4018a5b5a','0195a1ea-e31a-720f-8059-3603b36c7c5a','01958823-b7d3-71f4-b25f-bdc635312c9b','2025-03-11 19:16:37','2025-03-12 18:45:45');
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
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
INSERT INTO `sessions` VALUES ('dObQTHkGAO8eJlbO0LiJy6V9jfaYreet8lXQ4Hbg',NULL,'192.168.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiaWNLZjJBMTB5a2EwdmpIQ2VqQUZnb2RuN2hqaWpkaWd3NlJkUHJoZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDA6Imh0dHA6Ly85MzMzLTEwMy05NC0xOTAtMTkubmdyb2stZnJlZS5hcHAiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1742278576),('skU5PLNXvwErXxPlWy00ZEgTajZeGNtSrt4OwcRX',51,'192.168.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiYkRDOGlKbmJ3b3Y3QlZ0YkRPU0hpNXBBWnhvWFRlRHpZQ0sxY0tVTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTY6Imh0dHA6Ly9sb2NhbGhvc3QiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aTo1MTt9',1742286768);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_details`
--

DROP TABLE IF EXISTS `transaction_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_details` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `product_detail_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_details`
--

LOCK TABLES `transaction_details` WRITE;
/*!40000 ALTER TABLE `transaction_details` DISABLE KEYS */;
INSERT INTO `transaction_details` VALUES ('0195a250-1ab5-70b1-a3fe-721517c844fa','Valorant 3.650 VP',388083,'01958d2d-d441-7251-bffa-4503b888ee56','0195a250-1a90-700b-b8f1-206e48082ade','2025-03-17 04:15:13','2025-03-17 04:15:13'),('0195a254-4670-7067-80c9-ee685270534c','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a254-4658-7362-b827-4b941e7a450a','2025-03-17 04:19:46','2025-03-17 04:19:46'),('0195a256-909a-70af-8e4a-4f9965868d9d','Valorant 3.650 VP',388083,'01958d2d-d441-7251-bffa-4503b888ee56','0195a256-909a-70af-8e4a-4f99642f4e1e','2025-03-17 04:22:05','2025-03-17 04:22:05'),('0195a2fe-15a6-7283-817a-dd57e7f14cae','Valorant 1.000 VP',105394,'01958d2d-d437-7055-b5a4-3a96909ca946','0195a2fe-1586-7314-a3df-2d668eb9b005','2025-03-17 07:25:15','2025-03-17 07:25:15'),('0195a300-892a-7060-9d30-d1d962f11882','Valorant 3.650 VP',388083,'01958d2d-d441-7251-bffa-4503b888ee56','0195a300-8912-710d-96cf-e7876cb441f4','2025-03-17 07:27:56','2025-03-17 07:27:56'),('0195a304-5a55-718f-8831-2ee5cc7746f1','Valorant 1.000 VP',105394,'01958d2d-d437-7055-b5a4-3a96909ca946','0195a304-5a36-71b6-b957-8bae35c46c4f','2025-03-17 07:32:06','2025-03-17 07:32:06'),('0195a306-01bb-7079-8282-6806a8d69549','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a306-01a0-7193-952b-bf929ce29251','2025-03-17 07:33:54','2025-03-17 07:33:54'),('0195a307-1475-728d-884c-68d7ac463156','Valorant 1.000 VP',105394,'01958d2d-d437-7055-b5a4-3a96909ca946','0195a307-1454-72b8-b756-cff9e509ebe1','2025-03-17 07:35:05','2025-03-17 07:35:05'),('0195a307-e658-72de-8cb9-98342ff80547','Valorant 1.000 VP',105394,'01958d2d-d437-7055-b5a4-3a96909ca946','0195a307-e63d-72e1-ae36-00a0becce509','2025-03-17 07:35:58','2025-03-17 07:35:58'),('0195a7e6-cf26-73b4-8381-c5cd92e5a74a','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a7e6-cf06-73fe-8586-2564cb28fc62','2025-03-18 06:17:56','2025-03-18 06:17:56'),('0195a7ee-99ed-7084-88c3-30c15fbddbc7','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a7ee-99cc-70b5-9f6b-b2ac83350d8c','2025-03-18 06:26:26','2025-03-18 06:26:26'),('0195a7ef-cdee-73cd-a50f-832c3d0058ab','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a7ef-cdc4-72f7-acf8-ab829dc41f40','2025-03-18 06:27:45','2025-03-18 06:27:45'),('0195a7f1-d5ae-7156-900d-79f18d4e2fcc','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a7f1-d597-73a7-a65a-be4509fdb66b','2025-03-18 06:29:58','2025-03-18 06:29:58'),('0195a7f7-9910-7110-b1b1-220b5ad900c4','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a7f7-98f9-70c4-82f3-89fef34d7c53','2025-03-18 06:36:16','2025-03-18 06:36:16'),('0195a800-4ddd-7050-9d3e-0c888fa5bd2d','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a800-4dbb-70aa-9d92-f4aebf11eb77','2025-03-18 06:45:47','2025-03-18 06:45:47'),('0195a805-545a-72d8-87a8-d2167a7fd635','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a805-5434-7381-ae60-2aff1493b5a1','2025-03-18 06:51:16','2025-03-18 06:51:16'),('0195a807-7071-70bb-b7f8-c4eb52e14ac2','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a807-704f-7375-a72a-960e32cbba13','2025-03-18 06:53:34','2025-03-18 06:53:34'),('0195a830-2623-7265-a506-ad439e5dadd6','Valorant 475 VP',67502,'01958d2d-d444-7276-a774-f9c765a6b00c','0195a830-25fc-72fe-9580-875fceff942f','2025-03-18 07:38:02','2025-03-18 07:38:02');
/*!40000 ALTER TABLE `transaction_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_logs`
--

DROP TABLE IF EXISTS `transaction_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_logs` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `response` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gateway` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_logs`
--

LOCK TABLES `transaction_logs` WRITE;
/*!40000 ALTER TABLE `transaction_logs` DISABLE KEYS */;
INSERT INTO `transaction_logs` VALUES ('0195a250-1aa5-7255-aff2-bd8f0cdc193a','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"45b99ae2-b0e2-40b0-857c-a1df192e6112\",\"order_id\":\"KLIK-1742184913-miFhF\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"388083.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 11:15:13\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/45b99ae2-b0e2-40b0-857c-a1df192e6112\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250317041513C60XGVL3UIID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/45b99ae2-b0e2-40b0-857c-a1df192e6112\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/45b99ae2-b0e2-40b0-857c-a1df192e6112\\/cancel\"}],\"expiry_time\":\"2025-03-17 11:30:13\"}','{\"productId\":\"01958d2d-d441-7251-bffa-4503b888ee56\",\"productName\":\"Valorant 3.650 VP\",\"finalPrice\":388083,\"customerNo\":\"valorant#123\",\"contactPhone\":\"6281234567890\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a250-1a90-700b-b8f1-206e48082ade','2025-03-17 04:15:13','2025-03-17 04:15:13'),('0195a254-4665-7198-aa01-6becd31cbf37','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"ba4581dc-2ff1-405c-81d6-53c01949dc90\",\"order_id\":\"KLIK-1742185186-Z8AvK\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 11:19:46\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/ba4581dc-2ff1-405c-81d6-53c01949dc90\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250317041946DvsC74UlCxID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/ba4581dc-2ff1-405c-81d6-53c01949dc90\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/ba4581dc-2ff1-405c-81d6-53c01949dc90\\/cancel\"}],\"expiry_time\":\"2025-03-17 11:34:46\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"081234567890\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a254-4658-7362-b827-4b941e7a450a','2025-03-17 04:19:46','2025-03-17 04:19:46'),('0195a256-909a-70af-8e4a-4f9964f5900a','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"0a25230f-18bf-406b-bdcb-aca0053885ac\",\"order_id\":\"KLIK-1742185336-DOFoF\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"388083.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 11:22:17\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/0a25230f-18bf-406b-bdcb-aca0053885ac\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250317042217Nj4aS5GTtSID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/0a25230f-18bf-406b-bdcb-aca0053885ac\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/0a25230f-18bf-406b-bdcb-aca0053885ac\\/cancel\"}],\"expiry_time\":\"2025-03-17 15:37:17\"}','{\"productId\":\"01958d2d-d441-7251-bffa-4503b888ee56\",\"productName\":\"Valorant 3.650 VP\",\"finalPrice\":388083,\"customerNo\":\"valorant#123\",\"contactPhone\":\"213123123123\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a256-909a-70af-8e4a-4f99642f4e1e','2025-03-17 04:22:05','2025-03-17 04:22:05'),('0195a2fe-1596-7119-9187-105053c42f17','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"6604b848-9a45-4de5-b16b-7485237aab5f\",\"order_id\":\"KLIK-1742196315-WQrz5\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"105394.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 14:25:15\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/6604b848-9a45-4de5-b16b-7485237aab5f\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A1202503170725159QnH62TWCuID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/6604b848-9a45-4de5-b16b-7485237aab5f\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/6604b848-9a45-4de5-b16b-7485237aab5f\\/cancel\"}],\"expiry_time\":\"2025-03-17 14:40:15\"}','{\"productId\":\"01958d2d-d437-7055-b5a4-3a96909ca946\",\"productName\":\"Valorant 1.000 VP\",\"finalPrice\":105394,\"customerNo\":\"valorant#123\",\"contactPhone\":\"12312312311\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a2fe-1586-7314-a3df-2d668eb9b005','2025-03-17 07:25:15','2025-03-17 07:25:15'),('0195a300-891e-7359-8d05-f576ae1945c9','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"cd612f7e-bfaa-45fd-8642-f410ba177c33\",\"order_id\":\"KLIK-1742196475-HdLiO\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"388083.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 14:27:56\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/cd612f7e-bfaa-45fd-8642-f410ba177c33\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250317072756cQHmZoQBMPID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/cd612f7e-bfaa-45fd-8642-f410ba177c33\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/cd612f7e-bfaa-45fd-8642-f410ba177c33\\/cancel\"}],\"expiry_time\":\"2025-03-17 14:42:56\"}','{\"productId\":\"01958d2d-d441-7251-bffa-4503b888ee56\",\"productName\":\"Valorant 3.650 VP\",\"finalPrice\":388083,\"customerNo\":\"valorant#123\",\"contactPhone\":\"123123123123\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a300-8912-710d-96cf-e7876cb441f4','2025-03-17 07:27:56','2025-03-17 07:27:56'),('0195a304-5a48-7049-9685-05f480b7af5d','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"bc2c80df-cbd6-4e80-b7c0-2d6bbeda7510\",\"order_id\":\"KLIK-1742196725-omBej\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"105394.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 14:32:06\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/bc2c80df-cbd6-4e80-b7c0-2d6bbeda7510\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A1202503170732067z4Pgvrvw9ID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/bc2c80df-cbd6-4e80-b7c0-2d6bbeda7510\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/bc2c80df-cbd6-4e80-b7c0-2d6bbeda7510\\/cancel\"}],\"expiry_time\":\"2025-03-17 14:47:06\"}','{\"productId\":\"01958d2d-d437-7055-b5a4-3a96909ca946\",\"productName\":\"Valorant 1.000 VP\",\"finalPrice\":105394,\"customerNo\":\"valorant#123\",\"contactPhone\":\"081234567890\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a304-5a36-71b6-b957-8bae35c46c4f','2025-03-17 07:32:06','2025-03-17 07:32:06'),('0195a306-01ad-7062-8cf0-5621aad7bf2a','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"4eb52220-951a-4d55-a78b-c9da2371f8e2\",\"order_id\":\"KLIK-1742196834-fAjnf\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 14:33:54\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/4eb52220-951a-4d55-a78b-c9da2371f8e2\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250317073354R0qldeXWniID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/4eb52220-951a-4d55-a78b-c9da2371f8e2\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/4eb52220-951a-4d55-a78b-c9da2371f8e2\\/cancel\"}],\"expiry_time\":\"2025-03-17 14:48:54\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"62123123123\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a306-01a0-7193-952b-bf929ce29251','2025-03-17 07:33:54','2025-03-17 07:33:54'),('0195a307-1465-72fb-bdd6-8812d5bf1108','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"b8640d34-5012-4848-aa2f-4b317fed8910\",\"order_id\":\"KLIK-1742196904-9jDEa\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"105394.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 14:35:04\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/b8640d34-5012-4848-aa2f-4b317fed8910\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250317073504Qjy1j4ma0bID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/b8640d34-5012-4848-aa2f-4b317fed8910\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/b8640d34-5012-4848-aa2f-4b317fed8910\\/cancel\"}],\"expiry_time\":\"2025-03-17 14:50:04\"}','{\"productId\":\"01958d2d-d437-7055-b5a4-3a96909ca946\",\"productName\":\"Valorant 1.000 VP\",\"finalPrice\":105394,\"customerNo\":\"valorant#123\",\"contactPhone\":\"081234567890\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a307-1454-72b8-b756-cff9e509ebe1','2025-03-17 07:35:05','2025-03-17 07:35:05'),('0195a307-e64a-732c-b319-75615e99df5a','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"ab3ffb7b-00d1-4325-9b6c-7dfb53f03e92\",\"order_id\":\"KLIK-1742196958-ej1X9\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"105394.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-17 14:35:58\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/ab3ffb7b-00d1-4325-9b6c-7dfb53f03e92\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250317073558mvvbXfwStcID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/ab3ffb7b-00d1-4325-9b6c-7dfb53f03e92\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/ab3ffb7b-00d1-4325-9b6c-7dfb53f03e92\\/cancel\"}],\"expiry_time\":\"2025-03-17 14:50:58\"}','{\"productId\":\"01958d2d-d437-7055-b5a4-3a96909ca946\",\"productName\":\"Valorant 1.000 VP\",\"finalPrice\":105394,\"customerNo\":\"valorant#123\",\"contactPhone\":\"081234567890\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a307-e63d-72e1-ae36-00a0becce509','2025-03-17 07:35:58','2025-03-17 07:35:58'),('0195a7e6-cf14-724f-abbf-ce746445e2dc','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"e10ca48d-1f1f-49d6-8900-df2003695ca9\",\"order_id\":\"KLIK-1742278675-WbzFL\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 13:17:57\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/e10ca48d-1f1f-49d6-8900-df2003695ca9\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250318061757o4vwRvxg1VID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/e10ca48d-1f1f-49d6-8900-df2003695ca9\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/e10ca48d-1f1f-49d6-8900-df2003695ca9\\/cancel\"}],\"expiry_time\":\"2025-03-18 13:32:57\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"512312312\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a7e6-cf06-73fe-8586-2564cb28fc62','2025-03-18 06:17:56','2025-03-18 06:17:56'),('0195a7ee-99da-7094-952c-944a89691d9a','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"f2a8d4d6-e5eb-490a-9157-69ab39b9cbd6\",\"order_id\":\"KLIK-1742279186-EZdAT\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 13:26:29\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/f2a8d4d6-e5eb-490a-9157-69ab39b9cbd6\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A1202503180626294oh9EyyCutID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/f2a8d4d6-e5eb-490a-9157-69ab39b9cbd6\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/f2a8d4d6-e5eb-490a-9157-69ab39b9cbd6\\/cancel\"}],\"expiry_time\":\"2025-03-18 13:41:29\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"51231231\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a7ee-99cc-70b5-9f6b-b2ac83350d8c','2025-03-18 06:26:26','2025-03-18 06:26:26'),('0195a7ef-cdd3-703c-b274-be6aff2f5572','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"89745e23-d7e2-4b01-a150-b82ac3b46c91\",\"order_id\":\"KLIK-1742279265-faFGh\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 13:27:46\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/89745e23-d7e2-4b01-a150-b82ac3b46c91\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250318062746YyGskklOdUID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/89745e23-d7e2-4b01-a150-b82ac3b46c91\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/89745e23-d7e2-4b01-a150-b82ac3b46c91\\/cancel\"}],\"expiry_time\":\"2025-03-18 13:42:46\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"123123123\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a7ef-cdc4-72f7-acf8-ab829dc41f40','2025-03-18 06:27:45','2025-03-18 06:27:45'),('0195a7f1-d5a3-71d0-b3ca-c73b2a59e67d','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"53d59560-fb49-437b-b612-3476bac81e34\",\"order_id\":\"KLIK-1742279398-yfZea\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 13:29:59\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/53d59560-fb49-437b-b612-3476bac81e34\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A12025031806295958UlT31cTfID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/53d59560-fb49-437b-b612-3476bac81e34\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/53d59560-fb49-437b-b612-3476bac81e34\\/cancel\"}],\"expiry_time\":\"2025-03-18 13:44:59\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"123123123\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a7f1-d597-73a7-a65a-be4509fdb66b','2025-03-18 06:29:58','2025-03-18 06:29:58'),('0195a7f7-9906-7274-af04-56cf9bd81351','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"5554c31a-e989-412d-af27-c45ced13ab43\",\"order_id\":\"KLIK-1742279776-jK4Ar\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 13:36:18\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/5554c31a-e989-412d-af27-c45ced13ab43\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250318063618YFitASBNNcID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/5554c31a-e989-412d-af27-c45ced13ab43\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/5554c31a-e989-412d-af27-c45ced13ab43\\/cancel\"}],\"expiry_time\":\"2025-03-18 13:51:18\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"081234567890\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a7f7-98f9-70c4-82f3-89fef34d7c53','2025-03-18 06:36:16','2025-03-18 06:36:16'),('0195a800-4dcb-7079-8c17-817292c36077','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"1bd01fea-209d-40b2-8069-9ac4a1070905\",\"order_id\":\"KLIK-1742280346-Q36PA\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 13:45:47\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/1bd01fea-209d-40b2-8069-9ac4a1070905\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250318064547ASYrBj00SwID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/1bd01fea-209d-40b2-8069-9ac4a1070905\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/1bd01fea-209d-40b2-8069-9ac4a1070905\\/cancel\"}],\"expiry_time\":\"2025-03-18 14:00:47\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"1231231\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a800-4dbb-70aa-9d92-f4aebf11eb77','2025-03-18 06:45:47','2025-03-18 06:45:47'),('0195a805-544c-7134-8287-6bee077b0e82','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"f6b95062-3a2d-4eea-999b-b61fbc6cf213\",\"order_id\":\"KLIK-1742280675-mAYpj\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 13:51:16\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/f6b95062-3a2d-4eea-999b-b61fbc6cf213\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A1202503180651166JRBxZI6j3ID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/f6b95062-3a2d-4eea-999b-b61fbc6cf213\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/f6b95062-3a2d-4eea-999b-b61fbc6cf213\\/cancel\"}],\"expiry_time\":\"2025-03-18 14:06:16\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"081234567890\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a805-5434-7381-ae60-2aff1493b5a1','2025-03-18 06:51:16','2025-03-18 06:51:16'),('0195a807-705d-7247-8da1-ae05e5620369','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"b48c147c-670c-4fb5-b274-780905a968ae\",\"order_id\":\"KLIK-1742280814-6yWbk\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 13:53:34\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/b48c147c-670c-4fb5-b274-780905a968ae\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A120250318065334h5KaIKuVSFID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/b48c147c-670c-4fb5-b274-780905a968ae\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/b48c147c-670c-4fb5-b274-780905a968ae\\/cancel\"}],\"expiry_time\":\"2025-03-18 14:08:34\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"123123\",\"contactPhone\":\"12312312\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a807-704f-7375-a72a-960e32cbba13','2025-03-18 06:53:34','2025-03-18 06:53:34'),('0195a830-2613-7234-a1dc-225a09b9428c','{\"status_code\":\"201\",\"status_message\":\"Gopay transaction is created\",\"transaction_id\":\"c86bcaaa-117c-476b-8523-d10eb9e6108a\",\"order_id\":\"KLIK-1742283482-f131M\",\"merchant_id\":\"G896634969\",\"gross_amount\":\"67502.00\",\"currency\":\"IDR\",\"payment_type\":\"gopay\",\"transaction_time\":\"2025-03-18 14:38:02\",\"transaction_status\":\"pending\",\"fraud_status\":\"accept\",\"actions\":[{\"name\":\"generate-qr-code\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/gopay\\/c86bcaaa-117c-476b-8523-d10eb9e6108a\\/qr-code\"},{\"name\":\"deeplink-redirect\",\"method\":\"GET\",\"url\":\"https:\\/\\/simulator.sandbox.midtrans.com\\/v2\\/deeplink\\/detail?tref=A1202503180738023mi0BxWeT3ID\"},{\"name\":\"get-status\",\"method\":\"GET\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/c86bcaaa-117c-476b-8523-d10eb9e6108a\\/status\"},{\"name\":\"cancel\",\"method\":\"POST\",\"url\":\"https:\\/\\/api.sandbox.midtrans.com\\/v2\\/c86bcaaa-117c-476b-8523-d10eb9e6108a\\/cancel\"}],\"expiry_time\":\"2025-03-18 14:53:02\"}','{\"productId\":\"01958d2d-d444-7276-a774-f9c765a6b00c\",\"productName\":\"Valorant 475 VP\",\"finalPrice\":67502,\"customerNo\":\"valorant#123\",\"contactPhone\":\"6282234535007\",\"paymentMethod\":\"0195a23e-3dfe-7374-b060-6838cb96bf7f\"}','midtrans','0195a830-25fc-72fe-9580-875fceff942f','2025-03-18 07:38:02','2025-03-18 07:38:02');
/*!40000 ALTER TABLE `transaction_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_number` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_number` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_method_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES ('0195a250-1a90-700b-b8f1-206e48082ade','valorant#123','KLIK-1742184913-miFhF','6281234567890','pending','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 04:15:13','2025-03-17 04:15:13'),('0195a254-4658-7362-b827-4b941e7a450a','valorant#123','KLIK-1742185186-Z8AvK','081234567890','pending','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 04:19:46','2025-03-17 04:19:46'),('0195a256-909a-70af-8e4a-4f99642f4e1e','valorant#123','KLIK-1742185336-DOFoF','213123123123','expire','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 04:22:16','2025-03-17 07:42:34'),('0195a2fe-1586-7314-a3df-2d668eb9b005','valorant#123','KLIK-1742196315-WQrz5','12312312311','success','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 07:25:15','2025-03-17 07:27:32'),('0195a300-8912-710d-96cf-e7876cb441f4','valorant#123','KLIK-1742196475-HdLiO','123123123123','failed','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 07:27:56','2025-03-17 07:28:13'),('0195a304-5a36-71b6-b957-8bae35c46c4f','valorant#123','KLIK-1742196725-omBej','081234567890','cancel','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 07:32:06','2025-03-17 07:32:13'),('0195a306-01a0-7193-952b-bf929ce29251','valorant#123','KLIK-1742196834-fAjnf','62123123123','cancel','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 07:33:54','2025-03-17 07:33:58'),('0195a307-1454-72b8-b756-cff9e509ebe1','valorant#123','KLIK-1742196904-9jDEa','081234567890','cancel','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 07:35:05','2025-03-17 07:35:11'),('0195a307-e63d-72e1-ae36-00a0becce509','valorant#123','KLIK-1742196958-ej1X9','081234567890','cancel','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-17 07:35:58','2025-03-17 07:36:03'),('0195a7e6-cf06-73fe-8586-2564cb28fc62','valorant#123','KLIK-1742278675-WbzFL','512312312','success','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 06:17:56','2025-03-18 06:19:04'),('0195a7ee-99cc-70b5-9f6b-b2ac83350d8c','valorant#123','KLIK-1742279186-EZdAT','51231231','success','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 06:26:26','2025-03-18 06:26:56'),('0195a7ef-cdc4-72f7-acf8-ab829dc41f40','valorant#123','KLIK-1742279265-faFGh','123123123','success','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 06:27:45','2025-03-18 06:28:05'),('0195a7f1-d597-73a7-a65a-be4509fdb66b','valorant#123','KLIK-1742279398-yfZea','123123123','success','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 06:29:58','2025-03-18 06:30:17'),('0195a7f7-98f9-70c4-82f3-89fef34d7c53','valorant#123','KLIK-1742279776-jK4Ar','081234567890','success','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 06:36:16','2025-03-18 06:36:39'),('0195a800-4dbb-70aa-9d92-f4aebf11eb77','valorant#123','KLIK-1742280346-Q36PA','1231231','success','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 06:45:47','2025-03-18 06:47:05'),('0195a805-5434-7381-ae60-2aff1493b5a1','valorant#123','KLIK-1742280675-mAYpj','081234567890','success','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 06:51:16','2025-03-18 06:52:44'),('0195a807-704f-7375-a72a-960e32cbba13','123123','KLIK-1742280814-6yWbk','12312312','cancel','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 06:53:34','2025-03-18 06:53:41'),('0195a830-25fc-72fe-9580-875fceff942f','valorant#123','KLIK-1742283482-f131M','6282234535007','cancel','0195a23e-3dfe-7374-b060-6838cb96bf7f','2025-03-18 07:38:02','2025-03-18 07:39:11');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `google_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
-- Dumping routines for database 'klikbayar_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-18 20:24:10
