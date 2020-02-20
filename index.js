var $form = $("form"),
    $search = $(".search"),
    $clear = $(".clear"),
    $giphy = $(".giphy img"),
    $giphyLink = $(".giphy a");

    $form.on("submit", function(e) {
        e.preventDefault();
        goGiphy();

    });

    $clear.on("click", function() {
        $search.val("");
    })

    function goGiphy () {
        var input = $search.val();
        $.getJSON("https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=" + input, function(json) {
            data= JSON.parse(JSON.stringify(json));
            imgSrc = data.data.images.original.url;
            $giphy.fadeOut(1000);
            setTimeout(function () {
                $giphy.attr("src", imgSrc);
                $giphyLink.attr("href", imgSrc);
                setTimeout(function () {
                    $giphy.addClass("gif");
                    $giphy.fadeIn(1000);
                },800);
            }, 800);
        })  
    }