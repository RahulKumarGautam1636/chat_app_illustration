function renderCarousel() {
    $('.owl-carousel').owlCarousel({
          autoplay: 1000,
          loop: true,
          dots: false,
          stopOnHover: true,
          responsive: {
              0: {
                  items: 1
              },
              768: {
                  items: 2
              },
              1200: {
                  items: 3
              }
          },
          smartSpeed: 5000,
          // autoplayTimeout: 5000,
          // autoplayHoverPause: true,
          slideTransition: 'linear',
      });
}