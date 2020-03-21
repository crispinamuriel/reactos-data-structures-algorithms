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
