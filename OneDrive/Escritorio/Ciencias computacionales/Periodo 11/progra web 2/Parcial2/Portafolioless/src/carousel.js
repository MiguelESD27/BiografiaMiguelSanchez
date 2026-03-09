document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".carousel-control-prev");
  const nextBtn = document.querySelector(".carousel-control-next");
  const carouselImages = document.querySelector(".carousel-images");

  function showSlide(index) {
    if (index < 0) currentIndex = slides.length - 1;
    else if (index >= slides.length) currentIndex = 0;
    else currentIndex = index;

    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn?.addEventListener("click", () => showSlide(currentIndex - 1));
  nextBtn?.addEventListener("click", () => showSlide(currentIndex + 1));

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
});