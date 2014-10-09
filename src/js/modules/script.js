var glide = $('.slider').glide().data('api_glide');

$(window).on('keyup', function (key) {
	if (key.keyCode === 13) {
		glide.jump(3, console.log('Wooo!'));
	};
});

$('.slider__arrows-item').on('click', function() {
	console.log(glide.current());
});