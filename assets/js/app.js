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