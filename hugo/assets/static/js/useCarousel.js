export default () => ({
  
  intervalID: null,
  durationOfAnimation: 5000,
  currentSlide: 0,
  numberOfSlides: 0,
  baseScroll: 0,
  maxScroll: 0,

  init() {
    this.numberOfSlides = this.$refs.slider.children.length;
    this.baseScroll = this.$refs.slider.getBoundingClientRect().width;
    this.maxScroll = this.baseScroll * (this.numberOfSlides - 1);
    this.$watch("currentSlide", (value) => {
      this.$refs.slider.scrollTo({
        left: value * this.baseScroll,
        behavior: "smooth",
      });
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
    if (index >= 0 || index <= this.numberOfSlides) 
      this.currentSlide = index;
  },

  next() {
    if (this.currentSlide + 1 === this.numberOfSlides)
      return (this.currentSlide = 0);
    this.currentSlide += 1;
  },

  prev() {
    if (this.currentSlide === 0)
      return (this.currentSlide = this.numberOfSlides - 1);
    this.currentSlide -= 1;
  },
});
