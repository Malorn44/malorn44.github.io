// $(document).on("scroll", function(){
//     if($(document).scrollTop() > 86)
//     {
//       $("#navbar").addClass("sticky");
//       $("#nav-logo").addClass("color-white");
//       $(".nav-custom-link").addClass("color-white");
//       $(".navbar-btn").addClass("nav-btn-icon");
//     }
//     else
//     {
//         $("#navbar").removeClass("sticky");
//         $("#nav-logo").removeClass("color-white");
//         $(".nav-custom-link").removeClass("color-white");
//         $(".navbar-btn").removeClass("nav-btn-icon");
//     }
// });

// $('.toggle').click(function () {
//     "use strict";
//     console.log('test');
//     $('nav ul').slideToggle();
// });


// $(".toggle").on('click', function(event){
    
//     console.log('test');
//     //(... rest of your JS code)
// });


$(document).on('click','.toggle',function(e) {
    //handler code here
    "use strict";
    $('nav ul').slideToggle();
  });

$(window).resize(function () {
    "use strict";
    if ($(window).width() > 780) {
        $('nav ul').removeAttr('style');
    }
});
