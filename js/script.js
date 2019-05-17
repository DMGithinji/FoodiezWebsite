$(document).ready(function(event){
    $("#pan").hide(6000);
    $(document).ready(function() {
        var stickyNavTop = $("#header").offset().top;
        var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); 
        if (scrollTop > stickyNavTop) { 
            $("#header").addClass('sticky');
        } else {
            $("#header").removeClass('sticky'); 
        }
    };
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    });