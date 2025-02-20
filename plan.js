(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

const HamburgerFunction = () => {
  const hamburg = document.querySelector('.hamburger');
  const hamnav = document.querySelector('.hamburg-nav');
  const closebtn = document.querySelector('.btn-nav-ham');

  function open() {
    hamburg.addEventListener('click', () => {
      hamnav.style.opacity = '1';
      hamnav.style.transform = 'translateX(0%)';
    });
  }
  function close() {
    closebtn.addEventListener('click', () => {
      hamnav.style.opacity = '0';
      hamnav.style.transform = 'translateX(100%)';
    });
  }
  open();
  close();
};
HamburgerFunction();

const NavigationOfPlans = () => {
  // FOR DECLERATION

  const navbarh1 = document.querySelectorAll('.PlanPage2navbar h3');
  const PplanBoxbasic = document.querySelector('.basic');
  const PplanBoxgold = document.querySelector('.gold');
  const PplanBoxplatinum = document.querySelector('.platinum');
  const PplanBoxBasicPrice = document.querySelector('#basicprice');
  const PplanBoxGoldPrice = document.querySelector('#basicprice2');
  const PplanBoxPlatinumPrice = document.querySelector('#basicprice3');

  console.log(PplanBoxBasicPrice, PplanBoxGoldPrice, PplanBoxPlatinumPrice);

  // FOR NAVIGATION
  const planNavigateNavbar = () => {
    navbarh1.forEach(function (h1) {
      h1.addEventListener('click', function () {
        for (let i = 0; i < navbarh1.length; i++) {
          navbarh1[i].style.color = '#fafafa';
          navbarh1[i].style.borderBottom = ' 1px solid transparent';
        }
        h1.style.borderBottom = ' 1px solid #ffc107';
        h1.style.color = ' #ffc107';
      });
    });
  };
  planNavigateNavbar();

  navbarh1.forEach(function (h1) {
    h1.addEventListener('click', function () {
      if (h1.innerText === 'WEB DEVELOPMENT') {
        PplanBoxbasic.innerHTML = `  
                <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
                  Single landing page website
                </p>
                   <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
                   4 - 5 pages sectional website 
                </p>
                  <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
                  Standard support (1month)
                </p>
                  <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
                  Basic animation (AOS)
                </p>
                  <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
                  Mobile responsiveness
                </p>

                <button>
                  get started <i class="fa-solid fa-arrow-up"></i>
                </button>`;
        PplanBoxBasicPrice.innerHTML = ` $150/ <span>month</span> `;
        PplanBoxgold.innerHTML = `  
                  <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
                Multiple page website
                </p>
                 <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
               6 - 10 pages based website
                </p>
                    <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
               Extended support (3month) 
                </p>
                  <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
               Decent animations and minimilistic interactions
                </p>
                  <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
                Responsiveness and optimization
                </p>
                   <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
                Basic seo services
                </p>
                   <p>
                  <span class="spanoutspan">
                    <span class="spaninapan"></span>
                  </span>
               Chat support functionaility
                </p>
                <button>
                  get started <i class="fa-solid fa-arrow-up"></i>
                </button>`;
        PplanBoxGoldPrice.innerHTML = `$400/ <span>month</span> `;
        PplanBoxplatinum.innerHTML = `  
                <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
              Multiple page website fucntional website
              </p>
               <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
             15+ plus pages based website
              </p>
                  <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
             Premium  support (6month)
              </p>
                <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
             Stunning animations, minilistic interaction and parallax effects
              </p>
                <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
              Responsiveness, speed and optimization
              </p>
                 <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
              Advanced seo paractices and services
              </p>
                 <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
              Competator analysis and research
              </p>
                 <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
             Advanced trending features
              </p>
                 <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
              Complete Q/A audits and report
              </p>
                 <p>
                <span class="spanoutspan">
                  <span class="spaninapan"></span>
                </span>
             Secure, reliable and scalable website
              </p>
              <button>
                get started <i class="fa-solid fa-arrow-up"></i>
                </button>`;
        PplanBoxPlatinumPrice.innerHTML = `$800/ <span>month</span> `;
      }
      if (h1.innerText === 'UI/UX DESIGNING') {
        PplanBoxbasic.innerHTML = `  
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Customizable logo for brand
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  5 Custom Pages design
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Responsive design (mobile friendly)
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Standard graphics & images
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Offering 10 revisions
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Standard support  (1 month)
</p>

               <button>
                get started <i class="fa-solid fa-arrow-up"></i>
               </button>`;
        PplanBoxBasicPrice.innerHTML = ` $250/ <span>month</span> `;
        PplanBoxgold.innerHTML = `  
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Customizable Logo for brand
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  10 Custom Pages design
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Responsive design (mobile and ipad friendly)
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced graphics & images
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Offering 20 revisions
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Custom illustration
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Infographic design
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Extended support  (3 months)
</p>
                <button>
                  get started <i class="fa-solid fa-arrow-up"></i>
                </button>`;
        PplanBoxGoldPrice.innerHTML = `$650/ <span>month</span> `;
        PplanBoxplatinum.innerHTML = `  
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Customizable Logo for brand
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  20+ Custom Pages design
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Responsive design &nbsp;(for all screen sizes)
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Custom graphics & images
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Offering unlimited revisions
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Motion graphics implementation
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Brand style guide
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced Animations and interactions
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  3D design visualization
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Premium support &nbsp;(6 months)
</p>
              <button>
                get started <i class="fa-solid fa-arrow-up"></i>
              </button>`;
        PplanBoxPlatinumPrice.innerHTML = `$1050/ <span>month</span> `;
      }
      if (h1.innerText === 'MERN STACK') {
        PplanBoxbasic.innerHTML = `  
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Single page application
</p>
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Basic API integration
</p>
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Standard support (1 month)
</p>
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Basic authentication
</p>
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Responsive design
</p>
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Basic framer motion animations
</p>

               <button>
                get started <i class="fa-solid fa-arrow-up"></i>
               </button>`;
        PplanBoxBasicPrice.innerHTML = ` $500/ <span>month</span> `;
        PplanBoxgold.innerHTML = `  
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Multi-Page Application
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced API Integration
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Extended support (3month)
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Enhanced authentication
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Responsiveness and optimization
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Chat support functionality
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Basic SEO services
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Database management
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Security & scalability
</p>
                <button>
                  get started <i class="fa-solid fa-arrow-up"></i>
                </button>`;
        PplanBoxGoldPrice.innerHTML = ` $1200/ <span>month</span> `;
        PplanBoxplatinum.innerHTML = `  
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Enterprise-Grade application
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Comprehensive API integration
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Premium support (6 months)
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced security features
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  High-Level optimization
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced SEO
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Competitor analysis
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Cutting-Edge features
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Comprehensive Q/A audits
</p>
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Continuous deployment
</p>
              <button>
                get started <i class="fa-solid fa-arrow-up"></i>
              </button>`;
        PplanBoxPlatinumPrice.innerHTML = ` $2500/ <span>month</span> `;
      }
      if (h1.innerText === 'CMS DEVELOPMENT') {
        PplanBoxbasic.innerHTML = `  
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Moderate design website
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    4 - 5 pages based website
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Mobile responsiveness
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Basic animations
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Cross browser compatibility
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Basic SEO services
</p>

               <button>
                get started <i class="fa-solid fa-arrow-up"></i>
               </button>`;
        PplanBoxBasicPrice.innerHTML = ` $300/ <span>month</span> `;
        PplanBoxgold.innerHTML = `  
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Professional design website
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  6 - 10 pages based website
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Mobile and tablet responsive
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Animations with minimalistic interactions
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Cross browser compatibility
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  On page SEO and keyword research
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  WhatsApp pop-up chat button
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Ongoing support and maintenance (1 month)
</p>
                <button>
                  get started <i class="fa-solid fa-arrow-up"></i>
                </button>`;
        PplanBoxGoldPrice.innerHTML = `$600/ <span>month</span> `;
        PplanBoxplatinum.innerHTML = `  
<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced design website
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  15+ plus pages based website
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Liquid responsiveness
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced animations with parallax effects
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Cross browser compatibility
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced seo practices and services
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Whatsapp pop-up chat button
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Advanced trending features
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  On going support and maintenance ( 3 month)
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Complete Q/A audits and report
</p>

<p>
  <span class="spanoutspan">
    <span class="spaninapan"></span>
  </span>
  Secure, reliable and scalable website
</p>

              <button>
                get started <i class="fa-solid fa-arrow-up"></i>
              </button>`;
        PplanBoxPlatinumPrice.innerHTML = `$1500/ <span>month</span> `;
      }
      if (h1.innerText === 'SEO SERVICES') {
        PplanBoxbasic.innerHTML = `  
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
   Local SEO Audit Report
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
   Local Keyword Research & Analysis
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
    Local Competitor Analysis Report
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
   Local On-Page SEO Optimization (Basic Optimization)
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
  On-Page Local SEO Optimization Plan
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
  Local Content Calendar (Basic Schedule)
</p>
<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
 Google My Business Management
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
 Local Citations Setup
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
Review Management Strategy
</p>


<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
Local Analytics Setup (Google Analytics Integration)
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
Google Analytics Local Integration
</p>


<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
Monthly Local Performance Reports	
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
Ongoing Support & Maintenance (3 Months)
</p>



<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
Local Conversion Rate Optimization Plan
</p>

<p>
    <span class="spanoutspan">
        <span class="spaninapan"></span>
    </span>
Local Engagement Report
</p>
   
               <button>
                get started <i class="fa-solid fa-arrow-up"></i>
               </button>`;
        PplanBoxBasicPrice.innerHTML = ` $450/ <span>month</span> `;
        PplanBoxgold.innerHTML = `  
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                  Local SEO Audit Report
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                  Local Keyword Research & Analysis
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                   Local Competitor Analysis Report
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                  Local On-Page SEO Optimization (Advanced Optimization)
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                 On-Page Local SEO Optimization Plan
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                 Local Content Calendar (Advanced Schedule)
               </p>
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                Google My Business Management
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                Local Citations Setup
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Review Management Strategy
               </p>
               
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Analytics Setup (Google Analytics & Tag Manager)
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Google Analytics Local Integration
               </p>
               
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Monthly Local Performance Reports	
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Ongoing Support & Maintenance (6 Months)
               </p>
               
               
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Conversion Rate Optimization Plan
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Engagement Report
               </p>
                <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Marketing Automation Workflows
               </p>
                  
                              <button>
                               get started <i class="fa-solid fa-arrow-up"></i>
                              </button>`;
        PplanBoxGoldPrice.innerHTML = ` $800/ <span>month</span> `;
        PplanBoxplatinum.innerHTML = `  
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                  Local SEO Audit Report
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                  Local Keyword Research & Analysis
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                   Local Competitor Analysis Report
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                  Local On-Page SEO Optimization (Comprehensive Optimization)
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                 On-Page Local SEO Optimization Plan
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                 Local Content Calendar (Comprehensive Schedule)
               </p>
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                Google My Business Management
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
                Local Citations Setup
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Review Management Strategy
               </p>
               
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Analytics Setup (Advanced Analytics Integration)
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Google Analytics Local Integration
               </p>
               
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Monthly Local Performance Reports	
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Ongoing Support & Maintenance (12 Months)
               </p>
               
               
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Conversion Rate Optimization Plan
               </p>
               
               <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Engagement Report
               </p>
                <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Marketing Automation Workflows
               </p>
                  
                <p>
                   <span class="spanoutspan">
                       <span class="spaninapan"></span>
                   </span>
               Local Omnichannel Marketing Integration Plan
               </p>
                              <button>
                               get started <i class="fa-solid fa-arrow-up"></i>
                              </button>`;
        PplanBoxPlatinumPrice.innerHTML = ` $1200/ <span>month</span> `;
      }
    });
  });
};

NavigationOfPlans();
