-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2020 at 06:10 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `investax`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `category` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `name`, `category`) VALUES
(1, '1.png', 'personal'),
(2, '2.png', 'personal'),
(3, '3.png', 'personal'),
(4, '4.png', 'personal'),
(5, '5.png', 'personal'),
(6, '6.png', 'personal'),
(7, '7.png', 'personal'),
(8, '8.png', 'personal'),
(9, '9.png', 'personal'),
(10, '10.png', 'personal'),
(11, '11.png', 'personal'),
(12, '12.png', 'personal'),
(13, '13.png', 'personal'),
(14, '14.png', 'personal'),
(15, '15.png', 'personal'),
(26, 'background-2277_1280.webp', 'food'),
(27, 'coffee-2608864_1280.jpg', 'food'),
(28, 'cook-366875_1280.jpg', 'food'),
(29, 'cupcakes-690040_1280.jpg', 'food'),
(30, 'eat-2834549_1280.jpg', 'food'),
(31, 'fruit-2367029_1280.jpg', 'food'),
(32, 'ice-cream-cone-1274894_1280.jpg', 'food'),
(33, 'raspberries-1426859_1280.jpg', 'food'),
(34, 'away-3024773_1280.webp', 'nature'),
(35, 'bird-1045954_1280.webp', 'nature'),
(36, 'butterfly-1127666_1280.webp', 'nature'),
(37, 'butterfly-2049567_1280.webp', 'nature'),
(38, 'dove-2516641_1280.jpg', 'nature'),
(39, 'elephant-1822636_1280.webp', 'nature'),
(40, 'forest-3119826_1280.webp', 'nature'),
(41, 'fox-1883658_1280.webp', 'nature'),
(42, 'spring-bird-2295436_1280.webp', 'nature'),
(43, 'adult-1867665_1280.webp', 'other'),
(44, 'apocalypse-2459465_1280.jpg', 'other'),
(45, 'blonde-1867768_1280.jpg', 'other'),
(46, 'city-89197_1280.jpg', 'other'),
(47, 'clouds-2517653_1280.webp', 'other'),
(48, 'fantasy-3313964_1280.jpg', 'other'),
(49, 'japan-2014619_1280.jpg', 'other'),
(50, 'taxi-cab-381233_1280.jpg', 'other'),
(51, 'town-2430571_1280.jpg', 'other'),
(52, 'airport-2373727_1280.webp', 'travel'),
(53, 'beach-1236581_1280.webp', 'travel'),
(54, 'golden-gate-bridge-388917_1280.jpg', 'travel'),
(55, 'go-pro-1478810_1280.jpg', 'travel'),
(56, 'holiday-2880261_1280.jpg', 'travel'),
(57, 'people-2591874_1280.jpg', 'travel'),
(58, 'photographer-407068_1280.webp', 'travel');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
