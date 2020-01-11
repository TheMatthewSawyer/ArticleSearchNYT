
        var query = $("#searchBar").val();
        var articlesNum = $('#numberRecords option:selected').text();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();
        var filterYear = false;
        var response1;

$(document).ready(function() {

    function getArticles() {


        if(startYear !== null && endYear !== null) {
            filterYear = true;
        } else {
            filterYear = false;
        }

        $(".searchBtn").click(function() {
            retrieve();
        });
    }
        function retrieve() {
            $.ajax({
                url: urlConstructor(filterYear, startYear, endYear, query),
                method: "GET"
            }).then(function(response) {
                console.log(response);
                $("#topArticles").html(response.docs[i].headline.main);

            });
        
    }

    getArticles();

    function urlConstructor(filterYear, startYear, endYear, query){
        var urlLink = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query;
        // var filter = "pub_year";
        // if(filterYear) {
        //     urlLink += "}&fq={" + filter + "}";
        // &begin_date=20120101&end_date=20120101
        // }
        urlLink += "&api-key=4KOhVJXzRlJHcH4AXbNod5n1nUpCReUA";
    return urlLink;

    }

});
