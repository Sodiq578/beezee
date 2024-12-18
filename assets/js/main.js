(function () {
  "use strict";

  // ==== Preloader
  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  // ======= Sticky
  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
 

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/newImg/logo.svg";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/newImg/logo.svg";
    }

    
    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ==== for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  // ========= glightbox
  const myGallery = GLightbox({
    href: "https://www.youtube.com/watch?v=r44RKWyfcFw",
    type: "video",
    source: "youtube", //vimeo, youtube or local
    width: 900,
    autoplayVideos: true,
  });

  //====== counter up
  const cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: "k",
  });
  cu.start();

  //=====  WOW active
  new WOW().init();

  //=====  particles
  if (document.getElementById("particles-1"))
    particlesJS("particles-1", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !1,
            mode: "bubble",
          },
          onclick: {
            enable: !1,
            mode: "repulse",
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    });

  if (document.getElementById("particles-2"))
    particlesJS("particles-2", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !1,
            mode: "bubble",
          },
          onclick: {
            enable: !1,
            mode: "repulse",
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    });
})();







  // GLightbox kutubxonasini ishga tushurish
  const lightbox = GLightbox({
    selector: '.video-popup',  // Video linki
  });








  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item a");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarToggler.offsetParent !== null) {
          // Navbar toggler faqat kichik ekranda ko'rinadi
          navbarCollapse.classList.remove("show");
        }
      });
    });
  });




  document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".counter-value");
    counters.forEach(counter => {
      let target = +counter.dataset.number;
      let start = 0;
      let increment = target / 100;
  
      function updateCounter() {
        start += increment;
        if (start < target) {
          counter.textContent = Math.floor(start);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      }
  
      updateCounter();
    });
  });







  function scrollToSection() {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  }






// Get the button container and footer elements
const fixedBtnContainer = document.querySelector('.fixed-btn-container');
const footer = document.querySelector('#footer');

// Function to check if the button is in the viewport
function checkButtonVisibility() {
  const footerPosition = footer.getBoundingClientRect();
  
  // If footer is in view, hide the button; otherwise, show it
  if (footerPosition.top <= window.innerHeight && footerPosition.bottom >= 0) {
    fixedBtnContainer.classList.add('hide-btn'); // Hide button when footer is in view
  } else {
    fixedBtnContainer.classList.remove('hide-btn'); // Show button when not in footer view
  }
}

// Listen for scroll events
window.addEventListener('scroll', checkButtonVisibility);

// Check visibility when page loads (in case the page is loaded at the bottom)
window.addEventListener('load', checkButtonVisibility);






  













  $(document).ready(function() {
    // Initialize phone number input with intl-tel-input
    $("#mobile_code").intlTelInput({
      initialCountry: "uz", // Set the default country code
      separateDialCode: true, // Separate the country code and number
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // Enable validation and utils
    });
  
    // Additional JavaScript to handle the phone input styling and behavior can be added here
  });
  


















  const counters = document.querySelectorAll('.counter-value');

  // Har safar bo'lim ko'ringanda ishlaydi
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  });

  observer.observe(document.querySelector('#facts'));

  // Animatsiya funksiyasi
  function animateCounters() {
    counters.forEach(counter => {
      counter.innerText = '0'; // Har safar qayta boshlash uchun
      const updateCount = () => {
        const target = +counter.getAttribute('data-number');
        const current = +counter.innerText;
        const increment = target / 400; // 10 soniya davomida tugashi uchun

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }






















 
// Telegram sozlamalari
const botToken = '7747931873:AAEx8TM-ddgYOQtnr6cyGGnT1nzC7ElG4u0';
const chatId = '5838205785';  // Shaxsiy chat ID
const groupId = '-4717816493';  // Guruh ID

// Form va elementlarni olish
const form = document.getElementById('order-form');
const districtInput = document.getElementById('district');
const timeSelect = document.getElementById('time');

// Form yuborish
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Form ma'lumotlarini olish
    const name = document.getElementById('name').value;
    const phone = document.getElementById('mobile_code').value;
    const district = districtInput.value;
    const time = timeSelect.value;

    const message = `
📝 *⚫️ Yangi buyurtma 🥳 Beezee*  📝

📛 *Ism*: ${name}

📞 *Telefon*: ${phone}

📍 *Manzil*: ${district || "Ko'rsatilmagan"}

⏰ *Bog'lanish vaqti*: 
${time === "morning" ? "Kunning birinchi yarmi" : time === "afternoon" ? "Kunning ikkinchi yarmi" : "Farqi yo'q"}
`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        // Shaxsiy chatga xabar yuborish
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' }),
        });

        // Guruhga xabar yuborish
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: groupId, text: message, parse_mode: 'Markdown' }),
        });

        // Modalni ko'rsatish
        document.getElementById('successModal').style.display = 'block';

        // Formni tozalash
        form.reset();
    } catch (error) {
        console.error('Xatolik:', error);
        alert('Xatolik yuz berdi! Qaytadan urinib ko‘ring.');
    }
});

// Modalni yopish
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('successModal').style.display = 'none';
});
