window.onload = function () {
  document.querySelector("#pre-load").style.display = "none";
};

$(".owl-carousel-show-case").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-carousel-show-case-d1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 6500,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});


var mode = 'light';
$('.dark-mode').on('click', function() {
    if(mode === 'light') {
      $('body').css('background-color', '#111')
      $('body').css('color', '#fff')
      $('.card').css('background-color', '#111')
      mode = 'dark'
    }else {
      $('body').css('background-color', '#fff')
      $('body').css('color', '#111')
      $('.card').css('background-color', '#fff')
      mode = 'light'
    }
})