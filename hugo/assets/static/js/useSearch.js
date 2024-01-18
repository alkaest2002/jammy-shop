export default () => ({
  open: false,
  init() {
    new PagefindUI({ element: '#search', showSubResults: false, showImages: true, highlightParam: 'highlight' }); 
    this.$watch('open', (open) => { 
      this.$nextTick(() => open && this.$refs['search-component'].getElementsByTagName('input')[0].focus())
    })
  },
  trigger: {
    ["x-show"]() { return this.open },
    ["@keydown.window.escape"]() { this.open = false },
    ["@canvas-open.window"]() { this.open = true }
  }
})