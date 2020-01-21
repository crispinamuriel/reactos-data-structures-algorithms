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
