function calculateCartTotal(items, taxRate) {
  let subtotal = 0;

  for (let i = 0; i < items.length; i++) {
    let price = items[i].price;
    let quantity = items[i].quantity;
    let discount = items[i].discount;

    let total = price * quantity;
    total = total - (total * discount / 100);

    subtotal += total;
  }

  let finalTotal = subtotal + (subtotal * taxRate / 100);

  return Math.round(finalTotal * 100) / 100;
}

// let test = calculateCartTotal([
//   { price: 200, quantity: 2, discount: 25 },
//   { price: 100, quantity: 3, discount: 10 },
//   { price: 50, quantity: 1, discount: 0 }
// ], 5);



let test = calculateCartTotal([
  { price: 100, quantity: 0, discount: 10 },
  { price: 50, quantity: 2, discount: 0 }
], 10);


console.log(test);