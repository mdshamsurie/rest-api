
function showAllMenu(){


    $.getJSON('data/pizza.json', function (data) {
     let menu = data.menu;
     //console.log(menu);
        $.each(menu, function (i, data) {
    
        // console.log(data);
            $('#list-menu').append(`<div class="col-md-4 mt-3">
            <div class="card">
          <img src="img/menu/` +data.gambar + `" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">`+ data.nama +`</h5>
            <p class="card-text">`+ data.deskripsi +`</p>
            <p>Rp `+ data.harga +`</p>
            <a href="#" class="btn btn-primary">Order Now</a>
          </div>
        </div>
            </div>`)
        });
    
    });
}

showAllMenu();

$('.nav-link').on('click', function (){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if(kategori == 'All Menu'){
        showAllMenu();
        return;
    }

    // console.log(kategori);

    $.getJSON('data/pizza.json', function (data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i,data){
            if (data.kategori == kategori.toLowerCase()){

                content += `<div class="col-md-4 mt-3">
                <div class="card">
              <img src="img/menu/` +data.gambar + `" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">`+ data.nama +`</h5>
                <p class="card-text">`+ data.deskripsi +`</p>
                <p>Rp `+ data.harga +`</p><a href="#" class="btn btn-primary">Order Now</a>
              </div> </div></div>`
            }
        });

        $('#list-menu').html(content);

    });
})