const ham_btn = document.querySelector('.fas');
const nav = document.querySelector('.mob-nav');
const li_s = document.querySelectorAll('.mob-nav li');

// mobile nav
ham_btn.addEventListener('click', () => {
    (ham_btn.classList[1] === 'fa-bars')? ham_btn.classList.replace('fa-bars','fa-times') : ham_btn.classList.replace('fa-times','fa-bars');
    nav.classList.toggle('visible');
})

li_s.forEach(child => child.addEventListener('click', () => {
    (ham_btn.classList[1] === 'fa-bars')? ham_btn.classList.replace('fa-bars','fa-times') : ham_btn.classList.replace('fa-times','fa-bars');
    nav.classList.remove('visible');
}));


// typed.js 
const type = new Typed('#type',{
    stringsElement: '#strings',
    smartBackspace: true,
    typeSpeed: 160,
    startDelay: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})
