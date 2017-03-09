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
		$("#button-group").append(button);
	}
	$("#new-babe-input").val("");
});