//Grab the articles as a json
$.getJSON("/articles", function (data) {
    for (var i = 0; i < data.length; i++) {
        // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        $(".article").append("<div class='card'> <div class='card-body'><h5 class='card-title'>" + data[i].title + "</h5><p class='card-text'>" + data[i].link + " <a href='#' class='save-btn btn btn-primary' data-id=" + data[i]._id + ">Save Article</a></div></div></div>");
    }
});



$('#scrape-btn').on('click', function () {
    $.ajax({
        method: "GET",
        url: "/scrape"
    })
        .then(function (data) {
            console.log(data);
            location.reload();
        });
})

$(document).on("click", '.save-btn', function () {
    console.log('working')
    var thisId = $(this).attr("data-id");

    $.ajax({
        method: "PUT",
        url: "/saved/" + thisId,

    })
        .then(function (data) {
            console.log("article saved");
            // location.reload();
        });

});

$.getJSON("/saved", function (data) {
    for (var i = 0; i < data.length; i++) {
        // $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        $(".save").append("<div class='card'> <div class='card-body'><h5 class='card-title'>" + data[i].title + "</h5><p class='card-text'>" + data[i].link + " <a href='#' class='save-btn btn btn-primary' data-id=" + data[i]._id + ">Save Article</a></div></div></div>");
    }
});