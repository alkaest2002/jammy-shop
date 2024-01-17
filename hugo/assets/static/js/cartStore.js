export default (Alpine) => ({ 
  
  items: Alpine.$persist([]),

  get cartTotal() {
    return this.items.reduce((a,i) => a += i.price * i.quantity, 0);
  },

  get cartForStripe() {
    return this.items.map((item) => ({
      sku: item.sku,
      price_id: item.stripe_price_id,
      quantity: item.quantity,
    }));
  },

  findItem(itemToFind) {
    return { 
      item: this.items.find(i => i.sku === itemToFind.sku),
      itemIndex: this.items.findIndex(i => i.sku === itemToFind.sku)
    };
  },

  getItemProp(itemToGet, prop = "quantity") {
    const { item } = this.findItem(itemToGet);
    return item?.[prop];
  },

  addItem(itemToAdd) {
    const { item } = this.findItem(itemToAdd); 
    item
      ? item.quantity = Math.min(10, item.quantity +1)
      : this.items.push({ ...itemToAdd, quantity: 1 })
  },

  removeItem(itemToRemove, wipeOut = false) {
    const { item, itemIndex } = this.findItem(itemToRemove);
    let updatedWipeOut = wipeOut || item?.quantity === 1;
    if (item && !updatedWipeOut) item.quantity -= 1;
    if (item && updatedWipeOut) this.items.splice(itemIndex, 1);
  },

  wipeCart() {
    this.items = [];
  }
})