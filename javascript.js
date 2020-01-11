$(document).ready(function() {


    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=4KOhVJXzRlJHcH4AXbNod5n1nUpCReUA",
        method: "GET"
    }).then(function(response) {
        var test = respone;
    });

});