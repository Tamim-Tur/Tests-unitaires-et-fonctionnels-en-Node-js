const { Basket, addToBasket, removeFromBasket, testAddRemove,transactionAllowed} = require('../src/ecommerce');

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
