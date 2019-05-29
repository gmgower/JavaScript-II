// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // arr = items array
  // cb =  function
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
  }
getLength(items, (itemsLength) =>  console.log(itemsLength)
)


function last(arr, cb) {
  // arr = items array
  // cb = function
  // last passes the last item of the array into the callback.
  return cb(arr.length -1)
}
last(items, (lastItem) =>  console.log(lastItem)
)


function sumNums(x, y, cb) {
  // x = 1
  // y = 2
  // cb =  whole add function
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y)
}
function add(num1, num2) {
  return num1 + num2;
}
let addNums = sumNums(1, 2, add)
console.log(addNums)


function multiplyNums(x, y, cb) {
    // x = 3
    // y = 4
    // cb =  whole multiply function
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y)
}
function multiply(num3, num4) {
  return num3 * num4;
}
let multiplyNum = multiplyNums(3, 4, multiply);
console.log(multiplyNum);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true)
    }     
  }
      return cb(false);
}
  // function containItem(itemContain) {
  //   console.log(itemContain)
  // }
  // contains('pen', items, containItem )

contains("Gum", items, containsItem => console.log(containsItem));
contains("Pen", items, containsItem => console.log(containsItem));



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  items.filter(function (item, index, items) {
    return items.index(item) >= index;
  })
}
