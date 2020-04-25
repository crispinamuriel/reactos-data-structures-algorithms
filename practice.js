const arr = [-8, 0, 2, 5];

const indexEqualsValueSearch = () => {
  for (let i = 0; i < arr.length - 1; i++) {
  let current = arr[i];
    if (current === i) {
      return i;
    }
  }
  return -1;
}

const answer = indexEqualsValueSearch(arr);
console.log(answer);

//redoing twoSum https://leetcode.com/problems/two-sum/submissions/
var twoSum = function(nums, target) {
    let hashMap = new Map;
    
    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if(hashMap.has(compliment)) {
            return [hashMap.get(compliment), i];
        } else {
            hashMap.set(nums[i], i);
        }
    }
};
