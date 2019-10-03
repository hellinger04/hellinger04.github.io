$(document).ready(function(){

    $('.mobile-nav').click(function(){
        $('.mobile-nav-dropdown').fadeToggle(0);
    });

    $('.about-nav').click(function(){
        $('.about').fadeToggle(0);
        $(this).toggleClass('active2');

    });


});