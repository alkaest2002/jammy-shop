export default () => ({
  
  intervalID: null,
  durationOfAnimation: 5000,
  currentSlide: 0,
  numberOfSlides: 0,
  baseScroll: 0,

  init() {
    const slider = this.$refs.slider;
    this.numberOfSlides = slider.children.length;
    this.baseScroll = slider.getBoundingClientRect().width;
    this.$watch("currentSlide", (value) => {
      slider.scrollTo({ left: value * this.baseScroll, behavior: "smooth" });
    });
    this.startAutoSlide();
  },

  destroy() {
    this.stopAutoSlide();
  },

  startAutoSlide() {
    this.intervalID = setInterval(() => { this.next()}, this.durationOfAnimation);
  },

  stopAutoSlide() {
    clearInterval(this.intervalID);
  },

  goToSlide(index) {
    this.currentSlide = index;
  },

  next() {
    this.currentSlide = this.currentSlide + 1 === this.numberOfSlides 
      ? 0 
      : ++this.currentSlide;
  },

  prev() {
    this.currentSlide = this.currentSlide === 0 
      ? this.numberOfSlides - 1 
      : --this.currentSlide;
  },
});
