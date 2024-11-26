function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

const tl = gsap.timeline();

tl.to("#loader ", {
  opacity: 0,
  y: "-100%",
  duration: 1,
  height: "0vh",
  delay: 6,
  ease: "power1.out",
});


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

const SheriyansHomePageEffect = () => {
  function home() {
    Shery.imageEffect("#back", {
      style: 5,
      gooey: true,
      config: {
        a: { value: 0.69, range: [0, 30] },
        b: { value: 0.75, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 2.1018062397372743 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.5, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 3.35, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1.12, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.69, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
        discard_threshold: { value: 0.54, range: [0, 1] },
        antialias_threshold: { value: 0.02, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 11.45, range: [0, 100] },
      },
    });
    var elems = document.querySelectorAll(".head-elem");

    elems.forEach(function (elem) {
      var h1s = elem.querySelectorAll("h1");
      var index = 0;
      var animating = false;

      document.querySelector("#back").addEventListener("click", function () {
        if (!animating) {
          animating = true;

          gsap.to(h1s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function () {
              gsap.set(this._targets[0], { top: "100%" });
              animating = false;
            },
          });

          index === h1s.length - 1 ? (index = 0) : index++;
          gsap.to(h1s[index], {
            top: "-=100%",
            ease: Expo.easeInOut,
            duration: 1,
          });
        }
      });
    });

    var newimage = document.querySelectorAll(".image3d");
    var animate = false;
    var index = 0;
    document.querySelector("#back").addEventListener("click", function () {
      if (!animate) {
        animate = true;

        gsap.to(newimage[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1,
          onComplete: function () {
            gsap.set(this._targets[0], { top: "100%" });
            animate = false;
          },
        });

        index === newimage.length - 1 ? (index = 0) : index++;
        gsap.to(newimage[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1,
        });
      }
    });
  }
  function media1() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      console.log("home-function");
      home();
    } else if (window.matchMedia("(min-width: 320px)").matches) {
      console.log("no-home-function");
    } else {
      home();
    }
  }
  media1();
};
SheriyansHomePageEffect();


