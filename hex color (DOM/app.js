let button = document.querySelector(".btn.btn-dark");

button.addEventListener("click",function changecolor() {
  let hexcode = Math.random().toString(16).slice(2, 8).padEnd(6, "0");

  document.querySelector(".hex-code").innerHTML = hexcode;
  document.body.style.backgroundColor = '#' + hexcode
});

