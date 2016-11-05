$(function(){
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var terms = [
        "Web Developer",
        "Car Enthusiast",
        "Game Developer",
        "Arduino Master",
        "Software Developer"
    ];
    var currentTerm = 0;

    // Transition terms
    var tid = setTimeout(switchTerm, 3000);
    function switchTerm() {
        // Fade out the current term
        $(".terms").addClass("animated fadeOutLeft").one(animationEnd, function() {
            $(".terms").removeClass("animated fadeOutLeft");
            $(".terms").html(terms[currentTerm]);
            currentTerm += 1;
            if (currentTerm == terms.length) {
                currentTerm = 0;
            }
            // Fade in the new term
            $(".terms").addClass("animated fadeInRight").one(animationEnd, function() {
                $(".terms").removeClass("animated fadeInRight");
                tid = setTimeout(switchTerm, 2000); // repeat myself
            });
        });
    }

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
