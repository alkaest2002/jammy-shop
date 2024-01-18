export default () => ({
  
  currentSlide: 0,
  numberOfSlides: 0,
  atBeginning: false,
  atEnd: false,
  autoSlideInterval: null,
  baseScroll: 0,
  maxScroll: 0,
  get currentScroll() {
    return this.$refs.slider.scrollLeft;
  },
  
  init() {
    this.numberOfSlides = this.$refs.slider.children.length;
    this.baseScroll = this.$refs.slider.getBoundingClientRect().width;
    this.maxScroll = this.baseScroll * (this.numberOfSlides - 1);
    this.$watch('currentSlide', (value) => {
      this.$refs.slider.scrollTo({ left: value * this.baseScroll, behavior: "smooth" });
    });
    this.startAutoSlide();
  },

  destroy() {
    this.stopAutoSlide();
  },
  
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => { this.next() }, 555555000);
  },
  
  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  },
  
  goToSlide(index) {
    this.currentSlide = index;
  },
  
  next() {
    if (this.currentSlide +1 === this.numberOfSlides) return this.currentSlide = 0;
    this.currentSlide += 1;
  },
  
  prev() {
    if (this.currentSlide === 0) return this.currentSlide = this.numberOfSlides -1;
    this.currentSlide -= 1;
  },
  
  updateButtonStates() {
    let slideEls = this.$refs.slider.children;
    this.atBeginning = slideEls[0] === this.$el;
    this.atEnd = slideEls[slideEls.length-1] === this.$el;
  },
  
  focusableWhenVisible: {
    ["x-intersect:enter"]() {
      this.$el.removeAttribute("tabindex");
    },
    ["x-intersect:leave"]() {
      this.$el.setAttribute("tabindex", "-1");
    },
  },
  
  disableNextAndPreviousButtons: {
    ["x-intersect:enter.threshold.05"]() {
      this.updateButtonStates();
    },
    ["x-intersect:leave.threshold.05"]() {
      this.updateButtonStates();
    },
  }
});
