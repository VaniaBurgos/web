let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

const firstImage = images[0].cloneNode(true);
document.querySelector('.carousel-images').appendChild(firstImage);

function moveToNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();

if (currentIndex === 0) {
    setTimeout(() => {
        document.querySelector('.carousel-images').style.transition = 'none';
        document.querySelector('.carousel-images').style.transform = 'translateX(0%)'; 
        currentIndex = 0; 
    }, 2500); //
}}



function updateCarousel() {
    const offset = -currentIndex * 34; 
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

setInterval(moveToNextImage, 2500);
