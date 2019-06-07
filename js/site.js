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
			if($(this).offset().top < view){
				$(this).removeClass('hidden');
			}else{
				$(this).addClass('hidden');
			}
		});
	});
});