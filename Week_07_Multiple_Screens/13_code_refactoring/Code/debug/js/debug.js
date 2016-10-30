$("body").append("<h1>Hi world!</h1>");

var pies = ["Cherry","Pumpkin","Banana","a","Rhubarb"];
$("body").append("There are" + " "+pies.length +" "+ "total" +" "+" pies.<br>");

for (var p = 0; p < pies.length; p++) {

  if (pies[p] === "Cherry") {

    $("body").append(pies[p] + ": Yum!<br>");
  } else if (pies[p] === "Rhubarb") {
    $("body").append(pies[p]+": Yuck<br>");
  } else if (pies[p] === "Pumpkin") {
    $("body").append(pies[p]+": meh<br>");
  } else {
    $("body").append("Yum...I guess!<br>");
  }
}

function doSomething(){
	$("body").append("<p>Paragraph</p>");
	console.log(" Something");
}

doSomething();
