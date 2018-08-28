-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-08-2018 a las 23:27:32
-- Versión del servidor: 5.7.19
-- Versión de PHP: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blogdb`
--
CREATE DATABASE IF NOT EXISTS `blogdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `blogdb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `idcomment` int(11) NOT NULL AUTO_INCREMENT,
  `comment_info` varchar(82) NOT NULL,
  `post_idpost` int(11) NOT NULL,
  `post_users_idusers` int(11) NOT NULL,
  PRIMARY KEY (`idcomment`,`post_idpost`,`post_users_idusers`),
  KEY `fk_comment_post1_idx` (`post_idpost`,`post_users_idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comment`
--

INSERT INTO `comment` (`idcomment`, `comment_info`, `post_idpost`, `post_users_idusers`) VALUES
(1, 'asd', 2, 1),
(2, 'hola wey', 2, 1),
(3, 'hola wey', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `idpost` int(11) NOT NULL AUTO_INCREMENT,
  `post_title` varchar(45) NOT NULL,
  `post_info` varchar(370) NOT NULL,
  `users_idusers` int(11) NOT NULL,
  `post_date` datetime NOT NULL,
  PRIMARY KEY (`idpost`,`users_idusers`),
  KEY `fk_post_users_idx` (`users_idusers`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`idpost`, `post_title`, `post_info`, `users_idusers`, `post_date`) VALUES
(2, 'a', 'a', 1, '0000-00-00 00:00:00'),
(3, 'La vaca lola', 'tiene cabeza y tiene cola', 1, '0000-00-00 00:00:00'),
(4, 'pimpon es un muñeco', 'w', 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `idusers` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `user_lastname` varchar(45) DEFAULT NULL,
  `user_mail` varchar(45) NOT NULL,
  `user_password` varchar(45) NOT NULL,
  `user_pseudo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE KEY `user_mail_UNIQUE` (`user_mail`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idusers`, `user_name`, `user_lastname`, `user_mail`, `user_password`, `user_pseudo`) VALUES
(1, 'Paul', 'Salazar', 'psalazar@devsu.com', 'qwerty', 'paul'),
(7, 'Paul2', 'Salazar2', 'psalazar@devsu.com2', 'qwerty', 'paul'),
(9, 'qwe', 'asd', 'as@d', 'qwsw', 'rrffr'),
(11, 'qwerty', 'qwerty', 'abc@qwerty', '123', 'qwerty'),
(12, 'qwe', 'asd', 'anthoro.53@gmail.com', 'q', 'q'),
(13, 'qwe', 'wew', 'jvillacis@devsu.com', 'q', 'q'),
(15, 'juan', 'wew', 'qww@de', 'qwe', 'q'),
(16, 'qwe', 'wew', 'as@ds', 'qwe', 'qwe'),
(17, 'qwerty', 'wew', 'jvillacis@devsu.comm', 'm', 'm'),
(18, 'qqwww', 'qwwq', 'anthoro.53@gmail.comww', 'a', 'q'),
(19, 'qwerty', 'qwwq', 'anthoro.53@gmail.commm', 'q', 'q'),
(21, 'asd', 'asd2', 'asd', 'ytqwv', 'usa'),
(22, 'asd', 'asd2', 'asdd', 'ytqwv', 'usa'),
(23, 'asd', 'asd2', 'assdd', 'ytqwv', 'usa'),
(24, 'asd', 'asd2', 'asssdd', 'ytqwv', 'usa'),
(25, 'asd', 'asd2', 'asssadd', 'ytqwv', 'usa'),
(26, 'asd', 'asd2', 'assssadd', 'ytqwv', 'usa'),
(27, 'asd', 'asd2', 'asssssadd', 'ytqwv', 'usa'),
(28, 'asd', 'asd2', 'assssgsadd', 'ytqwv', 'usa'),
(29, 'asd', 'asd2', 'asssssgsadd', 'ytqwv', 'usa'),
(32, 'asd', 'asd2', 'assswessgsadd', 'ytqwv', 'usa'),
(33, 'asd', 'asd2', 'assswessegsadd', 'ytqwv', 'usa'),
(34, 'asd', 'asd2', 'assswsessegsadd', 'ytqwv', 'usa'),
(35, 'asd', 'asd2', 'assswsesssegsadd', 'ytqwv', 'usa'),
(36, 'asd', 'asd2', 'assswsessssegsadd', 'ytqwv', 'usa'),
(38, 'hola', 'sjo', 'asd@a', 'asd', 'asd');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_post1` FOREIGN KEY (`post_idpost`,`post_users_idusers`) REFERENCES `post` (`idpost`, `users_idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `fk_post_users` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
