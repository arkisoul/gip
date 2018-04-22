$('body').on('click', '#contact-form-anchor', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.fixed-contact-form').hide();
    } else {
        $(this).addClass('active');
        $('.fixed-contact-form').show();
    }
});