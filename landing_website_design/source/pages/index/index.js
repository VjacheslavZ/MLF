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


});

$(window).resize(function () {

});

$(window).scroll(function () {

});


$(".loader_inner").fadeOut();
$(".loader").fadeOut("fast");