// console.log('hi');
//stacks and queues

//touching on linked list  Erik / Talia
//name Crispina Muriel, JavaScript, 1st grade teacher



//stacks are last in First out data structure, put it in, last thing you put in is the last thing you have  access to to take out.
//stack of books, pancakes, have access to the thing at the top  push() pop();

// function stack () {

//   function inner() {
//     console.log('inner');
//   }
//   inner()
//   console.log('outer');
// };




// stack();
/*
O(1)
contiguous array, if you know the address in memory then it's o(1), not keeping track of multiple pointers, you're just
constant time operation to push,
O(n) shifting off of an array, re-index the rest of the array, shifting every single element over 1 so O(n) which is the number of inputs in the array
arrays in JS are backed by C++ arrays, when they get big enough C++ reallocates the array, when you get to the end you have to resize the array.
If I am working with a fixed length array, and i get to the end of the meoruy, I have to copy the whole array and make it bigger,
reallocating the array is an O(n) Operation.

This is why you would use a LInked List for stacks and queues, worst case on a push is o(n)
Creating a stack with a Linked List

A linked list is ()

Singly Linked List:
Imagine a linked list as Nodes of (head: 1 : )

deeply nested object with properties
{value: 1 next: {node}}

different data points without being next to eachother in memory
next pointers    1 ->  2 -> 3->
A node is a floating peice of data an object #20, the way that I'm connecting these in a list firstNode.next = secondNode   secondNode.next

firstNode.next.next == third node!

1.next.next === 3



deeply nested object

 { value: 20  next: { value 10: next { value: 12 next: null}}}

A stack is just a list, an array or a link list, a list of things that are either ocnnected by indexing (array) or LL pointers
You can push from a stack or pop from it. You need push() and pop()
BST or Hash Table, if all you need to do for you rfunction is pushing / poping you can use these data structures, optimizeing code is the point of using data structures.

What data structure would youse for a cll stack ???? ARRAY OR LINKED LIST

Why a specific data structure is used, whenever we're writing code we want to have the most optimzed way to hold your code
For a stack if you want to simulate a browser,

cd .. terminal

write a function that would tell you what this would output

../home/user/../talia

output the string where we are in the file system. Brute force would be searching the whole string, O(n)
Use a stack so when you get to the first slash you push it on to the stack.  If you see a .. pop off the stack,

function filePath (str) {
  str.split('/');

}


singly linked list to do a stack because it's efficient, if you're only, pushing to the head of the list, if you want to push new element efficient?
If you're pushing  to the end its FILO First In Last out.

Unshift and shift from the front of the stack

Write out a push method to a stack, no way of accessing it, we always remove what the most recent thing is. Whatever we pushed to the top of the stack last is the only element or node that we have access to.

LL vs array  (is about the size)
LL you can make it as long as you want and will always be  constant time
Array is not constant time, you may un out of space when you resize your array O(n);

The only thing you're sacrificing that is
Tail Node, how can you get to the last one? get to the tail, The list

They have a head node and a tail node. (If you save the tailnode, then you can push and pop to the tail. pop would be slow, so would still have to traverse all the way to the end) You would have to traverse all the way to the end, and then saved the

Push to the list,
// */

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//   }

//   push(val) {
//     const pushedNode = new Node(val);
//     pushedNode.next = this.top;
//     this.top = pushedNode;
//     return this;
//   }

//   pop() {
//     if (this.top == null) return null;
//      else {
//        let removedNode = this.top;
//        if (this.top.next) {
//          this.top = this.top.next
//        }
//        else {
//          this.top = null;
//        }
//      }
//     t
//   }
// }

// const stack2 = new SinglyLinkedList();

// stack2.push(20);
// stack2.push(30);
// stack2.pop();
// console.log(stack2);

/*
SLL.push() adds something, .pop()
methods which are functions inside of a class
push()
array.push() pushes an element to the end of the array
push an element to the back of the array.

the reason we want to call it a push is because it is a stack
SSL first we will crete a new node, imagine the lsit does not exist, your SSL could be completely empty, or it could have a node  in it
Doesn't matter  if there is anything  in your LL or there are nodes, the first  step  is to  create a new node, now we have a new node, let's say the value is 20, this node is floating in air, and we need to add a pointer to it

pushNode.next = this.top
we reassign the head, to reassign it, we have to say
this.top = pushNode;

Assigning two pointers in a singly linked list.
1) make sure that it has a next,
2) change the top
Created a node,
made it so the node.next, was the node that already existed at the head
setting the top as the one we pushed in because we want it to be the first one

This.next is x
this.top is

if there was  nothing in the LL already and we wanted to rea assign, pushNode.next = null
This.top.next  = null if there was one thing in the list.

This is the entire list Which is a huge object with

Head node, returning the actual linked list, so you can .chain it. if you return if you returned the head What would you do in java?

If you run this it shouuld work

singly linked list: push, same code as push,  unshift ()
let's write a shift()

enqueue and dequeue
push() / shift()
unshift() / pop()

dequeue in constant time with a singly linked list

 push/shift
 unshift / pop
Queues unshift to the front, pop off the back
pop it to the back shift() it to the front
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

}
