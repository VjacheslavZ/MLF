
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
	//скролл по ссылке с атрибутом href
	$(".header_nav-main-menu a[href*='#']").on("click", function(e) {
	    e.preventDefault();
	    var anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $(anchor.attr('href')).offset().top
	    }, 500);
	    return false;
	});

	$(".footer__service a[href*='#']").on("click", function(e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);
		return false;
	});

	$(".header_nav_mobile a[href*='#']").on("click", function(e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);
		return false;
	});


	var headerSlider = $("#headerSlider.owl-carousel");
	headerSlider.owlCarousel({
		loop: true,
		items: 1,
		dots: true
	});

	let aboutUsSlider = $("#aboutUsSlider.owl-carousel");
	aboutUsSlider.owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: true
	});

	let technoligySlider = $("#technoligySlider.owl-carousel");
	technoligySlider.owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: true
	});

	let ourWorks__slider = $("#ourWorks__slider.owl-carousel.owl-theme");

	ourWorks__slider.owlCarousel({
		loop: true,
		items: 5,
		margin: 30,
		mouseDrag: false,
		responsive : {
			0 : {
				items: 1
			},
			521 : {
				items: 2
			},
			768 : {
				items: 3
			},
			991 : {
				items: 4
			},
			1200 : {
				items: 5
			}
		}
	});

	let reviews__slider = $("#reviews__slider.owl-carousel");
	reviews__slider.owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: false,
	});

	let news__slider = $("#news__slider.owl-carousel.owl-theme");
	news__slider.owlCarousel({
		loop: true,
		items: 5,
		margin: 30,
		mouseDrag: false,
		responsive : {
			0 : {
				items: 1
			},
			521 : {
				items: 2
			},
			768 : {
				items: 3
			},
			991 : {
				items: 4
			},
			1200 : {
				items: 5
			}
		}
	});

	let header__slider_Owl1 = $('#headerSlider.owl-carousel');
	let about__usSlider_Owl2 = $('#aboutUsSlider.owl-carousel');
	let technology__slider_Owl3 = $('#technoligySlider.owl-carousel');
	let ourWorks__slider_owl4 = $('#ourWorks__slider.owl-carousel');
	let reviews__slider_owl4 = $('#reviews__slider.owl-carousel');
	let news__slider_owl4 = $('#news__slider.owl-carousel');

	//header__slider_Owl1 .owlCarousel();
	//owl2.owlCarousel();
	//owl3.owlCarousel();
	//ourWorks__slider_owl4.owlCarousel();
	//news__slider_owl4.owlCarousel();
	let headerCustomNextBtn =  $('.header .customNextBtn');
	let headerCustomPrevBtn =  $('.header .customPrevBtn');

	headerCustomNextBtn.click(function() {
		header__slider_Owl1.trigger('next.owl.carousel', [700]);
	});
	headerCustomPrevBtn.click(function() {
		header__slider_Owl1.trigger('prev.owl.carousel', [700]);
	});

	let technoligyCustomNextBtn =  $('.technoligy .customNextBtn');
	let technoligyCustomPrevBtn =  $('.technoligy .customPrevBtn');

	technoligyCustomNextBtn.click(function() {
		technology__slider_Owl3.trigger('next.owl.carousel', [700]);
	});
	technoligyCustomPrevBtn.click(function() {
		technology__slider_Owl3.trigger('prev.owl.carousel', [700]);
	});

	let ourWorksCustomNextBtn =  $('.ourWorks .customNextBtn');
	let ourWorksCustomPrevBtn =  $('.ourWorks .customPrevBtn');

	ourWorksCustomNextBtn.click(function() {
		ourWorks__slider_owl4.trigger('next.owl.carousel', [700]);
		opacityItems();
	});
	ourWorksCustomPrevBtn.click(function() {
		ourWorks__slider_owl4.trigger('prev.owl.carousel', [700]);
		opacityItems();
	});

	let reviewsCustomNextBtn =  $('.reviews .customNextBtn');
	let reviewsCustomPrevBtn =  $('.reviews .customPrevBtn');

	reviewsCustomNextBtn.click(function() {
		reviews__slider_owl4.trigger('next.owl.carousel', [700]);
	});
	reviewsCustomPrevBtn.click(function() {
		reviews__slider_owl4.trigger('prev.owl.carousel', [700]);
	});

	let newsCustomNextBtn =  $('.news .customNextBtn');
	let newsCustomPrevBtn =  $('.news .customPrevBtn');

	newsCustomNextBtn.click(function() {
		news__slider_owl4.trigger('next.owl.carousel', [700]);
		opacityItems();
	});
	newsCustomPrevBtn.click(function() {
		news__slider_owl4.trigger('prev.owl.carousel', [700]);
		opacityItems();
	});


	$(".ourWorks .owl-dots").click(function(){
		opacityItems();
	});

	$(".news .owl-dots").click(function(){
		opacityItems();
	});

	function opacityItems() {
		var ourWorksItems = $(".ourWorks .owl-stage .active");
		var newsItems = $(".news .owl-stage .active");

		ourWorksItems.removeClass("opacityItem");
		ourWorksItems.first().addClass("opacityItem");
		ourWorksItems.last().addClass("opacityItem");

		newsItems.removeClass("opacityItem");
		newsItems.first().addClass("opacityItem");
		newsItems.last().addClass("opacityItem");
	}

	opacityItems();
	
	//video
	let playButton = $("#play-pause"),
		video = $("#video video"),
		videoBg = $(".video__bg");

	playButton.click(function() {
		video[0].volume = 0;

		if(video[0].paused){
			video[0].play();
			playButton.fadeOut();
			videoBg.css({"opacity":"0"});
		}else{
			video[0].pause();

		}
	});

	video.click(function() {
		if(this.play()){
			this.pause();
			playButton.fadeIn();
			videoBg.css({"opacity":"1"});
		}
	});
});


(function ($){
	var mainFixedMenu = $(".header_mainMenu"),
		windowHeight = $(window).height();

	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		var windowWidth = $( window ).width();

		if(windowWidth >= 979){
			if( scrollTop  > windowHeight/30){
				mainFixedMenu.addClass('header_scroll')
			}else{
				mainFixedMenu.removeClass('header_scroll')
			}
		}
	});
})(jQuery);

$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");