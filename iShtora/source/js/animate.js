// подключение animate.js
require("../libs/libs").greenSock();

class Animation {
	constructor() {
		this.tl1 = new TimelineMax();
		this.tl1.pause();
	}

	description() {
		this.tl1.from('.header_title', 0.7, {
			y: -100,
			opacity: 0,
			ease: Power4.easeOut
		}, '+=0.3');

	}

	activeSection(section, startTop = 0, startBotton = 0) {
		section = '.' + section;
		if ($(section).offset() !== undefined) {
			var topPosition = $(section).offset().top - startTop,
				bottomPosition = $(section).offset().top + $(section).height() - startBotton;
			if (($(window).scrollTop() >= topPosition) && ($(window).scrollTop() <= bottomPosition)) {
				return true;
			}
		}
	}

	play() {
		if (this.activeSection('header',0, 500)) {
			this.tl1.resume();
		}



		if (! sessionStorage.getItem("pupUp")) {

			if (this.activeSection('tovar-groups',0, 500)) {
				$('.popup[data-modal=modal-form]').show("fade", 200);
			} else{
				$('.popup[data-modal=modal-form]').hide("fade", 200);
			}
		}
		

	}
}

var anim = new Animation;

$(window).scroll(function() {
	if (document.documentElement.clientWidth >= 320) {
		anim.play();
	}
});

$(window).ready(function() {	

	if (document.documentElement.clientWidth >= 320) {
		anim.description();
		anim.play();
	}
});
