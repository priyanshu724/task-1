var indexValue = 0;
function slideShow(){
  setTimeout(slideShow, 2500);
  var x;
  const img = document.querySelectorAll("img");
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none"; //Hides all the images by setting their CSS display property to "none". This hides all images initially.
  }
  indexValue++;
  // If indexValue exceeds the number of images, it resets to 1. This ensures that the slideshow restarts from the first image.
  if (indexValue > img.length) {
    indexValue = 1;
  }
  img[indexValue - 1].style.display = "block";
}
slideShow();
