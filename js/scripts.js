$(document).ready(function(){
	$('.slider').slick({
	arrows: true, //Включение/отключение стрелок для перелистывания
	dots: true, //Включение/отключение точек для перелистывания
	adaptiveHeight: true, //Автоматическая коррекция по высоте
	slidesToShow: 1, //Количество отображаемых слайдов за раз
	slidesToScroll: 1, //Количество перелистываемых слайдов за раз
	speed: 1000, //Скорость пролистывания слайдов (Стандартное значение 300мс)
	easing: 'linear', //Тип анимации при смене слайда. Знаечение "linear" установлено по-умолчанию
	infinite: true,//"Бесконечность" слайдера
	initialSlide: 1, //Номер стартового слайда
	autoplay: true, //Автоматическая прокрутка слайдов
	autoplaySpeed: 1500, //Скорость автоматической прокрутки слайдов. Значение 3000мс установлено по-умолчанию
	pauseOnFocus: false, //Пауза прокрутки слайдов, при клике по нему мышью
	pauseOnDotsHover: true, //Пауза прокрутки слайдов, при наведении курсора мыши
	pauseOnHover: true, //Пауза прокрутки слайдов, при наведении на точки прокрутки
	draggable: true, //Включение/отключение возможности прокручивать слайды на ПК
	swipe: true, //Включение/отключение возможности свайпать слайды на тачскринах
	touchTreshold: 10, //Момент срабатывания прокрутки слайдов при прокрутке/свайпе
	touchMove: true, //Включение/отключение возможности тянуть слайды на тачскринах
	waitForAnimate: true, //Скорость срабатывания анимации перелистывания
	centerMode: false, //Установка главного слайда по центру
	variableWidth: false, //Включение/отключение возможности самому контенту задавать ширину слайдов
	rows: 1, //Установка количества изображений в одном слайде (этажность)
	slidedPerRow: 1,//Количество слайдов в ряду /*
	vertical: false, //Вертикальная прокрутка слайдов
	verticalSwiping: false, //Подключение корректно аботающей вертикальной прокрутки
});
});

// 

$(document).ready(function(){
	$('.slider_1').slick({
	arrows: false, //Включение/отключение стрелок для перелистывания
	dots: true, //Включение/отключение точек для перелистывания
	adaptiveHeight: true, //Автоматическая коррекция по высоте
	slidesToShow: 1, //Количество отображаемых слайдов за раз
	slidesToScroll: 1, //Количество перелистываемых слайдов за раз
	speed: 1000, //Скорость пролистывания слайдов (Стандартное значение 300мс)
	easing: 'linear', //Тип анимации при смене слайда. Знаечение "linear" установлено по-умолчанию
	infinite: true,//"Бесконечность" слайдера
	initialSlide: 1, //Номер стартового слайда
	autoplay: true, //Автоматическая прокрутка слайдов
	autoplaySpeed: 1500, //Скорость автоматической прокрутки слайдов. Значение 3000мс установлено по-умолчанию
	pauseOnFocus: false, //Пауза прокрутки слайдов, при клике по нему мышью
	pauseOnDotsHover: true, //Пауза прокрутки слайдов, при наведении курсора мыши
	pauseOnHover: true, //Пауза прокрутки слайдов, при наведении на точки прокрутки
	draggable: true, //Включение/отключение возможности прокручивать слайды на ПК
	swipe: true, //Включение/отключение возможности свайпать слайды на тачскринах
	touchTreshold: 10, //Момент срабатывания прокрутки слайдов при прокрутке/свайпе
	touchMove: true, //Включение/отключение возможности тянуть слайды на тачскринах
	waitForAnimate: true, //Скорость срабатывания анимации перелистывания
	centerMode: false, //Установка главного слайда по центру
	variableWidth: false, //Включение/отключение возможности самому контенту задавать ширину слайдов
	rows: 1, //Установка количества изображений в одном слайде (этажность)
	slidedPerRow: 1,//Количество слайдов в ряду /*
	vertical: false, //Вертикальная прокрутка слайдов
	verticalSwiping: false, //Подключение корректно аботающей вертикальной прокрутки
});
});

