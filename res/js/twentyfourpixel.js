/*
 *
 * twentyfourpixel.js
 * created by : @yuripertamax
 * file ini digunakan sebagai action dan behavior menu menu launcher pada halaman detail
 *
 */

$(document).ready(function(){

var speed = 100;
reset();
$("#main").fadeIn(speed);

//--------------------------------------------------//

// fungsi reset

function reset()
{
	$(".icon a").removeClass("active");
	$(".page").hide();
}

//--------------------------------------------------//

/*
icon di sidebar
*/

$(".icon a[title]").tooltip({
	fade: 250 
});

$(".icon a").click(function(){
	var id = $(this).attr('id');
	reset();
	$(this).addClass("active");
	$("#sub-"+id).fadeIn(speed);
});

//--------------------------------------------------//

// aksi saat menu di sorot
$(".launcher a.parent").hover(function(){
	var id = $(this).attr('id');
	$(this).children('img').attr('src', 'res/img/parent/'+id+'.png');
},
function(){
	var id = $(this).attr('id');
	$(this).children('img').attr('src', 'res/img/parent/'+id+'_g.png');
});

//--------------------------------------------------//

// action saat parent menu di klik

$(".parent").click(function(){
	var id = $(this).attr('id');
	reset();

// tampilkan menu sub parent masing masing
$("#sub-"+id).fadeIn(speed);
});

// action saat child di klik

$(".child").click(function(){
	var id = $(this).attr('id');
	reset();

// kembalikan ke menu parent
$("#desc-"+id).fadeIn(speed);
});

//--------------------------------------------------//

// fungsi aksi tombol kembali di tiap halaman

// ..pada halaman desc

$(".desc #back").live("click", function(){
	var id = $(this).attr('parent');
	reset();
	$("#sub-"+id).fadeIn(speed);
});

// ..pada halaman sub / child

$(".sub #back").live("click", function(){
	var id = $(this).attr('parent');
	reset();
	$("#"+id).fadeIn(speed);
});

//--------------------------------------------------//

});