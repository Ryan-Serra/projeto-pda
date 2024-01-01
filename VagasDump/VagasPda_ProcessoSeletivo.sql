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
-- Table structure for table `ProcessoSeletivo`
--

DROP TABLE IF EXISTS `ProcessoSeletivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProcessoSeletivo` (
  `EmpresaID` int NOT NULL,
  `InicioInscricoes` date DEFAULT NULL,
  `FinalInscricoes` date DEFAULT NULL,
  `CursosAceitos` text,
  `AreaEstagio` varchar(255) DEFAULT NULL,
  `Estados` varchar(1000) DEFAULT NULL,
  `Etapas` text,
  `DuracaoProcesso` int DEFAULT NULL,
  `Diferenciais` text,
  `Salario` float DEFAULT NULL,
  `LinkInscricao` text,
  `AprendaComQuemfez` varchar(255) DEFAULT NULL,
  `InformacoesExtras` varchar(10000) DEFAULT NULL,
  `ModeloTrabalho` varchar(255) DEFAULT NULL,
  `ModeloContrato` varchar(255) DEFAULT NULL,
  `ModeloCurso` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`EmpresaID`),
  CONSTRAINT `ProcessoSeletivo_ibfk_1` FOREIGN KEY (`EmpresaID`) REFERENCES `Empresa` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProcessoSeletivo`
--

LOCK TABLES `ProcessoSeletivo` WRITE;
/*!40000 ALTER TABLE `ProcessoSeletivo` DISABLE KEYS */;
INSERT INTO `ProcessoSeletivo` VALUES (1,'2023-11-14','2023-12-12','Todos os cursos','Tecnologia, Atendimento, Produtos e Design, Investimentos, Financeiro, Marketing, Serviços Financeiros, Riscos e Compliance, Comercial','SP e remoto','1. Inscrições - 14/11 a 12/12 2. Triagem e testes - 21/11 a 18/12 3. Dinâmicas em Grupo - 11/01/24 a 24/01/24 4. Entrevistas Finais - Janeiro 5. Divulgação dos Resultados - Janeiro e Fevereiro 6. Início do PagTalents - Março/2024',108,'Não tem',3012,'https://pagtalents.com/','Não tem','Não tem','Remoto e Híbrido','Estágio','Bacharelado ou Tecnólogo'),(2,'2023-11-06','2023-12-12','Todos os cursos exceto cursos da área da saúde e estética','Não informado','SP','1. Inscrições - 13/11 a 12/12 \n	2. Teste de Fit Cultural - Novembro e Dezembro \n	3. Teste Mindmatch - Dezembro e Janeiro \n	4. Dinâmica - Janeiro \n	5. Entrevistas Finais - Janeiro \n	6. Notícias de Aprovação - Fevereiro \n	7. Início - Fevereiro',80,'Conhecimento em inglês será um diferencial',1650,'https://estagiorodobens.com.br/','Não tem ','','Presencial e Híbrido','Estágio','Bacharelado, Licenciatura ou Tecnólogo'),(3,'2023-12-01','2024-01-07','','Não informado','SP, PR e PE','',NULL,'',2000,'https://portal.across.jobs/Programa/WebCartazDivulgacao?pIdPrograma=SaintGobain___Produtos_para_Construcao-251','','','Estágio','Presencial','Bacharelado, Licenciatura ou Tecnólogo'),(4,'2023-02-01','2023-12-31',NULL,NULL,'SP, BA, RS, RJ','1- Inscrição 2- Prova online (inglês - lógica - fit cultural) 3- Entrevista com a consultoria 4- Painel com gestores 5- Entrevista com gestor da vaga 6- Contratação',NULL,'Inglês Desejável (não mandatório na maioria das vagas)',NULL,'Link da inscrição SAINT-GOBAIN','Aprenda com quem fez SAINT-GOBAIN',NULL,'Presencial','Estágio','Bacharelado, Licenciatura ou Tecnólogo'),(5,'2023-10-01','2024-01-01','Administração, Negócios, Economia, Contabilidade, Engenharia ou cursos relacionados','Corporativo','SP',NULL,NULL,NULL,NULL,'Link da inscrição Bank of America','Aprenda com quem fez Bank of America',NULL,'Presencial','Estágio','Bacharelado'),(6,'2023-12-01','2024-01-03','Todos os cursos (bacharelado e licenciatura) Para modalidade Tecnólogo são aceitos cursos de Tecnologia da Informação e Recursos Humanos','Não informado','SP','1. Inscrição; 2. Repense - Game desenvolvido e aplicado por uma plataforma online visando compreender o seu raciocínio lógico e alguns vieses comportamentais; 3. Decode - Game desenvolvido e aplicado em uma plataforma online, onde o objetivo é entender o trabalho em equipe e colaboração com os demais participantes do processo; 4. Dinâmica de Grupo; 5. Entrevista com Gestores; 6. Admissional.',NULL,'Não informado',30,'Link da inscrição B3','Aprenda com quem fez B3',NULL,'Presencial','Estágio','Bacharelado, Licenciatura ou Tecnólogo'),(7,'2023-11-10','2024-01-03','Administração de Empresas, Análise de Sistemas de Informação, Ciência da Computação, ...','Controle de Qualidade, Manutenção, Administrativo, Comercial, Compra de Gado, ...','TO, SP, MT, GO, RO','1. Inscrição 2- Testes Online 3- Dinâmica Online 4- Entrevista Final 5- Processo admissional',NULL,NULL,NULL,'','','','Presencial e Híbrido','Estágio','Bacharelado, Licenciatura ou Tecnólogo'),(9,'2023-12-01','2024-01-08','Engenharia de Software, Ciência da Computação, Sistemas de Informação, Engenharia da Computação, Design Gráfico, Design, Direito, Economia, Engenharia de Automação, Engenharia de Produção, Jornalismo, Marketing, Publicidade e propaganda, e áreas relacionadas','','MG','1. Inscrições abertas - Dezembro/2023 a Janeiro/2024 2. Realização de entrevistas e dinâmicas - Fevereiro/2024 3. Término do Processo Seletivo - Março/2024 4. Início dos #GoTechs no Inter - Abril/2024 5. Participação no programa exclusivo de desenvolvimento: o AceleraTech - Abril a Setembro/2024 6. Hackathon - Novembro/2024 7. Avaliação de carreira. Nesse momento você já pode ser contratado - Janeiro/2025    Encerramento do programa - Março/2025',115,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Bacharelado, Licenciatura ou Tecnólogo'),(10,'2023-11-10','2024-02-29','Administração de Empresas, Análise de Sistemas de Informação, Ciência da Computação, Ciências Contábeis, Ciências Econômicas, Ciências e Humanidades, Comércio Exterior, Comunicação (Publicidade e Propaganda, Relações públicas e Jornalismo), Direito, Engenharias (todas), Marketing, Pedagogia, Psicologia, Redes de Computadores e Tecnologia da Informação','MG e SP','Inscrição Prova online (Raciocínio Lógico e Game) Fit Cultural Entrevista por competência - online Entrevista com o gestor - online ou presencial (na respectiva localidade) Contratação prevista para abril/2024',NULL,NULL,NULL,NULL,'Não informado',NULL,NULL,NULL,NULL,NULL),(11,NULL,NULL,'Bacharelado, Licenciatura ou Tecnólogo','Todos os cursos','SP','1. Inscrições + testes online; 2. Dinâmicas/entrevistas com gestores; 3. Processo de admissão.',NULL,NULL,NULL,'https://vemproitau.gupy.io/jobs/2819260','https://programa-como-conseguir-um-estagio-fod.memberkit.com.br/33182-aprenda-com-quem-fez/1456823-itau-conecte-a-cultura-da-empresa-com-a-sua-historia',NULL,NULL,NULL,NULL),(12,NULL,NULL,'Depende da área aberta','SP','Todo mês tem novas vagas',NULL,NULL,NULL,NULL,NULL,'Não informado',NULL,NULL,NULL,'Bacharelado'),(13,'2023-07-19',NULL,'Bacharelado, Licenciatura, Tecnólogo ou Técnico','Depende da área','SP, PE, BA, MT, GO','1. Inscrições  2. Avaliação Cia de Talentos  3. Avaliação BASF',NULL,NULL,NULL,'https://www.ciadetalentos.com.br/estagiobasf/',NULL,NULL,NULL,NULL,NULL),(14,NULL,NULL,'Bacharelado, Licenciatura ou Tecnólogo','Todos os cursos','SP',NULL,NULL,NULL,2026,'https://gruposmartfit.99jobs.com/vagas/318455-programa-de-estagio-grupo-smart-fit-corporativo?utm_source=estagiario.senior&utm_medium=estagiario.senior&utm_campaign=programa-de-estagio-grupo-smart-fit-corporativo&utm_id=001',NULL,NULL,NULL,NULL,NULL),(15,NULL,NULL,'Bacharelado','Administração, ciências contábeis ou economia','Todo Brasil',NULL,NULL,NULL,400,'https://99jobs.com/itau-unibanco/jobs/225280-estagio-comercial-rede-de-agencias-vagas-em-todo-o-brasil?utm_source=@estagiario.senior&utm_medium=@estagiario.senior-publi-gratuita&utm_campaign=estagio-comercial-rede-de-agencias-vagas-em-todo-o-brasil&utm_id=001','https://plataforma.estagiariosenior.com.br/33182-aprenda-com-quem-fez/1456823-itau-conecte-a-cultura-da-empresa-com-a-sua-historia',NULL,NULL,NULL,NULL),(16,NULL,NULL,'Bacharelado ou Tecnólogo','Não Informado','BA, CE, DF, ES, GO, PA, PE, PR, RS, SP, MG, MS, MT, RJ','1 - Inscrições + Testes  2 - Entrevista coletiva 3 - Dinâmicas online 4 - Entrevista final 5 - Admissão',NULL,NULL,1416,'https://99jobs.com/supergasbras/jobs/317363-banco-super-talentos-estagio-supergasbras-2023',NULL,NULL,NULL,NULL,NULL),(17,'2023-12-01','2023-12-30','Administração, Economia, Engenharia, Marketing, Disciplinas de humanas, Ciências Contábeis, Finanças, Matemática, Sistemas de Informação, Ciência da Computação, Segurança da Informação e correlatas','Serviços Financeiros','SP','',NULL,'',2086,'https://estagioelo.gupy.io/','','','','','');
/*!40000 ALTER TABLE `ProcessoSeletivo` ENABLE KEYS */;
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
