AOS.init();

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    items:2,
    responsive:{
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  responsive:{
      0:{
          items:1
      },
      1000:{
          items:2
      }
  }
});

let header = document.querySelector("#header");
let signin=document.querySelector("#signin");
let signup=document.querySelector("#signup");
window.addEventListener('scroll', function () {
    if (scrollY > 10) {
        header.classList.add("header-active");
        signin.classList.add("black");
        signup.classList.add("blue");
    } else {
        header.classList.remove("header-active");
        signin.classList.remove("black");
        signup.classList.remove("blue");
        
    }
})



$(window).on("load resize",function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 4);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });