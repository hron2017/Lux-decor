//Adaptive functions
//====================  Mobile Menu ========================//
$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu__mobile').toggleClass('active');
});


$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	var headerMenu = $('.header-menu');
	var headerMenuNav = $('.header-menu__nav');
	var headerMenuMobile = $('.header-menu__mobile');
	if (w < 986) {
		if (!headerMenuNav.hasClass('done')) {
			headerMenuNav.addClass('done').appendTo(headerMenuMobile);
		}
	} else {
		if (headerMenuNav.hasClass('done')) {
			headerMenuNav.removeClass('done').appendTo(headerMenu);
		}
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();