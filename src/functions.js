export function formatDollar(num) {
  let formatted = Math.round((num + Number.EPSILON) * 100) / 100;
  formatted = +formatted.toFixed(2);
  return formatted;
}

export function changePrice(oldPrice, volatility) {
  let rnd = Math.random(); // generate number, 0 <= x < 1.0
  let change_percent = 2 * volatility * rnd;
  if (change_percent > volatility) change_percent -= 2 * volatility;
  let change_amount = oldPrice * change_percent;
  let newPrice = formatDollar(oldPrice + change_amount);
  if (newPrice < 0) newPrice = 0.0;
  return newPrice;
}
