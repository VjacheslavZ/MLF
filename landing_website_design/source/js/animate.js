// подключение animate.js
require("../libs/libs").greenSock();

class Animation {
	constructor() {
		this.tl1 = new TimelineMax();
		this.tl1.pause();
	}

	description() {
		this.tl1.from('.header__content_wrap', 0.7, {
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
	}
}

var anim = new Animation;

$(window).scroll(function() {
	if (document.documentElement.clientWidth >= 1200) {
		anim.play();
	}
});

$(window).ready(function() {	

	if (document.documentElement.clientWidth >= 1200) {
		anim.description();
		anim.play();
	}

	//callBack GSAP
	function startAnima() {
	}

	function endAnima() {
	}

	function progressAnima() {
	}

	let arrow = $(".line"),
		time_anim = 10,
		arrow_anim_options = {
			x: 500,
			delay: 1,
			onStart: startAnima,//callBack
			onUpdate: progressAnima,//callBack
			onComplete: endAnima,//callBack
		};
	// TweenLite.to(arrow, time_anim, arrow_anim_options)
	//TweenLite.from(arrow, time_anim, arrow_anim_options)
	//TweenLite.to(arrow, time_anim, arrow_anim_options)//callBAck

	//TimelineLite последовательная анимация https://www.youtube.com/watch?v=I6GeiSZPxjQ&list=PLZPPsh_ba_ERRTdC8UBUnyk2vScciM5Xx&t=17


});