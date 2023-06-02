CREATE TABLE IF NOT EXISTS `users` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(128) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`fname` VARCHAR(128) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`lname` VARCHAR(128) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`salt` VARCHAR(32) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`password` VARCHAR(64) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `UNIQ_EMAIL` (`email`) USING BTREE
)
DEFAULT CHARSET=utf8
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB
;

INSERT IGNORE INTO `users` (`id`, `email`, `fname`, `lname`, `salt`, `password`) 
VALUES (1, 'admin@cautiontape.ca', 'CautionTape', '', '6f60623d26564c5c78070a994cea2104', '9bccd62062e3b544eb03be93ae22d2b32889e4e1ffe6fd35d6aefa15e7726206');
