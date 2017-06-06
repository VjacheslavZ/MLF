import '../../sass/main.sass';
import './index.sass';
import '../../sass/_media.sass';

require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").waypoint();
require("../../libs/libs").Animate_css();
//карусель
require("../../libs/libs").owl_carousel_min_js();
require("../../libs/libs").bootstrap();
// require("../../libs/libs").fancyBox();
import animate from '../../js/animate';
import functions from '../../js/_functions.js';

$(document).ready( function() {

	// Определения браузера
	function get_name_browser() {
		// получаем данные userAgent
		var ua = navigator.userAgent;
		// с помощью регулярок проверяем наличие текста,
		// соответствующие тому или иному браузеру
		if (ua.search(/Chrome/) > 0) return 'Google Chrome';
		if (ua.search(/Firefox/) > 0) return 'Firefox';
		if (ua.search(/Opera/) > 0) return 'Opera';
		if (ua.search(/Safari/) > 0) return 'Safari';
		if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
		if (ua.search(/Trident/) > 0) return 'Trident';
		// условий может быть и больше.
		// сейчас сделаны проверки только
		// для популярных браузеров
		return 'Не определен';
	}

	if (get_name_browser() == "Trident" || get_name_browser() == "Internet Explorer" || get_name_browser() == "Firefox") {
		// $(".from_what_is_seo .from_what_is_seo_bot_decor svg").css("bottom", "-217px");
		// $(".website_promotion .website_promotion_decor").css("bottom", "-177px");
		// $(".cost_of_online_store .cost_of_online_store_links_item").css("margin-right", "72px");
	}
	if (get_name_browser() == "Safari") {
		console.log("Это Сафари");
	}
	if (get_name_browser() == "Google Chrome") {
		console.log("Это Хром");
	}
	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	// скролл по ссылке с атрибутом href
	// $(".header_nav a[href*='#']").on("click", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(anchor.attr('href')).offset().top
	//     }, 500);
	//     return false;
	// });

	// Скролл по классу .scroll_to и атрибуту data-scroll у кнопки к примеру (data-scroll="куда скроллим" в элементе куда скроллим ставим id потом впишем в куда скроллим)
	// $(".scroll_to").on("clcik", function(e) {
	//     e.preventDefault();
	//     var anchor = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $("#" + anchor.data('scroll')).offset().top
	//     }, 500);
	//     return false;
	// });

	 //Активация слайдера
	var one = $("#one");
	var two = $("#two");
	var three = $("#three");

	one.owlCarousel({
	    loop: true,
	    items: 4,
	    dots: true,
		margin: 30,
		// nav: true,
		autoplay: false,
		autoplayTimeout: 4000,
	});
	// Кастомные кнопки управления слайдером
	var owl1 = $('#one.owl-carousel');
	var owl2 = $('#two.owl-carousel');
	var owl3 = $('#three.owl-carousel');

	owl1.owlCarousel();
	//owl2.owlCarousel();
	// Go to the next item
	$('.customNextBtn').click(function() {
	 	owl1.trigger('next.owl.carousel', [700]);
		owl2.trigger('next.owl.carousel', [700]);
		owl3.trigger('next.owl.carousel', [700]);
	});
	// Go to the previous item
	$('.customPrevBtn').click(function() {
	   // With optional speed parameter
	   // Parameters has to be in square bracket '[]'
		owl1.trigger('prev.owl.carousel', [700]);
		owl2.trigger('prev.owl.carousel', [700]);
		owl3.trigger('prev.owl.carousel', [700]);
	});

	//Актиация слайдера блок с видео
	two.owlCarousel({
		items:1,
		merge:true,
		loop:true,
		margin:10,
		video:true,
		lazyLoad:true,
		center:true,
	});

	$( "#accordion" ).accordion({
		collapsible: true
	});

	$('body').scrollspy({ target: '#navbar-example' })

	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})

	three.owlCarousel({
		loop: true,
		items: 4,
		dots: true,
		margin: 30,
		autoplay: false,
		autoplayTimeout: 4000,
	});


	// /* This is basic - uses default settings */
	// $("a#single_image").fancybox();
	//
	// /* Using custom settings */
	// $("a#inline").fancybox({
	// 	'hideOnContentClick': true
	// });
	//
	// /* Apply fancybox to multiple items */
	// $("a.group").fancybox({
	// 	'transitionIn'	:	'elastic',
	// 	'transitionOut'	:	'elastic',
	// 	'speedIn'		:	600,
	// 	'speedOut'		:	200,
	// 	'overlayShow'	:	false
	// })

});

//фиксированная шапка
(function ($){
	var header_top = $(".header_top"),
		windowHeight = $(window).height();

	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();

		if( scrollTop  > windowHeight/3){
			header_top.addClass('haeder_scroll')
		}else{
			header_top.removeClass('haeder_scroll')
		}
	});


})(jQuery);


$(window).resize(function() {

});

$(window).scroll(function() {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");