(() => {
  // <stdin>
  document.addEventListener("alpine:init", () => {
    const cartStore = Alpine.store("cartStore");
    cartStore.stripeSessionId = null;
    cartStore.stripeSessionUrl = null;
  });
})();
