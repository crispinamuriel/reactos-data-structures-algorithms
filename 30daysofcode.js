//day 0 Hello World
function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
}

//day 1 Data Types
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    let integer = Number(readLine());
    let double = Number(readLine());
    let string = readLine();
    // Read and save an integer, double, and String to your variables.

    // Print the sum of both integer variables on a new line.
    console.log(integer + i);
    // Print the sum of the double variables on a new line.
    console.log((double + d).toFixed(1));
    // Concatenate and print the String variables on a new line
    console.log(s +string);
    // The 's' variable above should be printed first.
}

//day 2 Operators
function solve(meal_cost, tip_percent, tax_percent) {
    let tip = meal_cost * (tip_percent/100);
    let tax = meal_cost * (tax_percent/100);
    let total = meal_cost + tip + tax;

    console.log(Math.round(total));
}
//day 3 Conditionals
function main() {
    const N = parseInt(readLine(), 10);
    if(N % 2 === 1) console.log('Weird');
    if(N % 2 === 0 && N > 2 && N < 5) console.log('Not Weird');
    if(N % 2 === 0 && N > 6 && N <= 20) console.log('Weird');
    if(N % 2 === 0 && N > 20) console.log('Not Weird');
}
//day 4 Class vs Instance

function Person(initialAge){

  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if(initialAge < 0) {
        console.log('Age is not valid, setting age to 0.');
        initialAge = 0;
    }
    if(initialAge >= 0 && initialAge < 13) console.log('You are young.');
    if(initialAge >= 13 && initialAge < 18) console.log('You are a teenager.');
    if(initialAge>= 18) console.log('You are old.')
  };
   this.yearPasses=function(){
        initialAge++;
   };
}

//day 5 Loops
function main() {
    const n = parseInt(readLine(), 10);
    for(let i = 1; i <=10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
//day 6 Review Loops/conditionals/operators/datatypes
function processData(input) {
    inputArr = input.split('\n');
    let result = '';
    for(let j = 1; j < inputArr.length; j++){
        let word = inputArr[j];
        let str = '';
        let str2 = '';
        for (let i = 0; i < word.length; i++) {
            if(i % 2 === 0) str += word[i];
            if(i % 2 === 1) str2 += word[i];
        }
        result += str + ' ' + str2 + '\n';
    };
    console.log(result);
}
//day 7 Arrays
function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    const reversedArr = arr.reverse();
    let str = '';

    reversedArr.forEach((el)=> {
        str += el + ' ';
    });

    console.log(str.slice(0,-1));
}

//day 8 Dictionaries
function processData(input) {
    const inputArr = input.split('\n');
    const phoneBookArr = [];
    const phoneBook = {};
    const keys = [];
    const queries = [];

    let n = inputArr.shift();
    // console.log(n);
    // console.log(inputArr);
    for(let i = 0; i < n; i++) {
        phoneBookArr.push(inputArr[i]);
    }
    for(let k = n; k < phoneBookArr.length; k++) {
        keys.push(phoneBookArr[k]);
    }
    phoneBookArr.join('');
    // console.log(phoneBookArr);
    phoneBookArr.forEach((entry, j) => {
        let key = '';
        let index = '';
        for(let i = 0; i < entry.length; i++) {
            if(entry[i] === ' ') {
                key = entry.slice(0, i);
                index = i;
            }
        }
        // console.log(key)
        phoneBook[key] = key+'='+entry.slice(index+1);
    });
    // console.log(phoneBook)
    for(let i = n; i < inputArr.length; i++) {
        queries.push(inputArr[i]);
    }

    queries.forEach((query) => {
        if(phoneBook[query]){
            console.log(phoneBook[query]);
        }else{
            console.log('Not found')
        }
    });



} 
// Day 9 Recursion
function factorial(n) {
    if(n === 1 || n === 0) return 1;

    return n * factorial(n-1);
}
