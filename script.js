

// СЛАЙДЕР

const slides=document.getElementById('slides');
const counter=document.getElementById('counter');
let index=0;

function showSlide(n){
index=(n+3)%3;
slides.style.transform=`translateX(-${index*100}%)`;
counter.textContent=`${index+1} / 3`;
}

document.getElementById('prev').addEventListener('click',()=>showSlide(index-1));
document.getElementById('next').addEventListener('click',()=>showSlide(index+1));

// ФОРМА ОБРАТНОЙ СВЯЗИ

document.getElementById('form').addEventListener('submit',function(e){
e.preventDefault();
document.getElementById('message').textContent='Спасибо! Ваша заявка заполнена.';
this.reset();
});

// ПОЯВЛЕНИЕ БЛОКОВ ПРИ ПРОКРУТКЕ

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
const revealObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
observer.unobserve(entry.target);
}
});
}, {threshold: 0.12});

revealItems.forEach(item => revealObserver.observe(item));
} else {
revealItems.forEach(item => item.classList.add('visible'));
}

