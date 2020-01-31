
jQuery('.responsive').slick({
  centerMode: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: true,
  centerMode: false,
  infinite: true,
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

jQuery('.responsive2').slick({
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: false,
  infinite: true,
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

