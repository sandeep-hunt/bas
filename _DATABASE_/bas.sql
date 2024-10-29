-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2024 at 09:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bas`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `article_id` int(11) NOT NULL,
  `article_title` varchar(255) DEFAULT NULL,
  `article_slug` varchar(255) NOT NULL,
  `article_thumbnail` varchar(255) NOT NULL,
  `article_image` varchar(255) DEFAULT NULL,
  `article_shortDesc` varchar(255) DEFAULT NULL,
  `article_content` varchar(9999) DEFAULT NULL,
  `article_attachment` varchar(999) NOT NULL,
  `article_author` varchar(255) DEFAULT NULL,
  `article_page_title` varchar(255) NOT NULL,
  `article_page_keywords` varchar(255) NOT NULL,
  `article_page_desc` varchar(255) NOT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`article_id`, `article_title`, `article_slug`, `article_thumbnail`, `article_image`, `article_shortDesc`, `article_content`, `article_attachment`, `article_author`, `article_page_title`, `article_page_keywords`, `article_page_desc`, `created_at`) VALUES
(9, 'demo title article', 'demo-title-article', 'uploads/articles/5.PNG', 'uploads/articles/4.PNG', 'deafsafsefwesfcsdf ijdfsihfi hfdi hiogdsj fsodif ivniodsfhgeduiofghdsroih', '<h2>What is Lorem Ipsum?</h2>\r\n<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', '[\"/uploads/pdfs/A4 - 2.pdf\",\"/uploads/pdfs/Mhw.pdf\"]', 'demo', 'eduiofghdsroihdeafs', 'Wheeling T', 'eduiofghdsroihdeafs', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `blog_id` int(11) NOT NULL,
  `blog_title` varchar(255) DEFAULT NULL,
  `blog_slug` varchar(255) NOT NULL,
  `blog_thumbnail` varchar(255) NOT NULL,
  `blog_image` varchar(255) DEFAULT NULL,
  `blog_shortDesc` varchar(255) DEFAULT NULL,
  `blog_content` varchar(9999) DEFAULT NULL,
  `blog_author` varchar(255) DEFAULT NULL,
  `blog_page_title` varchar(255) NOT NULL,
  `blog_page_keywords` varchar(255) NOT NULL,
  `blog_page_desc` varchar(255) NOT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`blog_id`, `blog_title`, `blog_slug`, `blog_thumbnail`, `blog_image`, `blog_shortDesc`, `blog_content`, `blog_author`, `blog_page_title`, `blog_page_keywords`, `blog_page_desc`, `created_at`) VALUES
(22, 'as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', 'as-a-passion-not-just-a-profession-the-vision-of-bharata-arsheya-sansthan', 'uploads/blogs/1728924445831.png', 'uploads/blogs/1728924445862.png', 'In the sprawling slums on the edges of India’s bustling cities, millions of children are caught in an inescapable cycle of poverty. For many first-generation learners, the dream of education is far from reality. Amidst these challenging conditions, Sukary', '<h2>Where does it come from?</h2>\r\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p>', 'demo', 'Not Just a Profession', 'Teaching, Not, Just, aProfession', ' Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction...', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `event_slug` varchar(255) NOT NULL,
  `event_image` varchar(255) NOT NULL,
  `event_thumbnail` varchar(225) NOT NULL,
  `event_price` int(5) NOT NULL,
  `event_date` date NOT NULL,
  `event_time` time NOT NULL,
  `event_location` varchar(255) NOT NULL,
  `event_status` tinyint(4) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `event_slug`, `event_image`, `event_thumbnail`, `event_price`, `event_date`, `event_time`, `event_location`, `event_status`, `created_date`) VALUES
(3, 'demods', 'demods', 'uploads\\events\\1729094453969-3.PNG', 'uploads\\events\\1729094453969-4.PNG', 2000, '2024-10-12', '21:22:00', 'debe', 0, '2024-10-17 15:57:45'),
(4, 'demods', 'demods-1', 'uploads\\events\\1729094453969-3.PNG', 'uploads\\events\\1729094453969-4.PNG', 2000, '2024-10-15', '21:22:00', 'debe', 0, '2024-10-17 14:23:57'),
(17, 'Creating dynamic routes', 'creating-dynamic-routes', 'uploads/events/1729183992533-fendor w arch 1.PNG', 'uploads/events/1729183992534-motor.png', 2000, '2024-10-19', '13:30:00', 'Delhi', 0, '2024-10-17 16:53:18');

-- --------------------------------------------------------

--
-- Table structure for table `event_booking`
--

CREATE TABLE `event_booking` (
  `event_booking_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `event_booking_number` varchar(255) NOT NULL,
  `event_booking_name` text NOT NULL,
  `event_booking_dob` date NOT NULL,
  `event_booking_email` varchar(255) NOT NULL,
  `event_booking_contact` varchar(15) NOT NULL,
  `event_booking_gender` text NOT NULL,
  `event_booking_state` varchar(255) NOT NULL,
  `event_booking_city` varchar(255) NOT NULL,
  `event_booking_address` varchar(255) NOT NULL,
  `event_booking_pincode` int(11) NOT NULL,
  `payment_id` varchar(225) NOT NULL,
  `payment_status` varchar(50) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event_booking`
--

INSERT INTO `event_booking` (`event_booking_id`, `event_id`, `event_booking_number`, `event_booking_name`, `event_booking_dob`, `event_booking_email`, `event_booking_contact`, `event_booking_gender`, `event_booking_state`, `event_booking_city`, `event_booking_address`, `event_booking_pincode`, `payment_id`, `payment_status`, `created_date`) VALUES
(1, 3, '', 'sandeep', '2024-10-19', 'connectwithworld61@gmail.com', '2343', 'male', 'xds', 'Mulbagal', 'sfsdfsdfs', 563114, '', '', '2024-10-18 06:36:29'),
(5, 3, '', 'sandeep', '2024-10-14', 'connectwithworld61@gmail.com', '2343', 'male', 'xds', 'mulbagal', 'ssds', 563114, 'pay_PAPo0fTouQGzUV', 'paid', '2024-10-18 07:17:40');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(11) NOT NULL,
  `gallery_image_name` varchar(255) NOT NULL,
  `gallery_imagePath` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `gallery_image_name`, `gallery_imagePath`) VALUES
(11, 'SAARC Fellowship Colombo', 'uploads/gallery/1729005516257-gallery1.png'),
(12, 'Interview with Indian Express', 'uploads/gallery/1729005702688-gallery2.png'),
(13, 'FTII Workshop (2014-15)', 'uploads/gallery/1729005948744-gallery3.png'),
(14, 'Dhrupad Centre for Peace Studies at Gujrat Vidyapeeth (2020)', 'uploads/gallery/1729006053903-gallery4.png'),
(15, 'Semiotics of Dhrupad @Indus University, Ahmedabad (2021)', 'uploads/gallery/1729007118008-gallery5.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(7, 'demo', 'demo@demo.com', '$2a$10$YLIoQ3LFyOb18MSngdTqt.3wHRGyCtgjEyRQmMuzQXd.6fCbBr/Hy', '2024-10-03 06:05:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`article_id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `event_booking`
--
ALTER TABLE `event_booking`
  ADD PRIMARY KEY (`event_booking_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `event_booking`
--
ALTER TABLE `event_booking`
  MODIFY `event_booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
