let button = document.querySelector(".button1");

button.addEventListener("click", function changeColor() {
  let redColor = Math.floor(Math.random() * 256);
  let greenColor = Math.floor(Math.random() * 256);
  let blueColor = Math.floor(Math.random() * 256);

  let randomColor = `rgb(${redColor}, ${greenColor}, ${greenColor})`;

  document.body.style.backgroundColor = randomColor;

});

// console.log(redColor)
// console.log(greenColor)
// console.log(blueColor)
