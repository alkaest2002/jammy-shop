/* cresits to https://victoryoalli.me/creating-a-carousel-with-tailwind-css-and-alpinejs */
export default () => ({
  currentSlide: 0,
  skip: 1,
  atBeginning: false,
  atEnd: false,
  autoSlideInterval: null,

  init() {
    this.startAutoSlide();
  },
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 5000);
  },
  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  },
  goToSlide(index) {
    let slider = this.$refs.slider;
    let offset = slider.firstElementChild.getBoundingClientRect().width;
    slider.scrollTo({ left: offset * index, behavior: "smooth" });
  },
  next() {
    let slider = this.$refs.slider;
    let current = slider.scrollLeft;
    let offset = slider.firstElementChild.getBoundingClientRect().width;
    let maxScroll = offset * (slider.children.length - 1);

    current && current + offset >= maxScroll
      ? slider.scrollTo({ left: 0, behavior: "smooth" })
      : slider.scrollBy({ left: offset * this.skip, behavior: "smooth" });
  },
  prev() {
    let slider = this.$refs.slider;
    let current = slider.scrollLeft;
    let offset = slider.firstElementChild.getBoundingClientRect().width;
    let maxScroll = offset * (slider.children.length - 1);

    current <= 0
      ? slider.scrollTo({ left: maxScroll, behavior: "smooth" })
      : slider.scrollBy({ left: -offset * this.skip, behavior: "smooth" });
  },
  updateButtonStates() {
    let slideEls = this.$el.parentElement.children;
    this.atBeginning = slideEls[0] === this.$el;
    this.atEnd = slideEls[slideEls.length-1] === this.$el;
  },
  focusableWhenVisible: {
    "x-intersect:enter"() {
      this.$el.removeAttribute("tabindex");
    },
    "x-intersect:leave"() {
      this.$el.setAttribute("tabindex", "-1");
    },
  },
  disableNextAndPreviousButtons: {
    "x-intersect:enter.threshold.05"() {
      this.updateButtonStates();
    },
    "x-intersect:leave.threshold.05"() {
      this.updateButtonStates();
    },
  },
  updateCurrentSlide() {
    let slider = this.$refs.slider;
    let offset = slider.firstElementChild.getBoundingClientRect().width;
    this.currentSlide = Math.round(slider.scrollLeft / offset);
  },
});
