export default () => ({
  cart: null,

  init() {
    this.cart = this.$store.cartStore;
  },
})