
// carousel
jQuery('.carousel-products').slick({
  arrows: true,
  autoplay: true,
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centermode: true,
        centerPadding: '80px',
        slidersToShow: 2,
        slidesToScroll: 3
      }
    },
    
    {
      breakpoint: 780,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 485,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
 
  ]
});
 
// secao especialistas
// 1
jQuery(document).ready(function(){

jQuery(".down1").click(function(){
  jQuery(".hidden1").slideToggle();
  jQuery(".especialista1 h4").toggleClass("white");
  jQuery(".down1").toggleClass("white rotate_arrow");
  
})

jQuery(".down2").click(function(){
  jQuery(".hidden2").slideToggle();
  jQuery(".especialista2 h4").toggleClass("white");
  jQuery(".down2").toggleClass("white rotate_arrow");
})

jQuery(".down3").click(function(){
  jQuery(".hidden3").slideToggle();
  jQuery(".especialista3 h4").toggleClass("white");
  jQuery(".down3").toggleClass("white rotate_arrow");
})

jQuery(".down4").click(function(){
  jQuery(".hidden4").slideToggle();
  jQuery(".especialista4 h4").toggleClass("white");
  jQuery(".down4").toggleClass("white rotate_arrow");
})
});

// seção do gráfico com interações
jQuery('.comecar-agora-txt #dado1').click(function(){
  jQuery('#change-img').attr("src","https://herospark.com/wp-content/uploads/2019/11/img_item-01_EN.png");
  jQuery('#dado1').css("color","#7427F1");
  jQuery('#dado2').css("color","#8f5ae6");
  jQuery('#dado3').css("color","#8f5ae6");
});
jQuery('.comecar-agora-txt #dado2').click(function(){
  jQuery('#change-img').attr("src", "https://herospark.com/wp-content/uploads/2019/10/img_item-02.png");
  jQuery('#dado1').css("color","#8f5ae6");
  jQuery('#dado2').css("color","#7427F1");
  jQuery('#dado3').css("color","#8f5ae6");
});
jQuery('.comecar-agora-txt #dado3').click(function(){
  jQuery('#change-img').attr("src","https://herospark.com/wp-content/uploads/2019/10/img_item-03.png");
  jQuery('#dado1').css("color","#8f5ae6");
  jQuery('#dado2').css("color","#8f5ae6");
  jQuery('#dado3').css("color","#7427F1");
});

// carousel
jQuery('.carousel-especialistas').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});
