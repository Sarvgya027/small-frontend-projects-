let rect = document.querySelector(".rect");

rect.addEventListener("mousemove", (event) => {
  let rectLocation = rect.getBoundingClientRect();
  let mouseLocation = Math.round(event.clientX - rectLocation.left);

  if (mouseLocation >= 0 && mouseLocation <= 200) {
    let mappedValue = gsap.utils.mapRange(0, 200, 200, 0, mouseLocation);
    rect.style.backgroundColor = `rgb(${mappedValue}, 0, 0)`;
  } else {
    let mappedValueBlue = gsap.utils.mapRange(200, 400, 0, 200, mouseLocation);
    rect.style.backgroundColor = `rgb(0, 0, ${mappedValueBlue})`;
  }
});

rect.addEventListener("mouseleave", () => {
  rect.style.backgroundColor = "White";
});
