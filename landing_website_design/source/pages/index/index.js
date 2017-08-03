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
	let body = $("body"),
		mask_overlay = $(".mask-overlay"),
		mask_overlay_active = $(".mask-overlay__active"),
		btn_close = $(".overlay-navigation .fa-close"),
		btn_contacts = $("a.contacts"),
		btn_portfolio = $("a.portfolio__link"),
		btn_show_all_portfolio = $(".portfolio button"),
		btn_order_online = $("#btn-big__show-more"),
		btn_order_online_price = $(".price__service_price"),
		header__side_nav = $("#header__side-nav"),
		portfolio__side_nav = $("#portfolio__side-nav"),
		order_online = $("#order-online"),
		clientWidth = document.documentElement.clientWidth,
		portfolio_item_big = $('.portfolio__item_big'),
		portfolio_item_big_img = $('.portfolio__item_big img');

		btn_contacts.on("click", function() {
		header__side_nav.css({"width" : "70%" , "transform":"translateX(0%)"});
		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"})
	});

	btn_portfolio.on("click", mask_overlay_active, show_portfolio);
	btn_show_all_portfolio.on("click", show_portfolio);

	function show_portfolio() {

		if(document.documentElement.clientWidth <= 991){
			portfolio__side_nav.css({"width" : "100%", "transform":"translateX(0%)"});
		} else {
			portfolio__side_nav.css({"width" : "70%", "transform":"translateX(0%)"});
		}



		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"})
	}

	btn_order_online.on("click", function() {

		if(clientWidth <= 991){
			order_online.css({"width" : "100%" , "transform":"translateX(0%)"});
		} else {
			order_online.css({"width" : "70%" , "transform":"translateX(0%)"});
		}

		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"})
	});

	// new values in form
	btn_order_online_price.on("click", function(e) {
		e.preventDefault();

		let service_name = $(this).closest( ".price__service" ).children("p").text();

		let price = this.value,
		 	price_hidden = $(".order-online .hidden-price"),
			input_what_to_do = $(".order-online .what_to_do"),
			input_what_to_do_hidden = $(".order-online .what_to_do_hidden"),
			new_price_hidden_val = price_hidden.val() + price;


		input_what_to_do.attr("placeholder", service_name).attr("disabled", true);
		input_what_to_do_hidden.val(service_name);

		price_hidden.val(new_price_hidden_val);

		if(document.documentElement.clientWidth <= 991){
			order_online.css({"width" : "100%" , "transform":"translateX(0%)"});
		} else {
			order_online.css({"width" : "70%" , "transform":"translateX(0%)"});
		}

		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"})
	});

	btn_close.on("click", closeSideBar);
	mask_overlay.on("click", closeSideBar);

	function closeSideBar() {
		body.removeClass("mask-overlay__active");
		header__side_nav.css({"width" : "0%", "transform":"translateX(100%)"});
		portfolio__side_nav.css({"width" : "0%" , "transform":"translateX(100%)"});
		order_online.css({"width" : "0%", "transform":"translateX(100%)"});

		body.css({"overflow":"inherit"});

		$('input:not("[type=submit], [type=hidden], .select2-search__field")').removeClass('tooltipster-show').tooltipster('close');

		//reset old val
		var price_hidden = $(".order-online .hidden-price");
		var input_what_to_do_hidden = $(".order-online .what_to_do_hidden");
		var placeholder_what_to_do = $(".order-online .what_to_do");

		price_hidden.val("Форма 'Заявка онлайн:");
		input_what_to_do_hidden.val("");

		placeholder_what_to_do.attr("placeholder", "Что хотели бы обсудить?").attr("disabled", false).val("");
		portfolio_item_big_img.css({"display":"none"})
	}

	//scroll on links
	var header_links = $(".header__nav a[href*='#']"),
		mobile_menu_links = $(".header_nav_mobile a[href*='#']"),
		arrow_bottom_link = $(".header__text a");

	header_links.on("click", scroll_header_links);
	mobile_menu_links.on("click", scroll_header_links);
	arrow_bottom_link.on("click", scroll_header_links);

	function scroll_header_links(e) {
		e.preventDefault();

		var anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);

		return false;
	}

	//btn see price and btn what i can to do
	var btn_see_price = $(".good-design button"),
		btn_see_portfolio = $(".say-no button");

		btn_see_price.on("click", scroll_custom_btn);
		btn_see_portfolio.on("click", scroll_custom_btn);

	function scroll_custom_btn(e) {
		e.preventDefault();

		var anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('data-href')).offset().top
		}, 500);

		return false;
	}
	
	//clone elements in side bar
	// let portfolio_items = $("#portfolio .portfolio__item_wrap"),
	// 	sidebar_portfolio_wrap = $("#portfolio__side-nav .portfolio__items_wrap");
	//
	//
	// addItemsSidebarPortfolio();
	//
	// function addItemsSidebarPortfolio() {
	// 	for (var i = 0; i < portfolio_items.length; i++){
	//
	// 		//sidebar_portfolio_wrap.append(portfolio_items[i])
	// 	}
	// }
	
	//show portfolio photo in sidebar
	const 	portfolio_prewie_ic = $(".portfolio .portfolio__item_wrap"),
			portfolio_prewie_ic_side = $(".portfolio__side-nav .portfolio__wrap");

	portfolio_prewie_ic.on("click", show_photo_portfolio);
	portfolio_prewie_ic_side.on("click", show_photo_portfolio);

	
	function show_photo_portfolio() {

		let data_src_img = $(this).find(".portfolio__item img").attr("data-src");

		console.log(document.documentElement.clientWidth);


		if(document.documentElement.clientWidth <= 991){
			portfolio__side_nav.css({"width" : "100%", "transform":"translateX(0%)"});
		} else {
			portfolio__side_nav.css({"width" : "70%", "transform":"translateX(0%)"});
		}

		if(data_src_img){
			portfolio_item_big_img.attr("src", "img/" + data_src_img).css({"display":"block"})
		}

		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"});
	}

	// portfolio_prewie_ic_side.on("click", function (e) {
	//
	// 	e.preventDefault();
	//
	// 	$('.portfolio__side-nav').stop().animate({
	// 		scrollTop: $(".overlay-navigation_wrap").offset().top
	// 	}, 500);
	//
	// 	return false;
	// });



});

$(window).resize(function () {

});

$(window).scroll(function () {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");