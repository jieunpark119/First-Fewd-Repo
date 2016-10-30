// set up variables (total, newEntry, formattedNumber)
var total;
var newEntry;
var formattedNumber;


// on clicking of the button, we need to update the receipt
$("button").on("click",function(){
  updateReceipt();
  $(".total-num").text(formatNumber(total));
  $('.new-entry').val("");
});


 

// create function to update the receipt
function updateReceipt(){
  // - get user input and update "newEntry"
  newEntry = $(".new-entry").val();
  console.log(newEntry);
  // - append new item as a list item with the class "item-num"
  // - and format the number as currency ($0.00)
  $(".items ul").append("<li class='item-num'>" + formatNumber(newEntry)+"</li>");
  // - add newEntry to total (will need to use parseFloat 
  //on the newEntry instead of parseInt since it could be a decimal)

  total  = newEntry + parseFloat(newEntry);

}


function formatNumber(){
  formattedNumber = parseFloat(newNum).toFixed(2);
  formattedNumber = "$"+ formattedNumber;
  return formattedNumber;

}



  // - update total-num displayed in the browser

  // - reset the new-entry input field to empty

// create a function that takes a number and returns it formated to this '$0.00'


	//add format the number as currency($0.00)

