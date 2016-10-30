
//1.On button click - get value from input class".new-entry"

//2.Then add that to total number

// <<<<<<<  <<<<<<<  <<<<<<<  <<<<<<<  <<<<<<<  <<<<<<<  <<<<<<<  <<<<<<<  <<<<<<< 


// set up variables (total, newEntry, formattedNumber)

// on clicking of the button, we need to update the receipt



// - append new item as a list item with the class "item-num"
// - and format the number as currency ($0.00)
// - add newEntry to total (will need to use parseFloat on the newEntry instead of parseInt since it could be a decimal)

var newEntry;
var total;
var formattedNumber

function receipt(){

   newEntry = $(".new-entry").val();
$("items ul").append("<li class='item-num'>" + formatNumber(newEntry) + "</li>");
   total = newEntry + parseFloat(newEntry);

}



function formatNumber(){
  formattedNumber = parseFloat(newNum).toFixed(2);
  formattedNumber = "$" + formattedNumber;
  return formattedNumber;
}

$("button").on("click",function(){
  receipt();
  $(".total-num").text(formatNumber(total));
  $('.new-entry').val("");

})





  // - update total-num displayed in the browser

  // - reset the new-entry input field to empty

// create a function that takes a number and returns it formated to this '$0.00'

  //add format the number as currency($0.00)


