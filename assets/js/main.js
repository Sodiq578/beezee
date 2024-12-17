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























  const regions = {
    "Andijon viloyati": {
      "tumanlar": {
        "Andijon tumani": {"Tuman markazi": "Kuyganyor"},
        "Asaka tumani": {"Tuman markazi": "Asaka (shahar)"},
        "Baliqchi tumani": {"Tuman markazi": "Baliqchi (shahar)"},
        "Boʻston tumani": {"Tuman markazi": "Boʻston (shaharcha)"},
        "Buloqboshi tumani": {"Tuman markazi": "Buloqboshi"},
        "Izboskan tumani": {"Tuman markazi": "Poytugʻ"},
        "Jalaquduq tumani": {"Tuman markazi": "Jalaquduq"},
        "Xoʻjaobod tumani": {"Tuman markazi": "Xoʻjaobod"},
        "Qoʻrgʻontepa tumani": {"Tuman markazi": "Qoʻrgʻontepa"},
        "Marhamat tumani": {"Tuman markazi": "Marhamat"},
        "Oltinkoʻl tumani": {"Tuman markazi": "Oltinkoʻl (qishloq)"},
        "Paxtaobod tumani": {"Tuman markazi": "Paxtaobod"},
        "Shahrixon tumani": {"Tuman markazi": "Shahrixon (shahar)"},
        "Ulugʻnor tumani": {"Tuman markazi": "Oqoltin"}
      }
    },

    
  
    "Qoraqalpogʻiston": {
      "tumanlar": {
        "Amudaryo tumani": {"Tuman markazi": "Mangʻit (shahar)"},
        "Beruniy tumani": {"Tuman markazi": "Beruniy (shahar)"},
        "Chimboy tumani": {"Tuman markazi": "Chimboy"},
        "Ellikqalʼa tumani": {"Tuman markazi": "Boʻston (shahar)"},
        "Kegeyli tumani": {"Tuman markazi": "Kegeyli"},
        "Moʻynoq tumani": {"Tuman markazi": "Moʻynoq"},
        "Nukus tumani": {"Tuman markazi": "Oqmangʻit"},
        "Qanlikoʻl tumani": {"Tuman markazi": "Qanlikoʻl"},
        "Qoʻngʻirot tumani": {"Tuman markazi": "Qoʻngʻirot"},
        "Qoraoʻzak tumani": {"Tuman markazi": "Qoraoʻzak"},
        "Shumanay tumani": {"Tuman markazi": "Shumanay"},
        "Taxtakoʻpir tumani": {"Tuman markazi": "Taxtakoʻpir"},
        "Toʻrtkoʻl tumani": {"Tuman markazi": "Toʻrtkoʻl"},
        "Xoʻjayli tumani": {"Tuman markazi": "Xoʻjayli"},
        "Taxiatosh tumani": {"Tuman markazi": "Taxiatosh"},
        "Boʻzatov tumani": {"Tuman markazi": "Boʻzatov"}
      }
    },
    "Navoiy viloyati": {
      "tumanlar": {
        "Konimex tumani": {"Tuman markazi": "Konimex (shaharcha)"},
        "Karmana tumani": {"Tuman markazi": "Karmana"},
        "Qiziltepa tumani": {"Tuman markazi": "Qiziltepa"},
        "Xatirchi tumani": {"Tuman markazi": "Yangirabot"},
        "Navbahor tumani": {"Tuman markazi": "Beshrabot"},
        "Nurota tumani": {"Tuman markazi": "Nurota"},
        "Tomdi tumani": {"Tuman markazi": "Tomdibuloq"},
        "Uchquduq tumani": {"Tuman markazi": "Uchquduq"}
      }
    },
    "Buxoro viloyati": {
      "tumanlar": {
        "Olot tumani": {"Tuman markazi": "Olot"},
        "Buxoro tumani": {"Tuman markazi": "Galaosiyo"},
        "Gʻijduvon tumani": {"Tuman markazi": "Gʻijduvon"},
        "Jondor tumani": {"Tuman markazi": "Jondor (shaharcha)"},
        "Kogon tumani": {"Tuman markazi": "Kogon"},
        "Qorakoʻl tumani": {"Tuman markazi": "Qorakoʻl (shahar)"},
        "Qorovulbozor tumani": {"Tuman markazi": "Qorovulbozor"},
        "Peshku tumani": {"Tuman markazi": "Yangibozor"},
        "Romitan tumani": {"Tuman markazi": "Romitan"},
        "Shofirkon tumani": {"Tuman markazi": "Shofirkon"},
        "Vobkent tumani": {"Tuman markazi": "Vobkent"}
      }
    },

    
    
      "Farg'ona viloyati": {
        "tumanlar": {
          "Farg'ona tumani": {"Tuman markazi": "Farg'ona"},
          "Quva tumani": {"Tuman markazi": "Quva"},
          "Dang'ara tumani": {"Tuman markazi": "Dang'ara"},
          "Beshariq tumani": {"Tuman markazi": "Beshariq"},
          "Oltiariq tumani": {"Tuman markazi": "Oltiariq"},
          "Yazyavan tumani": {"Tuman markazi": "Yazyavan"},
          "Toshloq tumani": {"Tuman markazi": "Toshloq"},
          "Bog'dod tumani": {"Tuman markazi": "Bog'dod"},
          "Rishton tumani": {"Tuman markazi": "Rishton"},
          "Furqat tumani": {"Tuman markazi": "Furqat"},
          "O'zbekiston tumani": {"Tuman markazi": "O'zbekiston"}
        }
      },
      "Jizzax viloyati": {
        "tumanlar": {
          "Jizzax tumani": {"Tuman markazi": "Jizzax"},
          "Zafarobod tumani": {"Tuman markazi": "Zafarobod"},
          "Forish tumani": {"Tuman markazi": "Forish"},
          "Baxmal tumani": {"Tuman markazi": "Baxmal"},
          "G'allaorol tumani": {"Tuman markazi": "G'allaorol"},
          "Arnasoy tumani": {"Tuman markazi": "Arnasoy"},
          "Yangiobod tumani": {"Tuman markazi": "Yangiobod"},
          "Shahrisabz tumani": {"Tuman markazi": "Shahrisabz"}
        }
      },
      "Xorazm viloyati": {
        "tumanlar": {
          "Urganch tumani": {"Tuman markazi": "Urganch"},
          "Gurlan tumani": {"Tuman markazi": "Gurlan"},
          "Xiva tumani": {"Tuman markazi": "Xiva"},
          "Beruniy tumani": {"Tuman markazi": "Beruniy"},
          "Shovot tumani": {"Tuman markazi": "Shovot"},
          "Khiva tumani": {"Tuman markazi": "Khiva"},
          "Kungrad tumani": {"Tuman markazi": "Kungrad"},
          "Urganch shahar": {"Tuman markazi": "Urganch"}
        }
      }, 

      




      
        "Namangan viloyati": {
          "tumanlar": {
            "Namangan tumani": {"Tuman markazi": "Namangan"},
            "Chortoq tumani": {"Tuman markazi": "Chortoq"},
            "Kosonsoy tumani": {"Tuman markazi": "Kosonsoy"},
            "Mingbuloq tumani": {"Tuman markazi": "Mingbuloq"},
            "Tuproqqala tumani": {"Tuman markazi": "Tuproqqala"},
            "Uchqo'rg'on tumani": {"Tuman markazi": "Uchqo'rg'on"},
            "Yangiyo'l tumani": {"Tuman markazi": "Yangiyo'l"},
            "Kaspiy tumani": {"Tuman markazi": "Kaspiy"},
            "Chust tumani": {"Tuman markazi": "Chust"},
            "Peshku tumani": {"Tuman markazi": "Peshku"}
          }
        },
        "Surxondaryo viloyati": {
          "tumanlar": {
            
            "Termiz tumani": {"Tuman markazi": "Termiz"},
            "Oltinosy tumani": {"Tuman markazi": "Bo'ston"},

            "Angor tumani": {"Tuman markazi": "Angor"},
            "Sherobod tumani": {"Tuman markazi": "Sherobod"},
            "Boysun tumani": {"Tuman markazi": "Boysun"},
            "Jarkurgan tumani": {"Tuman markazi": "Jarkurgan"},
            "Uzun tumani": {"Tuman markazi": "Uzun"},
            "Sariosiyo tumani": {"Tuman markazi": "Sariosiyo"},
            "Qumqo'rg'on tumani": {"Tuman markazi": "Qumqo'rg'on"},
            "Muzrabot tumani": {"Tuman markazi": "Muzrabot"},
             
          }
        },
        "Samarqand viloyati": {
          "tumanlar": {
            "Samarqand tumani": {"Tuman markazi": "Samarqand"},
            "Paxtachi tumani": {"Tuman markazi": "Paxtachi"},
            "Ishtixon tumani": {"Tuman markazi": "Ishtixon"},
            "Jomboy tumani": {"Tuman markazi": "Jomboy"},
            "Narpay tumani": {"Tuman markazi": "Narpay"},
            "Kattaqo'rg'on tumani": {"Tuman markazi": "Kattaqo'rg'on"},
            "Oqdaryo tumani": {"Tuman markazi": "Oqdaryo"},
            "Pastdarg'om tumani": {"Tuman markazi": "Pastdarg'om"},
            "Urgut tumani": {"Tuman markazi": "Urgut"},
            "Samarkand shahar": {"Tuman markazi": "Samarqand"}
          }
        },













        
          "Sirdaryo viloyati": {
            "tumanlar": {
              "Guliston tumani": {"Tuman markazi": "Guliston"},
              "Sirdaryo tumani": {"Tuman markazi": "Sirdaryo"},
              "Mirzaobod tumani": {"Tuman markazi": "Mirzaobod"},
              "Boyovut tumani": {"Tuman markazi": "Boyovut"},
              "Shirin tumani": {"Tuman markazi": "Shirin"},
              "Oqoltin tumani": {"Tuman markazi": "Oqoltin"},
              "Xovos tumani": {"Tuman markazi": "Xovos"},
              "Yangiyer tumani": {"Tuman markazi": "Yangiyer"},
              "Arnasoy tumani": {"Tuman markazi": "Arnasoy"}
            }
          },
          "Toshkent shahr": {
            "tumanlar": {
              "Chilonzor tumani": {"Tuman markazi": "Chilonzor"},
              "Mirzo-Ulug'bek tumani": {"Tuman markazi": "Mirzo-Ulug'bek"},
              "Mirobod tumani": {"Tuman markazi": "Mirobod"},
              "Yunusobod tumani": {"Tuman markazi": "Yunusobod"},
              "Sergeli tumani": {"Tuman markazi": "Sergeli"},
              "Shayxontohur tumani": {"Tuman markazi": "Shayxontohur"},
              "Almazar tumani": {"Tuman markazi": "Almazar"},
              "Samarqand tumani": {"Tuman markazi": "Samarqand"},
              "Bektemir tumani": {"Tuman markazi": "Bektemir"},
              "Yakkasaroy tumani": {"Tuman markazi": "Yakkasaroy"}
            }
          }
        }
        
      
      
    
    
    
    
  

const regionSelect = document.getElementById('region');
const citySelect = document.getElementById('city');
const districtSelect = document.getElementById('district');
const villageSelect = document.getElementById('village');

function populateSelect(select, options) {
    select.innerHTML = '<option value="">Tanlang</option>';
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
    select.disabled = options.length === 0;
}

regionSelect.addEventListener('change', () => {
    const selectedRegion = regions[regionSelect.value];
    if (selectedRegion) {
        populateSelect(citySelect, Object.keys(selectedRegion.tumanlar));
        districtSelect.disabled = true;
        villageSelect.disabled = true;
    }
});

citySelect.addEventListener('change', () => {
    const selectedRegion = regions[regionSelect.value];
    const selectedCity = selectedRegion?.tumanlar[citySelect.value]?.mahallalar || [];
    populateSelect(districtSelect, selectedCity);
    villageSelect.disabled = true;
});

populateSelect(regionSelect, Object.keys(regions));
 
