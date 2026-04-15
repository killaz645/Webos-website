document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('[data-guide-carousel]');

  carousels.forEach((element) => {
    if (!window.bootstrap || !bootstrap.Carousel) {
      return;
    }

    if (bootstrap.Carousel.getInstance(element)) {
      return;
    }

    bootstrap.Carousel.getOrCreateInstance(element, {
      interval: false,
      ride: false,
      touch: true,
      wrap: true,
      pause: false
    });
  });
});
