-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: VagasPda
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `RequisitosPS`
--

DROP TABLE IF EXISTS `RequisitosPS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RequisitosPS` (
  `ProcessoSeletivoID` int NOT NULL,
  `Requisitos` varchar(10000) DEFAULT NULL,
  `DataFormacaoMin` date DEFAULT NULL,
  `DataFormacaoMax` date DEFAULT NULL,
  PRIMARY KEY (`ProcessoSeletivoID`),
  CONSTRAINT `RequisitosPS_ibfk_1` FOREIGN KEY (`ProcessoSeletivoID`) REFERENCES `ProcessoSeletivo` (`EmpresaID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RequisitosPS`
--

LOCK TABLES `RequisitosPS` WRITE;
/*!40000 ALTER TABLE `RequisitosPS` DISABLE KEYS */;
INSERT INTO `RequisitosPS` VALUES (1,'50% serão vagas afirmativas para vulnerabilidade socioeconômica Para as vagas destinadas aos estudantes em vulnerabilidade socioeconômica é necessário ter estudado em escola pública ou particular com bolsa integral nos últimos 5 anos escolares.','2024-12-31',NULL),(3,'Não informado.','2024-03-01','2024-03-31'),(4,'Pacote Office a partir do Intermediário.','2024-06-01','2024-06-30'),(5,'Fluente em inglês.','2025-07-01','2025-07-31'),(6,'Pacote Office a partir do Intermediário.','2025-12-01','2025-12-31'),(7,'Conhecimento do Pacote Office.','2025-07-01','2025-07-31'),(9,'Inglês Intermediário.','2025-04-01','2025-04-30'),(10,'Conhecimento do Pacote Office.','2026-07-01','2028-07-01'),(11,'Não tem.',NULL,NULL),(12,'Conhecimento do Pacote Office.','2026-07-01','2028-07-01'),(13,'Não tem',NULL,NULL),(14,'A depender da vaga','2024-07-01','2025-07-01'),(15,'Não tem',NULL,NULL),(16,'Não tem','2024-12-01','2025-07-31'),(17,'Não tem',NULL,NULL);
/*!40000 ALTER TABLE `RequisitosPS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-01  9:39:22
