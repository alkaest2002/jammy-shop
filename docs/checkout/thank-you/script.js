(() => {
  // <stdin>
  document.addEventListener("alpine:init", () => {
    Alpine.store("cartStore").wipeCart();
  });
})();
