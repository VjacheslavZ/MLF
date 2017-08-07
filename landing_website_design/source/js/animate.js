// подключение animate.js
require("../libs/libs").greenSock();

class Animation {
	constructor() {
		this.tl0 = new TimelineMax();
		this.tl0.pause();

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

		this.tl8 = new TimelineMax();
		this.tl8.pause();

		this.tl9 = new TimelineMax();
		this.tl9.pause();

		this.tl10 = new TimelineMax();
		this.tl10.pause();

		this.tl11 = new TimelineMax();
		this.tl11.pause();

		this.tl12 = new TimelineMax();
		this.tl12.pause();

		this.tl13 = new TimelineMax();
		this.tl13.pause();
	}

	arrow(){
		const arrow_bottom = $(".header__arrow");
		this.tl0.to(arrow_bottom, 0.5, { y: -20, repeat: -1, yoyo: true});
	}

	description() {

		const 	header_wrap = $(".header__content_wrap"),
				arrow_bottom_color = $(".header__arrow path"),
				arrow_top = $("#say-no__arrow");

		this.tl1.from(header_wrap, 1, { y: -100, opacity: 0, ease: Power4.easeOut}, '+=0.7')
				.from(arrow_bottom_color, 0.5, { repeat: -1, yoyo: true, "fill":"rgba(243, 58, 115, 1)"});

		this.tl13.to(arrow_top, 0.5, { y: -10, repeat: -1, yoyo: true});
		// console.log("anima start");


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
				.from(item6, 0.7, { autoAlpha: 0,	scale: 2, ease: Power3.easeIn, onStart:emulate_hover_five_tasks}, "-=0.5");

		//section five tasks emulate hover


		let five_tasks_items = $(".five-tasks__item"),
			i = 0;

		function emulate_hover_five_tasks() {
			setTimeout(function () {

				if(i > 0){
					five_tasks_items[i - 1].classList.remove("five-tasks__item-hover");
				}

				five_tasks_items[i].classList.add("five-tasks__item-hover");

				i++;

				if (i < five_tasks_items.length) {
					emulate_hover_five_tasks();
				}

			}, 500)
		}
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
				table_item_3 = $(".comfort__table .comfort__item:nth-child(3)"),
				svg = $(".svg"),
				svg_circle_middle = $(".circle__middle"),
				svg_circle_outer = $(".circle__outer"),
				svg_circle_inner = $(".circle__inner"),
				svg_circle_bg = $(".circle__bg"),

				svg_monitor = $(".monitor"),
				svg_key_board = $(".keyword__ic"),
				svg_cable = $(".keyword__cable"),
				svg_massage_ic = $(".massage__ic"),
				svg_phone_ic = $(".phone__ic"),
				svg_time_ic = $(".time_ic"),
				svg_result_ic = $("#result");

		this.tl5
				.from(default_title, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn})
				.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.5")
				.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.5")
				.from(why_i, 0.7, { autoAlpha: 0, scale: 2, y: -200, ease: Power3.easeIn})

