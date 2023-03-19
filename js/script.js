"use strict";
$(window).scroll(() => {
  let windowScroll = $(window).scrollTop();
  let sectionScroll = $('#about').offset().top;
  if (windowScroll > sectionScroll - 100) {
    $(".navbar").css("backgroundColor", "rgb(0,0,0)");
  } else {
    $(".navbar").css("backgroundColor", "transparent");
  }
});





var Typed = new Typed('#type', {
    strings: ["I Am Larry Daniels", "I Am Developer","I Am Designer"],
    typeSpeed:70,
    backSpeed:50,
    loop:true,
  });
  