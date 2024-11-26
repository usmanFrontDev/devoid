function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
loco();

const HamburgerFunction = () => {
  const hamburg = document.querySelector(".hamburger");
  const hamnav = document.querySelector(".hamburg-nav");
  const closebtn = document.querySelector(".btn-nav-ham");

  function open() {
    hamburg.addEventListener("click", () => {
      hamnav.style.opacity = "1";
      hamnav.style.transform = "translateX(0%)";
    });
  }
  function close() {
    closebtn.addEventListener("click", () => {
      hamnav.style.opacity = "0";
      hamnav.style.transform = "translateX(100%)";
    });
  }
  open();
  close();
};
HamburgerFunction();

const aboutpageHTML = () => {
  gsap.from(".flow span", {
    scale: 0,
    rotate: 360,
    scrollTrigger: {
      scroller: "body",
      trigger: ".flow span",
      start: "top 44%",
      end: "top 25%",
      scrub: 3,
    },
  });

  gsap.from(".flow p", {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      scroller: "body",
      trigger: ".flow p",
      start: "top 50%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.to(".noflow h2", {
    x: "-80%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".noflow h2",
      start: "top 75%",
      end: "top 40%",
      scrub: 3,
    },
  });
};

const aboutpageHTMLmedia1 = () => {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#Abpage2",
      start: "top 45%",
      end: "top 30%",
      scrub: 3,
    },
  });

  tl2.from(
    ".flow span",
    {
      scale: 0,
      rotate: 360,
    },
    "a"
  );

  tl2.from(
    ".flow p",
    {
      opacity: 0,
      y: 100,
    },
    "a"
  );

  gsap.to(".noflow h2", {
    x: "-90%",
    scrollTrigger: {
      scroller: "body",
      trigger: "#Abpage2",
      start: "top 40%",
      end: "top 10%",
      scrub: 5,
    },
  });
};

function Mediamatcin() {
  if (window.matchMedia("(min-width: 320px)").matches) {
    aboutpageHTMLmedia1();
  } else {
    aboutpageHTML();
  }
}

Mediamatcin();
