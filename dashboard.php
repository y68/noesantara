<html>
<head>
  <title>Noesantara Project</title>
  <link rel="stylesheet/less" type="text/css" href="res/css/style.less"/>
  <link rel="stylesheet" type="text/css" href="res/fonts/fort/font-awesome.css"/>
  <link rel="stylesheet" type="text/css" href="res/reset.css"/>

  <script type="text/javascript" src="res/js/jquery.js"></script>
  <script type="text/javascript" src="res/js/less.min.js"></script>
  <script type="text/javascript" src="res/js/noesantara.js"></script>
  <script type="text/javascript">


  // $.getJSON('res/data/provinsi.json', function(data) {
  //       var items = [];
  //       $.each(data, function(key, val) {
  //             // var phoneNumber = val.phoneNumber;
  //             // alert(phoneNumber[0]['number']);
  //             alert(val[11].nama);
  //             // alert(val[11].path);
  //       });
  //       // $('<ul/>', {
  //       // 'class': 'my-new-list',
  //       // html: items.join('')
  //       // }).appendTo('body');
  // });

  </script>
<style type="text/css">

</style>
  
</head>
<body>




<?php

$json = file_get_contents("res/data/provinsi.json");
$data = json_decode($json, true);
$provinsi = $data['provinsi'];

?>


<!-- <header> -->
  <!-- <div class="layer"> -->
<!-- <h1>noesantara project</h1> -->
<!-- <img src="../logo.png" width="300">

<ul>
  <li><a href="">File</a></li>
  <li><a href="">Filter Map</a></li>
  <li><a href="">Take Quiz</a></li>
  <li><a href="">About</a></li> -->
<!-- </ul> -->
  <!-- </div> -->
<!-- </header> -->

<!-- <div id="mapcontainer"> -->

<!-- <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> -->

<!-- <svg id="2">
  <g id="layer8" transform="translate(-82.22962,-0.155492)" inkscape:label="Ocean" sodipodi:insensitive="true" inkscape:groupmode="layer">
  <rect id="rect17387" x="82.277" y="0.151" fill="#9EC7F3" width="1321.883" height="620.422"/>
</g>
</svg> -->

<?php

include("header.php");
include("sidebar.php");
include("res/svg/map.svg");
include("footer.php");

?>


<!-- </div>
<footer>
  <h3>Copyright &copy; 2013. noesantaraproject by mumustudio. All Rights Reserved</h3>
</footer> -->




  </body>
</html>