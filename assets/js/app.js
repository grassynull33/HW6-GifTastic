var topics = [
	"ivanka trump",
	"kerry washington",
	"olivia munn",
	"keira knightley",
	"natalie portman",
	"scarlett johansson",
	"jennifer lawrence",
	"emma watson",
	"kate upton",
	"salma hayek",
	"ariana grande",
	"carmen electra",
	"beyonce",
	"jessica biel",
	"adriana lima",
	"emilia clarke",
	"mila kunis",
	"alison brie",
	"lucy liu",
	"jamie chung"
];

for(var i = 0; i < topics.length; i++) {
	var button = $("<button>").text(topics[i]);
	button.attr("data-babe", topics[i]);
	button.addClass("babe-button");
	$("#button-group").append(button);
}

$("#add-babe-button").on("click", function(e) {
	e.preventDefault();
	var alreadyExist = false;
	if(topics.indexOf($("#new-babe-input").val()) !== -1) {
		alreadyExist = true;
	}
	if($("#new-babe-input").val() !== "" && alreadyExist === false) {
		var newBabe = $("#new-babe-input").val().toLowerCase();
		topics.push(newBabe);
		var button = $("<button>").text(newBabe);
		button.attr("data-babe", newBabe);
		button.addClass("babe-button");
		$("#button-group").append(button);
	}
	$("#new-babe-input").val("");
});

$(document).on("click", ".babe-button", function() {
	var babe = $(this).attr("data-babe");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        babe + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
    	url: queryURL,
    	method: "GET"
    }).done(function(response) {
    	var results = response.data;
    	console.log(results);

		var resultsContainerSection = $("<section class='results-container'>");

    	for(var i = 0; i < results.length; i++) {
    		var singleResultDiv = $("<div class='result-container'>");
    		
    		var rating = results[i].rating;

    		var p = $("<p>").text("Rating: " + rating);

    		var babeImg = $("<img class='result'>");
    		babeImg.attr("src", results[i].images.fixed_height_still.url);
    		babeImg.attr("data-state", "still");
    		babeImg.attr("data-still", results[i].images.fixed_height_still.url);
    		babeImg.attr("data-animate", results[i].images.fixed_height.url);

    		singleResultDiv.prepend(babeImg);
    		singleResultDiv.prepend(p);

    		resultsContainerSection.prepend(singleResultDiv);
    	}

    	$("#babes-group").prepend(resultsContainerSection);
    });
});

$(document).on("click", ".result", function() {
	var state = $(this).attr("data-state");

	if(state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});