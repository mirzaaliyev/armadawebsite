$(document).ready(function() {
  $('.autoplay').slick({
      dots: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  });
});
