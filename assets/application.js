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



/* change qty START */
$(document).on('click', '.qty-block__btn', function() {
    let _input = $(this).closest('.qty-block').find('input');
    let _val = (_input).val();
    let _max;
    
    if($(_input).attr('max')) {
        _max = $(_input).attr('max');
    } else {
        _max = 99;
    }

    if($(this).hasClass('plus')) {
        if(_val < _max) {
            _val++;
        } else {
            _val = _max;
        }
    } else {
        if (_val > 1) {
            _val--;
        }
    }

    $(_input).val(_val).trigger('change');
});
/* change qty END */



/* product thumbs START */
$(document).on('click', '.product__thumb', function() {
    let _src = $(this).attr('href');

    $('.product__image img').attr('src', _src);

    return false;
})
/* product thumbs END */