
//querySelecter() method in Html is used to  return the first element that matches a specified css selector(s) in the document.
//querySelectorAll() is return a collections of an elements.child elements that matches a specified CSS selector(s).

document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelector('.slider-images');
    const images = document.querySelectorAll('.slider-image');
    const imageCount = images.length;
    let currentIndex = 0;

    // Create dots
    const sliderDots = document.querySelector('.slider-dots');
    for (let i = 0; i < imageCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === currentIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToImage(i);
        });
        sliderDots.appendChild(dot);
    }

    function goToImage(index) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        sliderImages.style.transform = `translateX(${offset}%)`;

        // Update dot status
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageCount;
        goToImage(currentIndex);
    }, 3000);
});
