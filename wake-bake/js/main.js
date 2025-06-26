(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {


        //  проверяет есть ли родитель у класса
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('nav__link')

        // если не нажму на это, то return полностью прекращает эту функию
        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        // отменяет деф поведение
        // if  (burgerIcon) {
        //     e.preventDefault()
        // }
        // contains -  если этот класс есть то оно возращает true, и это условие срабатывает
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

})()