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

