(() => {
  const carousel = document.getElementById('topography-carousel');
  if (!carousel) {
    return;
  }

  const slides = Array.from(carousel.querySelectorAll('.topography-slide'));
  const dots = Array.from(
    document.querySelectorAll('.topography-carousel-dot')
  );
  const count = document.getElementById('topography-gallery-count');
  let activeIndex = slides.findIndex((slide) => !slide.hidden);

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.hidden = !isActive;
      slide.classList.toggle('is-active', isActive);
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('is-active', isActive);
      if (isActive) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });

    count.textContent = `${activeIndex + 1} / ${slides.length}`;
  };

  carousel.addEventListener('click', (event) => {
    const control = event.target.closest('[data-carousel-step]');
    if (control) {
      showSlide(activeIndex + Number(control.dataset.carouselStep));
    }
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.carouselIndex));
    });
  });

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showSlide(activeIndex - 1);
    }
  });

  showSlide(activeIndex);
})();
