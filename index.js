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


// is the hamburger menu closed?
var isClosed = true;

$(document).on('click','.toggle',function(e) {
    console.log('toggle')
    if ($(window).width() <= 500) {
        // toggle menu
        $('header ul').slideToggle();
        // toggle hamburger icon
        $('header .hamburger').toggleClass('change');
        isClosed = !isClosed;
    }
});

// if resized such that hamburger menu should not be shown
// remove hamburger menu
$(window).resize(function () {
    if ($(window).width() > 500) {
        $('header ul').removeAttr('style');
        if (!isClosed) {
            $('header .hamburger').removeClass('change');   
            isClosed = true;
        }
    }
});
