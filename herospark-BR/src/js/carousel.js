
  $(document).ready(function(){
    $('.responsive').slick({
      centerMode: true,
      slidesToShow: 3,
      dots:true,
      centerMode: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
  });
