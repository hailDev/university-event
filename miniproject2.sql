-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2023 at 04:46 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miniproject2`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `category` varchar(255) NOT NULL,
  `type` varchar(100) NOT NULL,
  `author` varchar(255) NOT NULL,
  `event_image` mediumtext NOT NULL,
  `date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `description`, `category`, `type`, `author`, `event_image`, `date`, `created_at`, `updated_at`) VALUES
(2, 'Google Seminar', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror.', 'Online', 'Webinar', 'h4ildev@gmail.com', '/build/assets/images-base/events/graduation.jpg', '2023-08-12', '2023-07-03 06:49:25', '2023-08-16 16:22:48'),
(3, 'Sunmori', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor. At varius vel pharetra vel turpis nunc. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Sagittis vitae et leo duis ut diam. Dictum fusce ut placerat orci nulla pellentesque dignissim enim.', 'Offline', 'Community', 'h4ildev@gmail.com', '/build/assets/images-base/events/1691897390.jpg', '2023-08-23', '2023-07-07 15:17:53', '2023-08-16 19:57:05'),
(5, 'Makrab', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere. Aliquet bibendum enim facilisis gravida neque. Pretium lectus quam id leo in vitae turpis. Suspendisse in est ante in nibh.', 'Offline', 'Belmawa', 'h4ildev@gmail.com', '/build/assets/images-base/events/youth.jpg', '2023-10-03', '2023-07-19 00:33:17', '2023-08-16 22:10:20'),
(18, 'Nobar Final World cup', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor. At varius vel pharetra vel turpis nunc. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Sagittis vitae et leo duis ut diam. Dictum fusce ut placerat orci nulla pellentesque dignissim enim.', 'Offline', 'Community', 'h4ildev@gmail.com', '/build/assets/images-base/events/wc.jpg', '2023-09-18', '2023-08-03 13:26:03', '2023-08-16 22:09:35'),
(19, 'Hanabi matsuri', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror.', 'Offline', 'Community', 'h4ildev@gmail.com', '/build/assets/images-base/events/1691538365.jpg', '2023-08-31', '2023-08-08 16:46:05', '2023-08-16 22:09:05'),
(20, 'Dirgahayu Indonesia', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere. Aliquet bibendum enim facilisis gravida neque. Pretium lectus quam id leo in vitae turpis. Suspendisse in est ante in nibh.', 'Offline', 'Belmawa', 'h4ildev@gmail.com', '/build/assets/images-base/events/1691820778.jpg', '2023-08-17', '2023-08-11 23:12:58', '2023-08-11 23:12:58'),
(21, 'Reuni Alumni', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror.', 'Offline', 'Community', 'h4ildev@gmail.com', '/build/assets/images-base/events/1692009697.jpg', '2023-08-30', '2023-08-14 03:41:37', '2023-08-14 03:41:37'),
(24, 'New Year', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor. At varius vel pharetra vel turpis nunc. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Sagittis vitae et leo duis ut diam. Dictum fusce ut placerat orci nulla pellentesque dignissim enim.', 'Offline', 'Community', 'h4ildev@gmail.com', '/build/assets/images-base/events/1694072308.jpg', '2023-12-31', '2023-09-07 00:38:28', '2023-09-07 00:38:47');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(21, '2014_10_12_000000_create_users_table', 1),
(22, '2014_10_12_100000_create_password_resets_table', 1),
(23, '2019_08_19_000000_create_failed_jobs_table', 1),
(24, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(25, '2023_06_16_184629_create_events_table', 1),
(26, '2023_07_19_224022_create_userjoinedevent_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('kurumichann12@gmail.com', '$2y$10$AbDgGIetaLbtUrP4lQlwaumhiPJPxMi2IwuPDBQqJvM4Msc0RubYS', '2023-08-07 01:30:55');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userjoinedevent`
--

CREATE TABLE `userjoinedevent` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `event_id` bigint(20) UNSIGNED NOT NULL,
  `event_author` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `userjoinedevent`
--

INSERT INTO `userjoinedevent` (`id`, `user_id`, `event_id`, `event_author`, `created_at`, `updated_at`) VALUES
(1, 11, 2, 'h4ildev@gmail.com', '2023-07-20 18:41:45', '2023-07-20 18:41:45'),
(2, 18, 3, 'h4ildev@gmail.com', '2023-07-21 00:30:30', '2023-07-21 00:30:30'),
(19, 11, 3, 'h4ildev@gmail.com', '2023-08-01 12:16:29', '2023-08-01 12:16:29'),
(20, 11, 5, 'h4ildev@gmail.com', '2023-08-01 12:19:17', '2023-08-01 12:19:17'),
(23, 11, 19, 'h4ildev@gmail.com', '2023-08-10 22:32:22', '2023-08-10 22:32:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nim` varchar(50) NOT NULL DEFAULT '1221',
  `name` varchar(255) NOT NULL,
  `user_image` varchar(100) DEFAULT '/build/assets/images-base/user-image/default.png',
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nim`, `name`, `user_image`, `email`, `email_verified_at`, `role`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, '122122', 'Akiraaa', '/build/assets/images-base/user-image/1691805606.jpg', 'h4ildev@gmail.com', '2023-07-03 06:19:17', 'admin', '$2y$10$ZgCeMPXtHV/.WBvfJiCY0.N5xMJKLKX0gRSNijcBAwM47xZD4YqQG', NULL, '2023-07-03 06:18:25', '2023-08-16 16:10:27'),
(11, '122123', 'Kurumi Channn', '/build/assets/images-base/user-image/1692630599.png', 'kurumichann12@gmail.com', '2023-07-12 05:23:44', 'user', '$2y$10$SrGGVPvYbg1LEjOfSEjWrOMsajoaOvukXq2Dz5wp9tTTca.8FuOeq', NULL, '2023-07-12 05:23:06', '2023-08-21 08:09:59'),
(19, '1221216', 'OG', '/build/assets/images-base/user-image/lulu.png', 'akiraken040@gmail.com', '2023-08-03 08:45:02', 'user', '$2y$10$GWkaoh/2GGatQv0cuLLID.hPsDuNPHpgzM7.tf82rwIGHhQUaUiia', 'INNYnmNJP6a8y4kThZlIlguNsGjljgYuZF8SUd1dkiz4Id1eW22P0HCyAcNF', '2023-08-03 08:43:55', '2023-08-21 08:28:21'),
(21, '1222122', 'Budi', '/build/assets/images-base/user-image/default.png', 'croziputra@gmail.com', '2023-09-06 23:50:57', 'user', '$2y$10$s73lboaX.s/1RsQEjI7RxuHvsqkg0gyWdXLDYi7/AK0jqZKEoAt6K', NULL, '2023-09-06 23:50:00', '2023-09-06 23:50:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `userjoinedevent`
--
ALTER TABLE `userjoinedevent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `nim` (`nim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userjoinedevent`
--
ALTER TABLE `userjoinedevent`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
