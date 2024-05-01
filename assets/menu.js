jQuery(document).ready(function($) {
    $(document).on('click', '.menu-trigger', function(){
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('.header').toggleClass('menu-opened');
        $('body').toggleClass('ov-hidden');

        if($(this).hasClass('active')) {
            lenis.destroy();
        } else {
            startLenis();
        }
    });

    $(document).on('click', '.mobile-nav-menu .menu-item-has-children > a', function() {
        if (!$(this).hasClass('opened')) {
            $(this).addClass('opened')
            $(this).next('ul').slideDown();
            return false;
        }
    });
});