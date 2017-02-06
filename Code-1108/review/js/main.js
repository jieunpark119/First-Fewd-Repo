// A. create a for loop to add 10 list items to the <ul>
// * each list item should have the text: "I'm number 1" 
//(the 1 should be replaced with their index value)


for(var i=0;i<10;i++){
	console.log(i);
	$("ul").append("<li>" +"I'm number "+ i + "</li>");

}


// B. on clicking of an element in the list
  // the selected element should turn blue and the others should have an opacity of 0.25
  // display the text in the chosen element to be displayed in "#chosen"
  // the selected element should have a class of "active"

$("li").on("click",function(){
  $(this).css("color","blue");
  $("li").not(this).css({"color":"black",
  	"opacity":0.25
});

  $("li").removeClass("active");
  $(this).addClass("active");
  $("#chosen").append(this);
  
  
 
  

});