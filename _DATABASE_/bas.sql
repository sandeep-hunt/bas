-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freesqldatabase.com
-- Generation Time: Dec 01, 2024 at 05:27 PM
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

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`blog_id`, `blog_category`, `blog_title`, `blog_slug`, `blog_thumbnail`, `blog_image`, `blog_shortDesc`, `blog_content`, `blog_author`, `blog_page_title`, `blog_page_keywords`, `blog_page_desc`, `created_at`) VALUES
(5, 2, 'testing', 'testing', 'uploads/blogs/1731219353216.png', 'uploads/blogs/1731219353222.png', 'hello good mornig', '<p>hkdkhkgjldhkjldjkgj</p>', 'gurukumar', 'hello', 'zgjgjdfjkh', 'dfghmkhbfgksj', '2024-11-10 06:33:50'),
(6, 12, 'hello', 'hello', 'uploads/blogs/1731221371068.png', 'uploads/blogs/1731221371070.png', 'gjghjksgfkhj', '<p>gfhhl;\'kj;lkfgk;l\';lfhfg</p>', 'gurukumar', 'vsgjfhkhjs', 'svjkjm,hsk', 'sfhjgjgnkgj', '2024-11-10 07:07:27'),
(9, 2, 'Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', 'teaching-as-a-passion-not-just-a-profession-the-vision-of-bharata-arsheya-sansthan', 'uploads/blogs/1731476980780.jfif', 'uploads/blogs/1731476981043.jfif', 'At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance', '<p>At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance. When teaching is driven by passion, it creates an environment where education becomes transformative, not transactional.</p>\r\n<p>For the Sansthan, education, or Siksha, is not just about imparting knowledge&mdash;it is about **seva**, or selfless service. By treating teaching as a form of seva, the institution upholds the ancient tradition of learning as a sacred exchange, where both teacher and student engage in a process that nurtures the spirit. This service-oriented approach ensures that learners are drawn toward the teachings, not because they have to, but because they feel a genuine connection to the wisdom being offered.</p>\r\n<p><strong>Siksha as Seva: A Timeless Tradition</strong></p>\r\n<p>In the Indian Vedic tradition, education has always been viewed as **seva**&mdash;a selfless act of giving and receiving knowledge that is meant to uplift the individual and society. **Bharata Arsheya Sansthan** embraces this tradition by promoting the idea that education is not a sector to be commercialized but a sacred duty that brings out the best in both the teacher and the learner.</p>\r\n<p>This philosophy nurtures a space where learners feel deeply connected to their studies. They are not just participants in a system but seekers of higher wisdom, gravitating toward the Sansthan&rsquo;s unique approach. The result is a dynamic, engaged community of students who view education as an integral part of their spiritual and intellectual growth.</p>\r\n<h3><strong>The Power of Passion-Driven Teaching</strong></h3>\r\n<p>When teaching is fueled by passion, the learning experience becomes more engaging and impactful. The educators at Bharata Arsheya Sansthan, led by this philosophy, are not just imparting information; they are lighting the way for learners to explore their own potential. This enthusiasm fosters a love for learning, ensuring that students remain motivated and invested in their journey of self-discovery.</p>\r\n<p>Passionate teaching has the power to inspire and transform. When learners sense that their mentors are deeply committed to their growth, they are naturally inclined to engage fully, eager to absorb and apply the knowledge they receive. This ensures not only academic success but also personal and spiritual development.</p>\r\n<h3><strong>Conclusion: A Call to Learn Through Seva</strong></h3>\r\n<p>At Bharata Arsheya Sansthan, education is a mission driven by passion and rooted in the ethos of seva. This dedication to Siksha as Seva attracts learners who are not just seeking education but a meaningful connection with their inner self. It is this timeless approach that sets the Sansthan apart, creating a learning environment where students and teachers embark on a shared journey of growth, wisdom, and service.</p>', 'gurukumar', 'Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', 'Teaching, Not, Just, aProfession', 'Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', '2024-11-12 10:19:39'),
(11, 2, 'Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthanfgf', 'sandeep', 'uploads/blogs/1733073818764.png', 'uploads/blogs/1733073818800.png', 'In the sprawling slums on the edges of India’s bustling cities, millions of children are caught in an inescapable cycle of poverty. For many first-generation learners, the dream of education is far from reality. Amidst these challenging conditions, Sukary', '<p>xzvzxcvzxcv</p>', 'gurukumar', 'Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', 'Teaching, Not, Just, aProfession', 'Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', '2024-12-01 17:42:10');

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
(2, 'music', '2024-11-08 18:49:29'),
(12, 'dancing', '2024-11-09 10:27:19');

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
(1, '2024001', '', '0', '', 0, '', '', '', '', 0, '', 0, 0, '', '', 0, '2024-11-16 17:07:42'),
(13, '2024002', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'Karnataka ', 'Kolar', '#07, Madivala Majara Guttahalli Kyasamballi', 563121, 'male', 100, 1, 'pay_PJoXjRm4cslGYF', 'paid', 0, '0000-00-00 00:00:00'),
(14, '2024003', 'Harshad Waghmore', '07620081445', 'harshadwaghmore11508@gmail.com', 32, 'male', 'MAHARASHTRA', 'PUNE', 'D. P. Road, Aundh, Pune-411007', 411007, 'male', 25, 1, 'pay_PJxHlPAgNeJddZ', 'paid', 0, '2024-11-11 10:09:38'),
(15, '2024004', 'Harshad Waghmore', '07620081445', 'harshadwaghmore11508@gmail.com', 32, 'male', 'MAHARASHTRA', 'PUNE', 'D. P. Road, Aundh, Pune-411007', 411007, 'male', 25, 1, 'pay_PJxGeoqCIDqlER', 'paid', 0, '2024-11-11 10:09:39'),
(16, '2024005', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 23, 'male', 'karnataka', 'Bangarapet', 'DBRPtpectruJmapoFBNa8LxkcmEZQDqBqw', 563114, 'male', 100, 1, 'pay_PKSSnvnXeeYF1I', 'failed', 0, '2024-11-12 16:41:22'),
(17, '2024006', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 50, 0, '', '', 0, '2024-11-13 04:49:46'),
(18, '2024007', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 100, 0, 'pay_PKetFqhjG6yvE0', 'paid', 0, '2024-11-13 04:50:45'),
(19, '2024008', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'DBRPtpectruJmapoFBNa8LxkcmEZQDqBqw', 563114, 'male', 50, 1, 'pay_PLcPEmt2e9fVjt', 'paid', 0, '2024-11-15 15:03:43'),
(20, '2024009', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 23, 'male', 'karnataka', 'Bangarapet', 'T.agara village ', 563114, 'male', 50, 1, 'pay_PLcSckU6PQFSa1', 'paid', 0, '2024-11-15 15:06:53'),
(21, '2024010', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 100, 1, 'pay_PLcVIyqPbjpbCK', 'paid', 0, '2024-11-15 15:09:44'),
(22, '2024011', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'sdsa', 'T.agara village ', 563114, 'male', 50, 1, 'pay_PLcY45pw571uux', 'paid', 0, '2024-11-15 15:12:16'),
(23, '2024012', 'ProfitBot', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 100, 1, 'pay_PLcbJqdt4iE9TU', 'paid', 0, '2024-11-15 15:15:23'),
(24, '2024013', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 100, 1, 'pay_PLcjVdGPDtKILY', 'paid', 0, '2024-11-15 15:23:07'),
(25, '2024014', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 23, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 100, 1, 'pay_PLctp92mmqdKQE', 'paid', 0, '2024-11-15 15:32:59'),
(26, '2024015', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'T.agara village ', 563114, 'male', 100, 1, 'pay_PLcvoeWNp9l2fv', 'paid', 0, '2024-11-15 15:34:51'),
(27, '2024016', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 100, 1, 'pay_PLcxTATWGh204P', 'paid', 0, '2024-11-15 15:36:25'),
(28, '2024017', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 50, 1, 'pay_PLd2M1IILl8NSa', 'paid', 0, '2024-11-15 15:40:58'),
(29, '2024018', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 100, 1, 'pay_PLd4JOpNHPaXtM', 'paid', 0, '2024-11-15 15:42:55'),
(30, '2024019', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'T.agara village ', 563114, 'male', 50, 1, 'pay_PLd6QQpgTujlna', 'paid', 0, '2024-11-15 15:44:54'),
(31, '2024020', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 25, 1, 'pay_PLd9jYkPziV3fK', 'paid', 0, '2024-11-15 15:48:01'),
(32, '2024021', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 50, 1, 'pay_PLdJVoSv0IvwRz', 'paid', 0, '2024-11-15 15:57:17'),
(33, '2024022', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 50, 1, 'pay_PLdToy51lyh32V', 'paid', 0, '2024-11-15 16:07:02'),
(34, '2024023', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 25, 1, 'pay_PLdhghVHTiSbgt', 'paid', 0, '2024-11-15 16:20:11'),
(35, '2024024', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'Karnataka', 'Kolar', '#07, Madivala Majara Guttahalli Kyasamballi', 563121, 'male', 100, 1, 'pay_PLoT9oneojN1Yw', 'paid', 733583, '2024-11-16 02:51:58'),
(36, '2024025', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'T.agara village ', 563114, 'male', 50, 1, 'pay_PLwlVB07exFL2F', 'paid', 233570, '2024-11-16 10:58:59'),
(37, '2024026', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 1000, 1, 'pay_PM2VCHWz3J8P9Z', 'paid', 0, '2024-11-16 16:35:40'),
(38, '2024027', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 1000, 1, 'pay_PM2ZV8Qnvg7Dhv', 'paid', 0, '2024-11-16 16:39:47'),
(39, '2024028', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 1000, 1, 'pay_PM2iAnOrntVFFL', 'paid', 579775, '2024-11-16 16:48:00'),
(40, '2024029', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 100, 1, 'pay_PM3H0xaLVQfoGw', 'paid', 0, '2024-11-16 17:20:59'),
(41, '2024030', 'Babasaheb', '918830461764', 'vivekpatildesign@gmail.com', 25, 'male', 'Maharashtra', 'Shirol', 'a/p-Jambhali, tal-Shirol,Dist-Kolhapur', 416121, 'male', 100, 1, 'pay_PMfHjQf33SzFr0', 'paid', 377404, '2024-11-18 06:31:31'),
(42, '2024031', 'sandeep', '918861630673', 'connectwithworld61@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 1001, 1, 'pay_PN4A6YEiFWSkQ2', 'paid', 544079, '2024-11-19 06:51:48'),
(43, '2024032', 'Harshad Waghmore', '917620081445', 'harshadwaghmore11508@gmail.com', 4, 'male', 'MAHARASHTRA', 'PUNE', 'D. P. Road, Aundh, Pune-411007', 411007, 'male', 1001, 1, '', '', 0, '2024-11-24 06:52:10'),
(44, '2024033', 'sandeep', '918861630673', 'connectwithworld61@gmail.com', 24, 'male', 'Karnataka', 'Kolar', '#07, Madivala Majara Guttahalli Kyasamballi', 563121, 'Jyoti?a Gurukul', 1001, 2, 'pay_PPqiFNdph4tskl', 'paid', 522359, '2024-11-26 07:39:36'),
(45, '2024034', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'Karnataka', 'Kolar', '#07, Madivala Majara Guttahalli Kyasamballi', 563121, 'Dhrupad Gurukul', 1501, 0, 'pay_PPz9qdH9fbvfU7', 'paid', 0, '2024-11-26 15:55:33'),
(46, '2024035', 'fghfh', '916346663453', 'connectwithworld61@gmail.com', 23, 'male', 'gfhf', 'fghf', 'sdfsd s sd fs', 34235, 'Dhrupad Gurukul', 1501, 2, 'pay_PQF8msLsynui1z', 'paid', 549814, '2024-11-27 07:33:43'),
(47, '2024036', 'Vivek Babasaheb Patil', '918830461764', 'vivekpatildesign@gmail.com', 30, 'male', 'Maharashtra', 'Shirol', 'a/p-Jambhali, tal-Shirol,Dist-Kolhapur', 416121, 'Dhrupad Gurukul', 1001, 1, '', '', 0, '2024-11-29 04:40:00'),
(48, '2024037', 'Babasaheb', '918830461764', 'vivekpatildesign@gmail.com', 25, 'male', 'Maharashtra', 'Shirol', 'a/p-Jambhali, tal-Shirol,Dist-Kolhapur', 416121, 'Dhrupad Gurukul', 1001, 1, 'pay_PQzTOpyhHEdpf9', 'failed', 0, '2024-11-29 04:53:03'),
(49, '2024038', 'sandeep', '918861630673', 'sandeep.n062000@gmail.com', 24, 'male', 'karnataka', 'dasarahalli', 'T.agara village ', 563114, 'Dhrupad Gurukul', 1501, 0, 'pay_PRPNo5QFXGnXu7', 'paid', 0, '2024-11-30 06:13:56'),
(50, '2024039', 'sandeep', '918861630673', 'connectwithworld61@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'T.agara village ', 563114, 'Dhrupad Gurukul', 1001, 0, 'pay_PRTIg359KiCsU6', 'paid', 0, '2024-11-30 10:03:51');

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
(32, 'demods fghjk', 'demods-fghjk', 'uploads/events/1732958714668-image.png', 'uploads/events/1732958714696-rhumbnail.png', 2000, '2025-01-07', '15:00:00', 'Delhi', 0, '2024-11-30 12:12:59'),
(33, 'Creating dynamic routes', 'creating-dynamic-routes', 'uploads/events/1732959398358-image.png', 'uploads/events/1732959406121-rhumbnail.png', 2579, '2024-12-18', '13:00:00', 'Delhi', 1, '2024-12-01 09:43:42'),
(38, 'testing123', 'testing123', 'uploads/events/1733060769216-pan.jpeg', 'uploads/events/1733060769216-pan.jpeg', 2000, '2024-12-20', '10:30:00', 'bangalore', 1, '2024-12-01 14:04:39'),
(39, 'dummy', 'dummy', 'uploads/events/1733065932116-78.jpeg', 'uploads/events/1733065932118-78.jpeg', 100, '2024-12-25', '14:00:00', 'bangalore', 1, '2024-12-01 15:30:43'),
(41, 'vignesh', 'vignesh', 'uploads/events/1733069245984-78.jpeg', 'uploads/events/1733069245986-78.jpeg', 2000, '2024-12-31', '11:30:00', 'bangalore', 0, '2024-12-01 16:33:38'),
(42, 'Creating dynamic routes', 'creating-dynamic-route', 'uploads/events/1733072036685-image.png', 'uploads/events/1733072037309-rhumbnail.png', 2579, '2024-12-13', '11:25:00', 'Delhi', 1, '2024-12-01 17:31:25');

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
(32, 3, '', 'sandeep', '2024-10-02', 'connectwithworld61@gmail.com', '+918861630673', 'male', 'xds', 'Bangarapet', 'xsx', 563114, 'pay_PAXhLeYxiUdpHk', 'paid', '2024-10-18 15:00:56', '', '0000-00-00 00:00:00'),
(33, 3, '24001', 'ProfitBot', '2024-10-11', 'connectwithworld61@gmail.com', '88616171821', 'male', 'xds', 'Mulbagal', 'sdsds', 563114, 'pay_PEnCtQLy9A3qBU', 'failed', '2024-11-07 10:04:02', '', '0000-00-00 00:00:00'),
(34, 17, '24002', 'sandeep', '2024-11-06', 'sandeep.n062000@gmail.com', '8861630673', 'male', 'karnataka', 'kolar', 'sda', 563114, 'pay_PINKgZxotJkhfW', 'paid', '2024-11-07 10:04:32', '', '0000-00-00 00:00:00'),
(70, 32, '24003', 'sandeep', '2024-11-14', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Kolar', 'dfs', 563114, 'pay_PRTNp3gSyCtB1V', 'paid', '2024-11-30 10:09:10', '', '0000-00-00 00:00:00'),
(71, 32, '24004', 'sandeep', '2024-10-31', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Mulbagal', 'jgjgfh', 563114, 'pay_PRTVSSRXAnKstL', 'refunded', '2024-11-30 12:41:30', 'rfnd_PRVyz9m3Q3DoRg', '0000-00-00 00:00:00'),
(72, 32, '24005', 'ProfitBot', '2024-11-19', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'dasarahalli', 'cdscsf', 563114, 'pay_PRThLEftZRstY9', 'refunded', '2024-11-30 12:16:15', 'rfnd_PRVYJF5Q2u1Gvd', '0000-00-00 00:00:00'),
(73, 33, '24006', 'sandeep', '2024-11-01', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Bangarapet', 'csdf', 563114, 'pay_PRXjIfIguj3jiv', 'paid', '2024-11-30 14:24:17', '', '0000-00-00 00:00:00'),
(74, 33, '24007', 'sandeep', '2024-11-30', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Bangarapet', 'sadasda', 563114, 'pay_PRmUuIuRD5lyqf', 'paid', '2024-12-01 04:51:04', '', '0000-00-00 00:00:00'),
(75, 33, '24008', 'sandeep', '2024-11-27', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Mulbagal', 'fsdfs', 563114, 'pay_PRmWlxfAULgslp', 'paid', '2024-12-01 04:52:49', '', '0000-00-00 00:00:00'),
(76, 33, '24009', 'sandeep', '2024-11-28', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Bangarapet', 'fddfdf', 563114, 'pay_PRmbJN1TPP8FcC', 'paid', '2024-12-01 04:57:08', '', '0000-00-00 00:00:00'),
(77, 38, '24010', 'vignesh', '2024-12-01', 'vignesh.santhapeta@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar colony', 517126, 'pay_PRwOjxgLpNstl7', 'paid', '2024-12-01 14:32:13', '', '0000-00-00 00:00:00'),
(78, 38, '24011', 'vigneshsai', '1999-02-05', 'vignesh.santhapeta+1@gmail.com', '6304418350', 'male', 'sai', 'penumuru', 'sai nagar colony', 517126, 'pay_PRwUbuxPYZpYMQ', 'paid', '2024-12-01 14:37:47', '', '0000-00-00 00:00:00'),
(79, 38, '24012', 'vignesh', '1999-02-05', 'vignesh.santhapeta+2@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar colony', 517126, 'pay_PRwggTwFU52yG5', 'paid', '2024-12-01 14:49:29', '', '0000-00-00 00:00:00'),
(80, 38, '24013', 'kumar', '1999-02-05', 'vignesh.santhapeta+3@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar colony', 517126, 'pay_PRwn4DP8QOFcKH', 'paid', '2024-12-01 14:55:14', '', '0000-00-00 00:00:00'),
(81, 38, '24014', 'vignesh', '1999-02-05', 'vignesh.santhapeta+143@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar colony', 517126, 'pay_PRx6X7EuiufNFP', 'paid', '2024-12-01 15:13:39', '', '0000-00-00 00:00:00'),
(82, 38, '24015', 'kumar swany', '2009-02-05', 'vignesh.santhapeta+23@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar colony', 517126, 'pay_PRxAOgLLB4ZB5E', 'paid', '2024-12-01 15:17:18', '', '0000-00-00 00:00:00'),
(83, 38, '24016', 'janu', '1999-02-05', 'vignesh.santhapeta+18678@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar colony', 517126, 'pay_PRxDvb15tsJZHS', 'paid', '2024-12-01 15:20:45', '', '0000-00-00 00:00:00'),
(84, 39, '24017', 'vignesh', '1999-02-05', 'vignesh.santhapeta+sai1@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar colony', 517126, 'pay_PRxQDAdnrEZGvb', 'paid', '2024-12-01 15:32:16', '', '0000-00-00 00:00:00'),
(85, 38, '24018', 'vignesh', '2020-02-05', 'vignesh.santhapeta+19809@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar', 517126, 'pay_PRyIuWT1h4knrj', 'paid', '2024-12-01 16:24:04', '', '0000-00-00 00:00:00'),
(86, 41, '24019', 'vigneshsai', '2024-12-01', 'vignesh.santhapeta+123@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar colony', 517126, 'pay_PRyQaR9BCr7lpS', 'paid', '2024-12-01 16:31:19', '', '0000-00-00 00:00:00'),
(87, 33, '24020', 'sandeep', '2024-11-01', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Kolar', 'dfsfs', 563114, 'pay_PRz951S0wSb8N4', 'paid', '2024-12-01 17:13:27', '', '0000-00-00 00:00:00'),
(88, 42, '24021', 'sandeep', '2024-11-27', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Kolar', 'ssfasdf', 563114, 'pay_PRzbJINaOcSlHf', 'paid', '2024-12-01 17:40:10', '', '0000-00-00 00:00:00');

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
(12, 'Interview with Indian Express', 'uploads/gallery/1729005702688-gallery2.png'),
(13, 'FTII Workshop (2014-15)', 'uploads/gallery/1729005948744-gallery3.png'),
(14, 'Dhrupad Centre for Peace Studies at Gujrat Vidyapeeth (2020)', 'uploads/gallery/1729006053903-gallery4.png'),
(15, 'Semeiotics of Dhrupad @ Indus University, Ahmedabad (2021)', 'uploads/gallery/1729007118008-gallery5.png'),
(19, 'FTII Workshop (2014-15)', 'uploads/gallery/1729005948744-gallery3.png'),
(20, 'Dhrupad Centre for Peace Studies at Gujrat Vidyapeeth (2020)', 'uploads/gallery/1729006053903-gallery4.png');

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

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`member_id`, `name`, `email`, `mobile`, `age`, `gender`, `member_type`, `state`, `city`, `address`, `pincode`, `member_created_at`, `aadhaarFilePath`, `panFilePath`, `resumeFilePath`, `status`, `reject_reason`) VALUES
(10, 'vignesh sai', 'vignesh.santhapeta+1@gmail.com', '6304418350', 24, 'Male', 'Volunteer', 'ap', 'penumuru', 'hfgfgh', '879779', '2024-11-28 15:47:09', 'uploads\\members\\1732821041005-dummy.pdf', 'uploads\\members\\1732807722516-pan.jpeg', 'uploads\\members\\1732807722517-dummy.pdf', 1, ''),
(12, 'sai kumar', 'vignesh.santhapeta+2@gmail.com', '97880709890980', 24, 'Male', 'Member', 'jho', 'hkjkljghkjl', 'ghjkjlhkll', '69876868', '2024-11-28 16:43:21', 'uploads\\members\\1732815817506-aadhar.jpeg', 'uploads\\members\\1732815817506-pan.jpeg', 'uploads\\members\\1732815773650-dummy.pdf', 1, ''),
(13, 'hh hhhh', 'vignesh.santhapeta+3@gmail.com', '798789797789', 67, 'Male', 'Volunteer', 'ap', 'penumuru', 'fghjkhj', '5675757', '2024-11-28 19:53:53', 'uploads\\members\\1732822526766-aadhar.jpeg', 'uploads\\members\\1732822526767-pan.jpeg', 'uploads\\members\\1732822526767-dummy.pdf', 1, ''),
(14, 'ghjkl gvhjbknl', 'vignesh.santhapeta+4@gmail.com', '56789655789', 67, 'Male', 'Volunteer', 'ghj', 'ghjkljhgg', 'gfhjkljkhgf', '768687', '2024-11-28 19:55:37', 'uploads\\members\\1732822630763-aadhar.jpeg', 'uploads\\members\\1732822630763-pan.jpeg', 'uploads\\members\\1732822630763-dummy.pdf', 2, 'image is not clear'),
(15, 'vignesh sai', 'vignesh.santhapeta+678@gmail.com', '7657567655', 23, 'Male', 'Volunteer', 'ap', 'jfghjhkhg', 'hjgfghjkl', '517126', '2024-11-29 15:11:04', 'uploads\\members\\1732892008764-pan.jpeg', 'uploads\\members\\1732892008765-dummy.pdf', 'uploads\\members\\1732892008766-dummy.pdf', 1, '');

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
(4, 'monkeys', 'sda', 'sandeep.n062000@gmail.com', '8861630673', 'fgdfgd', 2, '2024-11-12 10:12:18'),
(5, 'monkeys', 'sda', 'sandeep.2000@gmail.com', '8861630673', 'dss', 2, '2024-11-13 04:41:39'),
(6, 'uttom', 'roy', 'uttom_roy1968@yahoo.co.in', '9426614015', 'hi', 0, '2024-11-30 14:17:30');

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
(7, 'Subarto Roy', 'uploads/profile/1732778619774-s200_dr._subroto_mihir_alias_suvratadev_sharmana_vandyopadhyay.roy 2.png', 'gurukumar', 'demo@demo.com', '$2a$10$e1bs9.QfCEpjmDkvdwYwa.hlvcfsoX7.ME3fKHY/g/aqFKeTkOM0W', '2024-10-03 06:05:14');

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
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
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
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT for table `event_booking`
--
ALTER TABLE `event_booking`
  MODIFY `event_booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
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
