let rect = document.querySelector(".rect");

window.addEventListener("mousemove", (event) => {
    // console.log(event.client);
    let modifiedXVal = gsap.utils.mapRange(
        0,
        window.innerWidth,
        150,
        window.innerWidth - 150,
        event.clientX
    );

    let ModifiedYVal = gsap.utils.mapRange(0, window.innerHeight, 100, window.innerHeight - 100, event.clientY)


    gsap.to(".rect", {
        left: `${modifiedXVal}px`,
        top: ModifiedYVal,
    });
});

