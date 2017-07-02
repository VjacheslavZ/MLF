
import '../../sass/main.sass';
import './index.sass';
import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать

require("../../libs/libs").jqueryui();
require("../../libs/libs").matchMedia();
require("../../libs/libs").waypoint();
require("../../libs/libs").Animate_css();
//карусель
require("../../libs/libs").owl_carousel_min_js();


import animate from '../../js/animate';
import functions from '../../js/_functions.js';
import common from '../../js/common';
import App from '../../js/react';

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
		//console.log("Это Сафари");
	}
	if (get_name_browser() == "Google Chrome") {
		//console.log("Это Хром");
	}
	if (get_name_browser() == "Firefox") {
		//console.log("Это Firefox");
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
	$("#one.owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		dots: true
	});
	$("#two.owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: true
	});
	$("#three.owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: true
	});
	$("#ourWorks__slider.owl-carousel.owl-theme").owlCarousel({
		loop: true,
		items: 5,
		//dots: false,
		//nav: false,
		margin: 30,
		//autoWidth: false
	});
	$("#reviews__slider.owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: true
	});

	//инициализаиця header_title слайдер
	var one = $("#one");
	var owl1 = $('#one.owl-carousel');

	var two = $("#two");
	var owl2 = $('#two.owl-carousel');

	var three = $("#three");
	var owl3 = $('#three.owl-carousel');

	var ourWorks__slider = $("#ourWorks__slider");
	var ourWorks__slider_owl4 = $('#ourWorks__slider.owl-carousel');

	var reviews__slider = $("#reviews__slider");
	var reviews__slider_owl4 = $('#reviews__slider.owl-carousel');


	owl1.owlCarousel();//карусель
	owl2.owlCarousel();//карусель
	owl3.owlCarousel();//карусель
	ourWorks__slider_owl4.owlCarousel();

	$('.customNextBtn').click(function() {
		owl1.trigger('next.owl.carousel', [700]);
		owl2.trigger('next.owl.carousel', [700]);
		owl3.trigger('next.owl.carousel', [700]);
		ourWorks__slider_owl4.trigger('next.owl.carousel', [700]);
		reviews__slider_owl4.trigger('next.owl.carousel', [700]);

		opacityItems();
	});

	$('.customPrevBtn').click(function() {
		owl1.trigger('prev.owl.carousel', [700]);
		owl2.trigger('prev.owl.carousel', [700]);
		owl3.trigger('prev.owl.carousel', [700]);
		ourWorks__slider_owl4.trigger('prev.owl.carousel', [700]);
		reviews__slider_owl4.trigger('prev.owl.carousel', [700]);

		opacityItems();
	});

	$(".ourWorks .owl-dots").click(function(){
		opacityItems();
	});

	function opacityItems() {
		var items = $(".ourWorks .owl-stage .active");

		items.removeClass("opacityItem");
		items.first().addClass("opacityItem");
		items.last().addClass("opacityItem");
	}
	opacityItems();
});




$(window).resize(function() {

});

$(window).scroll(function() {

});

$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");