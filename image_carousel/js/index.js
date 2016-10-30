// set up variables (imagesArray and imageIndex)// set up variables
var images=["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg"];
var imgIndex = 0;

// create a function to find the prev image
// if the current imgIndex is greater than 0 then minus 1 else set to the last index in the array (using .length)
// update the image by changing the 'src' attribute on #main-image
function prevImage(){
  imgIndex--;
}

// create a function to find the next image
// if the current imgIndex is less than the length/total items in the array then add 1 else set it to first index in the array
// update the image by changing the 'src' attribute on #main-image
function nextImage(){
  if (imgIndex < images.length) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }

  $("#main-image").attr("src", images[imgIndex]);
}

// on click next or prev find the next or prev image (using the functions created)
$(".next").on("click",nextImage);
$(".prev").on("click",prevImage);
