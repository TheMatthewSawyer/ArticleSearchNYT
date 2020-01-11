
$(document).ready(function() {

getArticles();

function getArticles() {

    var query = $("#searchBar").val();
    var articlesNum = $('#numberRecords option:selected').text();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    var filterYear = false;

    if(startYear !== null && endYear !== null) {
        filterYear = true;
    } else {
        filterYear = false;
    }

    

    $(".searchBtn").click(function() {
        urlConstructor(filterYear, startYear, endYear, articlesNum, query);
        $.ajax({
            url: urlConstructor(),
            method: "GET"
        }).then(function(response) {
            test = response;
            console.log(test);
        });
    });
}

function urlConstructor(filterYear, startYear, endYear, articlesNum, query){
    var urlLink = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query;
    var filter = "pub_year" 
    if(filterYear) {
        urlLink += "}&fq={" + filter + "}";
    }
    urlLink += "&api-key=4KOhVJXzRlJHcH4AXbNod5n1nUpCReUA";
   return urlLink;

}

});