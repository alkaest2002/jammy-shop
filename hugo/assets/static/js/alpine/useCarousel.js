export const useCarousel = (durationOfAnimation = 10000) => ({
  durationOfAnimation,
  intervalID: null,
  currentSlide: 0,
  numberOfSlides: 0,
  baseScroll: 0,

  init() {
    const slider = this.$refs.slider;
    this.numberOfSlides = slider.children.length;
    this.baseScroll = slider.firstElementChild.getBoundingClientRect().width;
    this.$watch("currentSlide", (v) =>
      slider.scrollTo({ left: v * this.baseScroll, behavior: "smooth" })
    );
    this.startAutoSlide();
  },

  destroy() {
    this.stopAutoSlide();
  },

  startAutoSlide() {
    this.intervalID = setInterval(() => {
      this.next();
    }, this.durationOfAnimation);
  },

  stopAutoSlide() {
    clearInterval(this.intervalID);
  },

  goToSlide(index) {
    this.currentSlide = index;
  },

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.numberOfSlides;
  },

  prev() {
    this.currentSlide =
      (this.currentSlide === 0) * this.numberOfSlides + (this.currentSlide - 1);
  },
});
