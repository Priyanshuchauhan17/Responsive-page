//smooth scrolling from locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'), 
  smooth: true
});

// Mobile Navigation Toggle
const menuButton = document.getElementById('menu-button');
const navPart2 = document.getElementById('nav-part2');

menuButton.addEventListener('click', () => {
  navPart2.classList.toggle('active');
  menuButton.classList.toggle('open');
});


//on hover animation for page 3 elements
function page3HoverAnimation() {
  const elemC = document.querySelector("#elem-contanior"); // Selects the container
  const fixed = document.querySelector("#fixed-img");   // Selects the image display element

  if (fixed && elemC) { // Only proceed if both elements are found
    elemC.addEventListener("mouseenter", function() {
      fixed.style.display = "block"; // Show the image container
    });

    elemC.addEventListener("mouseleave", function() {
      fixed.style.display = "none";  // Hide the image container
    });

    const elems = document.querySelectorAll(".elem"); // Select ALL elements with class "elem"

    elems.forEach(function(element) { // Loop through each "elem"
      element.addEventListener("mouseenter", function() {
        const image = element.getAttribute("data-imge"); // Get image URL from "data-imge"
        if (image) {
          fixed.style.backgroundImage = `url(${image})`; // Set the background image
        }
      });
    });
  } else {
    console.error("Error: #elem-contanior or #fixed-img not found!");
  }
}

// Make sure to call the function
page3HoverAnimation();
//swiper js start
function initializeSwiper() { // Wrapped in a function for clarity
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto', // Show partial next/prev slides if needed
    spaceBetween: 20, // Adjusted space
    // centeredSlides: true, // Re-evaluate if this is needed with slidesPerView: 'auto'
    loop: true, // Enable continuous loop
    autoplay: {
      delay: 3000, // Slightly longer delay
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next", // Make sure these elements exist in your HTML if you use them
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { // Responsive settings for Swiper
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3, // Or adjust as per your design
        spaceBetween: 30
      }
    }
  });
}

// Call the functions
page3HoverAnimation(); 
initializeSwiper(); 

// Note: The swiperAnimation() function was called but not defined in your original script.
// If you have it defined elsewhere or it's part of an external library not shown, ensure it's correctly implemented.
// For the Swiper instance above, initialization is handled by initializeSwiper().