$('#search-button').on('click', function(){

    $.ajax({
        url: 'https://api.github.com/search/repositories',
        type: 'get',
        dataType: 'jsonp',
        data:{
            'q':'',
            

        }
    })

})