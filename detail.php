<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />

	<title></title>

	<link rel="stylesheet" type="text/css" href="res/fonts/fort/font-awesome.css"/>
	<link rel="stylesheet" type="text/css" href="res/css/reset.css"/>
	<link rel="stylesheet/less" type="text/css" href="res/css/style_detail.less"/>
	<?php include('js_include.php') ?>
</head>
<body>

<header></header>

<div id="container">

	<!--
	***********************************
	SIDEBAR AREA
	***********************************
	-->
	
	<div id="sidebar">
		<div class="inner">
			
			<!-- LOGO -->
			<img id="logo"/>

			<h3>Provinsi <a class="nama_provinsi"></a></h3>

			<div class="icon">
				<a title="Peta" id="peta"><i class="icon-map-marker"></i></a>
				<a title="Deskripsi" id="deskripsi"><i class="icon-align-left"></i></a>
				<a title="Sosial" id="sosial"><i class="icon-heart"></i></a>
				<a title="Ekonomi" id="ekonomi"><i class="icon-money"></i></a>
				<a title="Budaya" id="budaya"><i class="icon-leaf"></i></a>
				<a title="Pariwisata" id="wisata" class="last"><i class="icon-plane"></i></a>
			</div>

				<ul class="detail">
					<li class="head">Ibukota</li>
					<li id="ibukota"></li>

					<li class="head">Lambang</li>
					<li id="lambang">Tidak Tersedia</li>

					<!-- <li class="head">Letak Wilayah</li>
					<li id="lintang"></li>
					<li id="bujur"></li>
					<li id="utara"><i class="icon-arrow-up"></i> </li>
					<li id="timur"><i class="icon-arrow-right"></i> </li>
					<li id="barat"><i class="icon-arrow-left"></i> </li>
					<li id="selatan"><i class="icon-arrow-down"></i> </li> -->
				</ul>
				<br>
				<a href="dashboard.php" class="button">Kembali ke Peta</a>
			<br>
			<br>

		</div>
	</div>

	<div id="mainbar">

		<?php 

		include_once("detail/main.php");
		include_once("detail/sub_main.php");
		include_once("detail/sosial_desc.php");
		include_once("detail/ekonomi_desc.php");
		include_once("detail/wisata_desc.php");
		include_once("detail/budaya_desc.php");

		?>

	</div>

</div>

<!--
----------------------
FOOTER AREA
----------------------
-->
<footer>
noesantara is design and developed by 24PXL
</footer>




</body>

</html>