export default () => ({

  total: 0,
  timeoutId: null,

  init() {
    const glowClass = "bg-green-200";
    this.total = this.$store.cartStore.cartTotal;
    
    this.$watch("$store.cartStore.items", () => {
      this.total = this.$store.cartStore.cartTotal;
      this.$el.classList.add(glowClass);
      this.timeoutId = setTimeout(() => {
        this.$el.classList.remove(glowClass);
      }, 300);
    })
  },

  destroy() {
    clearTimeout(this.timeoutId)
  }
})