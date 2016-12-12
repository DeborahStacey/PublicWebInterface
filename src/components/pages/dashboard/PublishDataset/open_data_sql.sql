-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Dec 12, 2016 at 12:44 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `open_data_sql`
--
CREATE DATABASE IF NOT EXISTS `open_data_sql` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `open_data_sql`;

-- --------------------------------------------------------

--
-- Table structure for table `dataset_resources`
--

DROP TABLE IF EXISTS `dataset_resources`;
CREATE TABLE `dataset_resources` (
  `recordID` bigint(20) unsigned NOT NULL,
  `resourceID` int(12) unsigned NOT NULL,
  `resourceName` varchar(100) NOT NULL,
  `format` varchar(100) NOT NULL,
  `language` varchar(50) NOT NULL,
  `filePath` varchar(200) NOT NULL,
  `addDate` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1 COMMENT='List of data resources associated with the record';

--
-- Dumping data for table `dataset_resources`
--

INSERT INTO `dataset_resources` (`recordID`, `resourceID`, `resourceName`, `format`, `language`, `filePath`, `addDate`) VALUES
(1, 1, 'Veterinary Visits 2016', 'CSV', 'English', 'myFile.csv', '2016-12-11 23:48:25'),
(2, 2, 'Veterinary Expenditure 1', 'pdf', 'English', 'BinaryTrees.pdf', '2016-12-11 23:55:23'),
(2, 3, 'Veterinary Expenditure 2', 'pdf', 'English', 'A1-instructions.pdf', '2016-12-11 23:55:23'),
(3, 4, 'Average Number Cat Owned Per Household', 'CSV', 'English', 'myFile.csv', '2016-12-12 00:03:51'),
(4, 5, 'Number of Households Owning Cat', 'csv', 'English', 'myFile.csv', '2016-12-12 00:06:44'),
(5, 6, 'Average Time in a Day a Cat Spends Sleeping (English)', 'CSV', 'English', 'myFile.csv', '2016-12-12 00:11:46'),
(5, 7, 'Average Time in a Day a Cat Spends Sleeping (French)', 'csv', 'French', 'myFile.csv', '2016-12-12 00:11:46'),
(6, 8, 'Percent of Owned Cats in The USA That Are Spayed or Neutered By Province', 'csv', 'English', 'myFile.csv', '2016-12-12 00:18:01'),
(7, 9, 'Most Popular Canada Cat Breeds', 'CSV', 'English', 'myFile.csv', '2016-12-12 00:21:53'),
(8, 10, 'Cat Population from 2000 to 2016', 'csv', 'English', 'myFile.csv', '2016-12-12 00:24:46'),
(9, 11, 'Cat Population Distribution 2016', 'CSV', 'English', 'myFile.csv', '2016-12-12 00:27:00'),
(10, 12, 'Cat Population By Gender 2016', 'csv', 'English', 'myFile.csv', '2016-12-12 00:30:04'),
(11, 13, 'Expenditure on Cat Food 2016', 'CSV', 'English', 'myFile.csv', '2016-12-12 00:32:35'),
(12, 14, 'Cat Age 2016', 'CSV', 'English', 'myFile.csv', '2016-12-12 00:36:37');

-- --------------------------------------------------------

--
-- Table structure for table `OD_datasets`
--

DROP TABLE IF EXISTS `OD_datasets`;
CREATE TABLE `OD_datasets` (
  `recordID` bigint(20) unsigned NOT NULL,
  `title` varchar(200) NOT NULL,
  `publisher` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `license` varchar(200) NOT NULL,
  `formats` varchar(200) NOT NULL,
  `keywords` varchar(1000) NOT NULL,
  `publishDate` datetime NOT NULL,
  `modifiedDate` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COMMENT='This table stores information about datasets.';

--
-- Dumping data for table `OD_datasets`
--

INSERT INTO `OD_datasets` (`recordID`, `title`, `publisher`, `subject`, `description`, `license`, `formats`, `keywords`, `publishDate`, `modifiedDate`) VALUES
(1, 'Veterinary Visits Per Household Per Year', 'Wellcat Clinic', 'Veterinary', 'This statistic shows the number of veterinary visits per household per year by pet in 2010 in the Canada. An average of 2.2 veterinary visits were made by each household for issues relating to horses that year.', 'MIT', 'CSV', 'Veterinary Visits', '2016-12-11 23:48:25', '2016-12-11 23:48:25'),
(2, 'Veterinary Expenditure Per Household per Year', 'Wellcat Clinic', 'Veterinary Expenditure', 'What are the costs that go into pet ownership? Food is the common denominator. Other costs can vary by animal. Depending on the kind of pet you choose you may need litter, toys, treats, medical care, health insurance and a license. This dataset gives data on Veterinary Expenditure Per Household per Year.', 'None', 'pdf', 'Veterinary Expenditure, Cat Food', '2016-12-11 23:55:23', '2016-12-11 23:55:23'),
(3, 'Average Number Cat Owned Per Household', 'Wellcat Population Stats', 'Average Number Cat Owned Per Household', 'This statistic shows the average number cat owned per household per year in the Canada. Time range from year 2000 to year 2016. ', 'MIT', 'CSV', 'Average Number, Cat Ownership, Household', '2016-12-12 00:03:51', '2016-12-12 00:03:51'),
(4, 'Number of Households Owning Cat', 'Wellcat', 'Cat Ownership', 'This statistic shows the number of households owning cat per year in the Canada. Time range from year 2000 to year 2016.', 'None', 'csv', 'Households Owning Cat', '2016-12-12 00:06:44', '2016-12-12 00:06:44'),
(5, 'Average Time in a Day a Cat Spends Sleeping', 'Wellcat Clinic', 'Cat Behaviour', 'Anywhere from 16 to 20 hours a day, typically. For very young and very old cats, it''s near the upper end of the range, and newborns sleep almost 24/7. While cats do spend at least two-thirds of their lives asleep, they''re not â€œasleepâ€ in quite the same way humans are. This dataset contain data about average time in a day a cat spends sleeping.', 'None', 'CSV, csv', 'Average Time, Cat Sleeping', '2016-12-12 00:11:46', '2016-12-12 00:11:46'),
(6, 'Percent of Owned Cats in The USA That Are Spayed or Neutered By Province', 'Wellcat Clinic', 'Cat Health', 'Data is collected from all the provinces in Canada from 2001 to 2009. Percent of Owned Cats in The USA That Are Spayed or Neutered By Province.', 'MIT', 'csv', 'Cat Health Care', '2016-12-12 00:18:01', '2016-12-12 00:18:01'),
(7, 'Most Popular Canada Cat Breeds', 'Wellcat Population Team', 'Cat Breeds', 'This dataset contains data about the most popular Canada cat breeds. It is categorized by type of breed and ranked by the number of population in specific breed.', 'MIT', 'CSV', 'Cat Breeds, Popular', '2016-12-12 00:21:53', '2016-12-12 00:21:53'),
(8, 'Cat Population from 2000 to 2016', 'Wellcat Population Team', 'Cat Population', 'Cat population from 2000 to 2016 by cities in Canada', 'None', 'csv', 'Cat population', '2016-12-12 00:24:46', '2016-12-12 00:24:46'),
(9, 'Cat Population Distribution Over the Provinces 2016', 'Wellcat Population Team', 'Cat Population', 'Cat Population Distribution Over the Provinces 2016', 'MIT', 'CSV', 'Cat Population Distribution', '2016-12-12 00:27:00', '2016-12-12 00:27:00'),
(10, 'Cat Population By Gender 2016', 'Wellcat Population Team', 'Cat Population By Gender 2016', 'This statistic shows the cat population by gender in 2016 the Canada. Fields: male, female.', 'MIT', 'csv', 'Cat Population, Gender', '2016-12-12 00:30:04', '2016-12-12 00:30:04'),
(11, 'Expenditure on Cat Food 2016', 'Wellcat', 'Cat Food', 'This statistic shows expenditure on cat food in 2016. Categorized by province in Canada.', 'MIT', 'CSV', 'Cat Food Expenditure', '2016-12-12 00:32:35', '2016-12-12 00:32:35'),
(12, 'Cat Age 2016', 'Wellcat Population Team', 'Cat Age', 'This dataset contains data about the cat age 2016. It is categorized by age fields: 1-5 years old, 6-10 years old, and 10+.', 'None', 'CSV', 'Cat Age', '2016-12-12 00:36:37', '2016-12-12 00:36:37');

-- --------------------------------------------------------

--
-- Stand-in structure for view `set_resource_view`
--
DROP VIEW IF EXISTS `set_resource_view`;
CREATE TABLE `set_resource_view` (
`recordID` bigint(20) unsigned
,`title` varchar(200)
,`publisher` varchar(100)
,`subject` varchar(100)
,`description` varchar(5000)
,`license` varchar(200)
,`keywords` varchar(1000)
,`publishDate` datetime
,`modifiedDate` datetime
,`resourceID` int(12) unsigned
,`resourceName` varchar(100)
,`format` varchar(100)
,`language` varchar(50)
,`filePath` varchar(200)
,`addDate` datetime
);

-- --------------------------------------------------------

--
-- Structure for view `set_resource_view`
--
DROP TABLE IF EXISTS `set_resource_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `set_resource_view` AS (select `od_datasets`.`recordID` AS `recordID`,`od_datasets`.`title` AS `title`,`od_datasets`.`publisher` AS `publisher`,`od_datasets`.`subject` AS `subject`,`od_datasets`.`description` AS `description`,`od_datasets`.`license` AS `license`,`od_datasets`.`keywords` AS `keywords`,`od_datasets`.`publishDate` AS `publishDate`,`od_datasets`.`modifiedDate` AS `modifiedDate`,`dataset_resources`.`resourceID` AS `resourceID`,`dataset_resources`.`resourceName` AS `resourceName`,`dataset_resources`.`format` AS `format`,`dataset_resources`.`language` AS `language`,`dataset_resources`.`filePath` AS `filePath`,`dataset_resources`.`addDate` AS `addDate` from (`od_datasets` join `dataset_resources` on((`od_datasets`.`recordID` = `dataset_resources`.`recordID`))));

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dataset_resources`
--
ALTER TABLE `dataset_resources`
  ADD PRIMARY KEY (`recordID`,`resourceID`),
  ADD UNIQUE KEY `resourceID` (`resourceID`);

--
-- Indexes for table `OD_datasets`
--
ALTER TABLE `OD_datasets`
  ADD PRIMARY KEY (`recordID`),
  ADD KEY `recordID` (`recordID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dataset_resources`
--
ALTER TABLE `dataset_resources`
  MODIFY `resourceID` int(12) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `OD_datasets`
--
ALTER TABLE `OD_datasets`
  MODIFY `recordID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `dataset_resources`
--
ALTER TABLE `dataset_resources`
  ADD CONSTRAINT `fk_recordID` FOREIGN KEY (`recordID`) REFERENCES `OD_datasets` (`recordID`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
