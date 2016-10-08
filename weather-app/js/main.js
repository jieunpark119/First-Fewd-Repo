var cel; 


document.getElementById("submit").onclick=function(){
	cel = document.getElementById("cel").value *1.8 + 32;
	console.log(cel);
	document.getElementById("result").innerHTML = cel;



	if(60<cel && cel<70){
		//SPRING
		document.body.style.background = "#FEE8C0";
	} else if(70<cel && cel<90){
		//SUMMER
		document.body.style.background = "#95F38C";
	}else if(40<cel && cel<60){
		//FALL
		document.body.style.background = "#BF6C4D";
	}else if(15<cel && cel<40){
		//WINTER
		document.body.style.background = "#29273B";
	}else{
		document.body.style.background = "black";
	}
	


}

