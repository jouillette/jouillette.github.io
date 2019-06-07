jQuery(document).ready(function($){
	$('.main-nav li').on('click', function(){
		const section = $(this).data('id');
		$("html, body").animate({ scrollTop: $('.'+section).offset().top - 50}, 500, "easeInOutCubic");
	});

	// $('#main > section').each(function(){
	// 	$('.wrapper', this).css('opacity', 0);
	// });

	$(window).on('scroll', function(){
		let scroll = $(window).scrollTop();
		let window_height = window.innerHeight;
		let view = scroll + window_height;

		$('#main > section .wrapper').each(function(){
			if($(this).offset().top + 100 < view){
				$(this).removeClass('hidden');
			}else{
				$(this).addClass('hidden');
			}
		});
	}).scroll();


	var i = 0;
		var txt = $('.type-this').text();
		$('.type-this').html('');
		typeWriter();
	
	function typeWriter() {	

		
		var speed = 50; 
		if (i < txt.length) {
			$('.type-this').append(txt.charAt(i));
			i++;
			setTimeout(typeWriter, speed);
		}else{
			$('.type-this').addClass('done');
		}
	}
});