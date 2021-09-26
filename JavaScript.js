// 2. JavaScript
// Implement JavaScript flatten & unflatten functions, concatenating keys from the root keys
// down to the innermost/deepest keys, delimited by a "."
// Assume:
// Keys will not contain "." characters
// Keys will always be alphanumerical for objects, numerical for arrays.
// Unflattened

const unflattened = 
{
books: [
{
name: "Harry Potter and the Philosopher's Stone",
no: 1,
},
{
name: "Harry Potter and the Chamber of Secrets",
no: 2,
},
],
status: 200,
matrix: [[1, 2, 3], [4, 5, 6],[7, 8, 9]]
}
const flattened =
{
"books.0.name": "Harry Potter and the Philosopher's Stone",
"books.0.no": 1,
"books.1.name": "Harry Potter and the Chamber of Secrets",
"books.1.no": 2,
"status": 200,
"matrix.0.0": 1,
"matrix.0.1": 2,
"matrix.0.2": 3,
"matrix.1.0": 4,
"matrix.1.1": 5,
"matrix.1.2": 6,
"matrix.2.0": 7,
"matrix.2.1": 8,
"matrix.2.2": 9
}

const flatten = (obj) => {

  // build flattened object
  const flattenedObj = {};
  let count = 0;
  let idx = 0;

  // loop through original obj entries
  for (let key in obj) {

    // test if value is an array
    if (Array.isArray(obj[key])) {
      // grab the array
      const innerArray = obj[key];
    
      // loop through the array
      for (let innerKey in innerArray) {

        // grab the innerValue
        const innerValue = innerArray[innerKey];
        // if the value at each index is an array
        if (Array.isArray(innerValue)) {
          // format appropriately as a matrix
          innerValue.forEach((number, i) => {
            flattenedObj['matrix.' +count + '.' + i] = number;
          });
          count++;
        } else {
          // else the value is an object, format appropriately as a book
          flattenedObj['books.'+ idx + '.name'] = innerValue.name;
          flattenedObj['books.'+ idx + '.no'] = innerValue.no;
          idx++;
        }        
      }

    } else {
      // save the status
      flattenedObj['status'] = obj[key];
    }
  }
  return flattenedObj;
}

console.log(flatten(unflattened));

const flattenedReturnedObject = flatten(unflattened);

const unflatten = (obj2) => {

  // build unflattened object
  const unflattenedObj = {};

  const mySlice = (key) => {
    let returnedKeyBeginning = '';

    for(let i = 0; i < key.length; i++) {
      if(key[i] !== '.') returnedKeyBeginning += key[i];
      else break;
    }
    return returnedKeyBeginning;
  }

  // create book to add to books array when full
  let book = {};
  
  // create inner array to add to matrix when full
  let mtx = [];

  // loop through obj2
  for (let key in obj2) {

    if (key === 'status') {
      unflattenedObj['status'] = obj2[key];
    }

    // slice beginning of key to see what it begins with
    const beginning = mySlice(key);

    // if key begins with books format as a book with name and no
    if (beginning === 'books'){

      if (!unflattenedObj['books']){
        // create the books array
        unflattenedObj['books'] = [];
      }

      // create entries in the book based off ending of key
      if(key.slice(-1) === 'e') {
        book['name'] = obj2[key];
      } else if (key.slice(-1) === 'o') {
        book['no'] = obj2[key];
      }

    // else the key begins with 'matrix', format as a matrix
    } else if (beginning === 'matrix'){
      
      if (!unflattenedObj['matrix']){
        // create the books array
        unflattenedObj['matrix'] = [];
      }

      // check if mtx array has room for another number
      if(mtx.length < 3){

       // add another number to the mtx array 
       mtx.push(obj2[key]);

       // check if the last addition made the array full
       if(mtx.length === 3) {

         // push full array into the matrix array of our nested object
         unflattenedObj.matrix.push(mtx);

         // reset mtx array
         mtx = [];
       } 
      }
    }

    if(book.no) {
      // we have a full book, push book to unflattenedObj
      unflattenedObj['books'].push(book);

      // reset book
      book = {};
    }

  }
  return  unflattenedObj;
}

console.log(unflatten(flattenedReturnedObject));
