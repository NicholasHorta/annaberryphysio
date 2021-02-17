const burgerIcon = document.querySelector('#burger-icon')
const navbar = document.querySelector('#navbar ul')
const socialBurgerBugFooter = document.querySelector('.social-media-images');


function checkWidthOnResize(e) {
    if (e.target.outerWidth > 700 && navbar.classList.contains('burger__clicked')) {
        navbar.classList.add('navbar__list')
        navbar.classList.remove('burger__clicked')
        socialBurgerBugFooter.classList.toggle('burger-bug_active')
    }
}

function toggleOpenCloseState() {
    navbar.classList.toggle('burger__clicked')
    navbar.classList.toggle('navbar__list')
    socialBurgerBugFooter.classList.toggle('burger-bug_active')
}



burgerIcon.addEventListener('click', function (e) {
    toggleOpenCloseState(e)
})

window.addEventListener('resize', function (e) {
    checkWidthOnResize(e)
})
