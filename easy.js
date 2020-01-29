https://learn.fullstackacademy.com/workshop/5ac57192f7ff470004a63148/content/5ac572977ec3340004bddd57/text

function onlyOdds(num) {
  let sum = 0;
  if(num < 0) return sum;
  for(let i = 0; i <= num; i++){
    if(i%2 ===1) sum+= i
  }
  return sum;
}

function crazyCaps(str) {
  let result = '';
  for(let i = 0; i < str.length; i++){
    if(i % 2 === 0){
      result += str[i];
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

function bacteriaTime(cur, tar) {
  if(tar < cur) return 'targetNum must be larger than currentNum';
  let minutes = 0;
  while (cur < tar) {
    minutes += 20;
    cur *= 2;
  }
  return minutes;
}

function exponentiate(a, b) {
  if(b === 0) return 1;
  return Math.pow(a, b);
}

function mySlice(str, start, end) {
  let result = '';
  if(!end && !start) return str
  if(end) {
    for(let i= start; i < end;i++) {
      result += str[i];
    }
  } else {
    for(let i = start; i < str.length;i++) {
      result += str[i];
    }
  }
  
  return result;
}
function myIndexOf(str, tar, start = 0) {
  let found = 1;
  for(let i = start; i < str.length; i++) {
    if(str[i] === tar[0]){
      found = i
      for(let j = 0; j < tar.length; j++) {
        if(str[i+j] !== tar[j]) {
          found = -1
        }
      }
      return found
    }
  }
}
