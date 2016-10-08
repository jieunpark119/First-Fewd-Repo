// on click white button
// change bg color of the body to white

// on click grey button 
// change bg color of the body to grey


document.getElementById("whiteButton").onclick=function(){
	document.body.style.backgroundColor="#fff";
	document.getElementById("whiteButton").className = "active";
	document.getElementById("grayButton").className = "";
	document.getElementById("blueButton").className = "";
	document.getElementById("yellowButton").className = "";

}

document.getElementById("grayButton").onclick=function(){
	document.body.style.backgroundColor="gray";
	document.getElementById("whiteButton").className = "";
	document.getElementById("grayButton").className = "active";
	document.getElementById("blueButton").className = "";
	document.getElementById("yellowButton").className = "";
}


document.getElementById("blueButton").onclick=function(){
	document.body.style.backgroundColor="blue";
	document.getElementById("whiteButton").className = "";
	document.getElementById("grayButton").className = "";
	document.getElementById("blueButton").className = "active";
	document.getElementById("yellowButton").className = "";
}


document.getElementById("yellowButton").onclick=function(){
	document.body.style.backgroundColor="yellow";
	document.getElementById("whiteButton").className = "";
	document.getElementById("grayButton").className = "";
	document.getElementById("blueButton").className = "";
	document.getElementById("yellowButton").className = "active";
}




