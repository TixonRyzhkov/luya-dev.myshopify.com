// Put your application javascript here
/* sliders START */
var custom_slider = [];
$(document).find('.posts-slider').each(function(el) {
    let _slider = $(this).find('.swiper');
    let _scrollbar = $(this).find('.slider-scrollbar');

    custom_slider[el] = new Swiper(_slider[0], {
        slidesPerView: 'auto',
        spaceBetween: 45,
        observer: true,
        watchOverflow: true,
        scrollbar: {
            el: _scrollbar[0],
            draggable: true,
            hide: false,
        },
    });
});
/* sliders END */