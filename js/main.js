$('body').on('click', '#contact-form-anchor', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).animate({
            top: '50%'
        }, 200);
        $('.fixed-contact-form').fadeOut(400);
    } else {
        $(this).addClass('active');
        $(this).animate({
            top: $('.fixed-contact-form').offset().top
        }, 200);
        $('.fixed-contact-form').fadeIn(400);
    }
});

$('body').on('click', '.show-enquiry-form', function(e) {
    e.preventDefault();
    var _this = $('#contact-form-anchor');
    if ($(_this).hasClass('active')) {
        $(_this).removeClass('active');
        $(_this).animate({
            top: '50%'
        }, 200);
        $('.fixed-contact-form').fadeOut(400);
    } else {
        $(_this).addClass('active');
        $(_this).animate({
            top: $('.fixed-contact-form').offset().top
        }, 200);
        $('.fixed-contact-form').fadeIn(400);
    }
});