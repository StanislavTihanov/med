//-----------------------------------------------------------------меню бургер
"use strict"
const hamb = document.querySelector("#hamb");
const menu = document.querySelector("#menu");
const body = document.querySelector('#body');
const contactClick = document.querySelector('.header__item-link');
hamb.addEventListener("click", hambHandler);
function hambHandler(event) {
    hamb.classList.toggle("active");
    menu.classList.toggle("open");
    body.classList.toggle("lock");
}
contactClick.addEventListener("click", closeMenu);
function closeMenu(event) {
    hamb.classList.remove("active");
    menu.classList.remove("open");
    body.classList.remove("lock");
}
//----------------------------------------------------------прокрутка к нужным секциям
const menuLinks = document.querySelectorAll('.header__item-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header__top').offsetHeight;
    
        window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth"
    });
    e.preventDefault();
        }
    }
}
//----------------------------------------------------------прокрутка к нужным секциям

//-------------------------------------------------------------------меню бургер

//-------------------------------------------------------------------выпадающий список врачей

document.querySelectorAll('.form__list-wrapper').forEach(function(dropDownWrapper){

//------------------клик по кнопке открыть закрыть select
const dropDownBtn = dropDownWrapper.querySelector('.form__list-button');
const dropDownList = dropDownWrapper.querySelector('.form__list');
const dropDownItems = dropDownList.querySelectorAll('.form__list-item');
const dropDownInput = dropDownWrapper.querySelector('.form__input-hidden');
dropDownBtn.addEventListener('click', function(){
    dropDownList.classList.toggle("active");
    dropDownBtn.classList.toggle('active');
});

//------------------выбор элеиента списка
dropDownItems.forEach(function(listItem){
    listItem.addEventListener('click', function(e){
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("active");
        dropDownBtn.classList.remove('active');
    });
});

//------------------клик снаружи списка
document.addEventListener('click', function(e){
    if (e.target !== dropDownBtn) {
        dropDownList.classList.remove("active");
        dropDownBtn.classList.remove('active');
    }
});
//------------------нажатие на Tab Escape закрыть список
document.addEventListener('keydown', function(e){
    if (e.key === 'Tab' || e.key === 'Escape'){
        dropDownList.classList.remove("active");
        dropDownBtn.classList.remove('active');
    }
}); 

});
//-------------------------------------------------------------------выпадающий список врачей
//------------------------------------------------------------------------SLIDER
$('.reviews__info-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-arrows slick-arrows__left"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-arrows slick-arrows__right"><img src="images/arrow-right.svg" alt="arrow right"></button>',
});
$('.licenses__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slick-arrows slick-arrows__left-licenses"><img src="images/arrow-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="slick-arrows slick-arrows__right-licenses"><img src="images/arrow-right.svg" alt="arrow right"></button>',
    responsive: [
        {
        breakpoint: 770,
        settings: {
        slidesToShow: 3
        }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            }
        }
    ]
});
//------------------------------------------------------------------------SLIDER

//------------------------------------------------------------------------video

