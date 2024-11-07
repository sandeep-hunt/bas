-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freesqldatabase.com
-- Generation Time: Nov 07, 2024 at 12:09 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql12743240`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `blog_category` int(11) NOT NULL,
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
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`blog_id`, `blog_category`, `blog_title`, `blog_slug`, `blog_thumbnail`, `blog_image`, `blog_shortDesc`, `blog_content`, `blog_author`, `blog_page_title`, `blog_page_keywords`, `blog_page_desc`, `created_at`) VALUES
(22, 1, 'as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', 'as-a-passion-not-just-a-profession-the-vision-of-bharata-arsheya-sansthan', 'uploads/blogs/1728924445831.png', 'uploads/blogs/1728924445862.png', 'In the sprawling slums on the edges of India’s bustling cities, millions of children are caught in an inescapable cycle of poverty. For many first-generation learners, the dream of education is far from reality. Amidst these challenging conditions, Sukary', '<h2>Where does it come from?</h2>\r\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</p>', 'demo', 'Not Just a Profession', 'Teaching, Not, Just, aProfession', ' Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction...', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `category_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_created_at`) VALUES
(1, 'Music', '2024-11-07 09:47:36');

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
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `event_slug`, `event_image`, `event_thumbnail`, `event_price`, `event_date`, `event_time`, `event_location`, `event_status`, `created_date`) VALUES
(3, 'demods', 'demods', 'uploads\\events\\1729094453969-3.PNG', 'uploads\\events\\1729094453969-4.PNG', 2000, '2024-10-12', '21:22:00', 'debe', 0, '2024-10-17 15:57:45'),
(18, 'demods', 'demods-1', 'uploads\\events\\1729094453969-3.PNG', 'uploads\\events\\1729094453969-4.PNG', 5000, '2024-10-15', '21:22:00', 'debe', 0, '2024-10-18 09:49:46'),
(20, 'demods', 'demods-1', 'uploads\\events\\1729094453969-3.PNG', 'uploads\\events\\1729094453969-4.PNG', 5000, '2024-10-15', '21:22:00', 'debe', 0, '2024-10-18 09:49:46'),
(21, 'Creating dynamic routes', 'creating-dynamic-routes', 'uploads/events/1729183992533-fendor w arch 1.PNG', 'uploads/events/1729183992534-motor.png', 2000, '2024-10-19', '13:30:00', 'Delhi', 0, '2024-10-17 16:53:18');

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
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_booking`
--

INSERT INTO `event_booking` (`event_booking_id`, `event_id`, `event_booking_number`, `event_booking_name`, `event_booking_dob`, `event_booking_email`, `event_booking_contact`, `event_booking_gender`, `event_booking_state`, `event_booking_city`, `event_booking_address`, `event_booking_pincode`, `payment_id`, `payment_status`, `created_date`) VALUES
(32, 3, '', 'sandeep', '2024-10-02', 'connectwithworld61@gmail.com', '+918861630673', 'male', 'xds', 'Bangarapet', 'xsx', 563114, 'pay_PAXhLeYxiUdpHk', 'paid', '2024-10-18 15:00:56'),
(33, 3, '24001', 'ProfitBot', '2024-10-11', 'connectwithworld61@gmail.com', '88616171821', 'male', 'xds', 'Mulbagal', 'sdsds', 563114, 'pay_PEnCtQLy9A3qBU', 'failed', '2024-11-07 10:04:02'),
(34, 17, '24002', 'sandeep', '2024-11-06', 'sandeep.n062000@gmail.com', '8861630673', 'male', 'karnataka', 'kolar', 'sda', 563114, 'pay_PINKgZxotJkhfW', 'paid', '2024-11-07 10:04:32');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(11) NOT NULL,
  `gallery_image_name` varchar(255) NOT NULL,
  `gallery_imagePath` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `gallery_image_name`, `gallery_imagePath`) VALUES
(11, 'SAARC Fellowship Colombo', 'uploads/gallery/1729005516257-gallery1.png'),
(12, 'Interview with Indian Express', 'uploads/gallery/1729005702688-gallery2.png'),
(13, 'FTII Workshop (2014-15)', 'uploads/gallery/1729005948744-gallery3.png'),
(14, 'Dhrupad Centre for Peace Studies at Gujrat Vidyapeeth (2020)', 'uploads/gallery/1729006053903-gallery4.png'),
(15, 'Semiotics of Dhrupad @Indus University, Ahmedabad (2021)', 'uploads/gallery/1729007118008-gallery5.png'),
(19, 'FTII Workshop (2014-15)', 'uploads/gallery/1729005948744-gallery3.png'),
(20, 'Dhrupad Centre for Peace Studies at Gujrat Vidyapeeth (2020)', 'uploads/gallery/1729006053903-gallery4.png'),
(21, 'Semiotics of Dhrupad @Indus University, Ahmedabad (2021)', 'uploads/gallery/1729007118008-gallery5.png');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `member_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` text NOT NULL,
  `member_type` text NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `pincode` varchar(8) NOT NULL,
  `member_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`member_id`, `name`, `email`, `mobile`, `age`, `gender`, `member_type`, `state`, `city`, `address`, `pincode`, `member_created_at`) VALUES
(1, 'sandeep', 'connectwithworld61@gmail.com', '918861630673', 24, 'male', 'Volunteer', 'karnataka', 'Bangarapet', 'T.agara village ', '563114', '2024-11-07 10:39:49');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL,
  `message_firstname` text NOT NULL,
  `message_lastname` text NOT NULL,
  `message_email` varchar(255) NOT NULL,
  `message_mobile` varchar(15) NOT NULL,
  `message` varchar(555) NOT NULL,
  `message_status` tinyint(4) NOT NULL,
  `message_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_id`, `message_firstname`, `message_lastname`, `message_email`, `message_mobile`, `message`, `message_status`, `message_created_date`) VALUES
(1, 'monkeys', 'sda', 'connectwithworld61@gmail.com', '8861630673', 'dsasd', 0, '2024-11-07 09:57:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `user_profile` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `user_profile`, `username`, `email`, `password`, `created_at`) VALUES
(7, 'Subarto Roy', '', 'demo', 'demo@demo.com', '$2a$10$YLIoQ3LFyOb18MSngdTqt.3wHRGyCtgjEyRQmMuzQXd.6fCbBr/Hy', '2024-10-03 06:05:14');

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
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

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
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
