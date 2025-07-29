(function () {

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link-burger')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // актив на показать еще
    const buttons = document.querySelectorAll('.hints__list-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Снимаем активность со всех
            buttons.forEach(b => b.classList.remove('active'));

            // Добавляем активность нажатому элементу
            btn.classList.add('active');
        });
    });
    // Показать еще 
    document.addEventListener("DOMContentLoaded", function () {
        const button = document.querySelector(".top__hints-button");
        const items = document.querySelectorAll(".hints__list-item");
        const itemsPerClick = 4;

        function showNextItems() {
            const hiddenItems = document.querySelectorAll(".hints__list-item.hidden");
            for (let i = 0; i < itemsPerClick && i < hiddenItems.length; i++) {
                hiddenItems[i].classList.remove("hidden");
            }

            // Если больше скрытых элементов не осталось — меняем кнопку
            if (document.querySelectorAll(".hints__list-item.hidden").length === 0) {
                button.textContent = "Сбросить";
            }
        }

        function resetItems() {
            items.forEach((item, index) => {
                if (index >= itemsPerClick) {
                    item.classList.add("hidden");
                }
            });
            button.textContent = "Показать ещё";
        }

        button.addEventListener("click", function () {
            if (button.textContent === "Сбросить") {
                resetItems();
            } else {
                showNextItems();
            }
        });

        // Изначально скрываем всё, кроме первых 4
        items.forEach((item, index) => {
            if (index >= itemsPerClick) {
                item.classList.add("hidden");
            }
        });
    });

    document.querySelectorAll('.counter').forEach(card => {
        const minusBtn = card.querySelector('.minus');
        const plusBtn = card.querySelector('.plus');
        const numberEl = card.querySelector('.number');

        const minusIcon = minusBtn.querySelector('.counter__button-icon');
        const plusIcon = plusBtn.querySelector('.counter__button-icon');

        let count = 1;
        const min = 1;
        const max = 10;

        function updateCounter() {
            numberEl.textContent = count;

            if (count <= min) {
                minusIcon.classList.add('inactive');
                minusBtn.style.pointerEvents = 'none';
            } else {
                minusIcon.classList.remove('inactive');
                minusBtn.style.pointerEvents = 'auto';
            }

            if (count >= max) {
                plusIcon.classList.add('inactive');
                plusBtn.style.pointerEvents = 'none';
            } else {
                plusIcon.classList.remove('inactive');
                plusBtn.style.pointerEvents = 'auto';
            }
        }

        plusBtn.addEventListener('click', () => {
            if (count < max) {
                count++;
                updateCounter();
            }
        });

        minusBtn.addEventListener('click', () => {
            if (count > min) {
                count--;
                updateCounter();
            }
        });

        updateCounter(); // запуск для конкретной карточки
    });

    new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });


})()

    // < !-- < div class="categories__slider swiper" >
    //                             <div class="categories__wrapper swiper-wrapper">
    //                                 <div class="categories__slide swiper-slide">
    //                                     <div class="categories__list">
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 49.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
    //                                                     расческами
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             59 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             69 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 50.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text categories__top-text--margin">
    //                                                     Фен Dyson Supersonic HD07 с 5 насадками и подставкой
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             47 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 51.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет
    //                                                     сирень
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             46 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 49.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
    //                                                     расческами
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             59 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             69 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 50.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text categories__top-text--margin">
    //                                                     Фен Dyson Supersonic HD07 с 5 насадками и подставкой
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             47 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 51.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет
    //                                                     сирень
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             46 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>

    //                                     </div>
    //                                 </div>
    //                                 <div class="categories__slide swiper-slide">
    //                                     <div class="categories__list">
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 49.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
    //                                                     расческами
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             59 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             69 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 50.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text categories__top-text--margin">
    //                                                     Фен Dyson Supersonic HD07 с 5 насадками и подставкой
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             47 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 51.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет
    //                                                     сирень
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             46 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 49.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
    //                                                     расческами
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             59 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             69 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 51.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет
    //                                                     сирень
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             46 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 50.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text categories__top-text--margin">
    //                                                     Фен Dyson Supersonic HD07 с 5 насадками и подставкой
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             47 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
                                            

    //                                     </div>
    //                                 </div>
    //                                 <div class="categories__slide swiper-slide">
    //                                     <div class="categories__list">
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 49.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
    //                                                     расческами
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             59 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             69 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 50.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text categories__top-text--margin">
    //                                                     Фен Dyson Supersonic HD07 с 5 насадками и подставкой
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             47 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 51.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет
    //                                                     сирень
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             46 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 49.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
    //                                                     расческами
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             59 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             69 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 51.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет
    //                                                     сирень
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             46 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 50.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text categories__top-text--margin">
    //                                                     Фен Dyson Supersonic HD07 с 5 насадками и подставкой
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             47 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
                                            

    //                                     </div>
    //                                 </div>
    //                                 <div class="categories__slide swiper-slide">
    //                                     <div class="categories__list">
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 49.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
    //                                                     расческами
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             59 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             69 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 50.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text categories__top-text--margin">
    //                                                     Фен Dyson Supersonic HD07 с 5 насадками и подставкой
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             47 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 51.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет
    //                                                     сирень
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             46 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 49.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и
    //                                                     расческами
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             59 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             69 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 51.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text">
    //                                                     Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет
    //                                                     сирень
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             46 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div class="categories__card">
    //                                             <div class="categories__top">
    //                                                 <div class="categories__top-img">
    //                                                     <img src="img/content/categories/image 50.jpg" alt="">
    //                                                 </div>
    //                                                 <p class="categories__top-text categories__top-text--margin">
    //                                                     Фен Dyson Supersonic HD07 с 5 насадками и подставкой
    //                                                 </p>
    //                                             </div>
    //                                             <div class="categories__bottom">
    //                                                 <div class="bottom__info">
    //                                                     <div class="info">
    //                                                         <div class="info__availability">
    //                                                             <div class="availability__icon">
    //                                                                 <svg width="13" height="13" viewBox="0 0 13 13"
    //                                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                                                     <circle cx="6.5" cy="6.5" r="6.5"
    //                                                                         fill="#68AE5C" />
    //                                                                 </svg>
    //                                                             </div>
    //                                                             <div class="availability__text">В наличии</div>
    //                                                         </div>
    //                                                         <div class="info__percent">
    //                                                             -15%
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="info__discount title">
    //                                                         <div class="discount__yes">
    //                                                             47 990Р
    //                                                         </div>
    //                                                         <div class="discount_no">
    //                                                             51 990 Р
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                                 <div class="bottom__basket">
    //                                                     <div class="basket__counter">
    //                                                         <div class="counter">
    //                                                             <button class="minus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="2" viewBox="0 0 20 2"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path d="M19 1H1" stroke="currentColor"
    //                                                                         stroke-width="2" stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                             <span class="number counter__text">1</span>
    //                                                             <button class="plus counter__button">
    //                                                                 <svg class="counter__button-icon" width="18"
    //                                                                     height="18" viewBox="0 0 20 20"
    //                                                                     fill="currentColor"
    //                                                                     xmlns="http://www.w3.org/2000/svg">
    //                                                                     <path
    //                                                                         d="M10.0003 19L10.0346 10M10.0003 1L10.0346 10M10.0346 10H19M10.0346 10H0.999999"
    //                                                                         stroke="currentColor" stroke-width="2"
    //                                                                         stroke-linecap="round" />
    //                                                                 </svg>
    //                                                             </button>
    //                                                         </div>
    //                                                     </div>
    //                                                     <button class="basket__button">
    //                                                         В корзину
    //                                                     </button>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
                                            

    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div class="swiper-pagination"></div>

    //                         </div >
    // <div class="categories__nav">
    //     <button class="categories__prev" type="button">
    //         <svg width="35" height="30" viewBox="0 0 35 30" fill="none"
    //             xmlns="http://www.w3.org/2000/svg">
    //             <path fill-rule="evenodd" clip-rule="evenodd"
    //                 d="M3.58719 16.1698L33.3382 15.8428C33.8904 15.8367 34.3332 15.3841 34.3271 14.8318C34.321 14.2796 33.8684 13.8368 33.3162 13.8429L3.41985 14.1715L14.9996 1.81932C15.3773 1.4164 15.3569 0.783566 14.954 0.405844C14.5511 0.0281214 13.9182 0.048547 13.5405 0.451466L0.358034 14.5133C-0.0196888 14.9162 0.000737105 15.549 0.403656 15.9268L15.1081 29.7117C15.5111 30.0894 16.1439 30.069 16.5216 29.6661C16.8993 29.2632 16.8789 28.6303 16.476 28.2526L3.58719 16.1698Z"
    //                 fill="#111111" />
    //         </svg>
    //     </button>
    //     <button class="categories__next" type="button">
    //         <svg width="35" height="30" viewBox="0 0 35 30" fill="none"
    //             xmlns="http://www.w3.org/2000/svg">
    //             <path fill-rule="evenodd" clip-rule="evenodd"
    //                 d="M31.4128 16.1698L1.66183 15.8428C1.10958 15.8367 0.666813 15.3841 0.672884 14.8318C0.678954 14.2796 1.13156 13.8368 1.68382 13.8429L31.5802 14.1715L20.0004 1.81932C19.6227 1.4164 19.6431 0.783566 20.046 0.405844C20.4489 0.0281214 21.0818 0.048547 21.4595 0.451466L34.642 14.5133C35.0197 14.9162 34.9993 15.549 34.5963 15.9268L19.8919 29.7117C19.4889 30.0894 18.8561 30.069 18.4784 29.6661C18.1007 29.2632 18.1211 28.6303 18.524 28.2526L31.4128 16.1698Z"
    //                 fill="#111111" />
    //         </svg>
    //     </button>
    // </div> -->
