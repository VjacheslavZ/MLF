import common from '../../js/common';
import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать
import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './index.sass';

import animate from '../../js/animate';
import App from '../../js/react';

require("../../libs/libs").owl_carousel_min_js();

$(document).ready(function () {
	// пример анимации через библиотечку animat (но лучше анимировать через GSAP)
	$('.our_advantages h2').animated("fadeInUp");
	// инициализация tooltipster
	if (window.matchMedia("(min-width: 992px)").matches) {
		$(".header_modal a").tooltipster({
			plugins: ['follower'],
			theme: 'tooltipster-shadow'
		});
		$(".header_logo a").tooltipster({
			theme: 'tooltipster-light'
		});
	}

	// инициализация select2
	$(".select2").select2({
		//minimumResultsForSearch: -1, // выключам поле ввода поиска
		tags: false,
		width: null
	});

	$(".select2-tags").select2({
		tags: true,
		placeholder: "Выберите один или несколько тегов",
		width: null // если null то будет шириной родителя
	});

	// Инициализация маски в input
	$(".mask").mask("+38(999) 999-99-99");

	//video
	let playButton = $("#play-pause"),
		video = $(".say-no__video video"),
		videoBg = $(".say-no__video-bg");

	videoBg.click(function() {
		video[0].volume = 0;

		if(video[0].paused){
			video[0].play();
			//playButton.fadeOut();
			videoBg.css({"opacity":"0"});
			video.css({"opacity":"1"});
		}else{
			video[0].pause();
			videoBg.css({"opacity":"1"});
			video.css({"opacity":"0"});
		}
	});

	//slider

	var reviews_slider = $("#reviews-slider.owl-carousel");

	reviews_slider.owlCarousel({
		loop: true,
		items: 1,
		dots: false,
		nav: true
	});

	//sidebar menu
	let body = $("body");
	let mask_overlay = $(".mask-overlay");
	let mask_overlay_active = $(".mask-overlay__active");
	let btn_close = $(".overlay-navigation .fa-close");

	let btn_contacts = $("a.contacts"),
		btn_portfolio = $("a.portfolio"),
		btn_order_online = $("#btn-big__show-more"),
		btn_order_online_price = $(".price__service_price");

	let header__side_nav = $("#header__side-nav"),
		portfolio__side_nav = $("#portfolio__side-nav"),
		order_online = $("#order-online");



	btn_contacts.on("click", function() {
		header__side_nav.css({"width" : "70%"});
		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"})
	});
	btn_portfolio.on("click", function() {
		portfolio__side_nav.css({"width" : "70%"});
		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"})
	});
	btn_order_online.on("click", function() {
		order_online.css({"width" : "70%"});
		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"})
	});

	//подставляем цену из кнопки в input type-hidden
	
	
	
	btn_order_online_price.on("click", function(e) {
		e.preventDefault();

		var price = this.value,
		 	price_hidden = $(".order-online .hidden-price"),
			new_price_hidden_val = price_hidden.val() + price;

		price_hidden.val(new_price_hidden_val);

		order_online.css({"width" : "70%"});
	});



	btn_close.on("click", function(){
		body.removeClass("mask-overlay__active");
		header__side_nav.css({"width" : "0%"});
		portfolio__side_nav.css({"width" : "0%"});
		order_online.css({"width" : "0%"});

		body.css({"overflow":"inherit"})

		//reset old val
		var price_hidden = $(".order-online .hidden-price");
		price_hidden.val("Форма 'Заявка онлайн:");
	});
});

$(window).resize(function () {

});

$(window).scroll(function () {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");