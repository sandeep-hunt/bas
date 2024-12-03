-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freesqldatabase.com
-- Generation Time: Dec 03, 2024 at 09:31 AM
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
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `category_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `donation`
--

CREATE TABLE `donation` (
  `donation_id` int(11) NOT NULL,
  `donate_receipt_no` varchar(50) NOT NULL,
  `doner_name` text NOT NULL,
  `doner_mobile` varchar(15) NOT NULL,
  `doner_email` varchar(255) NOT NULL,
  `doner_age` int(3) NOT NULL,
  `doner_gender` text NOT NULL,
  `doner_state` text NOT NULL,
  `doner_city` text NOT NULL,
  `doner_address` varchar(255) NOT NULL,
  `doner_pincode` int(7) NOT NULL,
  `donation_type` text NOT NULL,
  `donation_amount` int(10) NOT NULL,
  `donation_freq` int(1) NOT NULL,
  `donation_payment_id` varchar(255) NOT NULL,
  `donation_payment_status` text NOT NULL,
  `otp_verification` int(6) NOT NULL,
  `donation_created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donation`
--

INSERT INTO `donation` (`donation_id`, `donate_receipt_no`, `doner_name`, `doner_mobile`, `doner_email`, `doner_age`, `doner_gender`, `doner_state`, `doner_city`, `doner_address`, `doner_pincode`, `donation_type`, `donation_amount`, `donation_freq`, `donation_payment_id`, `donation_payment_status`, `otp_verification`, `donation_created_date`) VALUES
(1, '2024001', 'dummy', '0', '', 0, '', '', '', '', 0, '', 0, 0, '', '', 0, '2024-11-16 17:07:42');

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
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `payment_refund_id` varchar(255) NOT NULL,
  `payment_refund_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_booking`
--

INSERT INTO `event_booking` (`event_booking_id`, `event_id`, `event_booking_number`, `event_booking_name`, `event_booking_dob`, `event_booking_email`, `event_booking_contact`, `event_booking_gender`, `event_booking_state`, `event_booking_city`, `event_booking_address`, `event_booking_pincode`, `payment_id`, `payment_status`, `created_date`, `payment_refund_id`, `payment_refund_date`) VALUES
(1, 0, '24001', 'dummy', '2024-10-11', 'dummy@dummy.com', '88616171821', 'male', 'xds', 'Mulbagal', 'sdsds', 563114, 'pay_PEnCtQLy9A3qBU', 'failed', '2024-12-03 09:42:17', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(11) NOT NULL,
  `gallery_image_name` varchar(255) NOT NULL,
  `gallery_imagePath` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `member_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `aadhaarFilePath` varchar(255) DEFAULT NULL,
  `panFilePath` varchar(255) DEFAULT NULL,
  `resumeFilePath` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL,
  `reject_reason` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `settings_id` int(11) NOT NULL,
  `site_title` varchar(255) NOT NULL,
  `site_keywords` varchar(255) NOT NULL,
  `site_description` varchar(255) NOT NULL,
  `site_copyright` varchar(100) NOT NULL,
  `site_logo` varchar(255) NOT NULL,
  `site_secondary_logo` varchar(255) NOT NULL,
  `site_favicon` varchar(255) NOT NULL,
  `contact_address` varchar(255) NOT NULL,
  `contact_mobile` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `facebook_url` varchar(255) NOT NULL,
  `twitter_url` varchar(255) NOT NULL,
  `insta_url` varchar(255) NOT NULL,
  `linkedin_url` varchar(255) NOT NULL,
  `youtube_url` varchar(255) NOT NULL,
  `call_to_action` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`settings_id`, `site_title`, `site_keywords`, `site_description`, `site_copyright`, `site_logo`, `site_secondary_logo`, `site_favicon`, `contact_address`, `contact_mobile`, `contact_email`, `facebook_url`, `twitter_url`, `insta_url`, `linkedin_url`, `youtube_url`, `call_to_action`) VALUES
(1, 'BHASA', 'website, awesome, example', 'This is an awesome website...', 'Copyright © 2024 bhasa@drashta.co.in', 'uploads/settings/1731767758723-logo.svg', 'uploads/settings/1731600716125-logo_light.svg', 'uploads/settings/1731941146939-logo.svg', '6 Purushottam Apartment, 18 Shilavihar Colony, Erandwane Pune - 411 038 Maharashtra ', '+919823256524', 'bhasa@drashta.co.in', 'https://facebook.com/...', 'https://twitter.com/...', 'https://instagram.com/...', 'https://linkedin.com/...', 'https://youtube.com/...', 'https://wa.me/919823256524');

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
(1, 'Subarto Roy', 'uploads/profile/1732778619774-s200_dr._subroto_mihir_alias_suvratadev_sharmana_vandyopadhyay.roy 2.png', 'subartoroy', 'demo@demo.com', '$2a$10$e1bs9.QfCEpjmDkvdwYwa.hlvcfsoX7.ME3fKHY/g/aqFKeTkOM0W', '2024-10-03 06:05:14');

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
-- Indexes for table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`donation_id`);

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
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`settings_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `donation`
--
ALTER TABLE `donation`
  MODIFY `donation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `event_booking`
--
ALTER TABLE `event_booking`
  MODIFY `event_booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `settings_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
