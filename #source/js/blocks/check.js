//CHECK
$.each($('.check'), function (index, val) {
	if ($(this).find('input').prop('checked') == true) {
		$(this).addClass('active');
	}
});
$('body').off('click', '.check', function (event) { });
$('body').on('click', '.check', function (event) {
	if (!$(this).hasClass('disable')) {
		var target = $(event.target);
		if (!target.is("a")) {
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$(this).find('input').prop('checked', true);
			} else {
				$(this).find('input').prop('checked', false);
			}
		}
	}
});