const CanvasEffectEarthball=()=>{
  function canvas() {
    const canvas = document.querySelector("#mycanvas");
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    function files(index) {
      var data = `
      bai.final.ai.ye.ab_000.jpg
      bai.final.ai.ye.ab_001.jpg
      bai.final.ai.ye.ab_002.jpg
      bai.final.ai.ye.ab_003.jpg
      bai.final.ai.ye.ab_004.jpg
      bai.final.ai.ye.ab_005.jpg
      bai.final.ai.ye.ab_006.jpg
      bai.final.ai.ye.ab_007.jpg
      bai.final.ai.ye.ab_008.jpg
      bai.final.ai.ye.ab_009.jpg
      bai.final.ai.ye.ab_010.jpg
      bai.final.ai.ye.ab_011.jpg
      bai.final.ai.ye.ab_012.jpg
      bai.final.ai.ye.ab_013.jpg
      bai.final.ai.ye.ab_014.jpg
      bai.final.ai.ye.ab_015.jpg
      bai.final.ai.ye.ab_016.jpg
      bai.final.ai.ye.ab_017.jpg
      bai.final.ai.ye.ab_018.jpg
      bai.final.ai.ye.ab_019.jpg
      bai.final.ai.ye.ab_020.jpg
      bai.final.ai.ye.ab_021.jpg
      bai.final.ai.ye.ab_022.jpg
      bai.final.ai.ye.ab_023.jpg
      bai.final.ai.ye.ab_024.jpg
      bai.final.ai.ye.ab_025.jpg
      bai.final.ai.ye.ab_026.jpg
      bai.final.ai.ye.ab_027.jpg
      bai.final.ai.ye.ab_028.jpg
      bai.final.ai.ye.ab_029.jpg
      bai.final.ai.ye.ab_030.jpg
      bai.final.ai.ye.ab_031.jpg
      bai.final.ai.ye.ab_032.jpg
      bai.final.ai.ye.ab_033.jpg
      bai.final.ai.ye.ab_034.jpg
      bai.final.ai.ye.ab_035.jpg
      bai.final.ai.ye.ab_036.jpg
      bai.final.ai.ye.ab_037.jpg
      bai.final.ai.ye.ab_038.jpg
      bai.final.ai.ye.ab_039.jpg
      bai.final.ai.ye.ab_040.jpg
      bai.final.ai.ye.ab_041.jpg
      bai.final.ai.ye.ab_042.jpg
      bai.final.ai.ye.ab_043.jpg
      bai.final.ai.ye.ab_044.jpg
      bai.final.ai.ye.ab_045.jpg
      bai.final.ai.ye.ab_046.jpg
      bai.final.ai.ye.ab_047.jpg
      bai.final.ai.ye.ab_048.jpg
      bai.final.ai.ye.ab_049.jpg
      bai.final.ai.ye.ab_050.jpg
      bai.final.ai.ye.ab_051.jpg
      bai.final.ai.ye.ab_052.jpg
      bai.final.ai.ye.ab_053.jpg
      bai.final.ai.ye.ab_054.jpg
      bai.final.ai.ye.ab_055.jpg
      bai.final.ai.ye.ab_056.jpg
      bai.final.ai.ye.ab_057.jpg
      bai.final.ai.ye.ab_058.jpg
      bai.final.ai.ye.ab_059.jpg
      bai.final.ai.ye.ab_060.jpg
      bai.final.ai.ye.ab_061.jpg
      bai.final.ai.ye.ab_062.jpg
      bai.final.ai.ye.ab_063.jpg
      bai.final.ai.ye.ab_064.jpg
      bai.final.ai.ye.ab_065.jpg
      bai.final.ai.ye.ab_066.jpg
      bai.final.ai.ye.ab_067.jpg
      bai.final.ai.ye.ab_068.jpg
      bai.final.ai.ye.ab_069.jpg
      bai.final.ai.ye.ab_070.jpg
      bai.final.ai.ye.ab_071.jpg
      bai.final.ai.ye.ab_072.jpg
      bai.final.ai.ye.ab_073.jpg
      bai.final.ai.ye.ab_074.jpg
      bai.final.ai.ye.ab_075.jpg
      bai.final.ai.ye.ab_076.jpg
      bai.final.ai.ye.ab_077.jpg
      bai.final.ai.ye.ab_078.jpg
      bai.final.ai.ye.ab_079.jpg
      bai.final.ai.ye.ab_080.jpg
      bai.final.ai.ye.ab_081.jpg
      bai.final.ai.ye.ab_082.jpg
      bai.final.ai.ye.ab_083.jpg
      bai.final.ai.ye.ab_084.jpg
      bai.final.ai.ye.ab_085.jpg
      bai.final.ai.ye.ab_086.jpg
      bai.final.ai.ye.ab_087.jpg
      bai.final.ai.ye.ab_088.jpg
      bai.final.ai.ye.ab_089.jpg
      bai.final.ai.ye.ab_090.jpg
      bai.final.ai.ye.ab_091.jpg
      bai.final.ai.ye.ab_092.jpg
      bai.final.ai.ye.ab_093.jpg
      bai.final.ai.ye.ab_094.jpg
      bai.final.ai.ye.ab_095.jpg
      bai.final.ai.ye.ab_096.jpg
      bai.final.ai.ye.ab_097.jpg
      bai.final.ai.ye.ab_098.jpg
      bai.final.ai.ye.ab_099.jpg
   `;
      return data.split("\n")[index];
    }
    const frameCount = 100;
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 2,
        trigger: `#About`,
        //   set start end according to preference
  
        start: `top 50% `,
        end: `top -20%`,
        scroller: `#main`,
      },
      onUpdate: render,
    });
    images[1].onload = render;
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#About",
      // pin: true,
      // markers: true,
      scroller: `#main`,
      //   set start end according to preference
      start: `top 50% `,
      end: `top -20%`,
      scrub: 0.5,
    });
  }
  function media2(){
    if (window.matchMedia("(min-width: 1024px)").matches) {
      canvas()
      console.log('canvas')
    } 
    else if(window.matchMedia("(min-width: 320px)").matches){
      console.log('no-canvas')
    }
    else {
      canvas();
    }
  }
  media2()
};
CanvasEffectEarthball()


