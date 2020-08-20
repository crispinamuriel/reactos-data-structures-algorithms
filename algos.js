/*Using your favorite language, find all numbers that occur more than once in an array of integers. What is a second way you might do the same problem? Which approach would you prefer and why? */
//METHOD 1: 

// function multiple(arr) {
//   const resultArr = []
//   const memo = {};
//   for(let i = 0; i < arr.length; i++) {
//     if(memo[arr[i]]) {
//       memo[arr[i]]++;
//     } else {
//       memo[arr[i]] = 1;
//     }
//   }
//   for(let key in memo){
//     if(memo[key] > 1){
//       resultArr.push(Number(key));
//     }
//   }
//   return resultArr;
// }
//Method 2

// function doubleForLoop(arr) {
//   let memo = {};
//   for(let i = 0; i < arr.length; i++ ) {
//     for(let j = 0; j < arr.length; j++) {
//       if(arr[i] === arr[j] && i !== j && !memo[arr[i]]) memo[arr[i]] = true;
//     }
//   }
//   return Object.keys(memo).map(key => Number(key));
  
// }


// doubleForLoop(arr);

/*Hackerrank interview prep: Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider */

// Complete the repeatedString function below.
//SOLUTION:
// function repeatedString(s, n) {
//     if(n < s.length) {
//         let count = 0;
//         for(let i = 0; i < n; i++){
//          if(s[i] === 'a')count++;
//         }
//         return count;
//     }
    
//     let count = 0;
    
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === 'a') count++;
//     }

//     let repeat = Math.floor(n/s.length);

//     let remainder = n % repeat;
//     count *= repeat;
//     console.log(remainder);

//     for(let i=0; i<remainder; i++){
//         if(s[i]=== 'a')count++
//     }
//     return count;

// }


//-------------------------------------------------------------------
/*Function Description

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

arr: an array of integers
https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

MY SOLUTION: 
function hourglassSum(arr) {
    let result = [];

    for(let i = 0; i < 4; i++){
        
        for(let j =0; j < 4; j++) {
            let sum = 0;
            sum += arr[i][j];
            sum += arr[i][j+1];
            sum += arr[i][j+2];
            sum += arr[i+1][j+1];
            sum += arr[i+2][j];
            sum += arr[i+2][j+1];
            sum += arr[i+2][j+2];
            result.push(sum);    
        }
        
    }

    return Math.max(...result);

}
A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Function Description

Complete the function rotLeft in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

An array of integers .
An integer , the number of rotations.
How to use shift() / unshift()
SHIFT off an element in the front of the array
unshift elements ONTO the front of the array

https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function rotLeft(a, d) {
 let count = d;

 while (count) {
     let take = a.shift();
     a.push(take);
     count--;
 }
 return a;
}

//final solution for largest profit
const arr = [4, 10, 3, 8, 5, 2, 9];

function highestProfit (arr) {
  let lowest = arr[0]; //4
  let largest = arr[1]; //10
  for(let i = 1; i < arr.length; i++) {
    let curr = arr[i]; //3
    if(curr < lowest && i !== arr.length -1) {
      lowest = curr;  //3
      largest = curr;
      console.log( 'lowest', lowest)
    }
    if(curr > largest) {
      largest = curr;
      console.log('highest', largest)
    }  
  }
  return largest - lowest;
}
highestProfit(arr);
*/

// max profit https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
var maxProfit = function(prices) {
    if(!prices.length || prices.length === 1) return 0;
    let lowest = prices[0];
    let highest = 0;
    let maxProf = 0;
    
    for(let i = 1; i < prices.length; i++) {
        
        let curr = prices[i];
        if (curr < lowest && i !== prices.length -1) {
            lowest = curr;
            highest = curr;
        }
        if(curr > highest) {
            highest = curr;
        }
        
        maxProf = Math.max(maxProf, highest-lowest);
    }
    if(maxProf < 0) return 0;
    return maxProf;
};

//loop through
//find a low
//keep looping
//find a higher and subtract to get profit
//high - low = profit
//at the end of the loop, compare highest - lowest with maxProf inside of Math.max
//maxProf = Math.max(maxProf, highest-lowest);
//stores new maxProf and keeps it for next loop to compare

//apple interview:
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
    if(head > tail) return arr
    if(arr[head] % 2 === 1 && arr[tail] % 2 === 0) {
      console.log("arr[head]:", arr[head], "arr[tail]:", arr[tail])
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
// while head pointer is still lower than the tail pointer
//check if the element at the head is even, if it is move the pointer over =>
//check if the element at the tail pointer is odd, if it is, move the pointer over <=
/
//myFlatten
const arr = [1,2,[[3,4]], 5, [[6]], 7, 8, [9]];

const myFlatten = (arr) => {
  let resultArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'number') {
      resultArr.push(arr[i]);
    } else {
      resultArr = resultArr.concat(myFlatten(arr[i]));
    }
  }
  return resultArr;
}

console.log(myFlatten(arr));

//two element add to target (TwoSum)

var twoSum = function(nums, target) {
    let hashMap = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if(hashMap.has(compliment)) {
            return [hashMap.get(compliment), i];
        }
        if(!hashMap.has(nums[i])) {
            hashMap.set(nums[i], i);
        } 
    }
};

// all combinations of a string https://www.w3resource.com/javascript-exercises/javascript-function-exercise-3.php
function PowerSet(inputStr) {
    inputStr = inputStr.toLowerCase();
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let array1 = [];
    for (let x = 0, y=1; x < inputStr.length; x++,y++) {
        array1[x]=inputStr.substring(x, y);
    }
    let result = [];
    let temp= "";
    let slent = Math.pow(2, array1.length);

    for (let i = 0; i < slent ; i++){
    
        temp= "";
        for (let j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){ 
                temp += array1[j];
            }
        }

         result.push(temp);

    }
  return result.sort((a, b) => a.localeCompare(b));;

}
