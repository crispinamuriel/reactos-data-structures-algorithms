// your code goes here

const groceryList = {
  'salmon': 20.49, 
  'asparagus': 4.29, 
  'pasta': 3.69, 
  'pesto': 5.99, 
  'white wine': 21.99, 
  'ice cream': 5.29, 
  'hot cheetos': 3.99, 
  'delivery fee': 3.99, 
  'service fee': 4.00
}

const myCart = ['salmon', 'asparagus', 'white wine', 'ice cream', 'delivery fee', 'service fee'];

function sum(groceryList, myCart) {
  let total = 0;
  
  myCart.forEach((item) => {
    total += groceryList[item];
  });
  
  return total;
}
// UNCOMMENT BELOW TO TEST YOUR CODE
console.log(`Total: $${sum(groceryList, myCart)}. Your food delivery is on its way!`); //->  Total: $60.05. Your food delivery is on its way!


function giftCard(balance, menu) {
  return function (deliveryArray) {
    deliveryArray.forEach((item) => {
      balance -= menu[item];
    });
    
    if(balance > 0) {
      return balance;
    } else {
      return 'Insufficient gift card balance';
    }
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const menu = {
  quesoFundido: 11,
  sopaDeFrijol: 7,
  cochinitaPibil: 15
};
const elEncantoDeLola = giftCard(25, menu);
console.log(elEncantoDeLola(['sopaDeFrijol', 'cochinitaPibil'])) // should log 3
console.log(elEncantoDeLola(['quesoFundido'])) // should log "Insufficient gift card balance"

const createList = (people) => {
  const result = {};
  return function(show, person){
    if(!result[person]){
      result[person] = new Array();
    }
    result[person].push(show);
    
    return result[person];
  };
}

// Uncomment these to test your code!
const people = ["Josh", "Jeff", "Joan"];
const addList = createList(people);
console.log(addList("Breaking Bad", "Josh")); // ["Breaking Bad"]
console.log(addList("Community", "Joan")); // ["Community"]
console.log(addList("Ex Machina", "Jeff")); // ["Ex Machina"]
console.log(addList("Better Call Saul", "Josh")); // ["Breaking Bad", "Better Call Saul"]
