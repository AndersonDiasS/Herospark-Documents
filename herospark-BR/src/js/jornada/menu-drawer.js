// Abrir Drawer 

jQuery("#drawer-button").click(function () {
  // debugger
  if (jQuery('#Drawer').width() < 300) {
    jQuery('#Drawer').toggleClass("drawer-opened");
  } else {
    jQuery('#Drawer').toggleClass("drawer-opened");
  }
  jQuery('#drawer-button').toggleClass("opened"), 500;
});
jQuery("#drawer-close").click(function () {
  // debugger
  if (jQuery('#Drawer').width() >= 500) {
    jQuery('#Drawer').toggleClass('drawer-opened');
  } else {
    jQuery('#Drawer').toggleClass('drawer-opened');
  }
  jQuery('#drawer-button').toggleClass("opened"), 500;
});
