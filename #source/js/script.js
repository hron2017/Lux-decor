//====================  SCROLL ========================//
$(window).scroll(function (event) {
	var scr = $(this).scrollTop();
	sectors(scr);
});
function sectors(scr) {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	if (scr > 130) {
		$('.header-middle').addClass('scroll');
	} else {
		$('.header-middle').removeClass('scroll');
	}
}
//====================  <!-- SCROLL --> ========================//
//====================  UP ========================//
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
//==================== <!-- UP --> ========================//
//====================  ImageBg ========================//
function ibg() {
	function isIE() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//====================  <!-- ImageBg -->  ========================//

//====================   GoTO -->  ========================//
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');

	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-menu__mobile').hasClass('active')) {
		$('.header-menu__mobile,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
//====================  <!-- GoTO -->  ========================//

//====================  Video  ========================//
$('.know-video__play').click(function () {
	$(this).parent().find('.site-video').get(0).play();
	$(this).fadeOut();
	$(this).parent().find('.know-video__pause').css("opacity", "0.5").fadeIn(500);

});
$('.know-video__pause').click(function () {
	$(this).parent().find('.site-video').get(0).pause();
	$(this).fadeOut();
	$(this).parent().find('.know-video__play').css("opacity", "0.5").fadeIn(500);
});
//====================  <!-- Video -->  ========================//


//====================  <!-- NiceScroll -->  ========================//
$('.section-text__scroll').niceScroll({
	cursorcolor: "#fd9b00",
	cursoropacitymin: 1,
	touchbehavior: true,
	background: "#dedede"
});
//====================  <!-- niceScroll -->  ========================//

//====================  <!-- Pagging -->  ========================//

$('.pagging-list li').click(function (e) {
	e.preventDefault();
	$('.pagging-list li').removeClass('active');
	$(this).addClass('active');
});

$('.pagging__arrow-next').click(function (e) {
	e.preventDefault();
	var length = $('.pagging-list li').length - 1;
	$('.pagging-list li').each(function (index) {

		if ($(this).hasClass('active') && index != length) {
			$(this).removeClass('active').next('li').addClass('active');
			return false;
		} else if (index == length) {
			$(this).removeClass('active');
			$('.pagging-list').find('li').first().addClass('active');
			return false;
		}
	});
});
$('.pagging__arrow-prev').click(function (e) {
	e.preventDefault();
	var length = $('.pagging-list li').length - 1;
	$('.pagging-list li').each(function (index) {

		if ($(this).hasClass('active') && index != length) {
			$(this).removeClass('active').prev('li').addClass('active');
			return false;
		} else if (index == length) {
			$(this).removeClass('active');
			$('.pagging-list').find('li').last().addClass('active');
			return false;
		}
	});
});
//====================  <!-- Pagging -->  ========================//
$('[data-fancybox="gallery"]').fancybox({});
//====================    ========================//



//====================  <!-- Pagging -->  ========================//
$('.main-slider').slick({
	nextArrow: '<button type="button" class="slider-btn__next slider-btn"></button>',
	prevArrow: '<button type="button" class="slider-btn__prev slider-btn"></button>',
	infinite: false,
	dots: true
});

$('.products-slider').slick({
	nextArrow: '<button type="button" class="slider-btn__next slider-btn"></button>',
	prevArrow: '<button type="button" class="slider-btn__prev slider-btn"></button>',
	infinite: false,
	slidesToShow: 4,
	slidesToScroll: 1,
});
$('.know-slider').slick({
	infinite: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: true,
	arrows: false
});