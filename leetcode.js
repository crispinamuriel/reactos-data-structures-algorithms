//Two Sum
var twoSum = function(nums, target) {
    const hashMap = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let compliment = target - value;
        if(hashMap.has(compliment)) {
            return [hashMap.get(compliment), i]
        }
        hashMap.set(value, i);
    }
};

// TwoSum again
var twoSum = function(nums, target) {
    // get array of numbers and a target number
    // find two numbers that add up to the target
    // return the indecies of the two numbers that add up to the given target inside of an array
    
    
    // example inputs
    // nums = [2, 7, 11, 15] target = 9
    
    // Steps To Solve
    
    // create an object to hold key/value pairs of { key: "Number" value: index }
    // loop through arr
    // each value and index saved in object
    // when we come to a value who's difference (from target) is stored we're done
    // return [indicies] 

    const dict = {};
    let result = [];
    nums.forEach((num, i) => {
        const diff = target - num;
        if (typeof dict[diff.toString()] === 'number') result = [dict[diff], i];
        else dict[num] = i;
    });
    return result;
};

//https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU

//How many nums smaller

var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let copy = [...nums].sort((a,b) => a - b);
    
    const hashMap = new Map();
    
    for (let i = 0; i < copy.length; i++) {
       if(!hashMap.has(copy[i])) hashMap.set(copy[i], i); 
    }

    
    nums.forEach((el) => {
        result.push(hashMap.get(el))
    });
    return result;
};

//split-a-string-in-balanced-string
var balancedStringSplit = function(s) {
    s = s.split('');
    let count = 0;
    let balance = 0;
    
    while(s.length) {
        
         for(let i = 0; i < s.length; i++) {
             let currEl = s[i];
             if(currEl === 'R') balance++;
             if(currEl === 'L') balance--;

             if(balance === 0) {
                 count++;
                 s.splice(0, i + 1);
                 i = -1;
             }
         }
    }
  return count;  
};
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/
var numberOfSteps  = function(num) {
    let steps = 0;
    while (num > 0) {
        if(num % 2 === 0) {
            steps++;
            num /= 2;
        } else {
            steps++;
            num--;
        }
    }
    return steps;
};
//https://leetcode.com/problems/defanging-an-ip-address/submissions/
var defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};
var defangIPaddr = function(address) {
    let defanged = '';
    for(let i = 0; i < address.length; i++) {
        const curr = address[i];
        if(curr === '.') defanged += '[.]';
        else defanged += curr;
    }
    return defanged;
};

//jems and stones
var numJewelsInStones = function(J, S) {
    console.log(J,S);
    let total = 0;
    const map = {};
    for(let i = 0; i < J.length; i++) {
            map[J[i]] = 1;
    }
    S.split('').forEach((val) => {
        if(map[val]) total++;
    });
    return total;
};

//Two pointer solution
    console.log(nums)
     let small = 0;
     let large = nums.length - 1;

    
     while(small <= large) {
         let sum = nums[small] + nums[large];
         if(sum === target) {
             return [small, large];
         } else if(sum < target) {
             small++;
         } else if (sum > target) {
             large--;
         }
//Apple Two pointer
        const arr = [1,2,3,4,5,6,7,8];

const evensThenOdds = (arr) => {
  let head = 0;
  let tail = arr.length - 1;

  while(head < tail) {
    console.log(arr, "head:",head, "tail:", tail)
    if(arr[head] % 2 === 0) {
      head++;
    }
    if(arr[tail] % 2 === 1) {
      tail--;
    }
    if(head > tail) return arr;
    if(arr[head] % 2 === 1 && arr[tail] % 2 === 0) {
      console.log("arr[head]:", arr[head], "arr[tail]:", arr[tail]);
      const swapped = arr[tail];
      arr[tail] = arr[head];
      arr[head] = swapped;
      if(head >= tail) return arr;
      head++;
      tail--;
    }
  }
  return arr;
}

console.log(evensThenOdds(arr));
         
         
//Apple Flatten Nested List Iterater
         
var nestedIterator = function(nestedList) {
    let result = [];
    
    for(let i = 0; i < nestedList.length; i++) {
        if(typeof nestedList[i] === 'number') {
            result.push(nestedList[i]);
        } 
        else {
            result = result.concat(nestedIterator(nestedList[i]));
        }
    }
    return result;
};

console.log(nestedIterator([1,[[2]],3,[4],5]));
         
         
         
// Invert Binary tree my solution vs real solution
         
         //acctual solution
         var invertTree = function(root) {
    if (!root) {
        return root
    }
    
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;
    
    return root
};
         //my first solution
         
var invertTree = function(root, origin) {
    if(!origin) origin = root;
    if(!root.left) return origin;

    else {
        console.log(root);
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        console.log('after flip',root)
        
    }
    return invertTree(root.left, origin) && invertTree(root.right, origin);
};
         
// make a function that takes in a pos integer and returns a string but doesn't use toString

// myToString(12345) => "12345"
// myToString(0) => "0"

// let integer = 12345;
// console.log(integer % 10);
// console.log(Math.floor(integer/10));
// let resultString = '';

// while (integer) {
//   let tempChar = integer % 10;
//   integer = Math.floor(integer/10);
//   // let char = "" + integer % 10;
//   resultString += integer % 10;
//   // resultString = char + resultString;
//   console.log(integer)
// }

// console.log(resultString);

while (integer) {
  let sliced = integer % 10; // 5, still a number
  integer = Math.floor(integer/10); // 1234
  let char = "" + sliced; // coercing 5 into str, "5"
  resultString = char + resultString; // "5" + ""; // "4" + "5" // "3" + "45"
}

console.log(resultString);


const myToString = (integer, str = '') => {
  if(integer < 1) return str;
  
  let tempChar = integer % 10;
  str = tempChar + str;
  
  return myToString(Math.floor(integer/10), str);
  
}

console.log(myToString(12345));
