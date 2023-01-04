$(document).ready(function () {
    $(".sidenav").toggle();
    $(window).scroll(function () {
        if (this.scrollY) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        } if (this.scrollY > 600) {
            $('.btn-scroll-up').addClass("show");

        } else {
            $('.btn-scroll-up').removeClass("show");

        }
    });

    $('.btn-scroll-up').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    $(".menu-icon").click(function(){
        $(".sidenav").toggle();
    });

    $(".sidenav a").click(function(){
        $(".sidenav").toggle();
    });

});