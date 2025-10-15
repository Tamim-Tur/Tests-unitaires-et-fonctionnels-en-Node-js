const { Basket, addToBasket ,removeFromBasket ,testAddRemove ,transactionAllowed ,testPayBasket, testAppEcommerce } = require('../src/ecommerce');

test('ajout du produit met à jour le prix total', () => {
  const basket = new Basket();
  const item = { name: 'Carte mère', price: 100 };
  addToBasket(basket, item);
  expect(basket.totalPrice).toBe(100);
});

test('suppression du produit remet le total à zero', () => {
  const basket = new Basket();
  const item = { name: 'Carte mère', price: 100 };
  addToBasket(basket, item);
  removeFromBasket(basket, item);
  expect(basket.totalPrice).toBe(0);
});
test('ajout puis suppression du produit ',() =>{
  expect(testAddRemove()).toBe(true);
});
test('transaction', () =>{
  const user={name:"Perceval",balance:500};
  expect(transactionAllowed(user, 400)).toBe(true);
  expect(transactionAllowed(user, 600)).toBe(false);
});
test('testPayBasket', () => {
  const user = { name: 'Perceval', balance: 500 };
  const basket = new Basket();
  const item = { name: 'Carte graphique', price: 300 };
  addToBasket(basket, item);
  const firstPayment =testPayBasket(user, basket);
  expect(firstPayment).toBe(true);       
  expect(user.balance).toBe(200);   
  const secondPayment =testPayBasket(user, basket);
  expect(secondPayment).toBe(false);     
  expect(user.balance).toBe(200);       
});
test('app',()=>{
  testAppEcommerce();
});

