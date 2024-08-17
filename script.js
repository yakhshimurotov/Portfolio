// let header = document.getElementById("myDIV");
// let btns = header.getElementsByClassName("link");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

const animBtn1 = document.querySelector(".link1");

animBtn1.addEventListener("click", () => {
  gsap.from(".link1", {
    duration: 1,
    ease: "elastic",
    scale: .5,
  })
})

const animBtn2 = document.querySelector(".link2");

animBtn2.addEventListener("click", () => {
  gsap.from(".link2", {
    duration: 1,
    ease: "elastic",
    scale: .5,
  })
})

const animBtn3 = document.querySelector(".link3");

animBtn3.addEventListener("click", () => {
  gsap.from(".link3", {
    duration: 1,
    ease: "elastic",
    scale: .5,
  })
})

const animBtn4 = document.querySelector(".link4");

animBtn4.addEventListener("click", () => {
  gsap.from(".link4", {
    duration: 1,
    ease: "elastic",
    scale: .5,
  })
})



gsap.from(".my-image", {
  duration: 3,
  ease: "elastic",
  scale: 1.3,
});

gsap.from(".mine_info h3", {
  duration: 4,
  y: 50,
  ease: "elastic",
  scale: 1.3,
});


gsap.from(".myDIV", {
  duration: 1.5,
  y: -70,
  ease: "bounce",
});

gsap.to(".mine_info h3", {
  duration: 1,
  opacity: 0,
  // ease: "elastic",
  scrollTrigger: {
    trigger: ".box",
    scrub: -2,
  },
});

gsap.from(".line", {
  scrollTrigger: {
    trigger: ".orange",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=10%",
  },
  scaleY: 0,
  transformOrigin: "left center",
  ease: "none",
});




