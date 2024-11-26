(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

const HamburgerFunction = () => {
  const hamburg = document.querySelector(".hamburger");
  const hamnav = document.querySelector(".hamburg-nav");
  const closebtn = document.querySelector(".btn-nav-ham");

  function open(){
      hamburg.addEventListener('click', ()=>{
        hamnav.style.opacity= '1';
        hamnav.style.transform= 'translateX(0%)';
      })
  }
  function close(){
    closebtn.addEventListener('click', ()=>{
      hamnav.style.opacity= '0';
      hamnav.style.transform= 'translateX(100%)';
    })
  }
  open()
  close()
};
HamburgerFunction();