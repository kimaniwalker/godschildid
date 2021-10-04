CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `hash` varchar(250) NOT NULL,
  `salt` varchar(45) NOT NULL,
  `secret` varchar(250) DEFAULT NULL,
  `_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `customer_id` varchar(250) DEFAULT NULL,
  `auth` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;