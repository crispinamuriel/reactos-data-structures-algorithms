//myRotate
const rotateArray = (arr, num) => {
  if(num === 0) return arr;
  if(num > 0) {
     while (num) {
       const popped = arr.pop();
       arr.unshift(popped);
       num--;
     }
  } else {
    num = Math.abs(num);
    while (num) {
       const unshifted = arr[0];
       arr.shift();
       arr.push(unshifted);
       num--;
       
     }
  }
   return [...arr];
}
