//what is a hash table? store for key value pairs

// an array full of linked lists?

// a data struture that holds key-value pairs

//other DS:
// Object (type of hash table), Linked list, trees, arrays
/*
JS: objects and maps in javascript

hash tables allow you to get, set, and remove data in O(1) time on average

BUT they take lots of space to function efficiently

taking two peices of data that have relation to eachother
pink #ff69b4    don't want to store pink in an array.

no relation in terms of indecies

the way data is stored inside a hashing function

takes a key and returns a memory index

YOu want to spread it out evenly, dont want collisons, the hash function will distribute it evenly among the buckets.

We will be implementing a very simple hash table / hashing function today.

charCodeAt( 96) == A ascii value

this code takes a key and returning an index
every time you put the key inside the hash function it returns the same value



CS when you use prime numbers the disitribution is greater for primenumbers  prime numbers help keep a hashing function unique / secure

Closed addressing
Linear probing is when there is a collision, then the algo will check if the bucket is full, if it is then it will go to the next empty bucket and set the value there. One peice of data per open bucket.

Linear probing if you hash a key and it gives out a collision, then it moves over one step, and then set it in that bucket.

Open addressing, Separate chaining
We store the pieces of data using a more sophisticated data structure (a nested array or linked list)
This allows us to store multiple key-value pairs at the same index

FIRST hash our key
then based on what the output is, place it inside the array
There could be a nested array at each index.

We will learn how to set, get (given a key), obj[name] we're looking under the hood of getting and setting inside of objects/arrays. Under the hood of the object is actually an array where things are not contguous but they are in different places. Array under the hood, with nested arrays inside of it!

We have to tell the computer how much space to allocate // before we start getting it out.

*/
function hash(key, arrayLen) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96 // alphabetic position of char
    total = (total + value) % arrayLen; // % keeps it within arrayLen
  }
  return total;
}
//
function hash2(key, arrayLen) {
  let total = 0;
  let weirdPrime = 31; // hash functions take advantage of prime #s to reduce collisions
  for (let i = 0; i < Math.min (key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * weirdPrime + value) % arrayLen;
  }
  return total
}

console.log(hash('blue', 10));
console.log(hash2('red', 10));
console.log(hash('yellow', 10));
console.log(hash('green', 10));
console.log(hash('cyan', 10));

const newHash = newHashTableAnswerKey(10);
console.log(newHash);

const newTable = newHashTable(10);

console.log(newTable)

// HashTable { keymap: [<10 empty items>]} initializing the nested arrays

/* When I say those things What i want is that i want for this key/value to end up inside of one of the 10 empty slots*/
