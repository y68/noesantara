$(document).ready(function(){

/*
GLOBAL FUNCTION
*/

$("legend").hide();

$('.filter#quiz').hide();
$('legend#quiz').hide();

$("li a#quiz").click(function(){
	alert("Selamat Datang di Quizantara. Silahkan menjawab pertanyaan yang berada di kiri bawah dengan mengeklik provinsi yang dimaksud! :)");
	$("legend").hide();
	$(".filter").hide();
	$("g.mark").hide();
	// $("path.provinsi").css('fill','#ccc');
	reset_color_path();

	$(".filter#quiz").fadeIn();
	$('legend#quiz').fadeIn();
	// $('path').attr('mode','sad');
	$('path').attr('mode','quiz');
	// $("#popup").remove();
});


// $("ul.filter").hide();
$(".quest").hide();
$(".quest#1").show();

$(".quest#1 a#prev").hide();
$(".quest#5 a#next").hide();

$(".quest#1").attr("status",'active');

var current;

$("legend#quiz #next").click(function(){
	reset_color_path();
	var id = $(this).parent().attr("id");
	id = parseInt(id);
	var next = id + 1;
	// alert(next);
	$(this).parent().hide();

	// $("path[id").
	$(".quest#"+next).attr("status",'active');
	var answer = $(".quest#"+next+" .answer").html();
	$("path[id='"+answer+"']").css("fill",'black');
	$(".quest#"+id).removeAttr("status");
	$(".quest#"+next).fadeIn();

	return next;
});

$("legend#quiz #prev").click(function(){
	reset_color_path();
	var id = $(this).parent().attr("id");
	id = parseInt(id);
	var prev = id - 1;
	// alert(next);
	$(this).parent().hide();
	$(".quest#"+prev).attr("status",'active');
	var answer = $(".quest#"+prev+" .answer").html();
	$("path[id='"+answer+"']").css("fill",'black');
	$(".quest#"+id).removeAttr("status");
	$(".quest#"+prev).fadeIn();

	return prev;
});



// $("#map-container[mode='quiz']").hover(function(){
	$('path[mode="quiz"]').hover(function(){
		// $("#status").hide();
	});
	$('path[mode="quiz"]').live('click', function(){
		var id = $(this).attr('id');
		reset_color_path();
		$(this).css('fill','#444');
		// alert("das");
		// alert($('legend#quiz').find('div[status="active"]').attr('id'));
		// var id = $('legend#quiz').find('div[status="active"]').attr('id');
		$('legend#quiz').find('div[status="active"] .answer').html(id);
		$('legend#quiz').find('div[status="active"] .question').attr('answer',id);
		// $('#popup').css('left', e.pageX - 10).css('top', e.pageY - 70).css('display', 'block').css('position', 'absolute');
		// var name = $(this).attr('name');
		// $("#popup h4").text("Provinsi "+name);
		// $("#popup").show();
		// $("#status").hide();
	});
// });

$("#quiz_result").live('click', function(){
	alert($("legend#quiz .question#one").attr('answer'));
	alert($("legend#quiz .question#two").attr('answer'));
	alert($("legend#quiz .question#three").attr('answer'));
	alert($("legend#quiz .question#four").attr('answer'));
	alert($("legend#quiz .question#five").attr('answer'));

});

$("#quiz_exit").live('click', function(){
	$("legend#quiz").hide();
	$(this).parent().hide();

	$(".filter#map").fadeIn();
	reset_color_path();
	// alert("terima kasih");
});







function reset_all()
{
	
}

function reset_button_filter_state()
{
	$(".filter#map li i").removeClass("active");
}

function reset_color_path()
{
	$("path.provinsi").css('fill','#ccc');
}

function reset_legend()
{
	$("legend#sebar").fadeOut();
}

function reset_mark() {
	$("g.mark").hide();
}

function reset_filter()
{
	reset_mark();
	reset_color_path();
	reset_legend();
}


function show_filter(param)
{
	switch(param)
	{
		case 'hewan':

		$("g#animal").show();

		break;

		case 'kepadatan':

		$("legend#sebar").show('100');
		color_kepadatan_penduduk();

		break;
	}
}



function color_kepadatan_penduduk()
{
	var tiny 	= '#1C393B';
	var small 	= '#25746F';
	var normal 	= '#BAD39F';
	var medium 	= '#F5C090';
	var large 	= '#E9811A';
	var huge 	= '#DA2431';
	var monster = '#A7232C';

	$("path[name='Papua Barat']").css('fill', tiny);

	$(
		"path[name='Kalimantan Barat'],"+
		"path[name='Kalimantan Tengah'],"+
		"path[name='Kalimantan Timur'],"+
		"path[name='Sulawesi Tengah'],"+
		"path[name='Maluku Utara'],"+
		"path[name='Maluku'],"+
		"path[name='Papua']"

		).css('fill', small);

	$(
		"path[name='Aceh'],"+
		"path[name='Riau'],"+
		"path[name='Jambi'],"+
		"path[name='Sumatera Selatan'],"+
		"path[name='Bengkulu'],"+
		"path[name='Kepulauan Bangka Belitung'],"+
		"path[name='Nusa Tenggara Timur'],"+
		"path[name='Kalimantan Selatan'],"+
		"path[name='Sulawesi Barat'],"+
		"path[name='Sulawesi Tenggara']"
		
		).css('fill', normal);

	$(
		"path[name='Sumatera Utara'],"+
		"path[name='Sumatera Barat'],"+
		"path[name='Sulawesi Selatan'],"+
		"path[name='Gorontalo'],"+
		"path[name='Sulawesi Utara']"
		
		).css('fill', medium);

	$(
		"path[name='Lampung'],"+
		"path[name='Kepulauan Riau'],"+
		"path[name='Nusa Tenggara Barat']"
		
		).css('fill', large);

	$(
		"path[name='Banten'],"+
		"path[name='Jawa Barat'],"+
		"path[name='Jawa Tengah'],"+
		"path[name='Jawa Timur'],"+
		"path[name='Daerah Istimewa Yogyakarta'],"+
		"path[name='Bali']"
		
		).css('fill', huge);

	$(
		"path[name='Daerah Khusus Ibukota Jakarta']"
		
		).css('fill', monster);
}

// event ketika map area di hover oleh kursor
// $('#map-container[mode="default"]').hover(function(){

	/*
	event ketika menggerakkan kursor di atas <path>
	tooltip muncul diikuti nama provinsi
	*/
	$('path[mode="default"]').mousemove(function(e){ 
		$('#status').css('left', e.pageX - 10).css('top', e.pageY - 35).css('display', 'block').css('position', 'absolute');
		var name = $(this).attr('name');
		$("#status").html(name);
	});
	/*
	event ketika blur kursor dari map area, tooltip hilang
	*/
	$('path[mode="default"]').mouseout(function(e){ 
		$('#status').fadeOut("8888");
	});
  	/*
	event ketika mengeklik kursor di atas <path>
	popup muncul
	*/
	$('path[mode="default"]').mousedown(function(e){
		$('#popup').css('left', e.pageX - 10).css('top', e.pageY - 70).css('display', 'block').css('position', 'absolute');
		var name = $(this).attr('name');
		var id = $(this).attr('id');
		$("#popup h4").text("Provinsi "+name);
		$("#popup a#detail").attr("href", 'detail.php?id='+id);
		$("#popup img").attr("src", 'res/data/db/'+id+'/logo.png');
		$("#popup").fadeIn();
		$("#status").hide();
	});

  	/*
	event ketika mengeklik tombol tutup di popup
	popup hilang
	*/
	$("#close_popup").live("click", function(){
		$("#popup").hide();
	});
// },

// function(){
	// $('#status').fadeOut("8888");
// }); // end of map area hover




/*
filtering area
*/
$(".filter#map li").click(function(){
	reset_button_filter_state();
	$(this).children('i').addClass("active");
	var id = $(this).attr('id');
	reset_filter();
	show_filter(id);

});


});