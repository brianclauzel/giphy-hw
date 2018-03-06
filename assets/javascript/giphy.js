// API Key: 8PxDrAna1KYoO7qReucdv2yswk3DyaDn

//start page
$(document).ready(function() {

//create array of different types of food that will be turned into buttons
var foods = ["bacon", "breakfast", "cheeseburger", "doughnuts", "hot dogs", "ice cream", "pizza", "taco", "sushi", "pasta", "banana", "cookie", "broccoli", "burrito", "french fries", "pie"];

//function to fill the clicked, or typed item into the url api

function displayFoodGif() {

var gif = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=8PxDrAna1KYoO7qReucdv2yswk3DyaDn";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) { 
    // if (gif === gif) {
    $("#gif-view").append("<img class='stuff' src='" + response.data[0].images["480w_still"].url + "'>");
    $(".stuff").on("click", function (){
        $(this).replaceWith("<img class='stuff' src='" + response.data[0].images.original.url + "'>");
    });
// }


    // $("#gif-view").append("<img class='stuff' src='" + response.data[1].images["480w_still"].url + "'>");
    // $("#gif-view").append("<img class='stuff' src='" + response.data[2].images["480w_still"].url + "'>");
    // $("#gif-view").append("<img class='stuff' src='" + response.data[3].images["480w_still"].url + "'>");
    // $("#gif-view").append("<img class='stuff' src='" + response.data[4].images["480w_still"].url + "'>");
    // $("#gif-view").append("<img class='stuff' src='" + response.data[5].images["480w_still"].url + "'>");
    // $("#gif-view").append("<img class='stuff' src='" + response.data[6].images["480w_still"].url + "'>");
    renderButtons();

    
 

});
}


// render food buttons to click on and display images or gifs

function renderButtons() {

    $("#buttons-view").empty();

for (var i = 0; i < foods.length; i++) {

    var a = $("<button>");
    a.addClass("food");
    a.attr("data-name", foods[i]);
    a.text(foods[i]);
    $("#buttons-view").append(a);
  }   
}
 //add gif or image from a typed out item

$("#add-gif").on("click", function(event){
    event.preventDefault();
    var gif = $("#giphy-input").val().trim();
    foods.push(gif);
    renderButtons();
});


$(document).on("click", ".food", displayFoodGif);
renderButtons();

// $("#add-gif").on("click", function(event) {
//     event.preventDefaul();
//     var gif = $(this).attr("")
// });
// $(document).on("click", "")

});