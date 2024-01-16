// root element
const root = document.documentElement;

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

// Dark Theme
// when the document is ready
$(document).ready(function () {
    // Get the user's preference from localStorage
    const darkMode = localStorage.getItem("dark-mode");
    // Check if the user has already chosen a theme
    if (darkMode) {
        // If yes, apply it to the root element
        root.classList.add("dark-theme");
        $('.theme-toggle > span').removeClass('fa-moon');
        $('.theme-toggle > span').addClass('fa-sun');
    }
});

$(document).on('click','.theme-toggle',function(e) {
    root.classList.toggle("dark-theme");
    // Store or remove the user's preference in localStorage
    if (root.classList.contains("dark-theme")) {
        localStorage.setItem("dark-mode", true);
        $('.theme-toggle > span').removeClass('fa-moon');
        $('.theme-toggle > span').addClass('fa-sun');
    } else {
        $('.theme-toggle > span').removeClass('fa-sun');
        $('.theme-toggle > span').addClass('fa-moon');
        localStorage.removeItem("dark-mode");
    }
});