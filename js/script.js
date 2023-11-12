"use strict";
//Импорт языков
import langs from './languages.js';

//Реализация смены языка на странице
let btns = document.querySelectorAll('[data-btn]');
let dataLangs = document.querySelectorAll('[data-lang]');
//По умолчанию русский язык
if(localStorage.getItem('lastLang') === null){
		localStorage.setItem('lastLang', btns[0].getAttribute("data-btn"));
}
//Инпуты
let inputs = document.querySelectorAll('input');

for(let i = 0; i<=3; i++){
	inputs[i].addEventListener('click', function(){
		inputs[i].value = '';
	});
	
};

for(let i=0; i<2; i++){
	if(btns[i].getAttribute("data-btn") == localStorage.getItem('lastLang')){
		btns[i].classList.add('active');
	}
	btns[i].addEventListener('click',function(){
		for(let btn of btns){
			if(btn === btns[i]){
				btn.classList.add('active');
				changeLang(btn.getAttribute("data-btn"));
				localStorage.setItem('lastLang', btn.getAttribute("data-btn"));
			}else{
				btn.classList.remove('active');
			}
		}

	});

};
function changeLang(props){
	if(props === undefined){
		props = localStorage.getItem('lastLang');
	}
	for(let elem in langs){
		let subObj = langs[elem];
			for(let lang in subObj){
				for(let dataLang of dataLangs){
				if(elem === dataLang.getAttribute("data-lang") && lang === props){
					dataLang.innerHTML = subObj[lang];
					for(let input of inputs){
						if(elem === input.getAttribute('data-lang')){
							input.value = subObj[lang];
						}
						input.addEventListener('blur', function(){
							if(input.value === '' && elem === input.getAttribute('data-lang') && lang === localStorage.getItem('lastLang')){
								input.value = subObj[lang];
							}
						});
					}
				}
			}	
		}
	}
}
changeLang();
//Header
//Header button
let header_btn = document.querySelector('.menu-header__icon');
let nav_menu = document.querySelector('.main__nav');
let header_body = document.querySelector('.header');
let header_logo = document.querySelector('#header__img');
let header_list = document.querySelector('.menu-header__list');
header_btn.addEventListener('click', function(){
	header_btn.classList.toggle('active');
	header_body.classList.toggle('active');
	nav_menu.classList.toggle('active');
	header_list.classList.toggle('active');
	if(header_btn.classList.contains('active')){
		header_logo.src="img/logo-white.svg";
	}else{
		header_logo.src="img/logo.svg";
	}
});

//Nav top
let nav_links = document.querySelectorAll('.nav-main__link');
for(let i=0;i<nav_links.length;i++){
	nav_links[i].addEventListener('click', function(){
		for(let link of nav_links){
			if(nav_links[i]===link){
				nav_links[i].classList.add('active');
			}else{
				link.classList.remove('active');
			}
		}
	});
}

//Map
 var map = L.map('map',{
 	zoomControl: false,
 	minZoom: 14,
 	maxZoom: 14,
 }).setView([55.75199430239924, 37.622509002685554], 14);
 var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20 
}).addTo(map);
 
var LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [60, 60],
       shadowSize:   [0, 0],
       iconAnchor:   [22, 94],
       shadowAnchor: [4, 62],
       popupAnchor:  [-3, -76]
    }
});
var myIcon = new LeafIcon({
    iconUrl: 'img/img_map/marker-icon.png',
    shadowUrl: 'img/img_map/marker-icon.png',
});
const options = {className: "address__tooltip", direction: 'right', offset: L.point({x: 19, y: -121})};
L.marker([55.75369430239924, 37.614509002685554], {icon: myIcon}).bindTooltip("ул. Тверская, 24",options).openTooltip().addTo(map);
L.marker([55.754906647277834, 37.59982059020997], {icon: myIcon}).bindTooltip("Тверской бульвар, 26",options).openTooltip().addTo(map);
L.marker([55.75069430239924, 37.624409002685554], {icon: myIcon}).bindTooltip("ул. Варварка, 3",options).openTooltip().addTo(map);
L.marker([55.74469430239924, 37.633409002685554], {icon: myIcon}).bindTooltip("ул. Садовническая, 1",options).openTooltip().addTo(map);
L.marker([55.74217430239924, 37.615209002685554], {icon: myIcon}).bindTooltip("ул. Якорная, 5",options).openTooltip().addTo(map);

let markers = document.querySelectorAll('.leaflet-marker-icon');

for(let marker of markers){
	marker.addEventListener('mouseover',function(){
		marker.src = 'img/img_map/marker-shadow.png';
	});
	marker.addEventListener('mouseout',function(){
		marker.src = 'img/img_map/marker-icon.png';
	});
};

//Social swiper
new Swiper('.social__body', {
	//Автопрокрутка
	autoplay:{
		delay:3000,
		disableOnInteraction:false,
	},
	//Стрелки
	navigation:{
		nextEl: '.social__next',
		prevEl: '.social__prev'
	},
	//Буллеты, пагинация
	pagination:{
		el:'.social__pagination',
	},
	//Бесконечность прокрутки
	loop: true,
	loopedSlides:2,
	//Отображение слайдов
	slidesPerView: 2,
	centeredSlides: true,
	//Отступы между слайдами
	spaceBetween: 15,
	//Брейкпоинты
	breakpoints:{
		768: {
			spaceBetween: 25,
			slidesPerView: 3.5,
		}
	}
});

