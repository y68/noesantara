/*
 *
 * data.js
 * created by : @yuripertamax
 * file ini digunakan sebagai parsing dan fetching dari file json ke dalam DOM
 *
 */

//-------------------------------------------------------------------------------//

// config base url

var base_url = "http://localhost/project/noesantara/cd/noesantara";

//-------------------------------------------------------------------------------//

$(document).ready(function(){

    function get_param_url(key){
        var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
        return result && result[1] || "";
    }

    // ambil parameter url
    var kode_provinsi = get_param_url('id');
    // alert(kode_provinsi);

    // ambil data json global provinsi
    $.getJSON(base_url + '/res/data/provinsi.json', function(response) {
        $.each(response, function(i,data)
        {
            var nama_provinsi = data[kode_provinsi].nama;
            $('.nama_provinsi').html(nama_provinsi);
            $('title').html('Noesantara - ' + nama_provinsi);
        });
    });

    // ubah bg sesuai gambar masing masing provinsi
    var url = 'url("' + base_url + '/res/data/db/' + kode_provinsi + '/bg.jpg") no-repeat center center fixed';
    // alert(url);
    $("body").css("background", url);
    $("body").css("-moz-background-size", 'cover');
    $("body").css("background-size", 'cover');
    $("img#logo").attr("src", 'res/data/db/'+kode_provinsi+'/logo.png');
    

    //-------------------------------------------------------------------------------//

    /*
    GLOBAL DATA JSON PARSE
    */

    $.getJSON(base_url + '/res/data/global.json', function(response) {
        $.each(response, function(i,data)
        {
            var ibukota   = data[kode_provinsi].ibukota;
            var lambang   = data[kode_provinsi].lambang;
            var deskripsi   = data[kode_provinsi].deskripsi;
            
            if(lambang=="")
            {
                lambang = "Tidak Tersedia";
            }

            $(".detail #ibukota").html(ibukota);
            $(".detail #lambang").html(lambang);
            $("#sub-deskripsi p").html(deskripsi);
            
        });
    });
    
    //-------------------------------------------------------------------------------//

    /*
    EKONOMI DATA JSON PARSE
    */


    $.getJSON(base_url + '/res/data/ekonomi.json', function(response) {
        $.each(response, function(i,data)
        {
            // PERTAMBANGAN DATA JSON PARSE
            var array_tambang   = data[kode_provinsi].pertambangan;
            alert(array_tambang);
            $.each(array_tambang, function(i, item_tambang)
            {
                var tambang_nama = item_tambang.nama;
                var tambang_lokasi = item_tambang.lokasi;
                $("#desc-tambang ul").append("<li class='multi'><h4>"+ tambang_nama + "</h4><br>" + tambang_lokasi + "</li>");
             
            });

            // PERTANIAN DATA JSON PARSE
            var array_tani = data[kode_provinsi].pertanian;
            $.each(array_tani, function(i, item_tani)
            {
                var tani_nama = item_tani;
                $("#desc-tani ul").append("<li>" + tani_nama + "</li>");
            });

            // PERINDUSTRIAN DATA JSON PARSE
            var array_industri  = data[kode_provinsi].perindustrian;
            $.each(array_industri, function(i, item_industri)
            {
                var industri_nama = item_industri.nama;
                var industri_lokasi = item_industri.tempat;
                $("#desc-industri ul").append("<li class='multi'><h4>"+ industri_nama + "</h4><br>" + industri_lokasi + "</li>");
            });

        });
    });
    
    //-------------------------------------------------------------------------------//

    /*
    PARIWISATA DATA JSON PARSE
    */

    $.getJSON(base_url + '/res/data/pariwisata.json', function(response) {
        $.each(response, function(i,data)
        {
            // OBJEK WISATA DATA JSON PARSE
            var array_wisata = data[kode_provinsi].objek_pariwisata;
            $.each(array_wisata, function(i, item_wisata)
            {
                var wisata_nama     = item_wisata.nama;
                var wisata_gambar   = item_wisata.lokasi;
                var counter = i+1;
                // $("#desc-industri ul").append("<li class='multi'><h4>"+ industri_nama + "</h4><br>" + industri_lokasi + "</li>");
                $("#desc-objek ul").append("<li id='"+counter+"'>"+ wisata_nama + "</li>");
            });

            $("#desc-objek #list li").live('click', function(){
                // alert($(this).attr("id"));
                var img_url = "res/data/db/"+ kode_provinsi +"/pariwisata";
                var id = $(this).attr("id");
                // alert(id);
                $("#desc-objek .image").css("background", 'url("'+img_url+"/"+id+'.jpg") no-repeat center center #ccc');
                $("#desc-objek .image").css("-moz-background-size", 'cover');
                // alert(html);
            });

            // MAKANAN KHAS DATA JSON PARSE
            var array_makan = data[kode_provinsi].makanan_khas;
            $.each(array_makan, function(i, item_makan)
            {
                var makan_nama      = item_makan.nama;
                var makan_desc      = item_makan.deskripsi;
                var makan_gambar    = item_makan.gambar;

                var counter = i+1;
                // $("#desc-industri ul").append("<li class='multi'><h4>"+ industri_nama + "</h4><br>" + industri_lokasi + "</li>");
                $("#desc-makan ul").append("<li class='multi' id='"+counter+"'><h4>"+ makan_nama + "</h4><br>" + makan_desc + "</li>");
            });

            $("#desc-makan #list li").live('click', function(){
                // alert($(this).attr("id"));
                var img_url = "res/data/db/"+ kode_provinsi +"/makanan";
                var id = $(this).attr("id");
                $("#desc-makan .image").css("background", 'url("'+img_url+"/"+id+'.jpg") no-repeat center center #ccc');
                $("#desc-makan .image").css("-moz-background-size", 'cover');
                // alert(html);
            });
        });
    });

    //-------------------------------------------------------------------------------//

    /*
    SOSIAL DATA JSON PARSE
    */

    $.getJSON(base_url + '/res/data/sosial.json', function(response) {
        $.each(response, function(i,data)
        {
            // AGAMA DATA JSON PARSE
            var array_agama = data[kode_provinsi].agama;
            $.each(array_agama, function(i, item_agama)
            {
                var agama_nama     = item_agama.nama;
                var agama_persen   = item_agama.persentase;

                // alert(agama_nama);
                $("#desc-agama ul").append("<li>"+ agama_nama + " ( "+agama_persen+" )</li>");
            });

            // BAHASA DATA JSON PARSE
            var array_bahasa = data[kode_provinsi].bahasa;
            $.each(array_bahasa, function(i, item_bahasa)
            {
                var bahasa_nama = item_bahasa;
                $("#desc-bahasa ul").append("<li>"+ bahasa_nama +"</li>");
            });

            // SUKU JSON PARSE
            var array_suku = data[kode_provinsi].suku;
            $.each(array_suku, function(i, item_suku)
            {
                var suku_nama = item_suku.nama;
                var suku_tempat = item_suku.tempat;
                $("#desc-suku ul").append("<li class='multi'><h4>"+ suku_nama + "</h4><br>" + suku_tempat + "</li>");
            });

        });
    });

    //-------------------------------------------------------------------------------//

    /*
    BUDAYA DATA JSON PARSE
    */

    $.getJSON(base_url + '/res/data/budaya.json', function(response) {
        $.each(response, function(i,data)
        {
            // LAGU DATA JSON PARSE
            var array_lagu = data[kode_provinsi].lagu;
            $.each(array_lagu, function(i, item_lagu)
            {
                var lagu_nama = item_lagu;
                $("#desc-lagu ul").append("<li>"+ lagu_nama +"</li>");
            });

            // TARIAN DATA JSON PARSE
            var array_tari = data[kode_provinsi].tarian;
            $.each(array_tari, function(i, item_tari)
            {
                var tari_nama = item_tari.nama;
                var tari_gambar = item_tari.gambar;
                var counter = i+1;

                $("#desc-tari ul").append("<li id='"+counter+"'>"+ tari_nama + "</li>");
            });

            $("#desc-tari #list li").live('click', function(){
                var img_url = "res/data/db/"+ kode_provinsi +"/tarian";
                var id = $(this).attr("id");

                $("#desc-tari .image").css("background", 'url("'+img_url+"/"+id+'.jpg") no-repeat center center #ccc');
                $("#desc-tari .image").css("-moz-background-size", 'cover');
            });

            // SENJATA DATA JSON PARSE
            var array_senjata = data[kode_provinsi].senjata;
            var senjata_nama = array_senjata.nama;
            var senjata_gambar = array_senjata.gambar;
            var img_url = "res/data/db/"+ kode_provinsi;

            $("#desc-senjata ul").append("<li>"+ senjata_nama + "</li>");
            $("#desc-senjata .image").css("background", 'url("'+img_url+'/senjata.jpg") no-repeat center center #ccc');
            $("#desc-senjata .image").css("-moz-background-size", 'cover');

            // BUSANA ADAT DATA JSON PARSE
            var array_baju = data[kode_provinsi].busana_adat;
            
            var baju_nama = array_baju.nama;
            var baju_desc = array_baju.deskripsi;
            var img_url = "res/data/db/"+ kode_provinsi;

            $("#desc-baju ul").append("<li class='multi'><h4>"+ baju_nama + "</h4><br>" + baju_desc + "</li>");
            $("#desc-baju .image").css("background", 'url("'+img_url+'/baju2.jpg") no-repeat center center #ccc');
            $("#desc-baju .image").css("-moz-background-size", 'cover');
        

            // RUMAH ADAT DATA JSON PARSE
            var array_rumah = data[kode_provinsi].rumah_adat;
            // alert(array_rumah);
            var rumah_nama = array_rumah.nama;
            var rumah_gambar= array_rumah.gambar;
            var img_url = "res/data/db/"+ kode_provinsi;

            $("#desc-rumah ul").append("<li>"+ rumah_nama + "</li>");
            $("#desc-rumah .image").css("background", 'url("'+img_url+'/rumah.jpg") no-repeat center center #ccc');
            $("#desc-rumah .image").css("-moz-background-size", 'cover');

            // KESENIAN DATA JSON PARSE
            var array_seni = data[kode_provinsi].kesenian;
            $.each(array_seni, function(i, item_seni)
            {
                var seni_nama = item_seni.nama;
                var seni_desc = item_seni.deskripsi;

                $("#desc-seni ul").append("<li class='multi'><h4>"+ seni_nama + "</h4><br>" + seni_desc + "</li>");
            });

            // PAHLAWAN DATA JSON PARSE
            var array_pahlawan = data[kode_provinsi].pahlawan;
            $.each(array_pahlawan, function(i, item_pahlawan)
            {
                var pahlawan_nama = item_pahlawan.nama;
                var pahlawan_gambar = item_pahlawan.gambar;
                var counter = i+1;
                $("#desc-pahlawan ul").append("<li id='"+counter+"'>"+ pahlawan_nama + "</li>");
            });

            $("#desc-pahlawan #list li").live('click', function(){
                var img_url = "res/data/db/"+ kode_provinsi +"/pahlawan";
                var id = $(this).attr("id");

                $("#desc-pahlawan .image").css("background", 'url("'+img_url+"/"+id+'.jpg") no-repeat center center #ccc');
                $("#desc-pahlawan .image").css("-moz-background-size", 'cover');
            });

        });
    });
    
    //-------------------------------------------------------------------------------//

});
