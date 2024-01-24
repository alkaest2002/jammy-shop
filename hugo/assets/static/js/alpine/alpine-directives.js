export const formatCurrencyDirective = (
  el,
  { expression },
  { evaluateLater, effect }
) => {
  const formatCurrency = evaluateLater(expression);

  effect(() => {
    formatCurrency((amount) => {
      const formattedAmount =
        typeof amount == "number" ? `$${amount.toFixed(2)}` : amount;
      el.innerHTML = formattedAmount;
    });
  });
};

export const destroyDirective = (
  el,
  { expression },
  { evaluateLater, cleanup }
) => {
  const clean = evaluateLater(expression);
  cleanup(() => clean());
};
