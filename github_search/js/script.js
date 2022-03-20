
$('#search-button').on('click', function(){
   
    $.ajax({
        url: 'https://api.github.com/search/repositories',
        type: 'get',
        dataType: 'jsonp',
        data:{
            'q': $('#search-input').val(),
        },
        success: function (res) {
            res = res.data.items;
              //   console.log(res.items);

              $.each(res, function (i, data){

                $('#github-list').append(`<div class="col-md-4 mt-3"><div class="card h-100"> <div class="card-body">
                <h5 class="card-title">` + data.full_name + `</h5>
                <p class="card-text">` + data.description + `</p>
                <a href="` + data.html_url + `" class="btn btn-primary float-right h-20">Go to github</a>
                </div>
                </div>
                </div>
                    
                
                `)
              });
            // if( res.incomplete_results === 'false'){

            //     let data = res.data.items;
            //     console.log(data);
            // }
            // else{

            //     $('#message').html(`<h1 class="text-center"> Invalid Searching.... </h1>`);
            // }
        
        }
    });

  

});