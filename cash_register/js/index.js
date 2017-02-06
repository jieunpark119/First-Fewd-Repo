// set up variables (total, newEntry, formattedNumber)
var total =0 ;
var newEntry;
var formattedNumber;

// on clicking of the button, we need to update the receipt
$(".submit").on("click",function(){
  receipt();


})


  // create function to update the receipt
function receipt(){

  // - get user input and update "newEntry"
  newEntry = $(".new-entry").val();

  // - append new item as a list item with the class "item-num"
  // - and format the number as currency ($0.00)

  $(".items ul").append("<li class='item-num'>" +"$"+ newEntry + "</li>")

   // - add newEntry to total (will need to use parseFloat on the newEntry instead of parseInt since it could be a decimal)



  total = total + parseFloat(newEntry);
  console.log(total);

  // - update total-num displayed in the browser
   $(".total-num").text("$"+total);

  // - reset the new-entry input field to empty

$('.new-entry').val("");


}
 






// create a function that takes a number and returns it formated to this '$0.00'

  //add format the number as currency($0.00)



