



document.getElementById("stopButton").onclick=function(){
	turnOff();
	document.getElementById("stopLight").style.backgroundColor ="red";


}

document.getElementById("slowButton").onclick=function(){
	turnOff();
	document.getElementById("slowLight").style.backgroundColor ="yellow";


}

document.getElementById("goButton").onclick=function(){
	turnOff();
	document.getElementById("goLight").style.backgroundColor ="green";


}

function turnOff(){
	document.getElementById("stopLight").style.backgroundColor ="";
	document.getElementById("slowLight").style.backgroundColor ="";
	document.getElementById("goLight").style.backgroundColor ="";

}