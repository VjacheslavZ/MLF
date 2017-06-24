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
require("../../libs/libs").fancyBox();
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
	// if (get_name_browser() == "Safari") {
	// 	console.log("Это Сафари");
	// }
	// if (get_name_browser() == "Google Chrome") {
	// 	console.log("Это Хром");
	// }
	// для инициализации tooltips
	// $( document ).tooltip({
	//   track: true
	// });

	//скролл по ссылке с атрибутом href
	$(".header_nav a[href*='#'], .header_top a[href*='#'").on("click", function(e) {
	    e.preventDefault();
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 500);
	    return false;
	});

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
	//наши работы
	one.owlCarousel({
	    loop: true,
	    items: 4,
	    dots: true,
		margin: 20,
		autoplay: false,
		autoplayTimeout: 4000,
		responsive: {
			1200: {
				margin: 15
			},
			767: {
				items: 3
			},
			667: {
				items: 2
			},
			600: {
				items: 1
			},
			0: {
				items: 1
			},
		}
	});
	// Хиты продаж
	three.owlCarousel({
		loop: true,
		items: 4,
		dots: true,
		margin: 30,
		autoplay: false,
		autoplayTimeout: 4000,
		responsive: {
			1200: {
				margin: 15
			},
			767: {
				items: 3
			},
			667: {
				items: 2
			},
			600: {
				items: 1
			},
			0: {
				items: 1
			},
		}
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
		responsive: {
			1200: {
				margin: 5
			}
		}
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

	$( "#accordion" ).accordion({
		collapsible: true
	});

	$('body').scrollspy({ target: '#navbar' });

	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	});

	//FancyBox
	$("[data-fancybox]").fancybox({
		loop     : true,
		selector : '[data-fancybox="images"]',
		afterClose : $(".tovar-groups__photo").css("display: block")
	});
	//плейс холдер для IE9
	if(get_name_browser() == 'Internet Explorer'){
		$(function() {
			if(!$.support.placeholder) {
				var active = document.activeElement;
				$('textarea').each(function(index, element) {
					if($(this).val().length == 0) {
						$(this).html($(this).attr('id')).addClass('hasPlaceholder');
					}
				});
				$('input, textarea').focus(function () {
					if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
						$(this).val('').removeClass('hasPlaceholder');
					}
				}).blur(function () {
					if (($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')))) {
						$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
						//$(this).css('background', 'red');
					}
				});
				$(':text').blur();
				$(active).focus();
				$('form').submit(function () {
					$(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
				});
			}
		});
	}

	var close = $(".close__dm-modal"),
		popUpForm = $('[data-modal="modal-form"]');

	function closePopUp() {
		popUpForm.css({"display": "none"});
		sessionStorage.setItem("pupUp", "Closed");
	}

	close.on("click", closePopUp);


	let customBtnVideo = $(".start-video");

	$(document).on('click', customBtnVideo, function () {
		//player.playVideo();
		customBtnVideo.fadeOut('normal');
	});
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

