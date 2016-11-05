$(function(){
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    // Hide the mobile menu item by default (let the media query figure it out.)
    $(".mobile-menu-item").hide();

    // Fade in middle content
    $(".middle").addClass("animated fadeInUp").one(animationEnd, function() {
        $(".middle").removeClass("animated fadeInUp");
    });

    // On click of hamburger menu slide in/out menu content
    $( "#mobile-menu-button" ).click(function() {
        if($(".mobile-menu-item").hasClass("fadeOutLeft")) {
            $(".mobile-menu-item").removeClass("animated fadeOutLeft");
            $(".mobile-menu-item").addClass("animated fadeInLeft");
        } else if ($(".mobile-menu-item").hasClass("fadeInLeft")){
            $(".mobile-menu-item").removeClass("animated fadeInLeft");
            $(".mobile-menu-item").addClass("animated fadeOutLeft");
        } else {
            $(".mobile-menu-item").show();
            $(".mobile-menu-item").addClass("animated fadeInLeft");
        }
    });

    // On click of contact link wobble middle content
    $( ".link_contact" ).click(function() {
        $(".middle").addClass("animated jello").one(animationEnd, function() {
            $(".middle").removeClass("animated jello");
        });
    });

});
