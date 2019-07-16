jQuery(document).ready(function($){

	// section nav
	$('.section-nav').on('click', function(){
		const section = $(this).data('id');
		$("html, body").animate({ scrollTop: $('.'+section).offset().top - 50}, 500, "easeInOutCubic");
	});

	$(window).on('scroll', function(){
		let scroll = $(window).scrollTop();
		let window_height = window.innerHeight;
		let view = scroll + window_height;

		// section visibility
		$('#main > section .wrapper').each(function(){
			if($(this).offset().top + 100 < view){
				$(this).removeClass('hidden');
			}else{
				$(this).addClass('hidden');
			}
		});		

		// section visibility
		let active = 'cover';
		$($('#main > section .wrapper').get().reverse()).each(function(){
			if($(this).offset().top - 150 <= scroll){
				active = $(this).parent('section').attr('class');
				return false;
			}
		});

		// do the nav color
		$('.section-nav').removeClass('active');
		$('.section-nav[data-id="'+active+'"]').addClass('active');

	}).scroll();

	// home typing
	let i = 0;
	let txt = $('.type-this').text();
	let speed = 50; 
	$('.type-this').html('');
	typeWriter();
	
	function typeWriter(){	
		if(i < txt.length){
			$('.type-this').append(txt.charAt(i));
			i++;
			setTimeout(typeWriter, speed);
		}else{
			$('.type-this').addClass('done');
		}
	}
});