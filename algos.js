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


*/
