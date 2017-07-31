// подключение animate.js
require("../libs/libs").greenSock();

class Animation {
	constructor() {
		this.tl1 = new TimelineMax();
		this.tl1.pause();

		this.tl2 = new TimelineMax();
		this.tl2.pause();

		this.tl3 = new TimelineMax();
		this.tl3.pause();

		this.tl4 = new TimelineMax();
		this.tl4.pause();

		this.tl5 = new TimelineMax();
		this.tl5.pause();

		this.tl6 = new TimelineMax();
		this.tl6.pause();

		this.tl7 = new TimelineMax();
		this.tl7.pause();
	}

	description() {
		this.tl1.from('.header__content_wrap', 0.7, {
			y: -100,
			opacity: 0,
			ease: Power4.easeOut
		}, '+=0.3');
	}
	
	section_say_no(){
		
		const	say_no_text = $(".say-no .say-no__text"),
				say_no_video = $(".say-no .say-no__video"),
				btn_big = $(".say-no .btn-big__shadow-outer");

		this.tl2.from(say_no_text, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn})
		 		.from(say_no_video, 0.7, { autoAlpha: 0, x: 100, ease: Power3.easeIn})
		 		.from(btn_big, 0.7, { autoAlpha: 0, y: 100, ease: Power3.easeIn}, "-=0.7");
	}

	section_five_tasks(){
		const 	default_title = $(".five-tasks .default-title"),
				description = $(".five-tasks .five-tasks__description"),
				line = $(".five-tasks .line"),
				item1 = $(".five-tasks__item-anima-1"),
				item2 = $(".five-tasks__item-anima-2"),
				item3 = $(".five-tasks__item-anima-3"),
				item4 = $(".five-tasks__item-anima-4"),
				item5 = $(".five-tasks__item-anima-5"),
				item6 = $(".five-tasks__item-anima-6");


		this.tl3.from(default_title, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn})
				.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(line, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(item1, 0.7, { autoAlpha: 0,	scale: 2, ease: Power3.easeIn})
				.from(item2, 0.7, { autoAlpha: 0,	scale: 2, ease: Power3.easeIn}, "-=0.5")
				.from(item3, 0.7, { autoAlpha: 0,	scale: 2, ease: Power3.easeIn}, "-=0.5")
				.from(item4, 0.7, { autoAlpha: 0,	scale: 2, ease: Power3.easeIn}, "-=0.5")
				.from(item5, 0.7, { autoAlpha: 0,	scale: 2, ease: Power3.easeIn}, "-=0.5")
				.from(item6, 0.7, { autoAlpha: 0,	scale: 2, ease: Power3.easeIn}, "-=0.5")
	}

	section_my_design(){

		const 	default_title = $(".my-design .default-title"),
				description = $(".my-design .my-design__slogan"),
				line = $(".my-design .line"),
				text_mask = $(".my-design .text-mask"),
				item1 = $(".my-design__items .my-design__item:nth-child(1)"),
				item2 = $(".my-design__items .my-design__item:nth-child(2)"),
				item3 = $(".my-design__items .my-design__item:nth-child(3)"),
				item4 = $(".my-design__items .my-design__item:nth-child(4)"),
				photo = $(".my-design__photo"),
				photo_front = $(".my-design__photo_front");

		this.tl4.from(default_title, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn})
				.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(line, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(text_mask, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn})
				.from(item1, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn})
				.from(item2, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn}, "-=0.4")
				.from(item3, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn}, "-=0.4")
				.from(item4, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn}, "-=0.4")
				.from(photo, 0.7, { autoAlpha: 0, y: -200, ease: Power3.easeIn}, "-=0.4")
				.from(photo_front, 0.7, { autoAlpha: 0, y: -200, ease: Power3.easeIn}, "-=0.4")
	}

	section_comfort(){

		const	default_title = $(".comfort .default-title"),
				description = $(".comfort .comfort__slogan"),
				line = $(".comfort .line"),
				why_i = $(".comfort__why-i"),
				table_item_1 = $(".comfort__table .comfort__item:nth-child(1)"),
				table_item_2 = $(".comfort__table .comfort__item:nth-child(2)"),
				table_item_3 = $(".comfort__table .comfort__item:nth-child(3)");

		console.log(table_item_1);

		this.tl5.from(default_title, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn})
				.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(why_i, 0.7, { autoAlpha: 0, scale: 2, y: -200, ease: Power3.easeIn})
				.from(table_item_1, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn})
				.from(table_item_2, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn})
				.from(table_item_3, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn})
	}

	section_good_design(){

		const 	default_title = $(".good-design .default-title"),
				description = $(".good-design .good-design__about-me"),
				line = $(".good-design .line"),
				text_mask = $(".good-design .text-mask"),
				table_left_item_1 = $(".good-design__left .good-design__category:nth-child(1)"),
				table_left_item_2 = $(".good-design__left .good-design__category:nth-child(2)"),
				table_left_item_3 = $(".good-design__left .good-design__category:nth-child(3)"),
				table_right_item_1 = $(".good-design__right .good-design__category:nth-child(1)"),
				table_right_item_2 = $(".good-design__right .good-design__category:nth-child(2)"),
				table_right_item_3 = $(".good-design__right .good-design__category:nth-child(3)"),
				btn = $(".good-design .btn-big__shadow-outer");


		this.tl6.from(default_title, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
				.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(text_mask, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
				.from(table_left_item_1, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn})
				.from(table_right_item_1, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn}, "-=0.7")
				.from(table_left_item_2, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn})
				.from(table_right_item_2, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn}, "-=0.7")
				.from(table_left_item_3, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn})
				.from(table_right_item_3, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn}, "-=0.7")
				.from(btn, 0.7, { autoAlpha: 0, y: +200, ease: Power3.easeIn})
	}

	srction_premium_design(){
		const 	default_title = $(".premium-design .default-title"),
				description = $(".premium-design .premium-design__for"),
				line = $(".premium-design .line"),
				text_description = $(".premium-design .premium-design__description"),
				form_wrap = $(".premium-design .premium-design__form-wrap");

		this.tl7.from(default_title, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
				.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(text_description, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn})
				.from(form_wrap, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn})

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

		if (this.activeSection('say-no',500, -100)) {
			this.tl2.resume();
		}

		if (this.activeSection('five-tasks',500, -100)) {
			this.tl3.resume();
		}

		if (this.activeSection('my-design',500, -100)) {
			this.tl4.resume();
		}

		if (this.activeSection('comfort',500, -100)) {
			this.tl5.resume();
		}

		if (this.activeSection('good-design',500, -100)) {
			this.tl6.resume();
		}

		if (this.activeSection('premium-design',500, -100)) {
			this.tl7.resume();
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
		anim.section_say_no();
		anim.section_five_tasks();
		anim.section_my_design();
		anim.section_comfort();
		anim.section_good_design();
		anim.srction_premium_design();
	}

	//callBack GSAP
	//function startAnima() {
	//}

	//function endAnima() {
	//}

	//function progressAnima() {
	//}

	// let arrow = $(".five-tasks .line	"),
	// 	time_anim = 3,
	// 	arrow_anim_options = {
	// 		x: 500,
	// 		delay: 1,
	// 		onStart: startAnima,//callBack
	// 		onUpdate: progressAnima,//callBack
	// 		onComplete: endAnima,//callBack
	// 	};
	//	TweenLite.to(arrow, time_anim, arrow_anim_options)
	//TweenLite.from(arrow, time_anim, arrow_anim_options)
	//TweenLite.to(arrow, time_anim, arrow_anim_options)




	// var controller = new ScrollMagic.Controller();
	// var tl = new TimelineLite();
	//
	// const 	section_say_no = $("#say-no"),
	// 		section_five_tasks = $(".main_content .five-tasks");
	//
	// section_say_no.each(function () {
	//
	// 	const	say_no_text = $(".say-no .say-no__text"),
	// 			say_no_video = $(".say-no .say-no__video"),
	// 			btn_big = $(".say-no .btn-big__shadow-outer"),
	// 			text_mask = $(".say-no .text-mask"),
	// 	 		default_title = $(".say-no .default-title"),
	// 			text_slogan = $(".say-no .say-no__text-slogan");
	//
	// 	var tween = tl
	// 		.from(say_no_text, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn})
	// 		.from(say_no_video, 0.7, { autoAlpha: 0, x: 100, ease: Power3.easeIn})
	// 		.from(btn_big, 0.7, { autoAlpha: 0, y: 100, ease: Power3.easeIn}, "-=0.7");
	//
	// 	 var scene = new ScrollMagic.Scene({
	// 	 	triggerElement: this
	// 	})
	// 		 .setTween(tween)
	// 		 .reverse(false)
	// 		 .addTo(controller)
	// });

	// section_five_tasks.each(function () {
	//
	//  	const 	default_title = $(".five-tasks .default-title");
	//  			//description = $(".five-tasks .five-tasks__description"),
	//  			//line = $(".five-tasks .line");
	//
	// 	var tween = tl.from(default_title, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn});
	//
	//  	var scene = new ScrollMagic.Scene({
	//  		triggerElement: this
	//  	})
	// 		.setTween(tween)
	// 		.reverse(false)
	// 		.addTo(controller)
	// });
});