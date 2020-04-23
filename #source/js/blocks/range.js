//RANGE
if ($("#range").length > 0) {
	$("#range").slider({
		range: true,
		min: 0,
		max: 20000,
		values: [100, 19900],
		slide: function (event, ui) {
			$('#rangefrom').val(ui.values[0]);
			$('#rangeto').val(ui.values[1]);
			$(this).find('.ui-slider-handle').eq(0).html('<span>' + ui.values[0] + '</span>');
			$(this).find('.ui-slider-handle').eq(1).html('<span>' + ui.values[1] + '</span>');
		},
		change: function (event, ui) {
			if (ui.values[0] != $("#range").slider("option", "min") || ui.values[1] != $("#range").slider("option", "max")) {
				$('#range').addClass('act');
			} else {
				$('#range').removeClass('act');
			}
		}
	});
	$('#rangefrom').val($("#range").slider("values", 0));
	$('#rangeto').val($("#range").slider("values", 1));

	$("#range").find('.ui-slider-handle').eq(0).html('<span>' + $("#range").slider("option", "min") + '</span>');
	$("#range").find('.ui-slider-handle').eq(1).html('<span>' + $("#range").slider("option", "max") + '</span>');

	$("#rangefrom").bind("change", function () {
		if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
			$(this).val($("#range").slider("option", "max"));
		}
		if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
			$(this).val($("#range").slider("option", "min"));
		}
		$("#range").slider("values", 0, $(this).val());
	});
	$("#rangeto").bind("change", function () {
		if ($(this).val() * 1 > $("#range").slider("option", "max") * 1) {
			$(this).val($("#range").slider("option", "max"));
		}
		if ($(this).val() * 1 < $("#range").slider("option", "min") * 1) {
			$(this).val($("#range").slider("option", "min"));
		}
		$("#range").slider("values", 1, $(this).val());
	});
	$("#range").find('.ui-slider-handle').eq(0).addClass('left');
	$("#range").find('.ui-slider-handle').eq(1).addClass('right');
}