/* ====================================
   Onload functions
   ==================================== */

$(function() {
    // highlight slider
    $('.zone--highlight .slider').bxSlider({
        nextText: '',
        prevText: '',
        nextSelector: '#highlight-slider-next',
        prevSelector: '#highlight-slider-prev',
        pagerCustom: '#highlight-pager'
    });
    // featured slider
    $('.zone--slider .slider').bxSlider({
        nextText: '',
        prevText: '',
        nextSelector: '#featured-slider-next',
        prevSelector: '#featured-slider-prev',
        pagerCustom: '#featured-slider-pager'
    });
});
