const slides = document.querySelector(".slides");
const slideCount = slides.children.length;
let index = 0;

function showSlide() {
    index = (index + 1) % slideCount; // حلقه بی‌پایان
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showSlide, 7000); // هر 3 ثانیه یکبار
