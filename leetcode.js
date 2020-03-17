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