				.from(svg_circle_bg, 0.3, { autoAlpha: 0, ease: Power3.easeIn},"-=1.4")
				.from(svg_monitor, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn},"-=1.4")
				.from(svg_key_board, 0.7, { autoAlpha: 0, x: 100, ease: Power3.easeIn},"-=1.4")
				.from(svg_cable, 0.4, { autoAlpha: 0, ease: Power3.easeIn},"-=1.4")

				.from(table_item_1, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn}, "-=0.7")
				.from(svg_massage_ic, 0.7, { autoAlpha: 0, x: 100, ease: Power3.easeIn}, "-=0.7")
				.from(svg_phone_ic, 0.3, { autoAlpha: 0, x: 50, ease: Power3.easeIn}, "-=0.7")
				.to(svg_massage_ic, 0.3, { opacity: 0, y: 100, ease: Power3.easeOut}, "+=0.3")
				.to(svg_phone_ic, 0.3, { opacity: 0, y: 100, ease: Power3.easeOut}, "-=0.3")

				.from(table_item_2, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn}, "-=0.5")
				.from(svg_time_ic, 0.7, { autoAlpha: 0, x: 100, ease: Power3.easeIn}, "-=0.7")
				.to(svg_time_ic, 0.3, { opacity: 0, x: 100, ease: Power3.easeOut}, "+=0.3")

				.from(table_item_3, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn}, "-=0.5")
				.from(svg_result_ic, 0.7, { autoAlpha: 0, x: 100, ease: Power3.easeIn}, "-=0.7")

				.from(svg_circle_inner, 0.3, {autoAlpha: 0})
				.from(svg_circle_middle, 0.3, {autoAlpha: 0}, "-=0.3")
				.from(svg_circle_outer, 0.3, {autoAlpha: 0}, "-=0.3")

				.from(svg_circle_middle, 100, {rotation: -360, transformOrigin: "50% 50%"}, "-=0.3")
				.from(svg_circle_outer, 75, {rotation: 360, transformOrigin: "50% 50%"}, "=-100")
				.from(svg_circle_inner, 50, {rotation: -360,transformOrigin: "50% 50%"}, "=-100")

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

	section_premium_design(){
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

	section_work_stepts(){
		const	default_title = $(".work-steps .default-title"),
				description = $(".work-steps .work-steps__slogan"),
				line = $(".work-steps .line"),
				text_mask = $(".work-steps .text-mask"),
				work_step_1 = $(".work-steps__levels .work-steps__item:nth-child(1)"),
				work_step_2 = $(".work-steps__levels .work-steps__item:nth-child(2)"),
				work_step_3 = $(".work-steps__levels .work-steps__item:nth-child(3)"),
				work_step_4 = $(".work-steps__levels .work-steps__item:nth-child(4)"),
				work_step_5 = $(".work-steps__levels .work-steps__item:nth-child(5)");

		this.tl8.from(default_title, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
				.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(text_mask, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
				.from(work_step_1, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn})
				.from(work_step_2, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn})
				.from(work_step_3, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn})
				.from(work_step_4, 0.7, { autoAlpha: 0, x: +200, ease: Power3.easeIn})
				.from(work_step_5, 0.7, { autoAlpha: 0, x: -200, ease: Power3.easeIn})
	}

	section_portfolio(){
		const 	default_title = $(".portfolio .default-title"),
				description = $(".portfolio .portfolio__examples"),
				line = $(".portfolio .line"),
				text_mask = $(".portfolio .text-mask"),
				portfolio_item_1 = $(".portfolio .portfolio__item_wrap:nth-child(1)"),
				portfolio_item_2 = $(".portfolio .portfolio__item_wrap:nth-child(2)"),
				portfolio_item_3 = $(".portfolio .portfolio__item_wrap:nth-child(3)"),
				portfolio_item_4 = $(".portfolio .portfolio__item_wrap:nth-child(4)"),
				portfolio_item_5 = $(".portfolio .portfolio__item_wrap:nth-child(5)"),
				portfolio_item_6 = $(".portfolio .portfolio__item_wrap:nth-child(6)"),
				btn = $(".portfolio .btn-big__shadow-outer");

		this.tl9.from(default_title, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
				.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
				.from(text_mask, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
				.from(portfolio_item_1, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn})
				.from(portfolio_item_2, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
				.from(portfolio_item_3, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
				.from(portfolio_item_4, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
				.from(portfolio_item_5, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
				.from(portfolio_item_6, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
				.from(btn, 0.7, { autoAlpha: 0, y: 200, ease: Power3.easeIn})
	}

	section_price(){
		const 	default_title = $(".price .default-title"),
				description = $(".price .price__text"),
				line = $(".price .line"),
				text_mask = $(".price .text-mask"),
				price_item_1 = $(".price .price__service_anim-1"),
				price_item_2 = $(".price .price__service_anim-2"),
				price_item_3 = $(".price .price__service_anim-3"),
				price_item_4 = $(".price .price__service_anim-4"),
				price_item_5 = $(".price .price__service_anim-5"),
				price_item_6 = $(".price .price__service_anim-6"),
				price_item_7 = $(".price .price__service_anim-7"),
				price_item_8 = $(".price .price__service_anim-8"),
				btn = $(".price .btn-big__shadow-outer");

		this.tl10.from(default_title, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
			.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
			.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
			.from(text_mask, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
			.from(price_item_1, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn})
			.from(price_item_2, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
			.from(price_item_3, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
			.from(price_item_4, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
			.from(price_item_5, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
			.from(price_item_6, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
			.from(price_item_7, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
			.from(price_item_8, 0.7, { autoAlpha: 0, x: 200, ease: Power3.easeIn}, "-=0.4")
			.from(btn, 0.7, { autoAlpha: 0, y: 200, ease: Power3.easeIn})
	}

	section_reviews(){
		const 	default_title = $(".reviews .default-title"),
				description = $(".reviews .reviews__text"),
				line = $(".reviews .line"),
				text_mask = $(".reviews .text-mask"),
				slider_wrap = $(".reviews .reviews__slider-wrap");


		this.tl11.from(default_title, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
			.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
			.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.7")
			.from(text_mask, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
			.from(slider_wrap, 0.7, { autoAlpha: 0, y: 200, ease: Power3.easeIn})
	}

	section_footer(){
		const 	default_title = $(".footer .default-title"),
				description = $(".footer .footer__text"),
				line = $(".footer .line"),
				text_mask = $(".footer .text-mask"),
				form_description = $(".footer .footer__description"),
				form = $(".footer .footer__form_consult"),
				contacts_mail = $(".footer .footer__contacts li:nth-child(1)"),
				contacts_phone = $(".footer .footer__contacts li:nth-child(2)"),
				contacts_skype = $(".footer .footer__contacts li:nth-child(3)"),
				footer_speek = $(".footer .footer__speek"),
				social_network_ic = $(".footer .footer__social-network"),
				footer_copyright = $(".footer .footer__copyright");


		this.tl12.from(default_title, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn})
			.from(description, 0.7, { autoAlpha: 0,	scale: 2, x: -100, ease: Power3.easeIn}, "-=0.4")
			.from(line, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.4")
			.from(text_mask, 0.7, { autoAlpha: 0, scale: 2, x: -100, ease: Power3.easeIn}, "-=0.4")
			.from(form_description, 0.4, { autoAlpha: 0, x: -200, ease: Power3.easeIn}, "-=0.4")
			.from(form, 0.4, { autoAlpha: 0, x: -200, ease: Power3.easeIn}, "-=0.4")
			.from(contacts_mail, 0.4, { autoAlpha: 0, x: +200, ease: Power3.easeIn})
			.from(contacts_phone, 0.4, { autoAlpha: 0, x: +200, ease: Power3.easeIn}, "-=0.4")
			.from(contacts_skype, 0.4, { autoAlpha: 0, x: +200, ease: Power3.easeIn}, "-=0.4")
			.from(footer_speek, 0.4, { autoAlpha: 0, y: +50, ease: Power3.easeIn}, "-=0.4")
			.from(social_network_ic, 0.4, { autoAlpha: 0, y: +50, ease: Power3.easeIn}, "-=0.4")
			.from(footer_copyright, 0.4, { autoAlpha: 0, y: +50, ease: Power3.easeIn}, "-=0.4")

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

		var arrow_top = $("#say-no__arrow");

		this.tl13.resume();

		if (this.activeSection('header',0, 500)) {
			this.tl0.resume();

			arrow_top.css({"opacity":"0"});
		}

		if (this.activeSection('header',0, 500)) {
			this.tl1.resume();
		}

		if (this.activeSection('say-no',500, -100)) {
			this.tl2.resume();
		}

		if (this.activeSection('say-no',0, -100)) {

			arrow_top.css({"opacity":"1"});
		}

		if (this.activeSection('five-tasks',500, 0)) {
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

		if (this.activeSection('work-steps',500, -100)) {
			this.tl8.resume();
		}

		if (this.activeSection('portfolio',500, -100)) {
			this.tl9.resume();
		}

		if (this.activeSection('price',500, -100)) {
			this.tl10.resume();
		}

		if (this.activeSection('reviews',500, -100)) {
			this.tl11.resume();
		}

		if (this.activeSection('footer',500, -100)) {
			this.tl12.resume();
		}

		// if (this.activeSection('portfolio__side-nav',500, -100)) {
		// 	this.tl9.resume();
		// }
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
		anim.arrow();
		anim.description();
		anim.play();
		anim.section_say_no();
		anim.section_five_tasks();
		anim.section_my_design();
		anim.section_comfort();
		anim.section_good_design();
		anim.section_premium_design();
		anim.section_work_stepts();
		anim.section_portfolio();
		anim.section_price();
		anim.section_reviews();
		anim.section_footer();
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