const HomePageAboutSectionTextAnimation = () => {
  const tls = gsap.timeline({
    scrollTrigger: {
      trigger: "#About",
      scroller: "#main",
      // markers: true,
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });
  tls.from(".abouttextrightside .upperone", {
    opacity: 0,
    y: -80,
  });
  tls.from(".abouttextrightside .aboutapproach", {
    opacity: 0,
    x: 60,
  });
};
HomePageAboutSectionTextAnimation();

const HomePageServiceSectionAnimationAndSwiper = () => {
  const light = document.querySelector(".backlight");
  const grid = document.querySelector(".backgrid");

  grid.addEventListener("mousemove", function (e) {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });
  function media2() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const firstswiper = () => {
        console.log("hey 1024");
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 0,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      };
      firstswiper();
    } else if (window.matchMedia("(min-width: 320px)").matches) {
      const firstswiper = () => {
        console.log("hey 320");
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 0,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      };
      firstswiper();
    } else {
      const firstswiper = () => {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 1,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      };
      firstswiper();
    }
  }

  media2();
  tl.from("#services .servicemain .back .backgrid", {
    opacity: 0,
    duration: 0.5,

    scrollTrigger: {
      trigger: "#services",
      scroller: "#main",
      start: "top 30%",
      end: "top 20%",
      // markers: true,
      scrub: 2,
    },
  });
  tl.from("#services .servicemain .back .backlight", {
    opacity: 0,
    duration: 0.7,
    scrollTrigger: {
      trigger: "#services",
      scroller: "#main",
      start: "top 30%",
      end: "top 20%",
      // markers: true,
      scrub: 2,
    },
  });
  tl.from(".hexagon", {
    stagger: 0.2,
    opacity: 0,
    scale: 0,
    duration: 0.3,
    scrollTrigger: {
      trigger: "#services",
      scroller: "#main",
      start: "top 30%",
      end: "top 6%",
      // markers: true,

      scrub: 2,
    },
  });
};
HomePageServiceSectionAnimationAndSwiper();

