-- Adminer 4.8.1 MySQL 5.7.39 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `overlord`;
CREATE DATABASE `overlord` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `overlord`;

DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `day` enum('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday') NOT NULL,
  `start_time` int(11) NOT NULL,
  `end_time` int(11) NOT NULL,
  `max_students` int(11) NOT NULL,
  `program_id` int(11) NOT NULL,
  PRIMARY KEY (`class_id`),
  KEY `program_id` (`program_id`),
  CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`program_id`) REFERENCES `programs` (`program_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `classes` (`class_id`, `day`, `start_time`, `end_time`, `max_students`, `program_id`) VALUES
(1,	'Saturday',	90,	130,	50,	3),
(2,	'Saturday',	135,	155,	12,	1),
(3,	'Saturday',	155,	175,	12,	1),
(4,	'Sunday',	90,	110,	12,	1),
(5,	'Sunday',	110,	130,	12,	1),
(6,	'Sunday',	135,	155,	12,	1),
(7,	'Sunday',	155,	175,	12,	1),
(8,	'Saturday',	135,	155,	14,	2),
(9,	'Saturday',	155,	175,	14,	2),
(10,	'Saturday',	180,	200,	14,	2),
(11,	'Sunday',	90,	110,	14,	2),
(12,	'Sunday',	110,	130,	14,	2),
(13,	'Sunday',	135,	155,	14,	2),
(14,	'Tuesday',	160,	180,	10,	2),
(15,	'Tuesday',	180,	200,	10,	2),
(16,	'Friday',	185,	205,	10,	2),
(17,	'Sunday',	155,	175,	14,	2);

DROP TABLE IF EXISTS `programs`;
CREATE TABLE `programs` (
  `program_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`program_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `programs` (`program_id`, `name`, `description`) VALUES
(1,	'VIQC Competition',	'Main VEX IQ program for students from grade 2 to grade 8.'),
(2,	'VIQC Stem Labs',	'For non-competitive students to prepare them for the competition teams.'),
(3,	'VRC',	'Hight school vex robotics competition.');

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(16) NOT NULL,
  `lname` varchar(16) NOT NULL,
  `class_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `grade` int(11) NOT NULL,
  PRIMARY KEY (`student_id`),
  KEY `class_id` (`class_id`),
  KEY `team_id` (`team_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`class_id`),
  CONSTRAINT `students_ibfk_2` FOREIGN KEY (`team_id`) REFERENCES `teams` (`team_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `students` (`student_id`, `fname`, `lname`, `class_id`, `team_id`, `grade`) VALUES
(1,	'Justin',	'Tan',	1,	2,	9),
(2,	'Kensen',	'Wang',	1,	2,	9),
(3,	'Briallyn',	'Quast',	1,	2,	9),
(4,	'Kenny',	'Shi',	1,	3,	9),
(5,	'Dylan',	'Wang',	1,	3,	10),
(6,	'Damian',	'Wong',	1,	1,	10),
(7,	'Beshoy',	'Hanna',	1,	1,	11),
(8,	'Alicia',	'Liu',	1,	1,	10),
(9,	'Frankin',	'Liu',	2,	4,	4),
(10,	'Ian',	'Yin',	2,	4,	3),
(11,	'Jonathan',	'Xu',	2,	5,	8),
(12,	'Jacob',	'Gao',	2,	5,	7),
(13,	'Harvey',	'Li',	3,	6,	5),
(14,	'Dora',	'Wang',	3,	9,	5),
(15,	'Aaron',	'Li',	4,	11,	8),
(16,	'Christina',	'Chu',	4,	12,	8),
(17,	'Aiden',	'Sun',	5,	13,	3),
(18,	'Jovan',	'Wang',	5,	14,	8),
(19,	'Kasper',	'Bai',	6,	15,	6),
(20,	'Coco',	'Zhao',	6,	15,	6),
(21,	'Steve',	'Jiang',	7,	18,	5),
(22,	'Liam',	'Xue',	13,	20,	3),
(24,	'Jason',	'Liang',	10,	29,	2);

DROP TABLE IF EXISTS `teams`;
CREATE TABLE `teams` (
  `team_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `program_id` int(11) NOT NULL,
  PRIMARY KEY (`team_id`),
  KEY `program_id` (`program_id`),
  CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`program_id`) REFERENCES `programs` (`program_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `teams` (`team_id`, `name`, `program_id`) VALUES
(1,	'839a',	3),
(2,	'839z',	3),
(3,	'832a',	3),
(4,	'8390Z',	1),
(5,	'839A',	1),
(6,	'8290W',	1),
(7,	'8390D',	1),
(8,	'8390B',	1),
(9,	'8390X',	1),
(10,	'8390A',	1),
(11,	'8390C',	1),
(12,	'8390G',	1),
(13,	'8390T',	1),
(14,	'8390E',	1),
(15,	'839Z',	1),
(16,	'839Y',	1),
(17,	'8390U',	1),
(18,	'8390Y',	1),
(19,	'8390V',	1),
(20,	'83900E',	2),
(21,	'83900F',	2),
(22,	'83900K',	2),
(23,	'83900G',	2),
(24,	'83900H',	2),
(25,	'83900B',	2),
(26,	'83900A',	2),
(27,	'83900J',	2),
(28,	'No Team',	1),
(29,	'No Team',	2),
(30,	'No Team',	3);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(128) NOT NULL DEFAULT '',
  `fname` varchar(128) NOT NULL DEFAULT '',
  `lname` varchar(128) NOT NULL DEFAULT '',
  `salt` varchar(32) NOT NULL DEFAULT '',
  `password` varchar(64) NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_type` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `UNIQ_EMAIL` (`email`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `email`, `fname`, `lname`, `salt`, `password`, `created_at`, `updated_at`, `user_type`) VALUES
(1,	'admin@cautiontape.ca',	'CautionTape',	'',	'6f60623d26564c5c78070a994cea2104',	'9bccd62062e3b544eb03be93ae22d2b32889e4e1ffe6fd35d6aefa15e7726206',	'2022-11-09 13:31:23',	'2022-11-09 13:31:23',	0);

-- 2022-11-09 14:54:38
