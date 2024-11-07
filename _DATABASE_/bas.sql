-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freesqldatabase.com
-- Generation Time: Nov 07, 2024 at 04:30 PM
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
(1, 'FOCALISATION IN VEDIC & MODERN DAY  DHRUPAD VOCAL MUSIC STORIES', 'focalisation-in-vedic--modern-day--dhrupad-vocal-music-stories', 'uploads/articles/2024-09-13 17 22 53 4.png', 'uploads/articles/2024-09-13 17 22 53 3.png', 'Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story. The narrative strategies surrounding Indian heritage over the past thousand years, however, require revisiting as em', '<h3><strong>Abstract</strong></h3>\r\n<p>Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story. The narrative strategies surrounding Indian heritage over the past thousand years, however, require revisiting as emerging counter-narratives are increasingly gaining significance. Globalized narratives, which have become foundational to newer interpretations, often cause Indians to feel estranged, misunderstood, or even demoralized. This problem intensifies when local storytellers adopt these globalized narratives, mistaking narrators for the original sources of knowledge.</p>\r\n<p>Such misunderstandings can lead to \"focalization\"&mdash;a process by which perspectives are altered or skewed&mdash;resulting in the miscommunication of key aspects of Indian culture. By examining ancient Indian traditions such as **Sām Veda** (Vedic chanting, with an unknown origin date) and **Dhrupad** (an ancient form of classical Indian music, likely originating around 300 BC and still practiced today), this article explores how these cultural treasures have been represented in newer globalized narratives. It highlights the focalization that arises from these narratives and underscores the need to address these misconceptions in order to preserve the true essence of Indian heritage.</p>', '[\"uploads/articles/files/5196-Article Text-15551-2-10-20210731.pdf\"]', 'demo', 'FOCALISATION IN VEDIC & MODERN DAY  DHRUPAD VOCAL MUSIC STORIES', 'Narrative Strategies, Focalisation, Khayāl, Dhrupad, Sāma Gāna', 'Narratives we hear play a crucial role in shaping our understanding of civilizational history by connecting dots to form a cohesive story. The narrative strategies surrounding Indian heritage over the past thousand years, however, require revisiting as em', NULL);

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
(1, 1, 'Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', 'teaching-as-a-passion-not-just-a-profession-the-vision-of-bharata-arsheya-sansthan', 'uploads/blogs/1730990036283.png', 'uploads/blogs/1730990036305.png', 'At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance. When teaching is driven by', '<p>At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance. When teaching is driven by passion, it creates an environment where education becomes transformative, not transactional.</p>\r\n<p>For the Sansthan, education, or Siksha, is not just about imparting knowledge&mdash;it is about **seva**, or selfless service. By treating teaching as a form of seva, the institution upholds the ancient tradition of learning as a sacred exchange, where both teacher and student engage in a process that nurtures the spirit. This service-oriented approach ensures that learners are drawn toward the teachings, not because they have to, but because they feel a genuine connection to the wisdom being offered.</p>\r\n<h3><strong>Siksha as Seva: A Timeless Tradition</strong></h3>\r\n<p>In the Indian Vedic tradition, education has always been viewed as **seva**&mdash;a selfless act of giving and receiving knowledge that is meant to uplift the individual and society. **Bharata Arsheya Sansthan** embraces this tradition by promoting the idea that education is not a sector to be commercialized but a sacred duty that brings out the best in both the teacher and the learner.</p>\r\n<p>This philosophy nurtures a space where learners feel deeply connected to their studies. They are not just participants in a system but seekers of higher wisdom, gravitating toward the Sansthan&rsquo;s unique approach. The result is a dynamic, engaged community of students who view education as an integral part of their spiritual and intellectual growth.</p>\r\n<h3><strong>The Power of Passion-Driven Teaching</strong></h3>\r\n<p>When teaching is fueled by passion, the learning experience becomes more engaging and impactful. The educators at Bharata Arsheya Sansthan, led by this philosophy, are not just imparting information; they are lighting the way for learners to explore their own potential. This enthusiasm fosters a love for learning, ensuring that students remain motivated and invested in their journey of self-discovery.</p>\r\n<p>Passionate teaching has the power to inspire and transform. When learners sense that their mentors are deeply committed to their growth, they are naturally inclined to engage fully, eager to absorb and apply the knowledge they receive. This ensures not only academic success but also personal and spiritual development.</p>\r\n<h3><strong>Conclusion: A Call to Learn Through Seva</strong></h3>\r\n<p>At Bharata Arsheya Sansthan, education is a mission driven by passion and rooted in the ethos of seva. This dedication to Siksha as Seva attracts learners who are not just seeking education but a meaningful connection with their inner self. It is this timeless approach that sets the Sansthan apart, creating a learning environment where students and teachers embark on a shared journey of growth, wisdom, and service.</p>', 'demo', 'Teaching as a Passion, Not Just a Profession: The Vision of Bharata Arsheya Sansthan', 'Teaching, Passion', 'At **Bharata Arsheya Sansthan**, teaching transcends beyond the boundaries of a mere profession; it is a deep-rooted passion. This approach has naturally drawn countless learners seeking authentic wisdom and meaningful guidance. When teaching is driven by', NULL),
(2, 1, 'A Mesmerizing Raga Bheempalasi at FTII, Pune: A Symphony of Tradition & Art', 'a-mesmerizing-raga-bheempalasi-at-ftii-pune-a-symphony-of-tradition--art', 'uploads/blogs/1730991350567.png', 'uploads/blogs/1730991350581.png', 'The stage was set at the Film and Television Institute of India (FTII), Pune, for a remarkable afternoon of classical music, where Raga Bheempalasi echoed through the revered halls. This performance was not just an ode to the timeless tradition of Indian ', '<p>The stage was set at the Film and Television Institute of India (FTII), Pune, for a remarkable afternoon of classical music, where Raga Bheempalasi echoed through the revered halls. This performance was not just an ode to the timeless tradition of Indian classical music but also a unique convergence of two art forms&mdash;music and cinema. On the pakhavaj, anchoring the rhythmic depth of the performance, was Nikhil Ghorpadkar, and accompanying him was Madan Kale, a former student of FTII and now an award-winning filmmaker.</p>\r\n<h3><strong>The Beauty of Raga Bheempalasi</strong></h3>\r\n<p>Raga Bheempalasi, known for its profound emotional depth, was the chosen raga for this special occasion. It is a raga traditionally performed during the late afternoon, evoking feelings of longing and devotion. As the musicians began their journey through the raga, the audience could feel the melody unfold with its intricate **alaaps** and graceful movements, transporting them to a state of introspection.</p>\r\n<p>The pakhavaj accompaniment added a unique dynamic to the performance, grounding the raga with a deep, resonant rhythm that enhanced the vocal and instrumental expression of the raga&rsquo;s soul-stirring nature. Nikhil Ghorpadkar\'s mastery of the pakhavaj was evident as he seamlessly intertwined the rhythmic patterns with the melodic flow, creating a harmonious synergy between melody and rhythm.</p>\r\n<h3><strong>A Meeting of Disciplines: Music and Film</strong></h3>\r\n<p>Madan Kale, once a student of FTII, had returned to his alma mater in a different capacity&mdash;not just as a filmmaker but as a musician contributing to a classical music recital. Having won accolades for his work in film, Madan\'s presence added an extra layer of significance to the event. His journey from a student to an award-winning filmmaker showcased the symbiotic relationship between music and cinema&mdash;both are storytelling mediums that evoke emotions, connect with audiences, and leave lasting impressions.</p>\r\n<p>The performance became a symbolic merging of the world of cinema and classical music, with both art forms enhancing each other. As the raga unfolded, the artistic creativity of the performers reflected the depth of both the Indian classical music tradition and the cinematic vision that FTII fosters in its students.</p>\r\n<h3><strong>A Memorable Collaboration</strong></h3>\r\n<p>The collaboration between Nikhil Ghorpadkar on the pakhavaj and Madan Kale was more than just a musical performance&mdash;it was a celebration of shared artistic journeys. Both individuals brought their unique perspectives to the stage&mdash;Nikhil from the world of classical music and Madan from cinema&mdash;and together they created a memorable experience that resonated deeply with the audience.</p>\r\n<p>The rhythmic brilliance of the pakhavaj coupled with the soulful rendition of Raga Bheempalasi filled the air with a timeless quality, reminding everyone of the enduring power of traditional Indian arts. The event at FTII became a testament to the versatility of Indian classical music and its ability to transcend artistic boundaries.</p>\r\n<h3><strong>Conclusion: A Harmonious Blend of Tradition and Modernity</strong></h3>\r\n<p>The Raga Bheempalasi performance at FTII was not just about the notes and rhythms&mdash;it was a profound expression of how tradition and modernity can coexist. As an award-winning filmmaker and a master percussionist joined forces on stage, they bridged the gap between two powerful mediums of storytelling&mdash;music and cinema. This unforgettable collaboration highlighted the beauty of Indian classical music and its ability to inspire and elevate, leaving the audience in awe of the symbiotic relationship between sound and vision.</p>', 'demo', 'A Mesmerizing Raga Bheempalasi at FTII, Pune: A Symphony of Tradition & Art', 'FTII, Pune, Tradition & Art', 'The stage was set at the Film and Television Institute of India (FTII), Pune, for a remarkable afternoon of classical music, where Raga Bheempalasi echoed through the revered halls. This performance was not just an ode to the timeless tradition of Indian ', NULL);

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
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `settings_id` int(11) NOT NULL,
  `call_to_action` varchar(255) NOT NULL,
  `site_copyright` varchar(100) NOT NULL,
  `site_logo` varchar(255) NOT NULL,
  `site_favicon` varchar(255) NOT NULL,
  `contact_address` varchar(255) NOT NULL,
  `contact_mobile` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `facebook_url` varchar(255) NOT NULL,
  `twitter_url` varchar(255) NOT NULL,
  `insta_url` varchar(255) NOT NULL,
  `linkedin_url` varchar(255) NOT NULL,
  `youtube_url` varchar(255) NOT NULL,
  `site_title` varchar(255) NOT NULL,
  `site_keywords` varchar(255) NOT NULL,
  `site_description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `event_booking`
--
ALTER TABLE `event_booking`
  MODIFY `event_booking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `settings_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
