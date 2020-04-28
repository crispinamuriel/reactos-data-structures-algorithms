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


function quarantineSchedule(day) {
  day = day.toLowerCase();
  switch(day) {
  case 'monday':
    return 'Read';
    break;
  case 'wednesday':
    return 'Puzzles';
    break;
  case 'friday':
    return 'Netflix';
    break;
  case 'sunday':
    return 'Exercise';
    break;
  default: 
    return 'Code';
    
  }
};

// UNCOMMENT THESE TO TEST YOUR CODE
console.log(quarantineSchedule('mOnDaY')) // should log 'Read'
console.log(quarantineSchedule('wednesday')) // should log 'Puzzles'
console.log(quarantineSchedule('FRIDAY')) // should log 'Netflix'
console.log(quarantineSchedule('SuNDay')) // should log 'Exercise'
console.log(quarantineSchedule('tuesDAY')) // should log 'Code'

const trashDuty = (exerciseMins, exerciseChecker) => {
  let resultArr = [];
  for(let key in exerciseMins) {
    if(exerciseChecker(exerciseMins[key])) {
      resultArr.push(key);
    }
  }
  return resultArr;
};

const exerciseChecker = (arr) => {
  let days = 0;
  arr.forEach((day) => {
    if (day >= 30) {
      days++;
    }
  });
  return days > 3;
}


const exerciseMins = {
    'David': [25, 35, 15, 60, 10, 0, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [15, 25, 40, 60, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 30, 45, 90, 90, 15, 0]
};

const exerciseMins2 = {
    'David': [50, 35, 15, 60, 10, 35, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [15, 25, 40, 0, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 30, 45, 90, 90, 15, 0]
};

const exerciseMins3 = {
    'David': [50, 35, 15, 60, 10, 35, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [40, 25, 40, 80, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 10, 45, 0, 90, 15, 0]
};


// UNCOMMENT THIS TO TEST YOUR CODE
console.log(trashDuty(exerciseMins, exerciseChecker)); // should log ['Ryan', 'Harry', 'Mike', 'Chris'];
console.log(trashDuty(exerciseMins2, exerciseChecker)) // should log ['David', 'Ryan', 'Mike', 'Chris'];
console.log(trashDuty(exerciseMins3, exerciseChecker)  // should log ['David', 'Ryan', 'Harry', 'Mike'];
