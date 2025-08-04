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
        const items = Array.from(document.querySelectorAll(".hints__list-item"));
        let itemsPerClick = getItemsPerClick();

        function getItemsPerClick() {
            return window.innerWidth <= 500 ? 3 : 4;
        }

        function hideExtraItems() {
            items.forEach((item, index) => {
                if (index < itemsPerClick) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
            button.textContent = "Показать ещё";
        }

        function showNextItems() {
            const hiddenItems = items.filter(item => item.classList.contains("hidden"));
            for (let i = 0; i < itemsPerClick && i < hiddenItems.length; i++) {
                hiddenItems[i].classList.remove("hidden");
            }

            if (items.filter(item => item.classList.contains("hidden")).length === 0) {
                button.textContent = "Сбросить";
            }
        }

        button.addEventListener("click", function () {
            if (button.textContent === "Сбросить") {
                hideExtraItems();
            } else {
                showNextItems();
            }
        });

        window.addEventListener("resize", () => {
            const newCount = getItemsPerClick();
            if (newCount !== itemsPerClick) {
                itemsPerClick = newCount;
                hideExtraItems();
            }
        });

        hideExtraItems(); // изначально скрываем лишнее
    });

    // dropdown
    document.addEventListener("DOMContentLoaded", function () {
        const dropdown = document.querySelector(".body__dropdown");
        const button = dropdown.querySelector(".body__dropdown-button");
        const content = dropdown.querySelector(".body__dropdown-content");

        let isManualOpen = false;

        function updateDropdownBehavior() {
            const isMobile = window.innerWidth < 1024;

            if (isMobile) {
                // В мобильной версии: управление по клику
                button.addEventListener("click", toggleDropdown);
                document.addEventListener("click", closeOnOutsideClick);
            } else {
                // В десктопной версии: убираем JS-логику, оставляем hover через CSS
                button.removeEventListener("click", toggleDropdown);
                document.removeEventListener("click", closeOnOutsideClick);
                content.style.display = ""; // Доверяем CSS
                isManualOpen = false;
            }
        }

        function toggleDropdown(e) {
            e.stopPropagation();
            isManualOpen = !isManualOpen;
            content.style.display = isManualOpen ? "block" : "none";
        }

        function closeOnOutsideClick(e) {
            if (!dropdown.contains(e.target)) {
                isManualOpen = false;
                content.style.display = "none";
            }
        }

        // При загрузке
        updateDropdownBehavior();

        // При изменении размера окна (чтобы адаптировался динамически)
        window.addEventListener("resize", updateDropdownBehavior);
    });

    // =======

    function toggleDropdown(e) {
        e.stopPropagation();
        isManualOpen = !isManualOpen;

        if (isManualOpen) {
            content.style.display = "block";
            dropdown.classList.add("active");
        } else {
            content.style.display = "none";
            dropdown.classList.remove("active");
        }
    }

    function closeOnOutsideClick(e) {
        if (!dropdown.contains(e.target)) {
            isManualOpen = false;
            content.style.display = "none";
            dropdown.classList.remove("active");
        }
    }

    // 

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
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 1.15,
        width: 1600,


        // If we need pagination
        pagination: {
            el: '.categories__pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span> из <span class="' + totalClass + '"></span>';
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.categories__next',
            prevEl: '.categories__prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });


    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });



})()


