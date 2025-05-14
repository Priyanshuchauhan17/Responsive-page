const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'), 
  smooth: true
});

const menuButton = document.getElementById('menu-button');
const navPart2 = document.getElementById('nav-part2');

menuButton.addEventListener('click', () => {
  navPart2.classList.toggle('active');
  menuButton.classList.toggle('open');
});


function page3HoverAnimation() {
  const elemC = document.querySelector("#elem-contanior"); 
  const fixed = document.querySelector("#fixed-img");   

  if (fixed && elemC) { 
    elemC.addEventListener("mouseenter", function() {
      fixed.style.display = "block"; 
    });

    elemC.addEventListener("mouseleave", function() {
      fixed.style.display = "none";  
    });

    const elems = document.querySelectorAll(".elem"); 

    elems.forEach(function(element) { 
      element.addEventListener("mouseenter", function() {
        const image = element.getAttribute("data-imge"); 
        if (image) {
          fixed.style.backgroundImage = `url(${image})`; 
        }
      });
    });
  } else {
    console.error("Error: #elem-contanior or #fixed-img not found!");
  }
}

page3HoverAnimation();
//swiper js start
function initializeSwiper() { 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto', 
    spaceBetween: 20, 
    loop: true, 
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3, 
        spaceBetween: 30
      }
    }
  });
}

page3HoverAnimation(); 
initializeSwiper(); 
