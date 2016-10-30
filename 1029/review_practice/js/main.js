// 1. On load, change the background color of the element with a class of "bgcolor" to green
$(document).ready(function(){
	$(".bgcolor").css("background-color","green");
});
// 2. On clicking of the element with a class of "upgrade", animate these properties: opacity: .5, width:300px, height:300px. For a duration(speed) of 3 seconds.
$(".upgrade").on("click",function(){
	$(this).animate({
	opacity: .5, 
	width:"300px", 
	height:"300px"

	},3000);
});

// 3. Write a for loop to insert 4 <divs> with a class or "box" inside the element with a class of "boxes"
for(var i = 0; i <4 ;i ++){
	$(".boxes").append("<div class='box'></div>");
}

// 4. On clicking on one of the boxes, alert it's index value.
$(".box").on("click",function(){
	window.alert($(this).index());
});


// // 1. On load, change the background color of the element with a class of "bgcolor" to green
// $(document).ready(function(){
//   $(".bgcolor").css("background-color", "green");
// });

// // 2. On clicking of the element with a class of "upgrade", animate these properties: opacity: .5, width:300px, height:300px. For a duration(speed) of 3 seconds.


// // 3. Write a for loop to insert 4 <divs> with a class or "box" inside the element with a class of "boxes"
// for (var i = 0; i < 4; i++){
//   $(".boxes").append("<div class='box'></div>");
// }

// // 4. On clicking on one of the boxes, alert it's index value.
// $(".box").on("click", function(){
//   window.alert($(this).index());
// });
