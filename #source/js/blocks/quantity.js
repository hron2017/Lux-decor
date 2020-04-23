
//QUANTITY
$('.quantity__btn').click(function (event) {
	var n = parseInt($(this).parent().find('.quantity__input').val());
	if ($(this).hasClass('dwn')) {
		n = n - 1;
		if (n < 1) { n = 1; }
	} else {
		n = n + 1;
	}
	$(this).parent().find('.quantity__input').val(n);
	return false;
});