
var rellax = new Rellax('.rellax');
// Leagues 
var sliders = {
  1: { slider: '#ideathon', navprev: '.navideathonprev', navnext: '.navideathonnext' },
  2: { slider: '#Leaners', navprev: '.navLeanersprev', navnext: '.navLeanersnext' },
  3: { slider: '#Builders', navprev: '.navBuildersprev', navnext: '.navBuildersnext' },
  4: { slider: '#Players', navprev: '.navPlayersprev', navnext: '.navPlayersnext' },
  5: { slider: '#Justice', navprev: '.navJusticeprev', navnext: '.navJusticenext' }
};

jQuery.each(sliders, function () {
  jQuery(this.slider).slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    swipe: false,
    // Colocar em um array
    prevArrow: (this.navprev),
    nextArrow: (this.navnext),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false
        }
      },
    ]
  });

});
// TEXT SWIPER 
// jQuery(document).ready(function(){
jQuery('.swiper-helper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autosplayspeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    },

  ]
});


jQuery(window).ready(function () {
  var wHeight = jQuery(window).height();
  jQuery('.change')
    .height(wHeight)
    .scrollie({
      scrollOffset: -50,
      scrollingInView: function (elem) {
        var bgColor = elem.data('background');
        jQuery('.scrolling-content').css('background', bgColor);
        switch (bgColor) {
          case '#header':
            jQuery('#menu-header').addClass('active');
            jQuery('#ideathon-menu').removeClass('active');
            jQuery('#leaners-menu').removeClass('active');
            jQuery('#builder-menu').removeClass('active');
            jQuery('#player-menu').removeClass('active');
            jQuery('#justice-menu').removeClass('active');

          case 'linear-gradient(463.3deg, rgb(255, 48, 92) 0%, rgb(116, 39, 241) 100%)':  // Ideathon
            jQuery('#ideathon-menu').addClass('active');
            jQuery('#leaners-menu').removeClass('active');
            jQuery('#builder-menu').removeClass('active');
            jQuery('#player-menu').removeClass('active');
            jQuery('#justice-menu').removeClass('active');
            jQuery('#menu-header').removeClass('active');
            //ativar ideathon 
            //desativar as outras
            break;
          case '#00DFEC':                                                                 // Learners 
            //ativar learners
            jQuery('#ideathon-menu').removeClass('active');
            jQuery('#leaners-menu').addClass('active');
            jQuery('#builder-menu').removeClass('active');
            jQuery('#player-menu').removeClass('active');
            jQuery('#justice-menu').removeClass('active');
            jQuery('#menu-header').removeClass('active');
            //desativar as outras
            break;
          case '#7427F1':                                                                 // Builders
            //ativar builders
            jQuery('#ideathon-menu').removeClass('active');
            jQuery('#leaners-menu').removeClass('active');
            jQuery('#builder-menu').addClass('active');
            jQuery('#player-menu').removeClass('active');
            jQuery('#justice-menu').removeClass('active');
            jQuery('#menu-header').removeClass('active');
            //desativar as outras
            break;
          case '#FF305C':                                                                 // Players
            //ativar players
            jQuery('#ideathon-menu').removeClass('active');
            jQuery('#leaners-menu').removeClass('active');
            jQuery('#builder-menu').removeClass('active');
            jQuery('#player-menu').addClass('active');
            jQuery('#justice-menu').removeClass('active');
            jQuery('#menu-header').removeClass('active');
            //desativar as outras
            break;
          case '#262626':                                                                 // Justice
            //ativar justice
            jQuery('#ideathon-menu').removeClass('active');
            jQuery('#leaners-menu').removeClass('active');
            jQuery('#builder-menu').removeClass('active');
            jQuery('#player-menu').removeClass('active');
            jQuery('#justice-menu').addClass('active');
            jQuery('#menu-header').removeClass('active');
          //desativar resto  
          default:
          //defaultzin 
        }
      }
    });
});


function change(step) {
  switch (step) {
    case 0:
      // alert(0);
      jQuery('.div-close').show("slow"),
        jQuery('.div-open').hide('slow'),
        jQuery('.div-open1').hide('slow');
      jQuery('.div-open2').hide('slow');
      break;
    case 1:
      // alert(1);
      jQuery('.div-close').hide("slow"),
        jQuery('.div-open').show('slow'),
        jQuery('.div-open1').hide('slow');
      jQuery('.div-open2').hide('slow');
      jQuery('.mobi-funnels').slick('refresh');
      break;
    case 2:
      // alert(2);
      jQuery('.div-open').hide('slow'),
        jQuery('.div-close').hide('slow'),
        jQuery('.div-open1').show('slow');
      jQuery('.div-open2').hide('slow');
      break;
    case 3:
      // alert(3);
      jQuery('.div-open').hide('slow'),
        jQuery('.div-close').hide('slow'),
        jQuery('.div-open1').hide('slow');
      jQuery('.div-open2').show('slow');
      break;
    case 4:
      jQuery('.div-open').hide('slow'),
        jQuery('.div-close').hide('slow'),
        jQuery('.div-open1').hide('slow');
      jQuery('.div-open2').hide('slow');
    default:
      break;
  }
}

//  Versão lite 



var ideathonscroll = jQuery('#ideathon-scroll');
var leanerscroll = jQuery('#leaners-scroll');
var builderscroll = jQuery('#builders-scroll');
var playersscroll = jQuery('#players-scroll');
var justicescroll = jQuery('#justice-scroll');


var ideathonbutton = jQuery('#ideathon-button');
var leanersbutton = jQuery('#learners-button');
var buildersbutton = jQuery('#builders-button');
var playersbutton = jQuery('#players-button');
var justicebutton = jQuery('#justice-button');


jQuery(this.ideathonscroll).scroll(function () {
  if (jQuery(ideathonscroll).scrollTop() > 200) {
    jQuery('#ideathon-button').hide();
  }
  else (jQuery(this.ideathonscroll).scrollTop() < 190)
});
jQuery(this.leanerscroll).scroll(function () {
  if (jQuery(leanerscroll).scrollTop() > 200) {
    // alert('show')
    jQuery('#learners-button').hide();
  }
  else (jQuery(this.learnersbutton).scrollTop() < 190)
});
jQuery(this.builderscroll).scroll(function () {
  if (jQuery(builderscroll).scrollTop() > 200) {
    jQuery('#builders-button').hide();
  }
  else (jQuery(this.buildersbutton).scrollTop() < 190)
});
jQuery(this.playersscroll).scroll(function () {
  if (jQuery(playersscroll).scrollTop() > 200) {
  }
  else (jQuery(this.playersscroll).scrollTop() < 190)

  jQuery(playersbutton).hide();
});

jQuery(this.justicescroll).scroll(function () {
  if (jQuery(justicescroll).scrollTop() < 200) {
    jQuery(justicebutton).hide();
  }
  else (jQuery(this.justicescroll).scrollTop() > 190)
});
// #Parallax

