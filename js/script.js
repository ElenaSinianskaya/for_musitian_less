$(document).ready(function(){
  
	$('.slider-early-years').slick({
		dots:true
	});

	$('.icon-menu').on('click', function () {
        $('.header-nav').addClass('active');
    });

    $('.icon-cancel').on('click', function () {
        $('.header-nav').removeClass('active');
    })
});
