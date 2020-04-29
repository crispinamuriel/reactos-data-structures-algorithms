/*// Complete the minimumNumber function below.
function minimumNumber(n, pw) {
    if ( n < 1) return 6;
    if (n < 2) return 5;
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789"
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"

    const numArr = numbers.split('');
    const lowerArr = lower_case.split('');
    const upperArr = upper_case.split('');
    const specialArr = special_characters.split('');

    let count = 0;

    const hasChars = (pw) => {
        let nums = 0;
        let lower = 0;
        let upper = 0;
        let special = 0;

        for (let i = 0; i < pw.length; i++){
          if (numArr.includes(pw[i])) nums++;
          if (lowerArr.includes(pw[i])) lower++;
          if (lowerArr.includes(pw[i])) lower++;
          if (upperArr.includes(pw[i])) upper++;
          if (specialArr.includes(pw[i])) special++;
        }
        nums > 0 ? null : count++;
        lower > 0 ? null : count++;
        upper > 0 ? null : count++;
        special > 0 ? null : count++;
    }

    hasChars(pw);

    if(count > (6 - pw.length)) return count; // if the count (chars needed) is bigger than  how. many characters needed total, then return that number
    if(pw.length < 6) return 6 - pw.length; //else if the string's length is less than how many characters needed total, return the difference of the numbers needed minus the string length given

}
 */

/* Staircase

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let string = '';
        for(let j = 0; j < n; j++) {
            if(i < j) {
                string += ' ';
            } else {
                string += '#';
            }
        }
        let stringArr = string.split('').reverse();
        console.log(stringArr.join(''));
    }

}
*/

//Birthday Candles
function birthdayCakeCandles(ar) {
    let set = new Set(ar);
    let newArr  = Array.from(set);
    let  target = Math.max(...newArr);
    let candles = 0;

    for(let i = 0; i < ar.length; i++) {
        if(ar[i] === target) candles++;
    }
    return candles;
}
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
//sock mechant
function sockMerchant(n, ar) {
    const memo = {};
    let count = 0;
    ar.forEach((sock) => {
        if(memo[sock]) {
            count++;
            memo[sock] = 0;
        } 
        else memo[sock] = 1;
    });
    return count;
}
