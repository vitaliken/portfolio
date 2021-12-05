//menu
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

console.log(counters)

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

//checkbox
var checker = document.getElementById('checkSubmit');
var sendbtn = document.getElementById('sendMessage');
checker.onchange = function() {
    if(this.checked){
        sendbtn.disabled = false;
    } else {
        sendbtn.disabled = true;
    }
};