const HomePagePlanSectionAnimationAndFunctionalities = () => {
  tl.from(".category", {
    y: -500,
    opacity: 0,
    scrollTrigger: {
      trigger: "#plans",
      scroller: "#main",
      start: "top 30%",
      end: "top 10%",
      // markers: true,
      scrub: 2,
    },
  });

  tl.from(".list", {
    y: 500,
    opacity: 0,
    scrollTrigger: {
      trigger: "#plans",
      scroller: "#main",
      start: "top 30%",
      end: "top 10%",
      // markers: true,
      scrub: 2,
    },
  });

  var btn1 = document.querySelector(".btn1");
  var btn2 = document.querySelector(".btn2");
  var btn3 = document.querySelector(".btn3");
  var btn4 = document.querySelector(".btn4");
  var btn5 = document.querySelector(".btn5");
  var btn6 = document.querySelector(".btn6");

  var heading = document.querySelector(".planheading");
  var heading2 = document.querySelector(".planheading2");
  var heading3 = document.querySelector(".planheading3");

  const paradiv = document.querySelectorAll(".planparadiv span");

  const webdevplaninfo = [
    `  <span> <div class="oval"></div>  Single landing page website </span>`,
    `  <span> <div class="oval"></div>  4 - 5 pages sectional website </span>`,
    `  <span> <div class="oval"></div>  Standard support &nbsp  (1month) </span>`,
    `  <span> <div class="oval"></div>  Basic animation (AOS) </span>`,
    `  <span> <div class="oval"></div>  Mobile responsiveness </span>`,
    "",
    "",
    "",
    "",
    "",
    `  <span> <div class="oval"></div>  Multiple page website </span>`,
    `  <span> <div class="oval"></div>  6 - 10 pages based website </span>`,
    `  <span> <div class="oval"></div>  Extended support &nbsp  (3month) </span>`,
    `  <span> <div class="oval"></div>  Decent animations and minimilistic interactions </span>`,
    `  <span> <div class="oval"></div>  Responsiveness and optimization </span>`,
    `  <span> <div class="oval"></div>  Basic seo services </span>`,
    `  <span> <div class="oval"></div>  Chat support functionaility </span>`,
    "",
    "",
    "",
    `  <span> <div class="oval"></div>  Multiple page website fucntional website </span>`,
    `  <span> <div class="oval"></div>  15+ plus pages based website </span>`,
    `  <span> <div class="oval"></div>  Premium  support &nbsp  (6month) </span>`,
    `  <span> <div class="oval"></div>  Stunning animations, minilistic interaction and parallax effects </span>`,
    `  <span> <div class="oval"></div>  Responsiveness, speed and optimization </span>`,
    `  <span> <div class="oval"></div>  Advanced seo paractices and services </span>`,
    `  <span> <div class="oval"></div>  Competator analysis and research </span>`,
    `  <span> <div class="oval"></div>  Advanced trending features </span>`,
    `  <span> <div class="oval"></div>  Complete Q/A audits and report </span>`,
    `  <span> <div class="oval"></div>  Secure, reliable and scalable website </span>`,
    "",
  ];

  const webdesignplaninfo = [
    `  <span> <div class="oval"></div>  Customizable logo for brand </span>`,
    `  <span> <div class="oval"></div>  5 Custom Pages design </span>`,
    `  <span> <div class="oval"></div>  Responsive design &nbsp (mobile friendly) </span>`,
    `  <span> <div class="oval"></div>  Standard grapics & images </span>`,
    `  <span> <div class="oval"></div>  Offering 10 revisions </span>`,
    `  <span> <div class="oval"></div>  Standard support &nbsp (1 months) </span>`,
    "",
    "",
    "",
    "",
    `  <span> <div class="oval"></div>  Customizable Logo for brand </span>`,
    `  <span> <div class="oval"></div>  10 Custom Pages design </span>`,
    `  <span> <div class="oval"></div>  Responsive design &nbsp (mobile and ipad friendly) </span>`,
    `  <span> <div class="oval"></div>  Advanced grapics & images </span>`,
    `  <span> <div class="oval"></div>  Offering 20 revisions </span>`,
    `  <span> <div class="oval"></div>  Custom illustration </span>`,
    `  <span> <div class="oval"></div>  Infograpic design </span>`,
    `  <span> <div class="oval"></div>  Extended support &nbsp (3 months) </span>`,
    "",
    "",
    `  <span> <div class="oval"></div>  Customizable Logo for brand </span>`,
    `  <span> <div class="oval"></div>  20+ plus Custom Pages design </span>`,
    `  <span> <div class="oval"></div>  Responsive design &nbsp (for all screen sizes) </span>`,
    `  <span> <div class="oval"></div>  Custom grapics & images </span>`,
    `  <span> <div class="oval"></div>  Offering unlimited revisions </span>`,
    `  <span> <div class="oval"></div>  Motion graphics implementation </span>`,
    `  <span> <div class="oval"></div>  Brand style guide </span>`,
    `  <span> <div class="oval"></div>  Advanced Animations and interactions </span>`,
    `  <span> <div class="oval"></div>  3d design visualization </span>`,
    `  <span> <div class="oval"></div>  Premium support &nbsp (6 months) </span>`,
    "",
  ];

  const mernstackplaninfo = [
    `  <span> <div class="oval"></div>  Single page application </span>`,
    `  <span> <div class="oval"></div>  Basic API integration </span>`,
    `  <span> <div class="oval"></div>  Standard support (1month) </span>`,
    `  <span> <div class="oval"></div>  Basic authentication  </span>`,
    `  <span> <div class="oval"></div>  Responsive design </span>`,
    `  <span> <div class="oval"></div>  Responsive design </span>`,
    "",
    "",
    "",
    "",
    `  <span> <div class="oval"></div>  Multi-Page Application </span>`,
    `  <span> <div class="oval"></div>  Advanced API Integration </span>`,
    `  <span> <div class="oval"></div>  Extended support (3month) </span>`,
    `  <span> <div class="oval"></div>  Enhanced authentication </span>`,
    `  <span> <div class="oval"></div>  Responsiveness and optimization </span>`,
    `  <span> <div class="oval"></div>  Chat support functionaility</span>`,
    `  <span> <div class="oval"></div>  Basic seo services </span>`,
    `  <span> <div class="oval"></div>  Database management </span>`,
    `  <span> <div class="oval"></div>  Security & scalibility </span>`,
    "",
    `  <span> <div class="oval"></div>  Enterprise-Grade application </span>`,
    `  <span> <div class="oval"></div>  Comprehensive API integration </span>`,
    `  <span> <div class="oval"></div>  Premium support (6month) </span>`,
    `  <span> <div class="oval"></div>  Advanced security features </span>`,
    `  <span> <div class="oval"></div>  High-Level optimization </span>`,
    `  <span> <div class="oval"></div>  Advanced SEO </span>`,
    `  <span> <div class="oval"></div>  Competitor analysis </span>`,
    `  <span> <div class="oval"></div>  Cutting-Edge features </span>`,
    `  <span> <div class="oval"></div>  Comprehensive Q/A audits </span>`,
    `  <span> <div class="oval"></div>  Continuous deployment </span>`,
  ];

  const cmsplaninfo = [
    `  <span> <div class="oval"></div>  Moderate design website </span>`,
    `  <span> <div class="oval"></div>  4 - 5 pages based website </span>`,
    `  <span> <div class="oval"></div>  Mobile responviness </span>`,
    `  <span> <div class="oval"></div>  Basic animations </span>`,
    `  <span> <div class="oval"></div>  Cross browser compatibility </span>`,
    `  <span> <div class="oval"></div>  Basic seo services </span>`,
    "",
    "",
    "",
    "",
    `  <span> <div class="oval"></div>  Professional design website </span>`,
    `  <span> <div class="oval"></div>  6 - 10 pages based website </span>`,
    `  <span> <div class="oval"></div>  Mobile and tablet responsive </span>`,
    `  <span> <div class="oval"></div>  Animations with minimalistic interactions </span>`,
    `  <span> <div class="oval"></div>  Cross browser compatibility  </span>`,
    `  <span> <div class="oval"></div>  On page seo and keyword research  </span>`,
    `  <span> <div class="oval"></div>  Whatsapp pop-up chat button </span>`,
    `  <span> <div class="oval"></div>  On going support and maintainence &nbsp (1 month) </span>`,
    "",
    "",
    `  <span> <div class="oval"></div>  Advanced design website </span>`,
    `  <span> <div class="oval"></div>  15+ plus pages based website </span>`,
    `  <span> <div class="oval"></div>  Liquid responsiveness </span>`,
    `  <span> <div class="oval"></div>  Advanced animations with parallax effects  </span>`,
    `  <span> <div class="oval"></div>  Cross browser compatibility </span>`,
    `  <span> <div class="oval"></div>  Advanced seo paractices and services </span>`,
    `  <span> <div class="oval"></div>  Whatsapp pop-up chat button </span>`,
    `  <span> <div class="oval"></div>  Advanced trending features </span>`,
    `  <span> <div class="oval"></div>  On going support and maintainence &nbsp ( 3 month) </span>`,
    `  <span> <div class="oval"></div>  Complete Q/A audits and report </span>`,
    `  <span> <div class="oval"></div>  Secure, reliable and scalable website </span>`,
  ];

  const seoplaninfo = [
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "",
  ];

  const domainhostingplaninfo = [
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "Put the point of line 1 here",
    "Put the point of line 2 here",
    "Put the point of line 3 here",
    "Put the point of line 4 here",
    "Put the point of line 5 here",
    "",
  ];

  var bttt = document.querySelectorAll(".category-table h1");
  const styleSameForAllh1 = () => {
    bttt.forEach((items) => {
      items.classList.remove("ababababa");
    });
  };

  if (
    btn1.addEventListener("click", () => {
      styleSameForAllh1();
      btn1.classList.add("ababababa");

      heading.innerHTML = `custom web development <i class="fa-solid fa-code"></i>`;
      heading2.innerHTML = `custom web development <i class="fa-solid fa-code"></i>`;
      heading3.innerHTML = `custom web development <i class="fa-solid fa-code"></i>`;

      paradiv.forEach((paradiv, index) => {
        if (index < webdevplaninfo.length) {
          paradiv.innerHTML = webdevplaninfo[index];
        }
      });
    })
  );

  if (
    btn2.addEventListener("click", () => {
      styleSameForAllh1();
      btn2.classList.add("ababababa");
      heading.innerHTML = `web designing <i class="fa-solid fa-pen-nib"></i>`;
      heading2.innerHTML = `web designing <i class="fa-solid fa-pen-nib"></i>`;
      heading3.innerHTML = `web designing <i class="fa-solid fa-pen-nib"></i>`;

      paradiv.forEach((paradiv, index) => {
        if (index < webdesignplaninfo.length) {
          paradiv.innerHTML = webdesignplaninfo[index];
        }
      });
    })
  );

  if (
    btn3.addEventListener("click", () => {
      styleSameForAllh1();
      btn3.classList.add("ababababa");

      heading.innerHTML = `cms development <i class="fa-solid fa-window-restore"></i>`;
      heading2.innerHTML = `cms development <i class="fa-solid fa-window-restore"></i>`;
      heading3.innerHTML = `cms development <i class="fa-solid fa-window-restore"></i>`;
      paradiv.forEach((paradiv, index) => {
        if (index < cmsplaninfo.length) {
          paradiv.innerHTML = cmsplaninfo[index];
        }
      });
    })
  );

  if (
    btn4.addEventListener("click", () => {
      styleSameForAllh1();
      btn4.classList.add("ababababa");

      heading.innerHTML = `seo services <i class="fa-solid fa-chart-simple"></i>`;
      heading2.innerHTML = `seo services <i class="fa-solid fa-chart-simple"></i>`;
      heading3.innerHTML = `seo services <i class="fa-solid fa-chart-simple"></i>`;
      paradiv.forEach((paradiv, index) => {
        if (index < seoplaninfo.length) {
          paradiv.innerHTML = seoplaninfo[index];
        }
      });
    })
  );

  if (
    btn5.addEventListener("click", () => {
      styleSameForAllh1();
      btn5.classList.add("ababababa");

      heading.innerHTML = `mern stack <i class="fa-brands fa-mendeley"></i>`;
      heading2.innerHTML = `mern stack <i class="fa-brands fa-mendeley"></i>`;
      heading3.innerHTML = `mern stack <i class="fa-brands fa-mendeley"></i>`;

      paradiv.forEach((paradiv, index) => {
        if (index < mernstackplaninfo.length) {
          paradiv.innerHTML = mernstackplaninfo[index];
        }
      });
    })
  );

  if (
    btn6.addEventListener("click", () => {
      styleSameForAllh1();
      btn6.classList.add("ababababa");

      heading.innerHTML = `domain & hosting <i class="fa-solid fa-link"></i>`;
      heading2.innerHTML = `domain & hosting <i class="fa-solid fa-link"></i>`;
      heading3.innerHTML = `domain & hosting <i class="fa-solid fa-link"></i>`;
      const infoAboutPlans = () => {
        paradiv[0].innerText = "Put the point of line 1 here";
        paradiv[1].innerText = "Put the point of line 2 here";
        paradiv[2].innerText = "Put the point of line 3 here";
        paradiv[3].innerText = "Put the point of line 4 here";
        paradiv[4].innerText = "Put the point of line 5 here";
        paradiv[5].innerText = "Put the point of line 6 here";
        paradiv[6].innerText = "Put the point of line 7 here";
        paradiv[7].innerText = "Put the point of line 8 here";
        paradiv[8].innerText = "Put the point of line 9 here";
        paradiv[9].innerText = "Put the point of line 10 here";
        paradiv[10].innerText = "Put the point of line 11 here";
        paradiv[11].innerText = "Put the point of line 12 here";
        paradiv[12].innerText = "Put the point of line 13 here";
        paradiv[13].innerText = "Put the point of line 14 here";
        paradiv[14].innerText = "Put the point of line 15 here";
        paradiv[15].innerText = "Put the point of line 16 here";
        paradiv[16].innerText = "Put the point of line 17 here";
        paradiv[17].innerText = "Put the point of line 18 here";
        paradiv[18].innerText = "Put the point of line 19 here";
        paradiv[19].innerText = "Put the point of line 20 here";
        paradiv[20].innerText = "Put the point of line 21 here";
        paradiv[21].innerText = "Put the point of line 22 here";
        paradiv[22].innerText = "Put the point of line 23 here";
        paradiv[23].innerText = "Put the point of line 24 here";
        paradiv[24].innerText = "Put the point of line 25 here";
        paradiv[25].innerText = "Put the point of line 26 here";
        paradiv[26].innerText = "Put the point of line 27 here";
        paradiv[27].innerText = "Put the point of line 28 here";
        paradiv[28].innerText = "Put the point of line 29 here";
        paradiv[29].innerText = "Put the point of line 30 here";
      };
      infoAboutPlans();
    })
  );
};
HomePagePlanSectionAnimationAndFunctionalities();

const HomePageReviewsSectionCubeEffectAndAnimation = () => {
  var swiper2 = new Swiper(".mySwiper2", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 50,
      shadowScale: 0.94,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });

  tl.from(".reviews-main .swiper .swiper-wrapper .swiper-slide img", {
    opacity: 0,
    scale: 0,
    rotate: "180deg",
    y: -200,
    scrollTrigger: {
      trigger: "#reviews",
      scroller: "#main",
      start: "top 25%",
      end: "top 6%",
      // markers: true,
      scrub: 2,
    },
  });

  tl.from(".instruction", {
    opacity: 0,
    duration: 2,
    fontWeight: 700,
    x: -80,
    repeat: -1,
  });
};
HomePageReviewsSectionCubeEffectAndAnimation();
