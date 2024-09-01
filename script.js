//smooth scrolling from locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'), 
    smooth: true
});
//on hover animation 
function pagw4animantion() {
  var elemc = document.querySelector("#elem-contanior");
var fixeed = document.querySelectorAll("#fixed-img")
elemc.addEventListener("mouseenter",function () {
fixeed.style.display  = "block"
alert("hello")
})
let elemC = document.querySelector("#elem-contanior")
let fixed = document.querySelector("#fixed-img")
elemC.addEventListener("mouseenter", function(){
fixed.style.display = "block"
})

elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
    })

 var elems = document.querySelectorAll("#elem");
elems.forEach(function(n){
  n.addEventListener("mouseenter",function(){
    let image = n.getAttribute("data-imge")
    fixed.style.backgroundImage = `url(${image})`
    
  })
    
})
}
//swiper js start yah se

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween:100,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 
}
swiperAnimation()
pagw4animantion();