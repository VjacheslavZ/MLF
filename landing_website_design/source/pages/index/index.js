import common from '../../js/common';
import animate from '../../js/animate';
import '../../pages/index/index.pug'; //это для обновления страницы при hotreload - при npm build убрать
import '../../pages/modal.pug'; //это для обновления страницы при hotreload - при npm build убрать
import './index.sass';

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
	let video = $(".say-no__video video"),
		videoBg = $(".say-no__video-bg");

	videoBg.click(function() {
		video[0].volume = 1;

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

	if(document.documentElement.clientWidth <= 767){

		$("#portfolio-slider").owlCarousel({
			loop: true,
			items: 1,
			dots: false,
			nav: true,
		});

		$("#price-slider").owlCarousel({
			loop: true,
			items: 1,
			dots: false,
			nav: true,
		});
	}
	
	//sidebar menu
	let body = $("body"),
		mask_overlay = $(".mask-overlay"),
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
		portfolio_item_big_img = $('.portfolio__item_big img'),
		portfolio_preview_ic = $(".portfolio .portfolio__item_wrap"),
		portfolio_preview_ic_side = $(".portfolio__side-nav .portfolio__wrap");

	let css_sidebar_prop_full_width = {
		"width": "100%",
		"transform": "translateX(0%)",
		"opacity": "1"
	};

	let css_sidebar_prop_part_width = {
		"width" : "70%",
		"transform": "translateX(0%)",
		"opacity": "1"
	};

	let css_sidebar_prop_close = {
		"transform":"translateX(100%)",
		"opacity":"0"
	};

	//open side bars
	btn_portfolio.click(open_side_bar(portfolio__side_nav));
	btn_show_all_portfolio.click(open_side_bar(portfolio__side_nav));
	btn_order_online.click(open_side_bar(order_online));
	btn_contacts.click(open_side_bar(header__side_nav));

	function open_side_bar(sidebar) {
		return function () {
			if(clientWidth <= 991){
				sidebar.css(css_sidebar_prop_full_width);
			} else {
				sidebar.css(css_sidebar_prop_part_width);
			}

			body.addClass("mask-overlay__active");
			body.css({"overflow":"hidden"})
		};
	}

	// new values in form
	btn_order_online_price.on("click", function(e) {
		e.preventDefault();

		let service_name = $(this).closest( ".intermediate_item" ).prev(".price__service").children("p").text(),
		 	price = this.value,
		 	price_hidden = $(".order-online .hidden-price"),
			input_what_to_do = $(".order-online .what_to_do"),
			input_what_to_do_hidden = $(".order-online .what_to_do_hidden"),
			new_price_hidden_val = price_hidden.val() + price;

		console.log(service_name);


		input_what_to_do.attr("placeholder", service_name).attr("disabled", true);
		input_what_to_do_hidden.val(service_name);

		price_hidden.val(new_price_hidden_val);

		if(clientWidth <= 991){
			order_online.css({"width" : "100%" , "transform":"translateX(0%)", "opacity":"1"});
		} else {
			order_online.css({"width" : "70%" , "transform":"translateX(0%)", "opacity":"1"});
		}

		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"})
	});

	btn_close.on("click", closeSideBar);
	mask_overlay.on("click", closeSideBar);

	function closeSideBar() {
		body.removeClass("mask-overlay__active");

		header__side_nav.css(css_sidebar_prop_close);
		portfolio__side_nav.css(css_sidebar_prop_close);
		order_online.css(css_sidebar_prop_close);

		body.css({"overflow":"inherit"});

		//hide tooltipster
		$('input:not("[type=submit], [type=hidden], .select2-search__field")').removeClass('tooltipster-show').tooltipster('close');

		//reset old val
		let price_hidden = $(".order-online .hidden-price");
		let input_what_to_do_hidden = $(".order-online .what_to_do_hidden");
		let placeholder_what_to_do = $(".order-online .what_to_do");

		price_hidden.val("Форма 'Заявка онлайн:");
		input_what_to_do_hidden.val("");

		placeholder_what_to_do.attr("placeholder", "Что хотели бы обсудить?").attr("disabled", false).val("");
		portfolio_item_big_img.css({"display":"none"})
	}

	//scroll on links
	let header_links = $(".header__nav a[href*='#']"),
		mobile_menu_links = $(".header_nav_mobile a[href*='#']"),
		arrow_bottom_link = $(".header__text a"),
		btn_see_price = $(".good-design button"),
		btn_see_portfolio = $(".say-no button");

	header_links.on("click", scroll_header_links);
	mobile_menu_links.on("click", scroll_header_links);
	arrow_bottom_link.on("click", scroll_header_links);
	btn_see_price.on("click", scroll_custom_btn);
	btn_see_portfolio.on("click", scroll_custom_btn);

	function scroll_header_links(e) {
		e.preventDefault();

		let anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);

		return false;
	}

	function scroll_custom_btn(e) {
		e.preventDefault();

		let anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('data-href')).offset().top
		}, 500);

		return false;
	}

	//portfolio_preview_ic.on("click", show_photo_portfolio);
	//portfolio_preview_ic_side.on("click", show_photo_portfolio);
	$(document).on("click", ".portfolio__item_wrap", show_photo_portfolio);
	$(document).on("click", ".portfolio__wrap", show_photo_portfolio);


	function show_photo_portfolio() {

		let data_src_img = $(this).find(".portfolio__item img").attr("data-src");

		if(clientWidth <= 991){
			portfolio__side_nav.css({"width" : "100%", "transform":"translateX(0%)", "opacity":"1"});
		} else {
			portfolio__side_nav.css({"width" : "70%", "transform":"translateX(0%)", "opacity":"1"});
		}

		if(data_src_img){
			portfolio_item_big_img.attr("src", "img/" + data_src_img).css({"display":"block"})
		}

		body.addClass("mask-overlay__active");
		body.css({"overflow":"hidden"});
	}
	
	//show portfolio photo in sidebar
	$(document).on("click", ".overlay-navigation_wrap .portfolio__item", side_bar_scroll_top);


	function side_bar_scroll_top() {
		$('.portfolio__side-nav').animate({ scrollTop: 0}, 500);
	}

	//scroll to back section
	$(function(){

		var pagePositon = 0,
			sectionsSeclector = 'section, footer',
			$scrollItems = $(sectionsSeclector),
			offsetTolorence = 30,
			pageMaxPosition = $scrollItems.length - 1;

		//Map the sections:
		$scrollItems.each(function(index,ele) { $(ele).attr("debog",index).data("pos",index); });

		// Bind to scroll
		$(window).bind('scroll',upPos);

		//Move on click:
		$('#say-no__arrow').click(function(e){
			if ($(this).hasClass('next') && pagePositon+1 <= pageMaxPosition) {
				pagePositon++;
				$('html, body').stop().animate({
					scrollTop: $scrollItems.eq(pagePositon).offset().top
				}, 300);
			}
			if ($(this).hasClass('previous') && pagePositon-1 >= 0) {
				pagePositon--;
				$('html, body').stop().animate({
					scrollTop: $scrollItems.eq(pagePositon).offset().top
				}, 300);
				return false;
			}
		});

		//Update position func:
		function upPos(){
			var fromTop = $(this).scrollTop();
			var $cur = null;

			$scrollItems.each(function(index,ele){
				if ($(ele).offset().top < fromTop + offsetTolorence)$cur = $(ele);
			});
			
			if ($cur != null && pagePositon != $cur.data('pos')) {
				pagePositon = $cur.data('pos');
			}

		}

	});
});



$(window).scroll(function () {

});



setTimeout(function () {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut("fast");
}, 500);

