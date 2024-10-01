document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  };

  const carouselContainer = document.querySelector("div.carousel-container");
  const carousel = carouselContainer.querySelector("div.carousel");


  const CarouselTimer = {
    intervalId: null,
    interval: 2000, // in milliseconds
    currentSlide: parseInt(carousel.querySelector(".carousel-item.active").getAttribute("data-carousel-item")),
    totalSlides: carousel.querySelectorAll(".carousel-item").length,
    moveToSlide: function(slideNumber) {
      const activeItem = carousel.querySelector("[data-carousel-item='" + this.currentSlide + "']");
      const activeIndicator = carouselContainer.querySelector(".indicator.active");
      const targetItem = carousel.querySelector("[data-carousel-item='" + slideNumber + "']");
      const targetIndicator = carouselContainer.querySelector("[data-carousel-indicator='" + slideNumber + "']");
  
      // Remove active class from all carousel items and indicators
      activeItem.classList.remove("active");
      activeIndicator.classList.remove("active");
  
      // Add active class to the target carousel item and indicator
      targetItem.classList.add("active");
      targetIndicator.classList.add("active");

      // Update currentSlide
      this.currentSlide = slideNumber;
    },
    nextSlide: function() {
      const nextIndex = (this.currentSlide + 1 + this.totalSlides) % this.totalSlides;
      this.moveToSlide(nextIndex);
    },
    prevSlide: function() {
      const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.moveToSlide(prevIndex);
    },
    start: function() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, this.interval);
    },
    stop: function() {
      clearInterval(this.intervalId);
    },
    reset: function() {
      if (this.intervalId) clearInterval(this.intervalId);
      this.start();
    }
  }

  // Begin the timer
  CarouselTimer.start();

  // Pause the carousel when the mouse is over the carousel
  carouselContainer.addEventListener("mouseover", () => {
    CarouselTimer.stop();
  });

  // Resume the carousel when the mouse leaves the carousel
  carouselContainer.addEventListener("mouseleave", () => {
    CarouselTimer.start();
  });


  carousel.querySelectorAll(".indicator").forEach((indicator, index) => {
    indicator.addEventListener("click", () => {

      // Move to the selected slide
      CarouselTimer.moveToSlide(index);

      // Reset the carousel timer
      CarouselTimer.reset();
    });
  });

  carousel.querySelector(".carousel-control.prev").addEventListener("click", () => {
    CarouselTimer.prevSlide();
    CarouselTimer.reset();
  });
  
  carousel.querySelector(".carousel-control.next").addEventListener("click", () => {
    CarouselTimer.nextSlide();
    CarouselTimer.reset();
  });

});
