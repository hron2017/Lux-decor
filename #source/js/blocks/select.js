if ($('select').length > 0) {
	function selectscrolloptions() {
		var scs = 100;
		var mss = 50;
		if (isMobile.any()) {
			scs = 10;
			mss = 1;
		}
		var opt = {
			cursorcolor: "rgb(253, 155, 0)",
			cursorwidth: "3px",
			background: "",
			autohidemode: false,
			bouncescroll: false,
			cursorborderradius: "0px",
			scrollspeed: scs,
			mousescrollstep: mss,
			directionlockdeadzone: 0,
			cursorborder: "0px solid #fff",
		};
		return opt;
	}

	function select() {
		$.each($('select'), function (index, val) {
			var ind = index;
			$(this).hide();
			if ($(this).parent('.select-block').length == 0) {
				$(this).wrap("<div class='select-block " + $(this).attr('class') + "-select-block'></div>");
			} else {
				$(this).parent('.select-block').find('.select').remove();
			}
			var milti = '';
			var check = '';
			var sblock = $(this).parent('.select-block');
			var soptions = "<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
			if ($(this).attr('multiple') == 'multiple') {
				milti = 'multiple';
				check = 'check';
			}
			$.each($(this).find('option'), function (index, val) {
				if ($(this).attr('value') != '') {
					soptions = soptions + "<div data-value='" + $(this).attr('value') + "' class='select-options__value_" + ind + " select-options__value value_" + $(this).val() + " " + $(this).attr('class') + " " + check + "'>" + $(this).html() + "</div>";
				} else if ($(this).parent().attr('data-label') == 'on') {
					if (sblock.find('.select__label').length == 0) {
						sblock.prepend('<div class="select__label">' + $(this).html() + '</div>');
					}
				}
			});
			soptions = soptions + "</div></div></div>";
			if ($(this).attr('data-type') == 'search') {
				sblock.append("<div data-type='search' class='select_" + ind + " select" + " " + $(this).attr('class') + "__select " + milti + "'>" +
					"<div class='select-title'>" +
					"<div class='select-title__arrow ion-ios-arrow-down'></div>" +
					"<input data-value='" + $(this).find('option[selected="selected"]').html() + "' class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "' />" +
					"</div>" +
					soptions +
					"</div>");
				$('.select_' + ind).find('input.select-title__value').jcOnPageFilter({
					parentSectionClass: 'select-options_' + ind,
					parentLookupClass: 'select-options__value_' + ind,
					childBlockClass: 'select-options__value_' + ind
				});
			} else {
				sblock.append("<div class='select_" + ind + " select" + " " + $(this).attr('class') + "__select " + milti + "'>" +
					"<div class='select-title'>" +
					"<div class='select-title__arrow ion-ios-arrow-down'></div>" +
					"<div class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "'>" + $(this).find('option[selected="selected"]').html() + "</div>" +
					"</div>" +
					soptions +
					"</div>");
			}
			if ($(this).find('option[selected="selected"]').val() != '') {
				sblock.find('.select').addClass('focus');
			}
			if ($(this).attr('data-req') == 'on') {
				$(this).addClass('req');
			}
			$(".select_" + ind + " .select-options-scroll").niceScroll('.select-options-list', selectscrolloptions());
		});
	}
	select();

	$('body').on('keyup', 'input.select-title__value', function () {
		$('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
		$(this).parents('.select').addClass('active');
		$(this).parents('.select').find('.select-options').slideDown(50, function () {
			$(this).find(".select-options-scroll").getNiceScroll().resize();
		});
		$(this).parents('.select-block').find('select').val('');
	});
	$('body').on('click', '.select', function () {
		if (!$(this).hasClass('disabled')) {
			$('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
			$(this).toggleClass('active');
			$(this).find('.select-options').slideToggle(50, function () {
				$(this).find(".select-options-scroll").getNiceScroll().resize();
			});

			//	var input=$(this).parent().find('select');
			//removeError(input);

			if ($(this).attr('data-type') == 'search') {
				if (!$(this).hasClass('active')) {
					searchselectreset();
				}
				$(this).find('.select-options__value').show();
			}
		}
	});
	$('body').on('click', '.select-options__value', function () {
		if ($(this).parents('.select').hasClass('multiple')) {
			if ($(this).hasClass('active')) {
				if ($(this).parents('.select').find('.select-title__value span').length > 0) {
					$(this).parents('.select').find('.select-title__value').append('<span data-value="' + $(this).data('value') + '">, ' + $(this).html() + '</span>');
				} else {
					$(this).parents('.select').find('.select-title__value').data('label', $(this).parents('.select').find('.select-title__value').html());
					$(this).parents('.select').find('.select-title__value').html('<span data-value="' + $(this).data('value') + '">' + $(this).html() + '</span>');
				}
				$(this).parents('.select-block').find('select').find('option').eq($(this).index() + 1).prop('selected', true);
				$(this).parents('.select').addClass('focus');
			} else {
				$(this).parents('.select').find('.select-title__value').find('span[data-value="' + $(this).data('value') + '"]').remove();
				if ($(this).parents('.select').find('.select-title__value span').length == 0) {
					$(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
					$(this).parents('.select').removeClass('focus');
				}
				$(this).parents('.select-block').find('select').find('option').eq($(this).index() + 1).prop('selected', false);
			}
			return false;
		}

		if ($(this).parents('.select').attr('data-type') == 'search') {
			$(this).parents('.select').find('.select-title__value').val($(this).html());
			$(this).parents('.select').find('.select-title__value').attr('data-value', $(this).html());
		} else {
			$(this).parents('.select').find('.select-title__value').attr('class', 'select-title__value value_' + $(this).data('value'));
			$(this).parents('.select').find('.select-title__value').html($(this).html());

		}

		$(this).parents('.select-block').find('select').find('option').removeAttr("selected");
		if ($.trim($(this).data('value')) != '') {
			$(this).parents('.select-block').find('select').val($(this).data('value'));
			$(this).parents('.select-block').find('select').find('option[value="' + $(this).data('value') + '"]').attr('selected', 'selected');
		} else {
			$(this).parents('.select-block').find('select').val($(this).html());
			$(this).parents('.select-block').find('select').find('option[value="' + $(this).html() + '"]').attr('selected', 'selected');
		}


		if ($(this).parents('.select-block').find('select').val() != '') {
			$(this).parents('.select-block').find('.select').addClass('focus');
		} else {
			$(this).parents('.select-block').find('.select').removeClass('focus');

			$(this).parents('.select-block').find('.select').removeClass('err');
			$(this).parents('.select-block').parent().removeClass('err');
			$(this).parents('.select-block').removeClass('err').find('.form__error').remove();
		}
		if (!$(this).parents('.select').data('tags') != "") {
			if ($(this).parents('.form-tags').find('.form-tags__item[data-value="' + $(this).data('value') + '"]').length == 0) {
				$(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="' + $(this).data('value') + '" href="" class="form-tags__item">' + $(this).html() + '<span class="fa fa-times"></span></a>');
			}
		}
		$(this).parents('.select-block').find('select').change();

		if ($(this).parents('.select-block').find('select').data('update') == 'on') {
			select();
		}
	});
	$(document).on('click touchstart', function (e) {
		if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
			$('.select').removeClass('active');
			$('.select-options').slideUp(50, function () { });
			searchselectreset();
		};
	});
	$(document).on('keydown', function (e) {
		if (e.which == 27) {
			$('.select').removeClass('active');
			$('.select-options').slideUp(50, function () { });
			searchselectreset();
		}
	});
}