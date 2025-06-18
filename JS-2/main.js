const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
// ckroll
const body = document.body


// btn.addEventListener('click', () => {
//     modal.classList.add('modal--open')
// })

// modal.addEventListener('click', event => {
//     const target = event.target
//     if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
//         modal.classList.remove('modal--open')
//     }
// })

// можно закрывать по клавиши

// document.addEventListener('keydown', event => {
//     if(event.code === 'Escape'){
//         modal.classList.remove('modal--open')
//     }
// })

// для аккуратности надо выносить в отдельную функцию

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}

const closeModal = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

btn.addEventListener('click', () => {
    openModal()
})

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})


// чтобы нельзя было крутить скролл при модуле 

