<section id="sidebar">
<!-- sidebar -->

<ul id="map" class="filter">
	<li id="hewan"><i class="icon-github first"></i></li>
	<li id="kepadatan"><i class="icon-group"></i></li>
	<!-- <li><i class="icon-plane" id="reset"></i></li> -->
</ul>

<ul id="quiz" class="filter">
	<li id="quiz_exit"><i class="icon-off"></i></li>
	<li id="quiz_result"><i class="icon-ok"></i></li>
	<!-- <li><i class="icon-plane" id="reset"></i></li> -->
</ul>

<legend id="sebar">
<ul>
	<li>
		<div class="icon tiny"></div>
		<h4> < 10 </h4>
	</li>
	<li>
		<div class="icon small"></div>
		<h4> 10 - 49 </h4>
	</li>
	<li>
		<div class="icon normal"></div>
		<h4> 50 - 99 </h4>
	</li>
	<li>
		<div class="icon medium"></div>
		<h4> 100 - 299 </h4>
	</li>
	<li>
		<div class="icon large"></div>
		<h4> 200 - 599 </h4>
	</li>
	<li>
		<div class="icon huge"></div>
		<h4> 600 - 1299 </h4>
	</li>
	<li class="last"> 
		<div class="icon monster"></div>
		<h4> > 1299 </h4>
	</li>
</ul>

</legend>

<script type="text/javascript">
$(document).ready(function(){

$.getJSON('http://localhost/project/noesantara/devel/res/data/budaya.json', function(response) {
	var list_provinsi = [];
    $.each(response, function(i,data)
    {
    	$.each(data, function(key,val) {
		    // alert(key);
		    list_provinsi.push(key);
		});
    });

// alert(list_provinsi);
var random_1 = Math.floor(Math.random() * list_provinsi.length);
var random_2 = Math.floor(Math.random() * list_provinsi.length);
var random_3 = Math.floor(Math.random() * list_provinsi.length);


var prov_rand_1 = list_provinsi[random_1];
var prov_rand_2 = list_provinsi[random_2];
var prov_rand_3 = list_provinsi[random_3];

$.getJSON('http://localhost/project/noesantara/devel/res/data/budaya.json', function(response) {
	$.each(response, function(i,data)
    {
    	var list_lagu = [];
    	var array_lagu = data[prov_rand_1].lagu;
    	$.each(array_lagu, function(i, item_lagu)
        {
        	list_lagu.push(item_lagu);
        });
        // alert(list_lagu);
    	var sub_random = Math.floor(Math.random() * list_lagu.length);
   		


		var array_tari = data[prov_rand_2].tarian;
		var list_tari = [];
   		$.each(array_tari, function(i, item_tari)
            {
            	var tari = item_tari.nama;
            	list_tari.push(tari);
            });
   		var sub_random = Math.floor(Math.random() * list_tari.length);
   		

   		var rumah = data[prov_rand_3].rumah_adat.nama;
   		

  //  		alert(list_provinsi[random_1]);
  //  		alert(list_lagu[sub_random]);
		// alert(list_provinsi[random_2]);
  //  		alert(list_tari[sub_random]);
		// alert(list_provinsi[random_3]);
  //  		alert(rumah);

    });
});

// alert(list_provinsi[random_2]);
// alert(list_provinsi[random_3]);
});


});
</script>



<legend id="quiz">


<div id="1" class="quest">
	<span key="11" class="question" id="one">Berasal dari manakah Tari Saman? <span class="answer"></span></span>
	
	<a id="next">next</a>
</div>

<div id="2" class="quest">
	<span key="12" class="question" id="two">Lagu XXX berasal dari provinsi mana? <span class="answer"></span></span>
<a id="prev">prev</a>
<a id="next">next</a>
</div>

<div id="3" class="quest">
	<span key="13" class="question" id="three">Makanan XXX adalah makanan khas dari provinsi? <span class="answer"></span></span>
<a id="prev">prev</a>
<a id="next">next</a>
</div>

<div id="4" class="quest">
	<span key="14" class="question" id="four">Sebutkan provinsi yang memiliki rumah adat XXX ! <span class="answer"></span></span>
<a id="prev">prev</a>
<a id="next">next</a>
</div>

<div id="5" class="quest">
	<span key="15" class="question" id="five">Dimanakah Jatim Park berada? <span class="answer"></span></span>
<a id="prev">prev</a>
</div>

</legend>
</section>



