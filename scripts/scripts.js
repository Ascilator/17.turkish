jQuery(function () {

	if($('html').width() >= 822){

		var bonuses = $('.bonus_item>.item_title');
		var maxH =  $('.bonus_item>.item_title:eq(0)').height();
		
		for (var i = 0; i < bonuses.length; i++) {
			if ($(`.bonus_item>.item_title:eq(${i})`).height() >= maxH) {
				maxH = $(`.bonus_item>.item_title:eq(${i})`).height();
			}
		}
		$('.bonus_item>.item_title').height(maxH);
	}

	$('.less_item').click(function(){
		var one_less = $(this).attr('cost');
		var num_less = $(this).attr('number');
		var total_count = (+one_less) * (+num_less);
		$('#one_less').text(one_less);
		$('#number_less').text(num_less);
		$('#total_count').text(total_count);

		$('.less_item').removeClass('_active');
		$(this).addClass('_active');

	});
	if($('html').width() <= 700){
		$('.btn_cont').append($('.question_btn'))
	}
	$(window).resize(function(){
		if($('html').width() <= 700){
			$('.btn_cont').append($('.question_btn'))
		}
	});

	$('._form').on('focus', function(){		
		if ($(this).val() == 'Имя и Фамилия' || $(this).val() == 'Телефон/Whatsapp' || $(this).val() == 'E-mail') {
			$(this).val('');
		}
		$(this).css({
			'opacity':'1'
		});
	});

	$('._form').on('blur', function(){
		if ($(this).val() == '') {
			if($(this).attr('val') == '1'){
				$(this).val('Имя и Фамилия');
			}
			if($(this).attr('val') == '2'){
				$(this).val('Телефон/Whatsapp');
			}
			if($(this).attr('val') == '3'){
				$(this).val('E-mail');
			}
		}

		$(this).css({
			'opacity':'.3'
		});
	});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if( scroll >= $('.first_screen').height()){
			$('.header').addClass("_blue");
		} else {
			$('.header').removeClass("_blue");
		}
		console.log(scroll);
	});
	
});


