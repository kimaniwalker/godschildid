CREATE TABLE `children` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parentid` int NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `eyes` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `height` varchar(45) NOT NULL,
  `weight` int NOT NULL,
  `hair` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `marks` varchar(250) DEFAULT NULL,
  `medical_conditions` varchar(250) DEFAULT NULL,
  `image` varchar(250) NOT NULL,
  `_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

