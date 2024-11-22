-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freesqldatabase.com
-- Generation Time: Nov 22, 2024 at 07:03 AM
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
(2, 'FOCALISATION IN VEDIC & MODERN DAY  DHRUPAD VOCAL MUSIC STORIES', 'focalisation-in-vedic--modern-day--dhrupad-vocal-music-stories', 'uploads/articles/Mustang History.jfif', 'uploads/articles/Mustang History.jfif', 'Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story. The narrative strategies surrounding Indian heritage over the past thousand years, however, require revisiting as em', '<p>xscxcscsfdc</p>', '[\"uploads/articles/files/TDC - ERW 40 X 40 X 1.6 MM TUBE - DECCAN (1).pdf\"]', 'gurukumar', 'FOCALISATION IN VEDIC & MODERN DAY  DHRUPAD VOCAL MUSIC STORIES', 'eduiofghdsroihdeafs', 'Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story. The narrative strategies surrounding Indian heritage over the past thousand years, however, require revisiting as em', NULL);

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
(10, 2, 'Demo Title of the blog', 'demo-title-of-the-blog', 'uploads/blogs/1731938308052.png', 'uploads/blogs/1731938308053.png', 'In the sprawling slums on the edges of India’s bustling cities, millions of children are caught in an inescapable cycle of poverty. For many first-generation learners, the dream of education is far from reality. Amidst these challenging conditions, Sukary', '<p>At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance. When teaching is driven by passion, it creates an environment where education becomes transformative, not transactional.</p>\r\n<p>At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance. When teaching is driven by passion, it creates an environment where education becomes transformative, not transactional.</p>\r\n<p>At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance. When teaching is driven by passion, it creates an environment where education becomes transformative, not transactional.</p>\r\n<p><a title=\"Webiste\" href=\"https://demo.com/\" target=\"_blank\" rel=\"noopener\">Website</a></p>', 'gurukumar', 'Not Just a Profession', 'Teaching, Not, Just, aProfession', ' Gujarat Introduction: Malhar Gupte, a Class XII student student living in Mehsana Gujarat Introduction...', '2024-11-18 14:13:07');

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
(3, 'playinging', '2024-11-08 18:54:52'),
(5, 'Events', '2024-11-08 19:02:21'),
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
(42, '2024031', 'sandeep', '918861630673', 'connectwithworld61@gmail.com', 24, 'male', 'karnataka', 'Bangarapet', 'kiadb, dasarahoshalli', 563114, 'male', 1001, 1, 'pay_PN4A6YEiFWSkQ2', 'paid', 544079, '2024-11-19 06:51:48');

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
(24, 'Dhrupad Darpan: Live in Berlin!', 'dhrupad-darpan-live-in-berlin', 'uploads/events/1731667730550-image.png', 'uploads/events/1731667731011-rhumbnail.png', 3000, '2024-11-14', '13:00:00', 'Berlin', 0, '2024-11-15 17:26:38'),
(27, 'dummy', 'dummy', 'uploads/events/1731753404048-image.png', 'uploads/events/1731753404526-rhumbnail.png', 2000, '2024-11-16', '17:53:00', 'bangalore', 0, '2024-11-16 10:56:27'),
(28, 'meeting123', 'meeting123', 'uploads/events/1731857572160-download2.jpeg', 'uploads/events/1731857572161-download2.jpeg', 100, '2024-11-17', '02:02:00', 'bangalore', 1, '2024-11-17 16:15:37'),
(29, 'Dhrupad Darpan: Live', 'dhrupad-darpan-live', 'uploads/events/1731938671412-image.png', 'uploads/events/1731938672927-rhumbnail.png', 2579, '2024-12-02', '08:34:00', 'Delhi', 1, '2024-11-22 02:22:59');

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
(34, 17, '24002', 'sandeep', '2024-11-06', 'sandeep.n062000@gmail.com', '8861630673', 'male', 'karnataka', 'kolar', 'sda', 563114, 'pay_PINKgZxotJkhfW', 'paid', '2024-11-07 10:04:32'),
(36, 0, '123', 'Test Booking Event edite check', '0000-00-00', 'test@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 18:41:05'),
(37, 13, '123', 'Test Booking Event', '0000-00-00', 'test@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 18:50:45'),
(38, 13, '123', 'Test Booking Event', '0000-00-00', 'vignesh.santhapeta@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 19:02:13'),
(39, 13, '123', 'Test Booking Event', '0000-00-00', 'kirithivramki7586@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 19:04:16'),
(40, 13, '123', 'Test Booking Event', '0000-00-00', 'kirithivramki7586@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 19:05:46'),
(41, 13, '123', 'Test Booking Event', '0000-00-00', 'kirithivramki7586@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 19:07:13'),
(42, 13, '123', 'Test Booking Event', '0000-00-00', 'kirithivramki7586@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 19:19:50'),
(43, 13, '123', 'Test Booking Event', '0000-00-00', 'vishvabulls@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 19:23:43'),
(44, 13, '123', 'Test Booking Event', '0000-00-00', 'vignesh.santhapeta@gmail.com', '9876543210', 'Male', 'Karnataka', 'Bangalore', 'Test124', 12131421, 'testIdpayment', 'Paid', '2024-11-08 19:25:09'),
(45, 3, '124', 'vignesh', '2004-02-05', 'vignesh.santhapeta+testing@gmail.com', '6304418350', 'male', 'ap', 'penumuru', 'sai nagar', 517126, 'pay_PKS9X61zXJlftq', 'paid', '2024-11-12 16:23:44'),
(46, 24, '125', 'sandeep', '2018-02-06', 'sandeep.n062000@gmail.com', '8861630673', 'male', 'karnataka', 'Bangarapet', 'sdasda', 563114, 'pay_PLUtbZR6dccX7l', 'paid', '2024-11-15 07:43:32'),
(47, 24, '126', 'ProfitBot', '2024-11-05', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'dasarahalli', 'dfsd', 563114, 'pay_PLV1fpLcXh28QA', 'paid', '2024-11-15 07:51:09'),
(48, 24, '127', 'sandeep', '2024-11-12', 'connectwithworld61@gmail.com', '8861630673', 'female', 'karnataka', 'dasarahalli', 'dsd', 563114, 'pay_PLXfQ2k76FCdFL', 'paid', '2024-11-15 10:26:09'),
(49, 24, '128', 'sandeep', '2024-11-05', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Mulbagal', 'sdds', 563114, 'pay_PLXiDmX7Tx7GAE', 'paid', '2024-11-15 10:28:49'),
(50, 24, '129', 'sandeep', '2024-11-06', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Mulbagal', 'sdsada', 563114, 'pay_PLXqojM6P4rV4Y', 'paid', '2024-11-15 10:36:57'),
(51, 24, '130', 'sandeep', '2024-10-29', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Mulbagal', 'dsdsd', 563114, 'pay_PLY0Pzoynv0LF0', 'paid', '2024-11-15 10:46:02'),
(52, 24, '131', 'ProfitBot', '2024-11-04', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Bangarapet', 'sdfs', 563114, 'pay_PLY4vbb9Hicd1X', 'paid', '2024-11-15 10:50:19'),
(53, 24, '132', 'sandeep', '2024-10-31', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Mulbagal', 'hfdgbf', 563114, 'pay_PLYE76qq2Zd7yh', 'paid', '2024-11-15 10:59:00'),
(54, 24, '133', 'sandeep', '2024-11-05', 'sandeep.n062000@gmail.com', '8861630673', 'male', 'karnataka', 'dasarahalli', 'dfsfd', 563114, 'pay_PLYNbVMyAeXM6P', 'paid', '2024-11-15 11:08:00'),
(55, 27, '134', 'sandeep', '2024-10-30', 'sandeep.n062000@gmail.com', '8861630673', 'male', 'karnataka', 'dasarahalli', 'efew', 563114, 'pay_PLwhj9gFPdk3ic', 'paid', '2024-11-16 10:55:44'),
(56, 28, '135', 'vignesh', '2024-11-17', 'vignesh.santhapeta+123@gmail.com', '6304418350', 'male', 'ap', 'tirupathi', 'sai nagar', 517126, 'pay_PMQJHNqbMDDtNk', 'paid', '2024-11-17 15:53:25'),
(57, 29, '136', 'sandeep', '2024-10-29', 'connectwithworld61@gmail.com', '8861630673', 'male', 'karnataka', 'Bangarapet', 'dsf', 563114, 'pay_PMnTNT89r9I3sM', 'paid', '2024-11-18 14:33:00');

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
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`member_id`, `name`, `email`, `mobile`, `age`, `gender`, `member_type`, `state`, `city`, `address`, `pincode`, `member_created_at`, `aadhaarFilePath`, `panFilePath`, `resumeFilePath`, `status`) VALUES
(9, 'sandeep', 'sandeep.n062000@gmail.com', '918861630673', 24, 'male', 'Volunteer', 'karnataka', 'Bangarapet', 'T.agara village ', '563114', '2024-11-22 07:15:28', 'uploads\\members\\1732258623717-image.png', 'uploads\\members\\1732258631505-rhumbnail.png', 'uploads\\members\\1732258631894-MOHAN K V Resume.pdf', 0);

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
(5, 'monkeys', 'sda', 'sandeep.2000@gmail.com', '8861630673', 'dss', 1, '2024-11-13 04:41:39');

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
(1, 'BHASA', 'website, awesome, example', 'This is an awesome website...', 'Copyright © 2024 bhasa@drashta.co.in', 'uploads/settings/1731767758723-logo.svg', 'uploads/settings/1731600716125-logo_light.svg', 'uploads/settings/1731941146939-logo.svg', '123 Main St, Anytown, USA', '+918861630673', 'contact@example.com', 'https://facebook.com/...', 'https://twitter.com/...', 'https://instagram.com/...', 'https://linkedin.com/...', 'https://youtube.com/...', 'https://wa.me/919823256524');

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
(7, 'Subarto Roy', 'uploads/profile/1731853304654-download2.jpeg', 'gurukumar', 'demo@demo.com', '$2a$10$e1bs9.QfCEpjmDkvdwYwa.hlvcfsoX7.ME3fKHY/g/aqFKeTkOM0W', '2024-10-03 06:05:14');

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
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `donation`
--
ALTER TABLE `donation`
  MODIFY `donation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `event_booking`
--
ALTER TABLE `event_booking`
  MODIFY `event_booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
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
