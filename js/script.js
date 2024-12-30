// =======================================================
// -- Home Slider Functionality
// =======================================================

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// =======================================================
// -- Nav Menu Functionality
// =======================================================

const nav = document.querySelector("nav");

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20) {
    nav.style.padding = "10px 0";
    // nav.style.background = "var(--background-primary)";
  } else {
    nav.style.padding = "15px 0";
    // nav.style.background = "none";
  }
}


// =======================================================
// -- Mobile Nav Menu Functionality
// =======================================================

const navMenu = document.querySelector(".mobile-nav-menu");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const closeMenuBtn = document.querySelector(".nav-close-btn");

// Nav Toggle Function
const navToggleFunc = () => {
    navMenu.classList.toggle("active");
};


// =======================================================
// -- Theme Button Functionality
// =======================================================

const themeBtn = document.querySelectorAll(".theme-btn");

for(let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');

      for(let i = 0; i < themeBtn.length; i++) {
          themeBtn[i].classList.toggle("light");
          themeBtn[i].classList.toggle("dark");
          // localStorage.setItem("theme-btn", themeBtn[i].classList.value.slice(27));
      }

      // localStorage.setItem("theme-name", document.body.classList.value);
    })
}


// document.body.classList.add(localStorage.getItem("theme-name"));