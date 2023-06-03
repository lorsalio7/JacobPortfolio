document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    pagination: false,
    gap: 50,
    classes: {
      prev: "splide__arrow--prev testimonial-slider__prev-button",
      next: "splide__arrow--next testimonial-slider__next-button"
    }
  });
  splide.mount();
});
