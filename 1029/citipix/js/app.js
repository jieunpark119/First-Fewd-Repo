
// Set up your city variable
var city;

// Wait for the DOM elements to load before executing (look into the "ready" method)

$("#submit-btn").on("click", function(){
 event.preventDefault();
  // On clicking the submit button,

    // a. prevent the submit button from refreshing the page (prevent the default action)
    // b. get the value of the select option and update the city variable
    // c. update the background image of the body to the selected value (think of clever, simple ways to achieve this)


 city =  $("select").val();
 console.log(city);

 $("body").css("background-image", "url('images/"+ city +".jpg')")


});
