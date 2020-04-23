
//OPTION
$.each($('.option.active'), function (index, val) {
	$(this).find('input').prop('checked', true);
});
$('.option').click(function (event) {
	if (!$(this).hasClass('disable')) {
		if ($(this).hasClass('active') && $(this).hasClass('order')) {
			$(this).toggleClass('orderactive');
		}
		$(this).parents('.options').find('.option').removeClass('active');
		$(this).toggleClass('active');
		$(this).children('input').prop('checked', true);
	}
});