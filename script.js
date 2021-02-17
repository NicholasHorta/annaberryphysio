const burgerIcon = document.querySelector('#burger-icon');
const navbar = document.querySelector('#navbar ul');
const reviewsButton = document.querySelector('#reviews-button');
const reviewBody = document.querySelectorAll('.review__item');
const socialBurgerBug = document.querySelector('.contact__form-social-media');
const socialBurgerBugFooter = document.querySelector('.social-media-images');


//£ Check to see if the burger menu is OPEN at the time of resize, to avoid class application confusion
function checkWidthOnResize(e) {
    if (e.target.outerWidth > 700 && navbar.classList.contains('burger__clicked')) {
        navbar.classList.add('navbar__list');
        navbar.classList.remove('burger__clicked');
        // Both items below handle 
        socialBurgerBugFooter.classList.toggle('burger-bug_active');
        socialBurgerBug.classList.toggle('burger-bug_active');
    };
};

function toggleOpenCloseState() {
    navbar.classList.toggle('burger__clicked');
    navbar.classList.toggle('navbar__list');
    // Both items below handle 
    socialBurgerBugFooter.classList.toggle('burger-bug_active');
    socialBurgerBug.classList.toggle('burger-bug_active');
};

//£ Review function for expanding the reviews 
function expandRetractReviews(e) {
    reviewBody.forEach(review => {
        review.classList.toggle('read_more');
        if (review.classList.contains('read_more')) {
            reviewsButton.innerText = 'READ LESS';
            reviewsButton.style.background = 'var(--buttonColor)';
            reviewsButton.style.color = 'white';
        } else {
            reviewsButton.innerText = 'READ REVIEWS';
            reviewsButton.style.background = 'white';
            reviewsButton.style.color = 'var(--buttonColor)';
        };
    });
};





burgerIcon.addEventListener('click', function (e) {
    toggleOpenCloseState(e);
});

window.addEventListener('resize', function (e) {
    checkWidthOnResize(e);
});

// Keep at bottom, as other pages will not have access to this item,so the code will stop while compiling
reviewsButton.addEventListener('click', function (e) {
    expandRetractReviews(e);
});

//? For some reason, the social icons display throught the active burger menu, so this is the way I control it
//? The code to to toggle its state runs in - toggleOpenCloseState()
