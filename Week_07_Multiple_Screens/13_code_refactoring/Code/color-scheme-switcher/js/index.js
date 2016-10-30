$("li").on("click",function(){
  var color = $(this).css("background-color");
  console.log(color);
  $("body").css("background-color",color);
  // $("li").removeClass("active");
  // $(this).addClass("active");
  $("li").not(this).removeClass("active");
  $(this).addClass("active");



});

// $("#grayButton").on("click", function(){
//   $("body").css("background-color","gray");
//   $("li").removeClass("active");
//   $("#grayButton").addClass("active");
// });

// $("#whiteButton").on("click", function(){
//   $("body").css("background-color","white");
//   $("li").removeClass("active");
//   $("#whiteButton").addClass("active");
// });

// $("#blueButton").on("click", function(){
//   $("body").css("background-color","blue");
//   $("li").removeClass("active");
//   $("#blueButton").addClass("active");
// });

// $("#yellowButton").on("click", function(){
//   $("body").css("background-color","yellow");
//   $("li").removeClass("active");
//   $("#yellowButton").addClass("active");
// });
