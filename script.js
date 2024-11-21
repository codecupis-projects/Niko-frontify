const slides = document.querySelector(".slides");
const slideCount = slides.children.length;
const slide = document.querySelectorAll(".slides img");
let index = 0;

function showSlide() {
    index = (index + 1) % slideCount; // حلقه بی‌پایان
    slides.style.transform = `translateX(${-index * 100}%)`;
slideCount.forEach((item)=>{
    ClipboardItem.classList.add("show");
})
setTimeout(()=>{
    slide.forEach((item)=>{
        item.classList.remove("show");
    })
}, 2950)
}
setInterval(showSlide, 7000); // هر 3 ثانیه یکبار
