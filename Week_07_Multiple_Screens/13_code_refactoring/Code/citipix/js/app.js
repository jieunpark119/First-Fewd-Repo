// Set up your city variable
var city;

// var images=["images/la.jpg","images/nyc.jpg","images/sf.jpg","images/syd.jpg","images/atx.jpg"];

// Wait for the DOM elements to load before executing (look into the "ready" method)

// On clicking the submit button,
$(document).ready(function(){
	$("#submit-btn").on("click",function(event){
		event.preventDefault();

		city = $("#city-options").val(); 
		$("body").css("background-image","url('images/" + city + ".jpg')");
		// $("body").css("background-image","url('images/nyc.jpg')");

	});

});


// $("button").on("click", function(event){


// 	// $(document).ready()
// 	// a. prevent the submit button from refreshing the page (prevent the default action)
// 	// event.preventDefault();
// 	// // b. get the value of the select option and update the city variable
// 	// city = $("#city-options").val(); 
// 	// console.log(city);

// 	// if(city === "nyc"){
// 	// 	$("body").css("background-image","url(images[1])");
// 	// }else if(city ==="sf"){
// 	// 	console.log(city);
// 	// 	$("body").css("background-image","url(images[2])");
// 	// }else if(city ==="la"){
// 	// 	$("body").css("background-image",images[0]);
// 	// }else if(city ==="atx"){
// 	// 	$("body").css("background-image",images[4]);
// 	// }else{
// 	// 	$("body").css("background-image",images[3]);
// 	// }
// 	// c. update the background image of the body to the selected value (think of clever, simple ways to achieve this)
	
// });