// 


$(document).ready(function() {
	$('#menu__toggle').click(function(event) {
		$('.menu-list').toggleClass('active');	
});
});

//

let item_1 = document.querySelector(".item_1")
item_1.onclick = function() {
  alert('Переход на домашюю страницу');
};

//

let item_2 = document.querySelector(".item_2")
item_2.onclick = function() {
  alert('Переход на страницу с информацией о компании');
};

//


let item_3 = document.querySelector(".item_3")
item_3.onclick = function() {
  alert('Переход на страницу с нашим портфолио');
};

//

let item_4 = document.querySelector(".item_4")
item_4.onclick = function() {
  alert('Переход страницу с информацией о наших преимуществах');
};

//

let item_5 = document.querySelector(".item_5")
item_5.onclick = function() {
  alert('Переход страницу с нашим блогом');
};

//

let item_6 = document.querySelector(".item_6")
item_6.onclick = function() {
  alert('Переход страницу с расценками');
};

//

let item_7 = document.querySelector(".item_7")
item_7.onclick = function() {
  alert('Переход страницу с шорткодами');
};

//

let item_8 = document.querySelector(".item_8")
item_8.onclick = function() {
  alert('Переход страницу с нашими контактами');
};

//

let butn_1 = document.querySelector(".butn_1")
butn_1.onclick = function() {
  alert('Начать просмотр!?');
};

//

let butn_2 = document.querySelector(".butn_2")
butn_2.onclick = function() {
  alert('Купить сейчас?');
};

//

let butn_3 = document.querySelector(".butn_3")
butn_3.onclick = function() {
  alert('Загрузить больше карточек?');
};

//

let All_cards = document.querySelector(".All_cards")
All_cards.onclick = function() {
  alert('Показать все карточки');
};

//

let WebDes = document.querySelector(".WebDes")
WebDes.onclick = function() {
  alert('Показать карточки категории Web Design');
};

//

let mobApp = document.querySelector(".MobApp")
mobApp.onclick = function() {
  alert('Показать карточки категории Mobile App');
};

//

let illustration = document.querySelector(".Illustration")
illustration.onclick = function() {
  alert('Показать карточки категории Illustration');
};

//

let photo = document.querySelector(".Photo")
photo.onclick = function() {
  alert('Показать карточки категории Photography');
};

//

let icon_play = document.querySelector(".icon_play")
icon_play.onclick = function() {
  alert('Start/Stop video');
};

//

let rcp_item_1_a = document.querySelector(".rcp_item_1_a")
rcp_item_1_a.onclick = function() {
  alert('Открыть расширенную информацию?');
};

//

let rcp_item_2_a = document.querySelector(".rcp_item_2_a")
rcp_item_2_a.onclick = function() {
  alert('Открыть расширенную информацию?');
};

//


let rcp_item_3_a = document.querySelector(".rcp_item_3_a")
rcp_item_3_a.onclick = function() {
  alert('Открыть расширенную информацию?');
};

//

let btn_right = document.querySelector(".btn_right")
btn_right.onclick = function() {
  alert('Пролистать слайды направо?');
};

//

let btn_left = document.querySelector(".btn_left")
btn_left.onclick = function() {
  alert('Пролистать слайды налево?');
};

//

let Read_more = document.querySelector(".Read_more")
Read_more.onclick = function() {
  alert('Открыть расширенную информацию о компании?');
};

//

let Privacy = document.querySelector(".Privacy_policy")
Privacy.onclick = function() {
  alert('Открыть политики приватности?');
};

//

let faq = document.querySelector(".faq")
faq.onclick = function() {
  alert('Открыть ответы на часто задаваемые вопросы?');
};

//

let support_link = document.querySelector(".support_link")
support_link.onclick = function() {
  alert('Открыть раздел техподдержки?');
};

//
