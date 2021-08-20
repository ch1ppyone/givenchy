const images = document.querySelectorAll(".looks__gallery-item");

function swap(first_index, second_index) {
  const first_src = images[first_index].src;
  const second_src = images[second_index].src;
  images[first_index].src = second_src;
  images[second_index].src = first_src;
  console.log(first_src);
}

setInterval(function myMethod() {

  let first =  Math.floor(Math.random()*images.length);
  let second =  Math.floor(Math.random()*images.length);

  swap(first, second);

}, 300);
