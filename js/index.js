$(function(){

    $(".mobile-menu-item").hide();


    // On click of hamburger menu
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

    // On click of contact link
    $( ".link_contact" ).click(function() {
        if($(".middle").hasClass("animated jello")) {
            $(".middle").removeClass("animated jello");
            $(".middle").addClass("animated tada");
        }else if($(".middle").hasClass("animated tada")) {
            $(".middle").removeClass("animated tada");
            $(".middle").addClass("animated jello");
        } else if($(".middle").hasClass("animated fadeInUp")) {
            $(".middle").removeClass("animated fadeInUp");
            $(".middle").addClass("animated tada");
        }
    });


});
