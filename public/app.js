//Grab the articles as a json
$.getJSON("/articles", function (data) {
    for (var i = 0; i < data.length; i++) {
        // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        $(".article").append("<div class='card'> <div class='card-body'><h5 class='card-title'>" + data[i].title + "</h5><p class='card-text'>" + data[i].link + " <a href='#' class='btn btn-primary'>Save Article</a></div></div></div>");
    }
});

