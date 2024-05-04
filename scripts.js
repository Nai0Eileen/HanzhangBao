const slides = document.getElementsByClassName('slide');
let currentSlide = 0;

document.querySelector('.right-arrow').addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Wrap around to the first slide
    }
    document.querySelector('.slide-content').style.transform = `translateX(-${currentSlide * 100}%)`;
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1; // Wrap around to the last slide
    }
    document.querySelector('.slide-content').style.transform = `translateX(-${currentSlide * 100}%)`;
});