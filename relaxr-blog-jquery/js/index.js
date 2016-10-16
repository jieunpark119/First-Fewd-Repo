$(".sbutton").on("click",function(){
	alert("We are not currently taking sign ups");
	 $(".sbutton p").html("No Sign Ups!");

});




var readmore = true;

function read(){
	if(!readmore){

		readmore = true;
		$(".moretext.first").show();
		$(".read-more p").html("< Read less");
		
	}else{

		readmore=false;
		$(".moretext.first").hide();
		$(".read-more p").html("Read more >");
		
	}

}

$(".read-more.first").on("click", read);


var learnmore = true;

function learn(){
	if(!learnmore){
	
		learnmore = true;
		$(".learnText").show();
		$(".learnButton").html("Learn Less");
		
	}else{

		learnmore=false;
		$(".learnText").hide();
		$(".learnButton").html("Learn More");
		
	}

}

$(".learnButton").on("click", learn);





