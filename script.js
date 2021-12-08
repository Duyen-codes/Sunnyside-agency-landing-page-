const burgerBtn = document.querySelector('.burger-btn')

const nav = document.querySelector('.navbar-nav')

const toggleNav = (e) => {
    nav.classList.toggle('burger-clicked')
    console.log('clicked')
}

burgerBtn.addEventListener('click', toggleNav)