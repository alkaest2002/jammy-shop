const cartStore = Alpine.store("cartStore");

document.body.addEventListener('htmx:afterRequest', function(evt) {
  const stripeSessionId = evt.detail.xhr.getResponseHeader('Session-Id');
  const stripeSessionUrl = evt.detail.xhr.getResponseHeader('Session-Url');
  cartStore.stripeSessionId = stripeSessionId;
  cartStore.stripeSessionUrl = stripeSessionUrl;
  window.location.replace(stripeSessionUrl);
});