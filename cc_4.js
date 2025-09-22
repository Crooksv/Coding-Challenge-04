///Coding Challenge 04
///Vincent Crooks

const products = [
  { name: "USB-C Cable",     category: "electronics", price: 12.99, inventory: 25 },
  { name: "Graphic Tee",     category: "apparel",     price: 19.99, inventory: 18 },
  { name: "Oat Milk", category: "groceries",   price: 4.49,  inventory: 40 },
  { name: "Laundry Pods",    category: "household",   price: 15.99, inventory: 30 },
  { name: "Notebook", category: "stationery",  price: 9.99,  inventory: 22 }
];

//commit products

for (const product of products) {
  let rate = 0;
  switch (product.category) {
    case "electronics": rate = 0.20;
     break;
    case "apparel":     rate = 0.15;
     break;
    case "groceries":
    case "household":   rate = 0.10; 
    break;
    default:            rate = 0;
  }
  product.promoPrice = product.price * (1 - rate);
}

//commit dynamic discount

function extraDiscountRate(customerType) {
  if (customerType === "student") return 0.05;   
  else if (customerType === "senior") return 0.07; 
  else return 0; 
}

//commit customer type

const customers = [
  {
    number: 1,
    customerType: "regular",
    cart: [
      { productName: "USB-C Cable", qty: 2 },
      { productName: "Oat Milk", qty: 3 }
    ]
  },
  {
    number: 2,
    customerType: "student",
    cart: [
      { productName: "Graphic Tee", qty: 1 },
      { productName: "Laundry Pods", qty: 2 }
    ]
  },
  {
    number: 3,
    customerType: "senior",
    cart: [
      { productName: "Notebook", qty: 4 },
      { productName: "USB-C Cable", qty: 1 }
    ]
  }
];

function findByName(name) {
  return products.find(p => p.name === name);
}


let idx = 0;
while (idx < customers.length) {
  const c = customers[idx];
  const extraRate = extraDiscountRate(c.customerType);

  let subtotal = 0;


    for (let i = 0; i < c.cart.length; i++) {
    const { productName, qty } = c.cart[i];
    const prod = findByName(productName);
    if (!prod || prod.inventory < qty) continue; // skip if not found or insufficient inventory

    subtotal += prod.promoPrice * qty;
    prod.inventory -= qty; // reduce inventory
  }

  const total = subtotal * (1 - extraRate);

    console.log(`Customer #${c.number} total: $${total.toFixed(2)}`);

  idx++;
}

//commit checkout process

const sample = products[0];
for (const key in sample) {
  if (Object.prototype.hasOwnProperty.call(sample, key)) {
    console.log(`${key}: ${sample[key]}`);
  }
}

//commit log each key/value pair for a single product after discounts are applied

for (const prod of products) {
  for (const [k, v] of Object.entries(prod)) {
    console.log(`${k}: ${v}`);
  }
}

//object entries & finished