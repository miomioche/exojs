const nextButton = document.querySelector(".CarouselNavRight");
const prevButton = document.querySelector(".CarouselNavLeft");
const carouselWidth = document.querySelector(".CarouselContainer").offsetWidth;
const carouselSlider = document.querySelector(".CarouselSlider")
const carouselSlides = document.querySelectorAll(".CarouselSlide")

nextButton.addEventListener("click", () => {
    // Navigating to the next slide
    carouselSlider.scrollLeft += carouselWidth;

    // Activating the prevButton after the first next clic
    if (carouselSlider.scrollLeft == 0) {
        prevButton.classList.remove("disabledNav");
    }
    // Going back to first slide and deactivating prevButton
    else if (carouselSlider.scrollLeft == carouselWidth * (carouselSlides.length - 1)) {
        carouselSlider.scrollLeft = 0;
        prevButton.classList.add("disabledNav");
    }

});

prevButton.addEventListener("click", () => {
    // Navigating to the previous slide
    carouselSlider.scrollLeft -= carouselWidth;

    // Deactivating prevButton coming back from 2nd slide
    if (carouselSlider.scrollLeft == carouselWidth) {
        prevButton.classList.add("disabledNav");
    }
});