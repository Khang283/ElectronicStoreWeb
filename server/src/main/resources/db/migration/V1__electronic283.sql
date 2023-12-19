-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 18, 2023 at 08:53 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `electronic283`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `asset_id` bigint NOT NULL,
  `asset_name` varchar(100) NOT NULL,
  `asset_path` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `asset_type` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`asset_id`, `asset_name`, `asset_path`, `asset_type`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697710590920_iPhone%2014%20Promax%20(2).jpg', 'image', '2023-06-07 13:38:22', NULL, 0),
(2, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697716104054_iPhone%2014%20Promax%20(3).jpg', 'image', '2023-06-07 13:38:22', NULL, 0),
(3, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697714065864_iPhone%2014%20Promax%20(4).jpg', 'image', '2023-06-07 13:38:22', NULL, 0),
(4, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697712815829_iPhone%2014%20Promax%20(7).jpg', 'image', '2023-06-07 13:38:22', NULL, 0),
(5, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697711023686_iPhone%2014%20Promax%20(8).jpg', 'image', '2023-06-07 13:38:23', NULL, 0),
(6, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697714378327_iPhone%2014%20Promax%20(9).jpg', 'image', '2023-06-07 13:38:23', NULL, 0),
(7, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697713284583_iPhone%2014%20Promax%20(10).jpg', 'image', '2023-06-07 13:38:23', NULL, 0),
(8, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697712190819_iPhone%2014%20Promax%20(11).jpg', 'image', '2023-06-07 13:38:23', NULL, 0),
(9, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697711156533_iPhone%2014%20Promax%20(12).jpg', 'image', '2023-06-07 13:38:23', NULL, 0),
(10, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697714222068_iPhone%2014%20Promax%20(13).jpg', 'image', '2023-06-07 13:38:23', NULL, 0),
(11, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697712972164_iPhone%2014%20Promax%20(14).jpg', 'image', '2023-06-07 13:38:24', NULL, 0),
(12, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697711565269_iPhone%2014%20Promax%20(15).jpg', 'image', '2023-06-07 13:38:24', NULL, 0),
(13, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697710929451_iPhone%2014%20Promax%20(16).jpg', 'image', '2023-06-07 13:38:24', NULL, 0),
(14, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697715010321_iPhone%2014%20Promax%20(17).jpg', 'image', '2023-06-07 13:38:24', NULL, 0),
(15, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/10/28/638025697712503350_iPhone%2014%20Promax%20(5).jpg', 'image', '2023-06-07 13:38:24', NULL, 0),
(16, 'Ảnh', 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg', 'image', '2023-06-07 13:38:24', NULL, 0),
(17, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-1.jpg', 'image', '2023-06-07 13:38:24', NULL, 0),
(18, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/asus-tuf-gaming-fx506lhb-i5-hn188w-10-1020x570.jpg', 'image', '2023-06-07 13:38:24', NULL, 0),
(19, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-3.jpg', 'image', '2023-06-07 13:38:25', NULL, 0),
(20, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-4.jpg', 'image', '2023-06-07 13:38:25', NULL, 0),
(21, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-5.jpg', 'image', '2023-06-07 13:38:25', NULL, 0),
(22, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-6.jpg', 'image', '2023-06-07 13:38:25', NULL, 0),
(23, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-7.jpg', 'image', '2023-06-07 13:38:25', NULL, 0),
(24, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-7.jpg', 'image', '2023-06-07 13:38:25', NULL, 0),
(25, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-8.jpg', 'image', '2023-06-07 13:38:25', NULL, 0),
(26, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-9.jpg', 'image', '2023-06-07 13:38:26', NULL, 0),
(27, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-10.jpg', 'image', '2023-06-07 13:38:26', NULL, 0),
(28, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/279259/Slider/vi-vn-asus-tuf-gaming-fx506lhb-i5-hn188w-12.jpg', 'image', '2023-06-07 13:38:26', NULL, 0),
(29, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/226316/Slider/samsung-galaxy-s21-ultra-5G-slider-780x433.jpg', 'image', '2023-06-07 13:38:26', NULL, 0),
(30, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/226316/Slider/vi-vn-samsung-galaxy-s21-ultra-5g-thietke-slider.jpg', 'image', '2023-06-07 13:38:26', NULL, 0),
(31, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/226316/Slider/vi-vn-samsung-galaxy-s21-ultra-5g-manhinh-slider.jpg', 'image', '2023-06-07 13:38:26', NULL, 0),
(32, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/226316/Slider/vi-vn-samsung-galaxy-s21-ultra-5g-s-pen-slider.jpg', 'image', '2023-06-07 13:38:27', NULL, 0),
(33, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/226316/Slider/vi-vn-samsung-galaxy-s21-ultra-5g-camera-slider.jpg', 'image', '2023-06-07 13:38:27', NULL, 0),
(34, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/226316/Slider/vi-vn-samsung-galaxy-s21-ultra-5g-lienketwindows10-slider.jpg', 'image', '2023-06-07 13:38:27', NULL, 0),
(35, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/226316/Slider/vi-vn-samsung-galaxy-s21-ultra-5g-quay8k-slider.jpg', 'image', '2023-06-07 13:38:27', NULL, 0),
(36, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/226316/Slider/vi-vn-samsung-galaxy-s21-ultra-5g-choigame-slider.jpg', 'image', '2023-06-07 13:38:27', NULL, 0),
(37, 'Ảnh', 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-den-600x600-200x200.jpg', 'image', '2023-06-07 13:38:27', NULL, 0),
(38, 'Ảnh', 'https://anphat.com.vn/media/product/27290_logitech_g502_hero.jpg', 'image', '2023-06-07 13:38:28', NULL, 0),
(39, 'Ảnh', 'https://anphat.com.vn/media/product/27290_chuot_logitech_g502_hero.jpg', 'image', '2023-06-07 13:38:28', NULL, 0),
(40, 'Ảnh', 'https://anphat.com.vn/media/product/27290_chuot_logitech_g502_hero_1.jpg', 'image', '2023-06-07 13:38:28', NULL, 0),
(41, 'Ảnh', 'https://anphat.com.vn/media/product/27290_27290_logitech_g502_hero__1_.jpeg', 'image', '2023-06-07 13:38:28', NULL, 0),
(42, 'Ảnh', 'https://anphat.com.vn/media/product/27290_logitech_g502_hero__6_.jpeg', 'image', '2023-06-07 13:38:28', NULL, 0),
(43, 'Ảnh', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_17_2.png', 'image', '2023-06-07 13:38:28', NULL, 0),
(44, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/g/r/group_17_2.png', 'image', '2023-06-07 13:38:28', NULL, 0),
(45, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/g/r/group_17_2.png', 'image', '2023-06-07 13:38:29', NULL, 0),
(46, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/l/o/logitech-g102-lightsync-rgb-white-1_eb113ff7e83b4289812fb9bff7034b4d_1.jpg', 'image', '2023-06-07 13:38:29', NULL, 0),
(47, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/c/h/chuot-choi-game-co-day-logitech-g102-lightsync-8000dpi-4.png', 'image', '2023-06-07 13:38:29', NULL, 0),
(48, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/c/h/chuot-choi-game-co-day-logitech-g102-lightsync-8000dpi-2.png', 'image', '2023-06-07 13:38:29', NULL, 0),
(49, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/c/h/chuot-choi-game-co-day-logitech-g102-lightsync-8000dpi-1_1_2.png', 'image', '2023-06-07 13:38:29', NULL, 0),
(50, 'Ảnh', 'https://product.hstatic.net/1000026716/product/thumbphim_9c0bdbe5ab3143108b0154961ab4ed2e.png', 'image', '2023-06-07 13:38:29', NULL, 0),
(51, 'Ảnh', 'https://product.hstatic.net/1000026716/product/g_pro_x_rgb_lightsync_mechanical_gx_blue_switch_gaming_keyboard_0002_2_d174fdac50924af89140fb69d0b29d68.jpg', 'image', '2023-06-07 13:38:30', NULL, 0),
(52, 'Ảnh', 'https://product.hstatic.net/1000026716/product/g_pro_x_rgb_lightsync_mechanical_gx_blue_switch_gaming_keyboard_0000_4_d8ee349ae39445779be9df5d679893bb.jpg', 'image', '2023-06-07 13:38:30', NULL, 0),
(53, 'Ảnh', 'https://product.hstatic.net/1000026716/product/g_pro_x_rgb_lightsync_mechanical_gx_blue_switch_gaming_keyboard_0000_3_b649a353c1254ba8b3c30c617d467b4b.jpg', 'image', '2023-06-07 13:38:30', NULL, 0),
(54, 'Ảnh', 'https://product.hstatic.net/1000026716/product/g_pro_x_rgb_lightsync_mechanical_gx_blue_switch_gaming_keyboard_0001_1_f4311cfb239a45dea4fabc0b0cefcff6.jpg', 'image', '2023-06-07 13:38:30', NULL, 0),
(55, 'Ảnh', 'https://file.hstatic.net/1000026716/file/gearvn-ba-n-phi-m-logitech-g-pro-mechanical-gaming-keyboard-5_26f7f4f38e2a44fc84264b42e9b2bdd0_1024x1024.jpg', 'image', '2023-06-07 13:38:30', NULL, 0),
(56, 'Ảnh', 'https://product.hstatic.net/1000026716/product/thumbphim_9c0bdbe5ab3143108b0154961ab4ed2e.png', 'image', '2023-06-07 13:38:31', NULL, 0),
(57, 'Ảnh', 'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g402/gallery-1.png?v=1', 'image', '2023-06-07 13:38:31', NULL, 0),
(58, 'Ảnh', 'https://resource.logitech.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1', 'image', '2023-06-07 13:38:31', NULL, 0),
(59, 'Ảnh', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg', 'image', '2023-06-07 13:38:31', NULL, 0),
(60, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro1.jpg', 'image', '2023-06-07 13:38:31', NULL, 0),
(61, 'Ảnh', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERISDxESERIRERIREREPEREPEBERGBUZGRgYGBgcIS4lHB4rIxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjErJCE/NDE0NDY0NDQ0NDQxMTQ0NDE0MTQxNDQ0NDE0NDQxNDQ0MTE0NDQ0NDQ0NDQ0NDQxNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwcBAgQGBQj/xABOEAACAQEDBQgNCAkDBQEAAAABAgADBAURBhIhMUEHIlFhcXKx0RMVMlJUc4GRkqGzwcIUFjM2QpSy0hcjJlNidIOT4TVEgjRjovDxJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACsRAQEBAAEDAwMDAwUAAAAAAAABAhEDEjEhMkEEUWETInEFQqEUIzNSgf/aAAwDAQACEQMRAD8AuaIiAiIgYmj1FXWQJraKmaNGsnAcs+fVcKCzHhJY+vXqHHIt4Wk5d3ypdgY8gmflA71vNPE1su7uWp2M2umTjhivZHT01Ur656GxWunVVXpuHVhnKytnqy8KsDgRK81btn3fV+UDvW80fKB3rejOPNPD0zKORtxEnuT2R1/KB3rejMNalGsMPJNQ4wxlYZdZT2qpakuy68RaHANWqpA7ErDHAH7JzcGLawCANOMcqdqwrXlDZaP09ZKPjqlOl6mYGcnz1uvw+y/eKP5pX9g3LrKBnW2tWtNVtLsrdjTH1seUnyCdp3Nrq/dVf77yeWk6Or8PafPS6/D7L94o/mj563X4fZfvFH808Bem51d60Kpo06oqrSqMmFVm34UldB16QNEpdVGBJOkahwwpvFx5fqf563X4fZfvFH80fPW6/D7L94o/mn5WzjsJ88Z7d8fOZKr9U/PW6/D7L94o/mj56XX4fZfvFH80/KxJPHPQZD3OlstqUawY08x3cIc04KujE7BiRCZObJH6I+et1+H2X7xR/NNlyxuwnAW+yE6h/wDpo6f/ACnhBub3Z+7qf3mkn6NLsI+jqjjFZvfI5bX6bU+yzrPa6dQBqbq4OoqwYHkI0GdEpC8sj7XdQa2XPaajLT39Wg4DEoNLHAb1xhsIBwGgmWVkNlMl5WRKwGbUBKVUxzsxxrGPBpBHERxwx1m5vFemiIkqkREBERAREQEREDitR3yjgVj5dUq/dkvd6VGjZ0JUWl6gqEHDGnTCbzkJcY82WhazvxzT0ieP3QsljeNmzUIWtTYvSZtC52plY7Aww07CBK/LST9qiBZGKZ4IwAJ0sAdHFr4Z7rcjvaoterZSSafYzaEBJwR1dFbDgDBtPGBPKVMm70VuxtYq5bViELIePOG9Pnlnbm2Rz2MPWtOHZ6oClVIYUqYIYpnDQWJAxw0AKJfVzx6KYmuViPhhp1bcOTRNFC4jNx48eDCYe0ous8Wokeeb06inuTp4MMD5pk2GO9w4cB68JVe5ovZ7wvS1tpY1Sisdaq7uxA8iKPJLTY6Ryj8cq7cd0i8f5hPjlp4M+6LFYTQyZhI2Ejl2ZqEzy14ZCXbWqNUegUZjnN2J2poTtOaNA8mE9UwkRk8r3GdeY8cdzm7P3dX+80Hc6uz93V/vNPXmamRzSdHH/WPH/o8uz93V/vNPuXDcdksQZbPSCFsM52Jd2w1AsdnENE+iZoY5q+ejiesj6KJJVWcNktGkK23QD7p9ICGW5c3igXhGI2g6iJXe5MDQvO9bIuhEqkquwBKjqPUy+aWOBK63Pz+0F7cr+1EmOPrfC3oiJZzkREBERAREQEREDhtndjmN0ia8PKembWwb8cxukSOm2I9fXKXy2z4aNSQ61Hmnysp71FjslWvmhuxoSq6gzkhUXiBJHkxndZLK6PVZqrVFqPnIjDAUxid6NPk2ap83LC6GtdirUFIDOu9J7kOpDLjxYqB5ZHyfD8/3lb7RbKjVK7vVcnbpVcTgAq6lHEJ6Xc9ynr0LVSstSozUazdjVXOJo1DiFKY6QMcAV1aeKeRrdkoO1KsjU6iMCyOuDBlOIxB/+EGeiyAuarardTtBRuwWeoKtRyMFZwSyop2sWw1ahjNb29voxzddy+6b5yoeHN8+fK03GtV4/wAxT+OWVRXBVB2FFPOzsT0yt9xnVeP8xT+OZW+lbT3RZDCRsJOyyNllJp1ZrnYSJhOhlkTLLcts1ARNDJSJowktZURmrTciaNJXiFp9W7rTnDNbul9Y4Z8t5rTqFGDLrB1cI2iSdTHfnj5eklcZAfWG9eWp7USxabhlDLqIxErvID6w3ry1PaiTHk9Zb0RElzkREBERAREQEREDitXdrzT0icxpkHFThwg6jOm1d2vNPSJpKa8t8e1FnP3o8jf4jOfvB6UlxmcZCz5NuuajXw7PZqNXDuey06dXN5M5ThOmzWBUAVVVFXQqoAAo/hAAA8gnbjMgwhDWUDMA1Zw6ZWO4tqvH+Yp/HLOtB7nnr+ISsdxXVeP8xT+ONe2q/wB0WaRNGWTGaMJg2lc7rImE6GEicS8rXNczCRtJ2EhaXb5qEyMyVpEZLaI2kTyVpC5lo1y+pctfEMh2aRzT/npni8gPrDevLU9qJ6K7q2bWTgY5p8v+cJ53ID6w3ry1PaiTw8r63Hbv+VvxESXCREQEREBERAREQPn2p/1gHAh6RNQYtX0v/D3iYEz15b59rbGZxmszIWZiIgRVzpXnDplLbmd5vZ6lqZd8jVlDpwjfaRwES562tecvTKLyGGm1+OHxS0nMT0sy9SS/leVktKVUD02zlbzg7QRsMlM8JdNveg+K6UbDOXHQw4RwHjntbNaFqIGQ4qfODwHgMx1nhpvp3F/DZpE4krSNpWJygcTnadLTmeaR0YQtImM3cyBml46MxqxnPUabs85qlSXzG0iN6macRrBxHKNM+bkA/wC0F6HhLeuqvXOuq8+XubNnX3eB/hHtUl9T0cH9Qz6Zv8rpiIlXkkREBERAREQERED5tr+l/wCHvExM2ofrcf4PeJqJnry3x7WZmYmZCzMzNZmBDX1rz16RKPyBXH5X45fjl4Vu6XnDplK7nK4/LPHr8ctnwt07x1I9UFnbd1vei+K6VPdpsYe4yF0nn8pL0NFOx0z+scax9hOHlOzzy0x33h2+/wDatCy2ynWXPpOHXEqSCDmsNDKeAg7Ju0pDJnKGrYKucuL0nI7LSJ0MO+XgYcPkMuW7rwpWmklag4ZGGg6iDtVhsI4Jn1ejenfwx107i/hK85ahnTUnHWaUjXpxz1GnK7zavUnBVrTXMduMpKlScr1JHUrTnepNs5bcNnecW5mML6t/NHrqpJWfHVr2Tbc+TC/ryUfZ0ejVUe6N+Hm/1G/tzP5XJERKPHIiICIiAiIgIiIHBbfpF5jdIkQktt+kXmN0iQzPXlvj2tpkTUGZkLMzKjHQJiTWXWeSJOUW8RBaKLDNOjul6RKX3MxiLb49Pjl4W070c5fxCUhuZdzbvHp8cvxwr09W6j1NvrLTRnb7I0DhOwTwNrVndnfSzHE9Q4tk9TlBVzmFMal3zcbEaPMOmfEejO3o47c91+XtdDHE5vy+G9nM+nk3f9WwVc5cWpOR2WljoYd8vAw4fIZI9Cc72QHZL7zNTittYzucVcVkt1O0Ulq0WDIwxBGsHaCNhG0TktdTCVxk/b61jqE08XpOR2SljhnfxLwMPXqM9NfV8oApVtDqHXEFTgeEHUZwa6NzrieGGOjca4vhLabVPn1LVPjVLyzjrkfyrHbNM4dUsj6r15oas+cK8yKs1mTufbuin2S00k2Fwzc1d8eib7n/ANYb15antVndkLZs56lc6kHYl5xwZvMAvpTh3PvrDen9T2qzLqX14+zyPr992pPsuCIiUeaREQEREBERAREQOC2/SLzG6RIZLbe7XmN0iRTPXlvj2kzMTMhZmb0mwPTI4gs5TWs6Bzk/EJSO5q+CW4nUKyE8mDy5KzHejH7S/iEpTIBv1duHDXQefPmmP3Xg6Wf9zM+77NVCzFjrYkyJqM+h2OZFKejzxHuccPmfJplbLxT6q0JOlnmetJ54fOs9iGOqd9ruOnaqOY+8dcTTqKN8je9TtHvndSs8+jZqeEznrpn1NcxTtus1azVWpV1zXXyqynUynapmadeWzf8AcFO20sx95UXE0qoGLI3Hwqdo98qS32CrZqrUa6Zjp5VZdjKdqnhmlnDLPU59Pl1LVkqOSQFBJJAAGkknQAOOfMR57fIC5zUf5VUG8pkikDjv6motxhcfPySNamZzVtb7Zy9vcth+TWdKX2lXFyNrnSx8+jkAnjtz76w3p/U9qs96zTwO559YLz/qe1Wcctttry/qPi1cURElyEREBERAREQERED59t7teY3SJDJbd3a8xvxCRTPXltj2sxMTMhdmJrM4wlHW1rzl/EJSmQGlbWP++p9T9cuqtrXnr+ISl9zof9Z45fjmvR9zTof82f8A165Uki05IqSZUnZa9flElOdCU5siSZElKra2ppOqksjRZ0UxLZjDddFMT5mUeTtK3Usxt7UQE0qoGJRuA8KnaPfPqoJOoltOTVsvMUvduStpqWtrNVRqYpkGtU1qEOooftZ2Bw8vARLXs1BKSJTpqFRFCqo1BRqn0alMMOPYZwVsVJB1zl6vdz+F5vv8tXeeH3OT+0F5clT2iz11R55Dc3/1+8uSp7UTKMfqpxmLkiIlnCREQEREBERAREQPnW7u15jfiEiktu7teY3SJDM9eW2PazERIXIiYhKOtrXnr+ISnNzcaLZ49fjlx1da85fxCU9uZjRbfHp8c16V40v0bx1svbKsmVZhVkgE6rXr1lVkyiaKJKshnqpEE6KcgWTpLxjt0JJlkCGTKYrm1Eokdps4dcDoOw8H+JIJsDM7OfLLmy8x5i0qyMVYYEevjE8ruaf69ePNf2iyyLdY1qjA6GGptoPvErjc4Qrf95K2tRUBw0jRUWY6zwdfqTeZ91yRESrjIiICIiAiIgIiIHzbf3a8xukSKS2/6Rea3SJDM9eW2PDMzMRIXZmIiBHW1rz16RKf3MtVt8enxy3632ecvSJUO5jqtvj0+OWl4icXjea96BMiYWbCdUvM5exNczluJIsjE3EmK1KpkyGc6mTKZeMtR0qZOpnMhkqmWc+o6FM3BkKtNwZWxjYkxlZ5BfWO9eWr7VZZWMrTIH6xXpy1farMOp8MepPC4YiJmwIiICIiAiIgIiIHzbf9IvMbpEhktv8ApV5jfiEimevLfHtZiYiQszExECOv9nnL0iVHuXje23x6fHLbtGznL0iVNuWje27x6dDyZ4pn3x7lTpkmEiebUnx0HXsmvS3/AG16PS18VJNhMYTYTZtWyyVTIhN1MtKzqdTJVac6mSK0vKy1HSrTcNIFabBpPDK5ThpXGQP1ivTlq+1EsPOld5AfWK8/6ntVmHWnpHN1pxwuKIiYuYiIgIiICIiAiIgfNt7DsijDTmMccdmcNEhkt5DCpTbhzkPl0jokUz15b49pERIWIiISirkDNJGIzlxGrHTKo3K+5t+H79NHkeWtaRvThs0yqMhGFnvG8bHU0M7GpT2BgjE6OMo4bkBkzxVfGo9xUE5mbCdVUTkqQ7sO2hWD6PtDWOHjEmwnwy5BxBwI1ET6Njt6vgrYK2w6lbqM3xrn0reX0dgE2E2zYzZsjllZupmgE2EtFakUzcNIQZuDLRSxKGngNz5h84bzxGOJqYHHV+sE9y9VUVnchURSzsdAVQMST5J4PcgRrReF4W3A5j1GzSf43Z8PICvnmPX8Rx/UfEXLERMHIREQEREBERAREQOe1UA6lTo2gjWCNRnyyzKc2qM0999huMHZPtzSogYYEYg8ZHRIs5Wzq5fKDg6iDyEGM6dYuuj3h9N+uZ7WUe8Ppv1yvav+pPs486M6dnauj3h9Op1zHauj3rem/XHafqT7ONsCJXmW2Sb1qiWuxOKVqpYZrZ2YHC6QMdjDYdRGg7JZ/auj3renU65q1z2c60J5XqdcTNhdy/ClxlnbqAzLwu+pnLoNRA1INx4YFTyg4SFt0Kmf9pX9JeqXYlzWde5QjiFSoB5s6S9raOGGYcNeGe/XLcJnW1PFUQ+XtM/7Wt516pEcuafg1Xzr1S/O1lHvD6b9cx2so94fTfrjhefVdSfP+FJWPdKzMFazVXTgLLnAcRw6Z2fpSo+B1/STqlw9q6PeH0365jtXR71v7j9cvNWK36nd+VQfpRo+B1/STqj9KVHwOv6SdUuDtXR7w+m/XHauj3h9N+uO/R/qN/dUA3U6Pgdf0k6o/SlTOhLFWY7BnjX5AZb/AGsod4fTfrjtXQ7w+R3Hvk/qaR+vv7qWtFe+b6/UUrObHZnIz2YOM4Y7WYAsOJQBo0y2Mkcnqd32ZKFPSQMXY90zHSSf/eLZPsUbOqDBARyszdJk0rbbeaz1q6vNZiIkKkREBERAREQEREDEzEQEREBERATERAzERAxEzEDEREDMREBERAREQEREBERAREQP/9k=', 'image', '2023-06-07 13:38:32', NULL, 0),
(62, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:32', NULL, 0),
(63, 'Ảnh', 'https://vn-live.slatic.net/p/26c2a39938b1659b0247d3135dac138e.jpg', 'image', '2023-06-07 13:38:32', NULL, 0),
(64, 'Ảnh', 'https://cdn.tgdd.vn/Products/Images/44/273247/asus-zenbook-14x-oled-um5401qa-r5-kn209w-thumb-600x600.jpg', 'image', '2023-06-07 13:38:32', NULL, 0),
(65, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:32', NULL, 0),
(66, 'Ảnh', 'https://svcvietnam.com.vn/media/product/2528-asus-vivobook-s15-s533eq-bn338t-2.jpg', 'image', '2023-06-07 13:38:33', NULL, 0),
(67, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:33', NULL, 0),
(68, 'Ảnh', 'https://laptop88.vn/media/news/0312_DellInspiron153000i3.png', 'image', '2023-06-07 13:38:33', NULL, 0),
(69, 'Ảnh', 'https://laptopg7.vn/images/detailed/100/Latitude-7400-1563944938.jpg', 'image', '2023-06-07 13:38:33', NULL, 0),
(70, 'Ảnh', 'https://laptopxachtay.com.vn/Images/Products/dell-alienware-m15-r3-i7-10750h-32gb-512gb-ssd-pcie-15-6-uhd-oled-rtx-2070-8gb-win-10-home_39717_1.jpg?', 'image', '2023-06-07 13:38:33', NULL, 0),
(71, 'Ảnh', 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/dell-g3-15-5.jpg', 'image', '2023-06-07 13:38:34', NULL, 0),
(72, 'Ảnh', 'https://laptop88.vn/media/news/2909_DellVostro143000Corei51.jpg', 'image', '2023-06-07 13:38:34', NULL, 0),
(73, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:34', NULL, 0);
INSERT INTO `assets` (`asset_id`, `asset_name`, `asset_path`, `asset_type`, `created_at`, `modified_at`, `deleted`) VALUES
(74, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:34', NULL, 0),
(75, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:34', NULL, 0),
(76, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:35', NULL, 0),
(77, 'Ảnh', 'https://gland.vn/media/product/8825_h732.png', 'image', '2023-06-07 13:38:35', NULL, 0),
(78, 'Ảnh', 'https://dlcdnimgs.asus.com/websites/global/products/07G77lBcB8Yo5R8y/img/hero-mouse.png', 'image', '2023-06-07 13:38:35', NULL, 0),
(79, 'Ảnh', 'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/2016/01/Chuot-game-asus-cerberus-1.JPG', 'image', '2023-06-07 13:38:35', NULL, 0),
(80, 'Ảnh', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhIPDw8PEA8QDxAQEBAPDxAPEBAPFRYWFhUVFRUYHSggGBolHRUYITEhJSkrMC4uGCAzODMsQygtLisBCgoKDg0OGBAQFzcdHR8rLS0tKysrLTIrLS43NystLDEtKzUrMisrNy0tMC0tLysrLS03Li0rLS03LTcyKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHCAH/xABJEAACAgEBBAUHBgkKBwAAAAAAAQIDBBEFEiExBgdBUXETIjJSYYGRCBQjYrHBQmRzgpKhorLRJDM0U2Nys8LD8ENldIOTo6T/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAJxEBAAIBAgUCBwAAAAAAAAAAAAECEQMEITEzYXFRwQUSEzJBkfD/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAEPbP9Hv8AyFv7jJhgunG2qsPCvvu13XB1RS01lOzzIrjwXF6t9yYHJ+oD+ky/6Gf72Md1POnUrt+mjOrpsU184qeLXLzWvKSdTi2uaT8npw14yXZqz0WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQNs7Zx8WvyuRYoR46Li5TfdGK4yfgcp6Sdb9z1hg0xpj/W36W26d6gnuxfi5eAHYb7oQi52SjCEVrKU5KMUu9t8EaXtrrW2Tj6qN8sqa/BxIeVT/7j0r/aOAbd23kZUt7LyLciSeq8rPejF/Vh6MfzUjESsLgdmy+vGcpxjj4MIQc4p2ZF7bUW0m3GC0XD6zMb1o9aOBm41uDTVkSnG+DjbONTpfk58ZR3bHvRaT08TlLkY2XMg2DortqrFy8fKt8pbCm+FsoKuKb3XrrF7/M7Vtzrhj5Cm/ArhvyyJ13UZe75ZVqCkpqNdj0i29FJ68mtDzrHmvEzU3o0vqRft5yA7jsjrrplosvDtqfJzx7I3x8XGW7Je7U3rYnTDZ+W1HHy6pWNaqmbdV3/AI56S9+h5WjMr8rqtJLVdzSa+DLgewweZdgdPto4mipypTrX/CydcivwW896K9kZJHTui/W/jXyjVm1/NJvgrlLfxm/rN6Sr96aXbIg6YAAAAAAAAAAAAAAAAAAAAAAADl/XbZpHF/u5H+n/AAOJZE9TqfW5tdXZFtEfRw1Cpvvtsh5SfHu0da8UzlF/aUQ7WWWy9YWGAbILJZK2H0dycubrorcpKKm9dIpRb4PVkarSbTisZli6+a8UZnJ9Nfk4/bIzmR1a7Rrj5R0JqL1bhbCesVxb011X++Bg8v01+Sj+9INX0r0+6FGp91KEfUzTmr3iqMtVJd8Wiw2Xcbi9CD2HhT3q65etXB/FJl4wnQjaccnAxMiP4ePCMlrru2Q8yyOvbpKMl7jNkAAAAAAAAAAAAAAAAAAAAAB536YPeydqy7s/d/RqivuNGtRum1nvz2xLu2vkR9yk4/cadfECDYyNMlWojTAtNnWup+Cdd0n6WuPFcFruqDfb4o5JM6n1W2buPbLh/PUx4/kossPbsozqxDq99kWuPFdvbw8X9x5v6RRUcmaXBLeS905r7juF+0tdFrrxS7l7kcS6WR0y7V3TsXwtsGHq3ul8lIyxo1PiYbI+TL62XcT0kWGSML0l7wj0j1Lz12TQvVty4/8A0WP7zeDnvUZZrszT1cvKj+1vf5joQAAAAAAAAAAAAAAAAAAAAAB5z03obYl/zfIfxnJmqXR4+827Zr3qNrS79pTZq+RHiBh7okWxGQviQ7IgRZo6D0Jv3cWa/tqX/wClGgSRuPRu5RqcNfShTPj37u6/sLD6XwuIncVz3bcsvVx8V9pzrpdLXKnL1t9/G2w2+rJScW2tE0zS+kD1shL1qIS97nY2X8PpfF4rGnXHf2QEfWfEVGX5yXxIlYS85EdIl4S85BHdvk/z1wMlertK5LwdVL+1s6acs+T7L+SZa7toTfxqq/gdTAAAAAAAAAAAAAAAAAAAAWM+5wqssXOFc5rXlrGLf3F8gbflpi5D/F7v3GG6Rm0R3cV2NBzxtp68X861+3sNRyaeZvXRaP0W1F3ZCfxTNX2jVxbJXk67vrW8tYyIEC2JlcuvQx9qK86FKIx9pyglFxUox4JpuM0tW9E1w5vtTK5Lj70Y+UHq0l2sNVvas5rOGzbLi7mm3NRb4Jy1fx0+5HzpTQoW1wS0SxoaLi/w7e8tbP2i6opQgt5LTWfL9Fc/ii3nZMr5b9spOSW6mlFKMU20t1Japavt148xh01Ne94xacoSLiRTKtx484+tHV6eK5r7PaVwaYcVUYkzCj5yI8ET8OHEDsXyff6Nmr8dX+FA6qcn+T6/oM5fjcP8KP8AA6wAAAAAAAAAAAAAAAAAAAAxfSh6YmT+Qs/dZlDEdLXphZP5Cf2Enk66PUr5hzDodHVbTj32Vv4xZgNr06Nmx9AGnZtGL9bHfxgzC9LMmupvefnSb3IRTlOT7oxXFivJ03nXv5aZnRMPdLjuxTk+5dnj3GWyqrJvWzzI+pF6zf8AekuC8F8SHaklokku5cEaeeGPdL/Cfuj/ABPmiXJaFyxlqTAOR9iy3qfUyEpNbPsqE+K82XeuT8V2lFZJrCLNdm60prd7pfgv39hmcKBGrqT4Nap80+Rfoxp1efXrOtcZV85Rj2uD7dO4K6t8n3+azl+M1P41o60cl+T49ac1rk7qGvfUdaCAAAAAAAAAAAAAAAAAAAGI6XLXBy+zTFul7NYxbX2GXMZ0mhvYeXH1sTIXxrkHTSnGpWe8OM9FMrIjfm10U71l0cbzpteSpioyUpya4v6qXN92j0+bT2XGpuTk7Lpa+Uun6cvYlyhHuiuHjzMx0HyNLMqP1KJ/FOP+Uj9JFrq+6T+wzXk7b3r38tD2guJhshmY2k+LMJfI28yJYy02XLGWZMivp9RbLiAv1EypEOsnUBlPxoGcw6/Nk+6EvsZisOJnqo6Vzf1JfYwsNy+T/H6HNf4xSvhUjq5y7qChpi5ku/O3fhTV/E6iEAAAAAAAAAAAAAAAAAAALGbVv12Q9eucfimi+ARwcE6HZOmRZ/aYeO/hK3+JP27PVP8A33mFf0O0LK+W586q91dzS/VIk7SydU+JIezf8de0+vFqe03xZgrmZraT5mEvZp5IRZMtMuyLTIoXIFtFyAF+pE/HRBrRkMYMsxgozN0tKLH9SRiMInbQt0os9sWvi0FdQ6jqN3Z85/1ubfP4KFf+mdCNQ6pcXyeycRPnONt2vsttnYv1SRt4QAAAAAAAAAAAAAAAAAAAAAcK608P5rtKFilwyoztjw00b3Y2R17eME/z13GtXZeqOhfKBwvocLLS405E6W12RthvcffSvj7TknzgN3vN5iZ9Mfp8zLNdTFXEy+evaQbCswsTLZXMoIoXIFsuQCJNRPxyDUTqAjLYsirbN+lMvd+rj9xYx5EvZ2N84ysTGS1VuXTGSfbXvJz/AGd5hXo3o7g+QxMbH/qcamr3whGL+wyIAQAAAAAAAAAAAAAAAAAAAAAan1qbM+cbLy4Jazrq+cQ0Wr3qWrNF7Wote88yQuPY04ppprVNNNPk0+aPIfSXZTw8vIw3r9BdKENebq9Kt++Di/eURZWFmbPm+UthVLKWiWsObe7HSTa3o6P0l7Pb7CTg7JcvPvbpqi/OcuEpeyKLFZl1rpXtOIhDwcCy16Vxb05vlGPiyZfs6Nb3Z2b1nqVLVrxZnJ2PcUK/5Lj9j01vt8I814viRKVXpLyWkIx9KWqnZLxlyR0+nEPVG3rEY5z/AHKPeWKdTjpqnHXkm02SKZEayacm1y14a8WXYSOUvDbGeCdGw3Tqc2f5bacbWtY4mPZbr2Kyf0UF74zm/wA00B2HcuorZPk8O3LktJZd2kX2+Qp1hH9t2PwaDLpYAIAAAAAAAAAAAAAAAAAAAAAAcM+UJ0f3baNpQXm2RWNfpyVkdZVSfit6P5kTuZielew687Evw7OCug1GXPcsXnQmvCST9wHkLeGpd2jhW0W2Y90XC6mcq7IvslF6PTvXan2posJhpfpulFpxbWjTXdqZaO2fP35Q3m1pxfGt98Oz9RhYlaNRaYbpq3pylkbHRN707b9Xz3oqT8NUMvLjuqqlNQXNvnJ+0gDUfNKzrTOeGMq0y4pFjeKlIy5MjsjAsyb6salfS32Rrhw1S15yfsitZP2Jnq/ZWz68emrGqWldFUKoLt3YJJa974czlfUX0ScYy2pfHR2RdeJFriq36dv53or2JvlI6+EAAAAAAAAAAAAAAAAAAAAAAAAAABzPrb6uPny+e4cUs6uCU4cEsquPJa8lYux9q4Psa8721yjKUJxlGcJOM4STjKMk9HGSfFNPsPahp/Tfq7wtpJzsi6crTSOTUlv+xWR5WLx49zQV5aiyvU3bpH1TbVxW3XT88qWrVmL509OzWp+fr7I73iaXl4ltL3bqraZd11c6n8JJAfNRqURknok9W+CS4tv2Iz+yOhm08lpUYGS0/wAOyt01/p2aR+DAwhv/AFYdXs9ozWRkRlDZ8JedLjF5Uk+Ndb9XslJe1Ljq47h0M6loVuN21LI3SWjWLS5eR1/tJvRz/upJe2SOvVVRjFQhGMYRSjGMUoxjFcEklyQMlVcYpRjFRjFKMYxSUYxXBJJckVgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjWvM+gCmNcVyil4JIqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==', 'image', '2023-06-07 13:38:35', NULL, 0),
(81, 'Ảnh', 'https://cdn-img-v2.webbnc.net/uploadv2/web/34/3492/product/2021/09/03/09/32/1630675648_wm126-black.jpg_resize500x500.jpg', 'image', '2023-06-07 13:38:35', NULL, 0),
(82, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:36', NULL, 0),
(83, 'Ảnh', 'https://www.thienthientan.vn/wp-content/uploads/2020/06/Mouse-Alienware-AW958-1.jpg', 'image', '2023-06-07 13:38:36', NULL, 0),
(84, 'Ảnh', 'https://vn-test-11.slatic.net/p/0894bd312b0b7eb09349eab6f41c4fda.jpg', 'image', '2023-06-07 13:38:36', NULL, 0),
(85, 'Ảnh', 'https://resource.logitech.com/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png', 'image', '2023-06-07 13:38:36', NULL, 0),
(86, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:36', NULL, 0),
(87, 'Ảnh', 'https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k840/gallery/k840-gallery-01-new.png', 'image', '2023-06-07 13:38:37', NULL, 0),
(88, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:37', NULL, 0);
INSERT INTO `assets` (`asset_id`, `asset_name`, `asset_path`, `asset_type`, `created_at`, `modified_at`, `deleted`) VALUES
(89, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:37', NULL, 0),
(90, 'Ảnh', 'https://m.maihoang.com.vn/thumb/crop/7709', 'image', '2023-06-07 13:38:38', NULL, 0),
(91, 'Ảnh', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqUpjbPihM64Xi5RDWzUMc2wxwbKFn878CaErDFziOMyy3Uc-KU08Dy2NcSSCmGii9ng&usqp=CAU', 'image', '2023-06-07 13:38:38', NULL, 0),
(92, 'Ảnh', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBz_u5x9ZtE90yJOvaf6mpUNcTnKNJ4din4mAB9fmp3JeGu9cNMo6QeMtWEmTwSvVEVJ4&usqp=CAU', 'image', '2023-06-07 13:38:38', NULL, 0),
(93, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:39', NULL, 0),
(94, 'Ảnh', 'data:image/jpeg;base64,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0nK92IfTiOf4yUvVREQEREBERAwHw5WumZ7/AKbFPoRj/Cc1Fp058K8O/T84vM5bHHpw2E5fugXkylZZWKw1fWVrI6xWBJWKyOsVgS3RWR1isCSsXSOsQJQYrIqytYEl0VkdZWsC+6KyysVgX1i6WVisCSsVllYrAkBnRvg9Wml5Pz4Qb1iW/jObwZ0x8C8O3TckOfxbB9JRSfthjOREQEREBERAgzWAMTDdD5LKymnGjAg09M8CPA/kPzmZ9dPcmxYga68UGQ/OZn18P3I8UGQ/OZn18P3JsWIGuvFBkPzmZ9fD9yV8UGQ/OZn109ybEiBrvxQ5D85mfXT3I8UOQ/OZn109ybEiBrzxRZD85mfXT3I8UWQ+XmPXT3JsOIGvPFFkPl5j109yVHgjyHy8x66+5NhRA194pMh8vMeuvuR4pNP+Vj/WD3ZsGIGv/FJp/bj/AFg92V8Uun9uP9Z/lPfxA8B4ptP/AOd9Z/lHim07/nfWH+U9/EDwPim07sxvrD/KV8U+ndmN9a097EDwXin075ON9a0r4qNN+Ti/WtPeRA8J4qNN+Ri/WvPaZTLrhYaYa7Iiqij9VQAPYJPEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k=', 'image', '2023-06-07 13:38:39', NULL, 0),
(95, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:40', NULL, 0);
INSERT INTO `assets` (`asset_id`, `asset_name`, `asset_path`, `asset_type`, `created_at`, `modified_at`, `deleted`) VALUES
(96, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:40', NULL, 0),
(97, 'Ảnh', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661', 'image', '2023-06-07 13:38:41', NULL, 0),
(98, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:41', NULL, 0),
(99, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:41', NULL, 0),
(100, 'Ảnh', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-silver-cto-hero-202104?wid=1254&hei=1132&fmt=jpeg&qlt=90&.v=1617479510000', 'image', '2023-06-07 13:38:41', NULL, 0),
(101, 'Ảnh', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-storage-select-202212-11inch-space-gray-wifi?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1670865631441', 'image', '2023-06-07 13:38:42', NULL, 0),
(102, 'Ảnh', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-space-gray-wifi_AV1?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1670865949566', 'image', '2023-06-07 13:38:42', NULL, 0),
(103, 'Ảnh', 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-finish-select-202212-11inch-space-gray-wifi_AV2?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1670865953226', 'image', '2023-06-07 13:38:42', NULL, 0),
(104, 'Ảnh', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/e/text_ng_n_1__8.png', 'image', '2023-06-07 13:38:42', NULL, 0),
(105, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/e/text_ng_n_1__8.png', 'image', '2023-06-07 13:38:42', NULL, 0),
(106, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/i/microsoft_surface_pro-02_3.jpg', 'image', '2023-06-07 13:38:43', NULL, 0),
(107, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/6/3/637460459291631468_microsoft-surface-pro-7-1035g4-ban-phim-bac-4_3.jpg', 'image', '2023-06-07 13:38:43', NULL, 0),
(108, 'Ảnh', 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-tab-s7-plus-3.jpg', 'image', '2023-06-07 13:38:43', NULL, 0),
(109, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-tab-s7-plus-3.jpg', 'image', '2023-06-07 13:38:43', NULL, 0),
(110, 'Ảnh', 'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-tab-s7-plus-2.jpg', 'image', '2023-06-07 13:38:43', NULL, 0),
(111, 'Ảnh', 'data:image/jpeg;base64,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', 'image', '2023-06-07 13:38:43', NULL, 0);

--
-- Triggers `assets`
--
DELIMITER $$
CREATE TRIGGER `TRG_asset_modified_at` BEFORE UPDATE ON `assets` FOR EACH ROW BEGIN 
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` bigint NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `total_money` decimal(19,2) DEFAULT '0.00',
  `total_quantity` bigint DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `user_id`, `total_money`, `total_quantity`, `created_at`, `modified_at`, `deleted`) VALUES
(6, 1, '19290000.00', 1, '2023-05-12 17:38:21', '2023-06-08 12:49:51', 1),
(7, 8, '22140000.00', 2, '2023-06-07 23:19:45', '2023-06-08 14:24:17', 1),
(8, 1, '27190000.00', 1, '2023-06-08 19:58:56', '2023-06-08 13:33:15', 1),
(9, 8, '27190000.00', 1, '2023-06-09 10:55:45', '2023-06-09 03:56:52', 1),
(10, 8, '14000000.00', 1, '2023-06-09 12:32:24', '2023-06-09 16:39:26', 1),
(11, 1, '27190000.00', 1, '2023-06-09 20:32:41', '2023-06-09 20:34:10', 1),
(12, 1, '54380000.00', 2, '2023-06-09 20:54:32', '2023-06-09 20:57:03', 1),
(13, 8, '45980000.00', 2, '2023-06-10 19:39:13', '2023-06-11 18:49:58', 1),
(14, 8, '27190000.00', 1, '2023-06-11 18:56:17', '2023-06-11 18:56:39', 1),
(15, 1, '27190000.00', 1, '2023-06-11 19:13:46', '2023-06-11 19:14:48', 1);

--
-- Triggers `cart`
--
DELIMITER $$
CREATE TRIGGER `TRG_cart_modified_at` BEFORE UPDATE ON `cart` FOR EACH ROW BEGIN
	 SET NEW.modified_at =NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cart_item`
--

CREATE TABLE `cart_item` (
  `cart_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `price` decimal(19,2) DEFAULT '0.00',
  `quantity` bigint DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cart_item`
--

INSERT INTO `cart_item` (`cart_id`, `product_id`, `price`, `quantity`, `created_at`, `modified_at`, `deleted`) VALUES
(6, 11, '19290000.00', 1, '2023-06-08 11:49:21', NULL, 0),
(7, 4, '11450000.00', 1, '2023-06-08 14:23:37', NULL, 0),
(8, 1, '27190000.00', 1, '2023-06-08 12:58:58', NULL, 0),
(9, 1, '27190000.00', 1, '2023-06-09 03:55:48', NULL, 0),
(10, 13, '14000000.00', 1, '2023-06-09 05:32:27', '2023-06-09 13:19:27', 0),
(11, 1, '27190000.00', 1, '2023-06-09 20:32:40', '2023-06-09 20:33:16', 0),
(12, 1, '27190000.00', 2, '2023-06-09 20:54:31', '2023-06-09 20:56:26', 0),
(13, 1, '27190000.00', 1, '2023-06-11 18:48:49', NULL, 0),
(13, 16, '18790000.00', 1, '2023-06-10 19:39:13', NULL, 0),
(14, 1, '27190000.00', 1, '2023-06-11 18:56:17', NULL, 0),
(15, 1, '27190000.00', 1, '2023-06-11 19:13:45', NULL, 0);

--
-- Triggers `cart_item`
--
DELIMITER $$
CREATE TRIGGER `TRG_cart_item_modified_at` BEFORE UPDATE ON `cart_item` FOR EACH ROW BEGIN
	 SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` bigint NOT NULL,
  `category_name` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 'phone', '2023-06-07 13:00:38', NULL, 0),
(2, 'laptop', '2023-06-07 13:00:38', NULL, 0),
(3, 'tablet', '2023-06-07 13:00:39', NULL, 0),
(4, 'bàn phím', '2023-06-07 13:00:40', NULL, 0),
(5, 'chuột', '2023-06-07 13:00:40', NULL, 0);

--
-- Triggers `category`
--
DELIMITER $$
CREATE TRIGGER `TRG_category_created_at` BEFORE INSERT ON `category` FOR EACH ROW BEGIN 
	SET NEW.created_at = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_category_modified_at` BEFORE UPDATE ON `category` FOR EACH ROW BEGIN 
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `comment_description` longtext,
  `product_id` bigint NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `likes` bigint DEFAULT NULL,
  `reply_to` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Triggers `comments`
--
DELIMITER $$
CREATE TRIGGER `TRG_comment_created_at` BEFORE INSERT ON `comments` FOR EACH ROW SET NEW.created_at = NOW()
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_comment_modified_at` BEFORE UPDATE ON `comments` FOR EACH ROW SET NEW.modified_at = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` bigint NOT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 'Apple', '2023-06-07 13:39:35', NULL, 0),
(2, 'Samsung', '2023-06-07 13:39:36', NULL, 0),
(3, 'Dell', '2023-06-07 13:39:36', NULL, 0),
(4, 'Asus', '2023-06-07 13:39:36', NULL, 0),
(5, 'MSI', '2023-06-07 13:39:36', NULL, 0),
(6, 'Sony', '2023-06-07 13:39:36', NULL, 0),
(7, 'Lenovo', '2023-06-07 13:39:36', NULL, 0),
(8, 'Huawei', '2023-06-07 13:39:36', NULL, 0),
(9, 'Xiaomi', '2023-06-07 13:39:37', NULL, 0),
(10, 'Oppo', '2023-06-07 13:39:37', NULL, 0),
(11, 'Vivo', '2023-06-07 13:39:37', NULL, 0),
(12, 'HP', '2023-06-07 13:39:37', NULL, 0),
(13, 'GIgabyte', '2023-06-07 13:39:37', NULL, 0),
(14, 'Microsoft', '2023-06-07 13:39:37', NULL, 0),
(15, 'Logitech', '2023-06-07 13:39:37', NULL, 0),
(16, 'Razer', '2023-06-07 13:39:38', NULL, 0),
(17, 'Corsair', '2023-06-07 13:39:38', NULL, 0);

--
-- Triggers `company`
--
DELIMITER $$
CREATE TRIGGER `TRG_company_modified_at` BEFORE UPDATE ON `company` FOR EACH ROW BEGIN 
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `user_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `favorite`
--

INSERT INTO `favorite` (`user_id`, `product_id`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 1, '2023-06-11 19:13:48', NULL, 0),
(1, 12, '2023-06-15 20:43:39', NULL, 0),
(8, 1, '2023-06-11 18:48:54', NULL, 0),
(8, 4, '2023-06-15 20:39:03', NULL, 0);

--
-- Triggers `favorite`
--
DELIMITER $$
CREATE TRIGGER `TRG_favorite_modified_at` BEFORE UPDATE ON `favorite` FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `total_price` decimal(19,2) DEFAULT '0.00',
  `total_quantity` bigint DEFAULT '0',
  `receiver` varchar(50) NOT NULL,
  `delivery_message` varchar(50) DEFAULT NULL,
  `order_address` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `cart_id` bigint NOT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `total_price`, `total_quantity`, `receiver`, `delivery_message`, `order_address`, `created_at`, `modified_at`, `deleted`, `cart_id`, `status`) VALUES
(2, 8, '14000000.00', 1, 'khang', 'fdaf', 'hcm', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(3, 8, '14000000.00', 1, 'dfads', 'afsfd', 'afadsf', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(4, 8, '14000000.00', 1, 'dad', 'asdas', 'adsa', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(5, 8, '14000000.00', 1, 'fdfds', 'sdfdsf', 'sfdsf', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(6, 8, '14000000.00', 1, 'fdsfa', 'dfasf', 'fadsfa', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(7, 8, '14000000.00', 1, 'fsadfa', 'dfsaf', 'dsfaf', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(8, 8, '14000000.00', 1, 'fdsaf', 'fadsf', 'asfdsa', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(9, 8, '14000000.00', 1, 'fdsfa', 'fdasf', 'dfasf', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(10, 8, '14000000.00', 1, 'fdasf', 'dfas', 'adfas', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(11, 8, '14000000.00', 1, 'dfdsaf', 'asfdsa', 'afdasf', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(12, 8, '14000000.00', 1, 'dfsaf', 'dfsa', 'dfsaf', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(13, 8, '14000000.00', 1, 'dfdfsa', 'dfaf', 'fdasf', NULL, NULL, 0, 10, 'Chưa thanh toán'),
(14, 8, '14000000.00', 1, 'dfaf', 'fdasf', 'dfsa', NULL, '2023-06-09 16:39:26', 0, 10, 'Đã thanh toán'),
(15, 1, '27190000.00', 1, 'khang', 'oke', 'hcm', '2023-06-09 20:33:37', '2023-06-09 20:34:10', 0, 11, 'Đã thanh toán'),
(16, 1, '54380000.00', 2, 'khang', 'fsdja', 'hcm', '2023-06-09 20:56:37', '2023-06-09 20:57:03', 0, 12, 'Đã thanh toán'),
(17, 8, '45980000.00', 2, 'khang', 'oke', 'hcm', '2023-06-11 18:49:36', '2023-06-11 18:49:59', 0, 13, 'Đã thanh toán'),
(18, 8, '27190000.00', 1, 'fds', 'dfa', 'dfaf', '2023-06-11 18:56:25', '2023-06-11 18:56:39', 0, 14, 'Đã thanh toán'),
(19, 1, '27190000.00', 1, 'khang', 'oke', 'hcm', '2023-06-11 19:14:27', '2023-06-11 19:14:48', 0, 15, 'Đã thanh toán');

--
-- Triggers `orders`
--
DELIMITER $$
CREATE TRIGGER `TRG_order_modified_at` BEFORE UPDATE ON `orders` FOR EACH ROW BEGIN
	 SET NEW.modified_at =NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `order_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `price` decimal(19,2) DEFAULT '0.00',
  `quantity` bigint DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Triggers `order_item`
--
DELIMITER $$
CREATE TRIGGER `TRG_order_item_deleted` BEFORE DELETE ON `order_item` FOR EACH ROW BEGIN
	 UPDATE orders
	 SET total_price = total_price - OLD.price, total_quantity = total_quantity - OLD.quantity, modified_at= NOW()
	 WHERE order_id = old.order_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_order_item_insert` BEFORE INSERT ON `order_item` FOR EACH ROW BEGIN
	 UPDATE orders
	 SET total_price = total_price + NEW.price, total_quantity =total_quantity + NEW.quantity, modified_at= NOW()
	 WHERE order_id = NEW.order_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_order_item_update` BEFORE UPDATE ON `order_item` FOR EACH ROW BEGIN
	 UPDATE orders
	 SET total_price = total_price + NEW.price - OLD.price, total_quantity =total_quantity + NEW.quantity - OLD.quantity, modified_at= NOW()
	 WHERE order_id = NEW.order_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `post_id` bigint NOT NULL,
  `title` mediumtext,
  `content` longtext,
  `product_id` bigint DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Triggers `post`
--
DELIMITER $$
CREATE TRIGGER `TRG_post_created_at` BEFORE INSERT ON `post` FOR EACH ROW BEGIN 
	SET NEW.created_at = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_post_modified_at` BEFORE UPDATE ON `post` FOR EACH ROW BEGIN 
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` bigint NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `category_id` bigint DEFAULT NULL,
  `company_id` bigint DEFAULT NULL,
  `product_version` varchar(100) DEFAULT NULL,
  `product_stock` bigint DEFAULT NULL,
  `product_rating` bigint DEFAULT '0',
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_sold` bigint DEFAULT '0',
  `product_sales` int DEFAULT '0',
  `product_status` varchar(20) DEFAULT 'available',
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `category_id`, `company_id`, `product_version`, `product_stock`, `product_rating`, `product_price`, `product_sold`, `product_sales`, `product_status`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 'iPhone 14 Pro Max III', 1, 1, '128GB', 500, 0, '27190000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:42', '2023-06-10 13:06:16', 1),
(2, 'Laptop Asus TUF Gaming FX506LHB-HN188W', 2, 4, 'i5 10300H/8GB/512GB/15.6\'FHD/GeForce GTX 1650 4GB/Win11', 500, 0, '15690000.00', 17, 0, 'Còn bán', '2023-06-07 13:54:42', '2023-06-10 12:58:45', 0),
(3, 'Điện thoại di động Samsung Galaxy S21 Ultra', 1, 2, '128GB ', 500, 0, '10690000.00', 12, 0, 'Còn bán', '2023-06-07 13:54:42', '2023-06-10 12:58:45', 0),
(4, 'Điện thoại di động Samsung Galaxy S21 Ultra', 1, 2, '256GB', 500, 0, '11450000.00', 0, 0, 'Hết hàng', '2023-06-07 13:54:43', '2023-06-10 12:58:46', 0),
(5, 'Điện thoại di động Samsung Galaxy S21 Ultra', 1, 2, '512GB', 500, 0, '12690000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:43', '2023-06-10 12:58:47', 0),
(6, 'Điện thoại di động Samsung Galaxy S21 Ultra', 1, 2, '1TB', 500, 0, '12990000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:43', '2023-06-10 12:58:48', 0),
(7, 'Chuột Logitech G502 HERO', 5, 14, '', 500, 0, '1550000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:44', '2023-06-10 12:58:49', 0),
(8, 'Chuột Logitech G102 Lightsync', 5, 14, '', 500, 0, '550000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:44', '2023-06-10 12:58:50', 0),
(9, 'Chuột Logitech G402 Hyperion Fury', 5, 14, '', 500, 0, '999000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:44', '2023-06-10 12:58:51', 0),
(10, 'Chuột Logitech MX Master 3', 5, 14, '', 500, 0, '2799000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:44', '2023-06-10 12:58:52', 0),
(11, 'iPhone 13 Pro Max', 1, 1, '128GB', 500, 0, '19290000.00', 0, 10, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:53', 0),
(12, 'iPhone 13 Pro ', 1, 1, '128GB', 500, 0, '16290000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:53', 0),
(13, 'iPhone 13', 1, 1, '128GB', 500, 0, '14000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:54', 0),
(14, 'iPhone 14 Pro ', 1, 1, '128GB', 500, 0, '24999000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:55', 0),
(15, 'iPhone 14', 1, 1, '128GB', 500, 0, '22500000.00', 0, 30, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:55', 0),
(16, 'ASUS Zenbook 14X OLED UM5401QA-KN209W', 2, 4, 'Win 11', 500, 0, '18790000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:57', 0),
(17, 'Asus ROG Zephyrus G14', 2, 4, 'Win 10', 500, 0, '17000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:58', 0),
(18, 'Asus VivoBook S15', 2, 4, 'Win 10', 500, 0, '20000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:58', 0),
(19, 'Dell XPS 13', 2, 3, 'Win 10', 500, 0, '26000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:58:59', 0),
(20, 'Dell Inspiron 15', 2, 3, 'Win 10', 500, 0, '15000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:45', '2023-06-10 12:59:00', 0),
(21, 'Dell Latitude 7400', 2, 3, 'Win 10', 500, 0, '32000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:46', '2023-06-10 12:53:03', 0),
(22, 'Dell Alienware m15', 2, 3, 'Win 10', 500, 0, '45000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:46', '2023-06-10 12:53:08', 0),
(23, 'Dell G3 15', 2, 3, 'Win 10', 500, 0, '21000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:46', '2023-06-10 12:53:13', 0),
(24, 'Dell Vostro 14', 2, 3, 'Win 10', 500, 0, '15000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:46', '2023-06-10 12:53:30', 0),
(25, 'Dell Precision 5550', 2, 3, 'Win 10', 500, 0, '49000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:46', '2023-06-10 12:53:31', 0),
(26, 'Dell XPS 15', 2, 3, 'Win 10', 500, 0, '35550000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:46', '2023-06-10 12:53:32', 0),
(27, 'Chuột Asus ROG Gladius III', 5, 4, '', 500, 0, '2639000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:47', '2023-06-10 12:53:35', 0),
(28, 'Chuột Asus ROG Chakram', 5, 4, '', 500, 0, '1790000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:47', '2023-06-10 12:53:36', 0),
(29, 'Chuột Asus ROG Pugio II', 5, 4, '', 500, 0, '900000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:47', '2023-06-10 12:53:27', 0),
(30, 'Chuột Asus TUF Gaming M5', 5, 4, '', 500, 0, '1455000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:47', '2023-06-10 12:53:38', 0),
(31, 'Chuột ASUS Cerberus', 5, 4, '', 500, 0, '1000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:47', '2023-06-10 12:53:43', 0),
(32, 'Chuột ASUS ROG Strix Impact II', 5, 4, '', 500, 0, '500000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:47', '2023-06-10 12:53:44', 0),
(33, 'Chuột Dell Wireless Mouse-WM126', 5, 3, '', 500, 0, '280000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:48', '2023-06-10 12:53:45', 0),
(34, 'Chuột Dell Premier Wireless Mouse-WM527', 5, 3, '', 500, 0, '800000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:48', '2023-06-10 12:53:46', 0),
(35, 'Chuột Dell Alienware Elite Gaming Mouse-AW958', 5, 3, '', 500, 0, '1820000.00', 0, 5, 'Còn bán', '2023-06-07 13:54:48', '2023-06-10 12:53:46', 0),
(36, 'Chuột Dell Bluetooth Mouse-WM615', 5, 3, '', 500, 0, '600000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:48', '2023-06-10 12:53:37', 0),
(37, 'Bàn phím Logitech G Pro Mechanical Gaming ', 4, 15, '', 500, 0, '2220000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:48', '2023-06-10 12:53:47', 0),
(38, 'Bàn phím Logitech MX Keys Advanced Wireless Illuminated', 4, 15, '', 500, 0, '1800000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:48', '2023-06-10 12:53:48', 0),
(39, 'Bàn phím Logitech K840 Mechanical', 4, 15, '', 500, 0, '1500000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:49', '2023-06-10 12:53:49', 0),
(40, 'Bàn phím Logitech Craft Advanced Wireless', 4, 15, '', 500, 0, '3888000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:49', '2023-06-10 12:53:50', 0),
(41, 'Bàn phím Razer BlackWidow Elite Mechanical Gaming', 4, 16, '', 500, 0, '2350000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:49', '2023-06-10 12:53:51', 0),
(42, 'Bàn phím Razer Huntsman Elite Opto-Mechanical Gaming', 4, 16, '', 500, 0, '3700000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:49', '2023-06-10 12:53:51', 0),
(43, 'Bàn phím Razer Ornata Chroma Gaming', 4, 16, '', 500, 0, '1700000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:49', '2023-06-10 12:53:52', 0),
(44, 'Bàn phím Razer Cynosa Chroma', 4, 16, '', 500, 0, '1100000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:50', '2023-06-10 12:53:53', 0),
(45, 'Bàn phím Corsair K95 RGB Platinum Mechanical Gaming ', 4, 17, '', 500, 0, '3450000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:50', '2023-06-10 12:53:54', 0),
(46, 'Bàn phím Corsair K70 RGB MK.2 Mechanical Gaming', 4, 17, '', 500, 0, '2320000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:50', '2023-06-10 12:53:55', 0),
(47, 'Bàn phím Corsair K68 Mechanical Gaming', 4, 17, '', 500, 0, '1799000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:50', '2023-06-10 12:53:58', 0),
(48, 'MacBook Air (M1 Chip)', 2, 1, '', 500, 0, '22000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:50', '2023-06-10 12:53:59', 0),
(49, 'MacBook Pro 13-inch (M1 Chip)', 2, 1, '', 500, 0, '26780000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:50', '2023-06-10 12:54:00', 0),
(50, 'MacBook Pro 16-inch (Intel)', 2, 1, '', 500, 0, '51000000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:50', '2023-06-10 12:54:01', 0),
(51, 'iMac 24-inch (M1 Chip)', 2, 1, '', 500, 0, '27320000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:51', '2023-06-10 13:06:43', 0),
(52, 'Apple iPad Pro', 3, 1, '', 500, 0, '21190000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:51', '2023-06-10 12:54:02', 0),
(53, 'Samsung Galaxy Tab S7+', 3, 2, '', 500, 0, '22300000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:51', '2023-06-10 12:54:04', 0),
(54, 'Microsoft Surface Pro 7', 3, 14, '', 500, 0, '19990000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:51', '2023-06-10 12:53:23', 0),
(55, 'Huawei MatePad Pro', 3, 8, '', 500, 0, '18750000.00', 0, 0, 'Còn bán', '2023-06-07 13:54:51', '2023-06-10 12:53:29', 0),
(56, 'dfsdf', 1, 1, 'fadf', 5, 0, '234324.00', 0, 0, 'available', '2023-06-09 20:35:35', NULL, 0),
(57, 'dfasdf', 3, 7, 'fsafsa', 50, 0, '34234.00', 0, 0, 'available', '2023-06-09 20:57:54', '2023-06-09 20:58:11', 0);

--
-- Triggers `product`
--
DELIMITER $$
CREATE TRIGGER `TRG_product_created_at` BEFORE INSERT ON `product` FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_product_modified_at` BEFORE UPDATE ON `product` FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product_asset`
--

CREATE TABLE `product_asset` (
  `product_asset_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `asset_id` bigint NOT NULL,
  `asset_role` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product_asset`
--

INSERT INTO `product_asset` (`product_asset_id`, `product_id`, `asset_id`, `asset_role`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 1, 1, 'slide', '2023-06-07 13:57:37', '2023-06-10 13:06:16', 1),
(2, 1, 2, 'slide', '2023-06-07 13:57:37', '2023-06-10 13:06:16', 1),
(3, 1, 3, 'slide', '2023-06-07 13:57:37', '2023-06-10 13:06:16', 1),
(4, 1, 4, 'slide', '2023-06-07 13:57:37', '2023-06-10 13:06:16', 1),
(5, 1, 5, 'slide', '2023-06-07 13:57:37', '2023-06-10 13:06:16', 1),
(6, 1, 6, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(7, 1, 7, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(8, 1, 8, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(9, 1, 9, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(10, 1, 10, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(11, 1, 11, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(12, 1, 12, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(13, 1, 13, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(14, 1, 14, 'slide', '2023-06-07 13:57:38', '2023-06-10 13:06:16', 1),
(15, 1, 15, 'slide', '2023-06-07 13:57:39', '2023-06-10 13:06:16', 1),
(16, 1, 16, 'icon', '2023-06-07 13:57:39', '2023-06-10 13:06:16', 1),
(17, 2, 17, 'slide', '2023-06-07 13:57:39', '2023-06-10 13:04:35', 0),
(18, 2, 18, 'slide', '2023-06-07 13:57:39', '2023-06-10 13:04:35', 0),
(19, 2, 19, 'slide', '2023-06-07 13:57:39', '2023-06-10 13:04:35', 0),
(20, 2, 20, 'slide', '2023-06-07 13:57:40', '2023-06-10 13:04:35', 0),
(21, 2, 21, 'slide', '2023-06-07 13:57:40', '2023-06-10 13:04:35', 0),
(22, 2, 22, 'slide', '2023-06-07 13:57:40', '2023-06-10 13:04:35', 0),
(23, 2, 23, 'slide', '2023-06-07 13:57:40', '2023-06-10 13:04:35', 0),
(24, 2, 24, 'slide', '2023-06-07 13:57:40', '2023-06-10 13:04:35', 0),
(25, 2, 25, 'slide', '2023-06-07 13:57:40', '2023-06-10 13:04:35', 0),
(26, 2, 26, 'slide', '2023-06-07 13:57:41', '2023-06-10 13:04:35', 0),
(27, 2, 27, 'slide', '2023-06-07 13:57:41', '2023-06-10 13:04:35', 0),
(28, 2, 28, 'icon', '2023-06-07 13:57:41', '2023-06-10 13:04:35', 0),
(29, 3, 29, 'slide', '2023-06-07 13:57:41', '2023-06-10 13:04:35', 0),
(30, 3, 30, 'slide', '2023-06-07 13:57:41', '2023-06-10 13:04:35', 0),
(31, 3, 31, 'slide', '2023-06-07 13:57:42', '2023-06-10 13:04:35', 0),
(32, 3, 32, 'slide', '2023-06-07 13:57:42', '2023-06-10 13:04:35', 0),
(33, 3, 33, 'slide', '2023-06-07 13:57:42', '2023-06-10 13:04:35', 0),
(34, 3, 34, 'slide', '2023-06-07 13:57:42', '2023-06-10 13:04:35', 0),
(35, 3, 35, 'slide', '2023-06-07 13:57:42', '2023-06-10 13:04:35', 0),
(36, 3, 36, 'slide', '2023-06-07 13:57:43', '2023-06-10 13:04:35', 0),
(38, 4, 30, 'slide', '2023-06-07 13:57:43', '2023-06-10 13:04:35', 0),
(39, 4, 31, 'slide', '2023-06-07 13:57:43', '2023-06-10 13:04:35', 0),
(40, 4, 32, 'slide', '2023-06-07 13:57:44', '2023-06-10 13:04:35', 0),
(41, 4, 33, 'slide', '2023-06-07 13:57:44', '2023-06-10 13:04:35', 0),
(42, 4, 34, 'slide', '2023-06-07 13:57:44', '2023-06-10 13:04:35', 0),
(43, 4, 35, 'slide', '2023-06-07 13:57:44', '2023-06-10 13:04:35', 0),
(44, 4, 36, 'slide', '2023-06-07 13:57:44', '2023-06-10 13:04:35', 0),
(45, 4, 37, 'slide', '2023-06-07 13:57:44', '2023-06-10 13:04:35', 0),
(46, 4, 38, 'icon', '2023-06-07 13:57:45', '2023-06-10 13:04:35', 0),
(47, 5, 30, 'slide', '2023-06-07 13:57:45', '2023-06-10 13:04:35', 0),
(48, 5, 31, 'slide', '2023-06-07 13:57:45', '2023-06-10 13:04:35', 0),
(49, 5, 32, 'slide', '2023-06-07 13:57:45', '2023-06-10 13:04:35', 0),
(50, 5, 33, 'slide', '2023-06-07 13:57:45', '2023-06-10 13:04:35', 0),
(51, 5, 34, 'slide', '2023-06-07 13:57:45', '2023-06-10 13:04:35', 0),
(52, 5, 35, 'slide', '2023-06-07 13:57:45', '2023-06-10 13:04:35', 0),
(53, 5, 36, 'slide', '2023-06-07 13:57:46', '2023-06-10 13:04:35', 0),
(54, 5, 37, 'slide', '2023-06-07 13:57:46', '2023-06-10 13:04:35', 0),
(55, 5, 38, 'icon', '2023-06-07 13:57:46', '2023-06-10 13:04:35', 0),
(56, 6, 30, 'slide', '2023-06-07 13:57:46', '2023-06-10 13:04:35', 0),
(57, 6, 31, 'slide', '2023-06-07 13:57:46', '2023-06-10 13:04:35', 0),
(58, 6, 32, 'slide', '2023-06-07 13:57:46', '2023-06-10 13:04:35', 0),
(59, 6, 33, 'slide', '2023-06-07 13:57:46', '2023-06-10 13:04:35', 0),
(60, 6, 34, 'slide', '2023-06-07 13:57:47', '2023-06-10 13:04:35', 0),
(61, 6, 35, 'slide', '2023-06-07 13:57:47', '2023-06-10 13:04:35', 0),
(62, 6, 36, 'slide', '2023-06-07 13:57:47', '2023-06-10 13:04:35', 0),
(63, 6, 37, 'slide', '2023-06-07 13:57:47', '2023-06-10 13:04:35', 0),
(64, 6, 38, 'icon', '2023-06-07 13:57:47', '2023-06-10 13:04:35', 0),
(65, 7, 39, 'icon', '2023-06-07 13:57:47', '2023-06-10 13:04:35', 0),
(66, 7, 40, 'slide', '2023-06-07 13:57:47', '2023-06-10 13:04:35', 0),
(67, 7, 41, 'slide', '2023-06-07 13:57:47', '2023-06-10 13:04:35', 0),
(68, 7, 42, 'slide', '2023-06-07 13:57:48', '2023-06-10 13:04:35', 0),
(69, 7, 43, 'slide', '2023-06-07 13:57:48', '2023-06-10 13:04:35', 0),
(70, 8, 44, 'slide', '2023-06-07 13:57:48', '2023-06-10 13:04:35', 0),
(71, 8, 45, 'slide', '2023-06-07 13:57:48', '2023-06-10 13:04:35', 0),
(72, 8, 46, 'slide', '2023-06-07 13:57:48', '2023-06-10 13:04:35', 0),
(73, 8, 47, 'slide', '2023-06-07 13:57:48', '2023-06-10 13:04:35', 0),
(74, 8, 48, 'slide', '2023-06-07 13:57:48', '2023-06-10 13:04:35', 0),
(75, 8, 49, 'slide', '2023-06-07 13:57:48', '2023-06-10 13:04:35', 0),
(76, 8, 50, 'icon', '2023-06-07 13:57:49', '2023-06-10 13:04:35', 0),
(77, 37, 51, 'slide', '2023-06-07 13:57:49', '2023-06-10 13:04:35', 0),
(78, 37, 52, 'slide', '2023-06-07 13:57:49', '2023-06-10 13:04:35', 0),
(79, 37, 53, 'slide', '2023-06-07 13:57:49', '2023-06-10 13:04:35', 0),
(80, 37, 54, 'slide', '2023-06-07 13:57:50', '2023-06-10 13:04:35', 0),
(81, 37, 55, 'slide', '2023-06-07 13:57:50', '2023-06-10 13:04:35', 0),
(82, 37, 56, 'slide', '2023-06-07 13:57:50', '2023-06-10 13:04:35', 0),
(84, 9, 58, 'icon', '2023-06-07 13:57:50', '2023-06-10 13:04:35', 0),
(85, 10, 59, 'icon', '2023-06-07 13:57:50', '2023-06-10 13:04:35', 0),
(86, 11, 60, 'icon', '2023-06-07 13:57:50', '2023-06-10 13:04:35', 0),
(87, 12, 61, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(88, 13, 62, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(89, 14, 63, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(90, 15, 64, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(91, 16, 65, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(92, 17, 66, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(93, 18, 67, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(94, 19, 68, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(95, 20, 69, 'icon', '2023-06-07 13:57:51', '2023-06-10 13:04:35', 0),
(96, 21, 70, 'icon', '2023-06-07 13:57:52', '2023-06-10 13:04:35', 0),
(97, 22, 71, 'icon', '2023-06-07 13:57:52', '2023-06-10 13:04:35', 0),
(98, 23, 72, 'icon', '2023-06-07 13:57:52', '2023-06-10 13:04:35', 0),
(99, 24, 73, 'icon', '2023-06-07 13:57:52', '2023-06-10 13:04:35', 0),
(100, 25, 74, 'icon', '2023-06-07 13:57:52', '2023-06-10 13:04:35', 0),
(101, 26, 75, 'icon', '2023-06-07 13:57:52', '2023-06-10 13:04:35', 0),
(102, 27, 76, 'icon', '2023-06-07 13:57:52', '2023-06-10 13:04:35', 0),
(103, 28, 77, 'icon', '2023-06-07 13:57:53', '2023-06-10 13:04:35', 0),
(104, 29, 78, 'icon', '2023-06-07 13:57:53', '2023-06-10 13:04:35', 0),
(105, 30, 79, 'icon', '2023-06-07 13:57:53', '2023-06-10 13:04:35', 0),
(106, 31, 80, 'icon', '2023-06-07 13:57:53', '2023-06-10 13:04:35', 0),
(107, 32, 81, 'icon', '2023-06-07 13:57:53', '2023-06-10 13:04:35', 0),
(108, 33, 82, 'icon', '2023-06-07 13:57:53', '2023-06-10 13:04:35', 0),
(109, 34, 83, 'icon', '2023-06-07 13:57:54', '2023-06-10 13:04:35', 0),
(110, 35, 84, 'icon', '2023-06-07 13:57:54', '2023-06-10 13:04:35', 0),
(111, 36, 85, 'icon', '2023-06-07 13:57:54', '2023-06-10 13:04:35', 0),
(112, 37, 86, 'icon', '2023-06-07 13:57:54', '2023-06-10 13:04:35', 0),
(113, 38, 87, 'icon', '2023-06-07 13:57:54', '2023-06-10 13:04:35', 0),
(114, 39, 88, 'icon', '2023-06-07 13:57:54', '2023-06-10 13:04:35', 0),
(115, 40, 89, 'icon', '2023-06-07 13:57:54', '2023-06-10 13:04:35', 0),
(116, 41, 90, 'icon', '2023-06-07 13:57:55', '2023-06-10 13:04:35', 0),
(117, 42, 91, 'icon', '2023-06-07 13:57:55', '2023-06-10 13:04:35', 0),
(118, 43, 92, 'icon', '2023-06-07 13:57:55', '2023-06-10 13:04:35', 0),
(119, 44, 93, 'icon', '2023-06-07 13:57:55', '2023-06-10 13:04:35', 0),
(120, 45, 94, 'icon', '2023-06-07 13:57:55', '2023-06-10 13:04:35', 0),
(121, 46, 95, 'icon', '2023-06-07 13:57:55', '2023-06-10 13:04:35', 0),
(122, 47, 96, 'icon', '2023-06-07 13:57:55', '2023-06-10 13:04:35', 0),
(123, 48, 97, 'icon', '2023-06-07 13:57:56', '2023-06-10 13:04:35', 0),
(124, 49, 98, 'icon', '2023-06-07 13:57:56', '2023-06-10 13:04:35', 0),
(125, 50, 99, 'icon', '2023-06-07 13:57:56', '2023-06-10 13:04:35', 0),
(126, 51, 100, 'icon', '2023-06-07 13:57:56', '2023-06-10 13:04:35', 0),
(127, 52, 101, 'icon', '2023-06-07 13:57:56', '2023-06-10 13:04:35', 0),
(128, 53, 102, 'slide', '2023-06-07 13:57:56', '2023-06-10 13:04:35', 0),
(129, 53, 103, 'icon', '2023-06-07 13:57:56', '2023-06-10 13:04:35', 0),
(130, 53, 104, 'slide', '2023-06-07 13:57:56', '2023-06-10 13:04:35', 0),
(131, 55, 105, 'slide', '2023-06-07 13:57:57', '2023-06-10 13:04:35', 0),
(132, 55, 106, 'icon', '2023-06-07 13:57:57', '2023-06-10 13:04:35', 0),
(133, 55, 107, 'slide', '2023-06-07 13:57:57', '2023-06-10 13:04:35', 0),
(134, 55, 108, 'slide', '2023-06-07 13:57:57', '2023-06-10 13:04:35', 0),
(135, 54, 109, 'slide', '2023-06-07 13:57:57', '2023-06-10 13:04:35', 0),
(136, 54, 110, 'icon', '2023-06-07 13:57:57', '2023-06-10 13:04:35', 0),
(137, 54, 111, 'slide', '2023-06-07 13:57:58', '2023-06-10 13:04:35', 0);

--
-- Triggers `product_asset`
--
DELIMITER $$
CREATE TRIGGER `TRG_product_asset_modified_at` BEFORE UPDATE ON `product_asset` FOR EACH ROW BEGIN 
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product_detail`
--

CREATE TABLE `product_detail` (
  `product_id` bigint NOT NULL,
  `spec_id` bigint NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product_detail`
--

INSERT INTO `product_detail` (`product_id`, `spec_id`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 4, '2023-06-07 13:59:42', NULL, 0),
(1, 5, '2023-06-07 13:59:42', NULL, 0),
(1, 6, '2023-06-07 13:59:42', NULL, 0),
(1, 7, '2023-06-07 13:59:43', NULL, 0),
(1, 8, '2023-06-07 13:59:42', NULL, 0),
(1, 9, '2023-06-07 13:59:43', NULL, 0),
(1, 10, '2023-06-07 13:59:43', NULL, 0),
(1, 11, '2023-06-07 13:59:43', NULL, 0),
(2, 11, '2023-06-07 13:59:43', NULL, 0),
(2, 12, '2023-06-07 13:59:43', NULL, 0),
(2, 13, '2023-06-07 13:59:43', NULL, 0),
(2, 14, '2023-06-07 13:59:44', NULL, 0),
(2, 15, '2023-06-07 13:59:44', NULL, 0),
(2, 16, '2023-06-07 13:59:44', NULL, 0),
(2, 17, '2023-06-07 13:59:44', NULL, 0),
(2, 18, '2023-06-07 13:59:44', NULL, 0),
(2, 19, '2023-06-07 13:59:44', NULL, 0),
(3, 20, '2023-06-07 13:59:45', NULL, 0),
(3, 21, '2023-06-07 13:59:45', NULL, 0),
(3, 22, '2023-06-07 13:59:45', NULL, 0),
(3, 23, '2023-06-07 13:59:45', NULL, 0),
(3, 24, '2023-06-07 13:59:45', NULL, 0),
(3, 25, '2023-06-07 13:59:45', NULL, 0),
(3, 26, '2023-06-07 13:59:45', NULL, 0),
(3, 27, '2023-06-07 13:59:46', NULL, 0),
(3, 28, '2023-06-07 13:59:46', NULL, 0),
(3, 29, '2023-06-07 13:59:46', NULL, 0),
(3, 30, '2023-06-07 13:59:46', NULL, 0),
(3, 31, '2023-06-07 13:59:46', NULL, 0),
(4, 21, '2023-06-07 13:59:46', NULL, 0),
(4, 22, '2023-06-07 13:59:46', NULL, 0),
(4, 23, '2023-06-07 13:59:46', NULL, 0),
(4, 25, '2023-06-07 13:59:47', NULL, 0),
(4, 26, '2023-06-07 13:59:47', NULL, 0),
(4, 27, '2023-06-07 13:59:47', NULL, 0),
(4, 28, '2023-06-07 13:59:47', NULL, 0),
(4, 29, '2023-06-07 13:59:47', NULL, 0),
(4, 30, '2023-06-07 13:59:47', NULL, 0),
(4, 31, '2023-06-07 13:59:48', NULL, 0),
(4, 32, '2023-06-07 13:59:48', NULL, 0),
(4, 33, '2023-06-07 13:59:47', NULL, 0),
(5, 21, '2023-06-07 13:59:48', NULL, 0),
(5, 22, '2023-06-07 13:59:48', NULL, 0),
(5, 23, '2023-06-07 13:59:48', NULL, 0),
(5, 25, '2023-06-07 13:59:49', NULL, 0),
(5, 26, '2023-06-07 13:59:49', NULL, 0),
(5, 27, '2023-06-07 13:59:49', NULL, 0),
(5, 28, '2023-06-07 13:59:49', NULL, 0),
(5, 29, '2023-06-07 13:59:49', NULL, 0),
(5, 30, '2023-06-07 13:59:49', NULL, 0),
(5, 31, '2023-06-07 13:59:50', NULL, 0),
(5, 32, '2023-06-07 13:59:50', NULL, 0),
(5, 34, '2023-06-07 13:59:48', NULL, 0),
(6, 21, '2023-06-07 13:59:50', NULL, 0),
(6, 22, '2023-06-07 13:59:50', NULL, 0),
(6, 23, '2023-06-07 13:59:50', NULL, 0),
(6, 25, '2023-06-07 13:59:51', NULL, 0),
(6, 26, '2023-06-07 13:59:51', NULL, 0),
(6, 27, '2023-06-07 13:59:51', NULL, 0),
(6, 28, '2023-06-07 13:59:51', NULL, 0),
(6, 29, '2023-06-07 13:59:51', NULL, 0),
(6, 30, '2023-06-07 13:59:51', NULL, 0),
(6, 31, '2023-06-07 13:59:52', NULL, 0),
(6, 32, '2023-06-07 13:59:52', NULL, 0),
(6, 35, '2023-06-07 13:59:50', NULL, 0),
(7, 36, '2023-06-07 13:59:52', NULL, 0),
(7, 37, '2023-06-07 13:59:52', NULL, 0),
(7, 38, '2023-06-07 13:59:52', NULL, 0),
(7, 39, '2023-06-07 13:59:52', NULL, 0),
(37, 39, '2023-06-07 13:59:53', NULL, 0),
(37, 40, '2023-06-07 13:59:53', NULL, 0),
(37, 41, '2023-06-07 13:59:53', NULL, 0),
(37, 42, '2023-06-07 13:59:54', NULL, 0),
(37, 43, '2023-06-07 13:59:54', NULL, 0),
(37, 44, '2023-06-07 13:59:54', NULL, 0),
(56, 45, '2023-06-09 20:35:35', NULL, 0),
(57, 46, '2023-06-09 20:57:54', NULL, 0);

--
-- Triggers `product_detail`
--
DELIMITER $$
CREATE TRIGGER `TRG_product_detail_created_at` BEFORE INSERT ON `product_detail` FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_product_detail_modified_at` BEFORE UPDATE ON `product_detail` FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` bigint NOT NULL,
  `review_content` longtext NOT NULL,
  `review_rating` int NOT NULL,
  `user_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `likes` bigint NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `review_content`, `review_rating`, `user_id`, `product_id`, `likes`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 'fdsfa', 2, 8, 5, 0, '2023-06-09 19:27:11', NULL, 0),
(2, 'fdsfa', 2, 8, 4, 0, '2023-06-09 19:52:48', NULL, 0),
(3, 'san pham tot', 4, 1, 1, 0, '2023-06-09 20:32:58', NULL, 0),
(4, 'oke', 3, 1, 1, 0, '2023-06-09 20:54:44', NULL, 0),
(5, 'fda', 2, 8, 1, 0, '2023-06-11 18:49:05', NULL, 0),
(6, 'tot', 2, 1, 1, 0, '2023-06-11 19:14:01', NULL, 0);

--
-- Triggers `reviews`
--
DELIMITER $$
CREATE TRIGGER `TRG_review_created_at` BEFORE INSERT ON `reviews` FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_review_modified_at` BEFORE UPDATE ON `reviews` FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `spec`
--

CREATE TABLE `spec` (
  `spec_id` bigint NOT NULL,
  `spec_name` varchar(50) NOT NULL,
  `group_id` bigint DEFAULT NULL,
  `spec_detail` varchar(100) NOT NULL,
  `spec_value` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `spec`
--

INSERT INTO `spec` (`spec_id`, `spec_name`, `group_id`, `spec_detail`, `spec_value`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 'ram 8gb', 4, 'Dung lượng ram', '8gb', '2023-06-07 13:44:14', NULL, 0),
(2, 'cpu snapdragon', 3, 'Phiên bản CPU', 'Snapdragon 8 Gen 1', '2023-06-07 13:44:14', NULL, 0),
(3, 'Hệ điều hành', 11, 'Hệ điều hành', 'IOS 16', '2023-06-07 13:44:14', NULL, 0),
(4, 'Camera sau', 12, 'Camera', 'Chính 48 MP & Phụ 12 MP, 12 MP', '2023-06-07 13:44:14', NULL, 0),
(5, 'Camera trước', 12, 'Camera', '12 MP\n', '2023-06-07 13:44:15', NULL, 0),
(6, 'Chíp', 11, 'Chíp', 'Apple A16 Bionic\n', '2023-06-07 13:44:15', NULL, 0),
(7, 'Ram ', 4, 'Dung lượng ram', '6GB', '2023-06-07 13:44:15', NULL, 0),
(8, 'Dung lượng', 6, 'Dung lượng trong', '128GB', '2023-06-07 13:44:15', NULL, 0),
(9, 'Sim', 11, 'Sim', '1 Nano ESIM & 1eSim', '2023-06-07 13:44:15', NULL, 0),
(10, 'Pin', 9, 'Pin', '4323 mAh', '2023-06-07 13:44:16', NULL, 0),
(11, 'CPU', 3, 'Phiên bản CPUs', 'i510300H2.5GHz', '2023-06-07 13:44:16', '2023-06-09 19:39:31', 0),
(12, '\nRam', 4, 'Dung lượng ram', '8 GB', '2023-06-07 13:44:16', NULL, 0),
(13, 'Ổ cứng', 6, 'Ổ cứng', '512 GB SSD', '2023-06-07 13:44:16', NULL, 0),
(14, 'Màn hình ', 5, 'Màn hình', '15.6\"Full HD (1920 x 1080) 144Hz', '2023-06-07 13:44:16', NULL, 0),
(15, 'Card màn hình', 14, 'Card màn hình', 'Card rời, GTX 1650 4GB', '2023-06-07 13:44:16', NULL, 0),
(16, 'Hệ điều hành', 11, 'Hệ điều hành', 'Windows 11 Home SL\n', '2023-06-07 13:44:16', NULL, 0),
(17, 'Thiết kế', 2, 'Thiết kế', 'Vỏ nhựa - nắp lưng bằng kim loại', '2023-06-07 13:44:17', NULL, 0),
(18, 'Kích thước, khối lượng:', 2, 'Kích thước, khối lượng', 'Dài 359 mm - Rộng 256 mm - Dày 24.9 mm - Nặng 2.3 kg', '2023-06-07 13:44:17', NULL, 0),
(19, 'Thời điểm ra mắt', 11, 'Thời gian ra mắt', 'Năm 2021', '2023-06-07 13:44:17', NULL, 0),
(20, 'Màn hình', 5, 'Màn hình', 'Dynamic AMOLED 2X 6.8-inch', '2023-06-07 13:44:17', NULL, 0),
(21, 'Chíp', 11, 'Chíp', 'Qualcomm Snapdragon 888', '2023-06-07 13:44:17', NULL, 0),
(22, 'RAM', 4, 'Dung lượng ram', '12GB', '2023-06-07 13:44:18', NULL, 0),
(23, 'Bộ nhớ trong', 6, 'Bộ nhớ trong', '128GB', '2023-06-07 13:44:18', NULL, 0),
(24, 'Camera sau', 12, 'Camera sau', '108.0 MP + 10.0 MP + 12.0 MP + 10.0 MP\n', '2023-06-07 13:44:18', NULL, 0),
(25, 'Camera trước', 12, 'Camera trước', '	40.0 MP', '2023-06-07 13:44:18', NULL, 0),
(26, 'GPU', 11, 'GPU', 'Mali-G78 MP14\n', '2023-06-07 13:44:18', NULL, 0),
(27, 'Dung lượng pin	', 9, 'Pin', '5000 mAh\n', '2023-06-07 13:44:18', NULL, 0),
(28, 'Thẻ sim	', 11, 'Sim', '2 - 2 Nano SIM hoặc 1 eSIM, 1 Nano SIM\n', '2023-06-07 13:44:19', NULL, 0),
(29, 'Hệ điều hành	', 11, 'Hệ điều hành', 'Android 11\n', '2023-06-07 13:44:19', NULL, 0),
(30, 'Xuất xứ', 11, 'Xuất xứ', 'Trung Quốc / Việt Nam\n', '2023-06-07 13:44:19', NULL, 0),
(31, 'Thời gian ra mắt:', 11, 'Thời điểm ra mắt', 'Jan-21', '2023-06-07 13:44:19', NULL, 0),
(32, 'Bộ nhớ trong', 6, 'Dung lượng ', '256GB', '2023-06-07 13:44:19', NULL, 0),
(33, 'Bộ nhớ trong', 6, 'Dung lượng ', '512GB', '2023-06-07 13:44:19', NULL, 0),
(34, 'Bộ nhớ trong', 6, 'Dung lượng ', '1TB', '2023-06-07 13:44:19', NULL, 0),
(35, 'Chuẩn chuột', 11, 'Chuẩn chuột', 'Có dây', '2023-06-07 13:44:20', NULL, 0),
(36, 'Chuẩn giao tiếp', 11, 'Chuẩn giao tiếp', 'USB', '2023-06-07 13:44:20', NULL, 0),
(37, 'Độ phân giải', 11, 'Độ phân giải', '25600DPI', '2023-06-07 13:44:20', NULL, 0),
(38, 'Màu', 13, 'Màu sắc', 'Đen', '2023-06-07 13:44:20', NULL, 0),
(39, 'Kiểu bàn phím', 11, 'Kiểu bàn phím', 'TKL (87 phím)\n', '2023-06-07 13:44:20', NULL, 0),
(40, 'Loại bàn phím', 11, 'Loại bàn phím', 'Bàn phím cơ', '2023-06-07 13:44:20', NULL, 0),
(41, 'Chất liệu vỏ', 11, 'Chất liệu vỏ', 'Nhựa', '2023-06-07 13:44:20', NULL, 0),
(42, 'LED', 11, 'LED', 'RGB LightSync', '2023-06-07 13:44:20', NULL, 0),
(43, 'Kết nối', 11, 'Kết nối', 'Dây cáp rời', '2023-06-07 13:44:21', NULL, 0),
(44, 'Kích thước', 2, 'Kích thước', '	Dài 361 x Rộng 153 x Cao 34', '2023-06-07 13:44:21', NULL, 0),
(45, 'dfsa', 1, '33423', 'fdsaf', '2023-06-09 20:35:35', NULL, 0),
(46, 'fasf', 1, 'dfdas', '34234', '2023-06-09 20:57:54', NULL, 0);

--
-- Triggers `spec`
--
DELIMITER $$
CREATE TRIGGER `TRG_spec_created_at` BEFORE INSERT ON `spec` FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_spec_modified_at` BEFORE UPDATE ON `spec` FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `spec_group`
--

CREATE TABLE `spec_group` (
  `group_id` bigint NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `spec_group`
--

INSERT INTO `spec_group` (`group_id`, `group_name`, `created_at`, `modified_at`, `deleted`) VALUES
(1, 'info', '2023-06-07 13:40:40', NULL, 0),
(2, 'design and weight', '2023-06-07 13:40:40', NULL, 0),
(3, 'processor', '2023-06-07 13:40:40', NULL, 0),
(4, 'ram', '2023-06-07 13:40:40', NULL, 0),
(5, 'screen', '2023-06-07 13:40:40', NULL, 0),
(6, 'storage', '2023-06-07 13:40:40', NULL, 0),
(7, 'security', '2023-06-07 13:40:41', NULL, 0),
(8, 'os', '2023-06-07 13:40:41', NULL, 0),
(9, 'battery', '2023-06-07 13:40:41', NULL, 0),
(10, 'sound', '2023-06-07 13:40:41', NULL, 0),
(11, 'other', '2023-06-07 13:40:41', NULL, 0),
(12, 'camera', '2023-06-07 13:40:42', NULL, 0),
(13, 'color', '2023-06-07 13:40:42', NULL, 0),
(14, 'card', '2023-06-07 13:40:42', NULL, 0);

--
-- Triggers `spec_group`
--
DELIMITER $$
CREATE TRIGGER `TRG_spec_group_created_at` BEFORE INSERT ON `spec_group` FOR EACH ROW BEGIN
	SET NEW.created_at = NOW();
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_spec_group_modified_at` BEFORE UPDATE ON `spec_group` FOR EACH ROW BEGIN
	SET NEW.modified_at = NOW();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint NOT NULL,
  `username` varchar(50) NOT NULL,
  `pass_word` varchar(100) NOT NULL,
  `user_address` varchar(500) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_phone` varchar(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `avatar` varchar(500) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `role` varchar(10) DEFAULT 'USER',
  `full_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `pass_word`, `user_address`, `user_email`, `user_phone`, `created_at`, `modified_at`, `deleted`, `avatar`, `gender`, `dob`, `role`, `full_name`) VALUES
(1, 'khang', '$2a$10$YKCIC84ijjhV9tAEG7guHuMK0XvXh22Ir3NA9z0hwCkdhXAqUqcEK', 'HCM', 'khangfun@gmail.com', '097437473', '2023-04-19 17:51:24', '2023-06-09 20:58:32', 0, NULL, 'male', '2002-03-28 07:00:00', 'ADMIN', NULL),
(2, 'phuc', '$2a$10$bOOtthLd5M9FVFtf.56Q5eselDQeZU8rclRz8vlV94e/V.K0dZXLu', 'hcm', 'phuc123@gmail.com', NULL, '2023-04-19 18:08:36', NULL, 0, NULL, 'male', '2002-05-30 07:00:00', 'USER', NULL),
(4, 'tòn', '$2a$10$VKrfsOOyOCjlGzVujkzy1.y6fI5XUG40QSioWVlJchusUjeA/ng9a', 'hcm', 'ton@gmail.com', '0949348', '2023-05-05 18:22:37', '2023-06-09 05:23:16', 0, NULL, 'male', '2023-05-12 07:00:00', 'ADMIN', NULL),
(8, 'khangfun', '$2a$10$iPr/1v7i2TdSl2rQkSM4F.g3lVKsKXZRHllPLPVZKu2pOImcdiTBe', 'hcm', 'khangfun283@gmail.com', '4324820', '2023-06-06 06:48:10', '2023-06-08 07:37:33', 0, NULL, 'male', '2002-03-28 07:00:00', 'ADMIN', NULL),
(9, 'k28', '$2a$10$3Pv8ZBd9AJGUHjmbtN0CVewMrintQCyOxSaxinXCQCLu1/QF.K9e6', 'hcm', 'khangfun@gmail.com', '0123456789', '2023-06-09 20:02:45', NULL, 0, NULL, 'male', '2023-06-17 07:00:00', 'USER', NULL),
(10, 'k283', '$2a$10$vhArp8wlDqvHSBLEP1tPm.7748w0fbhlYOlLBPqwR/ELEOkrrEvDm', 'fdsfad', 'khangfun@gmail.com', '0765714981', '2023-12-16 22:05:40', NULL, 0, NULL, 'male', '2023-11-30 07:00:00', 'USER', NULL);

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `TRG_user_created_at` BEFORE INSERT ON `users` FOR EACH ROW SET NEW.created_at = NOW()
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `TRG_user_modified_at` BEFORE UPDATE ON `users` FOR EACH ROW SET NEW.modified_at = NOW()
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`asset_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `FK_cart_01` (`user_id`);

--
-- Indexes for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`cart_id`,`product_id`),
  ADD KEY `FK_cart_item_02` (`product_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `category_name` (`category_name`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `FK_comment_01` (`user_id`),
  ADD KEY `FK_comment_02` (`product_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD KEY `FK_favorite_02` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `FK_orders_02` (`cart_id`),
  ADD KEY `FK_orders_01` (`user_id`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`order_id`,`product_id`),
  ADD KEY `FK_order_item_02` (`product_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `FK_post_01` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `UNQ_product_product_name_version` (`product_name`,`product_version`),
  ADD KEY `FK_product_01` (`category_id`),
  ADD KEY `FK_product_02` (`company_id`);

--
-- Indexes for table `product_asset`
--
ALTER TABLE `product_asset`
  ADD PRIMARY KEY (`product_asset_id`),
  ADD KEY `FK_product_asset_01` (`product_id`),
  ADD KEY `FK_product_asset_02` (`asset_id`);

--
-- Indexes for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD PRIMARY KEY (`product_id`,`spec_id`),
  ADD KEY `FK_product_detail_01` (`product_id`),
  ADD KEY `FK_product_detail_02` (`spec_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `FK_review_01` (`product_id`),
  ADD KEY `FK_review_02` (`user_id`);

--
-- Indexes for table `spec`
--
ALTER TABLE `spec`
  ADD PRIMARY KEY (`spec_id`),
  ADD KEY `FK_spec_01` (`group_id`);

--
-- Indexes for table `spec_group`
--
ALTER TABLE `spec_group`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `asset_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `product_asset`
--
ALTER TABLE `product_asset`
  MODIFY `product_asset_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `spec`
--
ALTER TABLE `spec`
  MODIFY `spec_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `spec_group`
--
ALTER TABLE `spec_group`
  MODIFY `group_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK_cart_01` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD CONSTRAINT `FK_cart_item_01` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`),
  ADD CONSTRAINT `FK_cart_item_02` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_comment_01` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `FK_comment_02` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `FK_favorite_01` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `FK_favorite_02` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_orders_01` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `FK_orders_02` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`);

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `FK_order_item_01` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `FK_order_item_02` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_post_01` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_product_01` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `FK_product_02` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`);

--
-- Constraints for table `product_asset`
--
ALTER TABLE `product_asset`
  ADD CONSTRAINT `FK_product_asset_01` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `FK_product_asset_02` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`asset_id`);

--
-- Constraints for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD CONSTRAINT `FK_product_detail_01` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `FK_product_detail_02` FOREIGN KEY (`spec_id`) REFERENCES `spec` (`spec_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FK_review_01` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `FK_review_02` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `spec`
--
ALTER TABLE `spec`
  ADD CONSTRAINT `FK_spec_01` FOREIGN KEY (`group_id`) REFERENCES `spec_group` (`group_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
