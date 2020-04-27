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