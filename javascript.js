var test;

$(document).ready(function() {

getArticles();

function getArticles() {
  console.log("yo");
    $.ajax({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=4KOhVJXzRlJHcH4AXbNod5n1nUpCReUA",
        method: "GET"
    }).then(function(response) {
        test = response;
        console.log(test);
    });
}

function urlConstructor(){
    var urlLink = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query;
    if(filterYear) {
        urlLink += "}&fq={" + filter + "}";
    }
    urlLink += "&api-key=4KOhVJXzRlJHcH4AXbNod5n1nUpCReUA";
   

}

});