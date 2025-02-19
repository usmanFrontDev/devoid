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


// Load EmailJS
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("feSRPLEQN8N9Y-Oi3"); // Replace with your Public Key

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    emailjs.sendForm("service_ikr9mwv", "template_swjjjle", this).then(
      function (response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log("FAILED...", error);
      }
    );

    // Optionally clear the form after submission
    this.reset();
  });
});
