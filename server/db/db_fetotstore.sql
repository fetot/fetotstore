-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Jan 2021 pada 23.04
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fetotstore`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `accspecs`
--

CREATE TABLE `accspecs` (
  `id` int(11) NOT NULL,
  `product` int(11) NOT NULL,
  `brand` int(11) NOT NULL,
  `model` varchar(50) NOT NULL,
  `kompatibel` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brand_nama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `brands`
--

INSERT INTO `brands` (`id`, `brand_nama`) VALUES
(1, 'Apple'),
(2, 'Oppo'),
(3, 'Samsung'),
(4, 'Huawei'),
(5, 'Vivo'),
(6, 'Xiaomi'),
(7, 'Realme');

-- --------------------------------------------------------

--
-- Struktur dari tabel `catalog`
--

CREATE TABLE `catalog` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `catalog`
--

INSERT INTO `catalog` (`id`, `nama`) VALUES
(1, 'Smartphone'),
(2, 'Tablet'),
(3, 'Aksesoris');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `kodeproduk` varchar(50) NOT NULL,
  `brand` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `kategori` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `garansi` varchar(20) NOT NULL,
  `deskripsi` text NOT NULL,
  `thumbnail` varchar(500) NOT NULL,
  `dateadded` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`kodeproduk`, `brand`, `nama`, `kategori`, `harga`, `garansi`, `deskripsi`, `thumbnail`, `dateadded`) VALUES
('mi10tpro', 6, 'Mi 10T Pro', 1, 6999999, '18 Bulan', 'Wonderful in all aspects.\r\nNext-Level 5G Flagship\r\n\r\n- 108MP/64MP triple kamera AI\r\n- 144Hz Tampilan Adaptive Sync dengan True Color\r\n- Prosesor Qualcomm® Snapdragon™ 865 dengan 5G\r\n- Kapasitas baterai 5000mAh (typ) dengan pengisian daya cepat 33W', 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10t-5g-pro.jpg', '2021-01-21 21:52:50'),
('rmnarzo20pro', 7, 'Narzo 20 Pro', 1, 3399000, '12 Bulan', 'Boost The Power', 'https://fdn2.gsmarena.com/vv/bigpic/realme-narzo-20-pro.jpg', '2021-01-21 21:52:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `specs`
--

CREATE TABLE `specs` (
  `kodeproduk` varchar(50) NOT NULL,
  `warna` varchar(50) NOT NULL,
  `jaringan` varchar(50) NOT NULL,
  `os` varchar(50) NOT NULL,
  `prosesor` varchar(200) NOT NULL,
  `gpu` varchar(50) NOT NULL,
  `ram` varchar(20) NOT NULL,
  `internal` varchar(20) NOT NULL,
  `ukuranlayar` varchar(20) NOT NULL,
  `tipelayar` varchar(100) NOT NULL,
  `resolusilayar` varchar(50) NOT NULL,
  `kamerabelakang` varchar(500) NOT NULL,
  `kameradepan` varchar(200) NOT NULL,
  `fiturkamera` varchar(500) NOT NULL,
  `audio` varchar(200) NOT NULL,
  `wlan` varchar(200) NOT NULL,
  `bluetooth` varchar(100) NOT NULL,
  `gps` varchar(100) NOT NULL,
  `sensor` varchar(500) NOT NULL,
  `baterai` varchar(50) NOT NULL,
  `pengisiandaya` varchar(100) NOT NULL,
  `memoryeksternal` varchar(50) NOT NULL,
  `sim` varchar(50) NOT NULL,
  `berat` varchar(50) NOT NULL,
  `dimensi` varchar(100) NOT NULL,
  `lainnya` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `specs`
--

INSERT INTO `specs` (`kodeproduk`, `warna`, `jaringan`, `os`, `prosesor`, `gpu`, `ram`, `internal`, `ukuranlayar`, `tipelayar`, `resolusilayar`, `kamerabelakang`, `kameradepan`, `fiturkamera`, `audio`, `wlan`, `bluetooth`, `gps`, `sensor`, `baterai`, `pengisiandaya`, `memoryeksternal`, `sim`, `berat`, `dimensi`, `lainnya`) VALUES
('mi10tpro', 'Lunar Silver', 'GSM / HSPA / LTE / 5G*', 'Android 10, MIUI 12', 'Qualcomm SM8250 Snapdragon 865 7 nm+ (Octa-core 1x2.84 GHz Kryo 585 & 3x2.42 GHz Kryo 585 & 4x1.80 GHz Kryo 585)', 'Adreno 650', '8 GB', '256 GB', '6.67 inch', 'IPS LCD, 144Hz, HDR10+, 500 nits (typ), 650 nits (peak)', '1080 x 2400 pixels, 20:9 ratio (~395 ppi density)', '108 MP f/1.7, 26mm (wide), 1/1.33\", 0.8µm, PDAF<br />\r\n13 MP, f/2.4, 123˚ (ultrawide), 1.12µm<br />\r\n5 MP, f/2.4, (macro), AF<br />', '20 MP, f/2.2, 27mm (wide), 1/3.4\", 0.8µm', 'Enam mode Pencahayaan panjang, Kloning foto, Beruntun dengan timer (Timed burst), Filter foto baru: Fokus warna/Cyberpunk/Nuansa emas /Es hitam, Mode Dokumen 2.0, Mode Panorama,  Mode Pro, Mode Raw, Mode Portrait latar belakang blur, Mode Malam 2.0, Kamera AI 2.0, AI Beautify, Pelangsingan cerdas AI, Mode Portrait AI, SkyScaping (efek langit) AI 3.0, Pencahayaan studio AI, Foto resolusi tinggi AI, Deteksi suasana AI, Google Lens, Timer foto, Pengenalan wajah (face recognition), HDR, Koreksi dist', 'Dual speaker super linear<br />\r\n1012 speaker super-linear untuk atas dan 1216 speaker super-linear untuk bawah<br />\r\n0,5 mm amplitudo inti stainless steel super linear<br />', 'Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct, hotspot', '5.1, A2DP, LE, aptX HD, aptX Adaptive', 'A-GPS, GLONASS, BDS, GALILEO, QZSS, Dual Band GPS', 'Sensor jarak, Sensor cahaya sekitar, Akselerometer, Giroskop, Kompas elektronik, Motor linear sumbu X, IR Blaster', '5000 mAh', 'Fast charging 33W & Power Delivery 3.0', 'No', 'Dual Nano SIM', '218 gr', '165,1 x 76,4 x 9,33 mm', 'NFC, 8K Video Recording'),
('rmnarzo20pro', 'White Knight', 'GSM / HSPA / LTE', 'Android 10', 'Mediatek Helio G95 (12 nm) Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)', 'ARM Mali-G76 MC4', '8 GB', '128 GB', '6.5 inch', 'IPS LCD', '1080 x 2400 pixels', '48 MP, f/1.8, 26mm (wide), 1/2.0\", 0.8µm, PDAF\r\n8 MP, f/2.3, 119˚ (ultrawide), 1/4.0\", 1.12µm\r\n2 MP, f/2.4, (macro)\r\n2 MP, f/2.4, (depth)', '16 MP, f/2.1, 26mm (wide), 1/3.09\", 1.0µm', 'Super Nightscape, Panorama, Portrait Mode, Time-lapse Photography, HDR, Ultra Wide, Ultra Macro, AI Scene Recognition, AI Beauty, Filter, Chroma Boost', '3.5mm jack', 'Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot', '5.0, A2DP, LE, aptX HD', 'A-GPS, Beidou, GLONASS', 'Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, magnetic induction, light', '4500 mAh', 'USB Type-C 2.0, Fast charging 65W', 'MicroSD Slot', 'Dual Nano SIM', '191 g', '162.3 x 75.4 x 9.4 mm', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `stok`
--

CREATE TABLE `stok` (
  `kodeproduk` varchar(50) NOT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `stok`
--

INSERT INTO `stok` (`kodeproduk`, `jumlah`) VALUES
('mi10t', 100);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL,
  `email` varchar(320) NOT NULL,
  `notelp` varchar(13) NOT NULL,
  `namadepan` varchar(50) NOT NULL,
  `namabelakang` varchar(50) NOT NULL,
  `jeniskelamin` varchar(20) NOT NULL,
  `tgl_lahir` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `notelp`, `namadepan`, `namabelakang`, `jeniskelamin`, `tgl_lahir`) VALUES
(1, 'ferdyhasan', '123456', 'ferdyhasanisma@gmail.com', '085156586578', '', '', '', '0000-00-00'),
(2, 'vienkara', '123456', '123456', '0812345678', 'Vienka', 'Rara', 'Wanita', '1999-11-19');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `accspecs`
--
ALTER TABLE `accspecs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `catalog`
--
ALTER TABLE `catalog`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`kodeproduk`);

--
-- Indeks untuk tabel `specs`
--
ALTER TABLE `specs`
  ADD PRIMARY KEY (`kodeproduk`);

--
-- Indeks untuk tabel `stok`
--
ALTER TABLE `stok`
  ADD PRIMARY KEY (`kodeproduk`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `accspecs`
--
ALTER TABLE `accspecs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `catalog`
--
ALTER TABLE `catalog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
