$(document).on("scroll", function(){
    if($(document).scrollTop() > 86)
    {
      $("#navbar").addClass("sticky");
    //   $("#nav-logo").addClass("color-white");
    //   $(".nav-custom-link").addClass("color-white");
    //   $(".navbar-btn").addClass("nav-btn-icon");
    }
    else
    {
        $("#navbar").removeClass("sticky");
        // $("#nav-logo").removeClass("color-white");
        // $(".nav-custom-link").removeClass("color-white");
        // $(".navbar-btn").removeClass("nav-btn-icon");
    }
});


$(document).on('click','.toggle',function(e) {
    //handler code here
    "use strict";
    if ($(window).width() <= 500) {
        $('header ul').slideToggle();
    }
  });

$(window).resize(function () {
    "use strict";
    if ($(window).width() > 500) {
        $('header ul').removeAttr('style');
        // $('header ul').slideToggle();
    }
});
