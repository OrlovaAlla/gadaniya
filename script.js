$(document).ready(function() {
	
	$('.menu-burger').click(function(Event) {
		$('.menu-burger,.menu-header').toggleClass('active');
	});
	
	$('.promo-button,.footer-button').click(function(Event) {
				$('.form-feedback').css({'display': 'block'});
				 });
	$('.form-close').click(function(Event) {
			$('.form-feedback').css({'display': 'none'});

	});
	$('.form-send-block').click(function(Event) {
		$('.form-feedback').css({'display': 'none'});
			alert('Ваше сообщение отправлено.');

	});
			

	
});