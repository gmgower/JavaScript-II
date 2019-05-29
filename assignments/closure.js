// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function airportAnnouncement() {
   console.log('Good morning SouthWest travlers, Flight 2342 to Cancum, Mexico is on schedule to depart 8:35 am');
   let delay30 = '30 minuntes';
   let delayTime = '9:05 am';
  //  debugger;

  function delay() {
    console.log(`Fligtht 2342 to Cancum, Mexico has been delayed for ${delay30}. New departure time is ${delayTime}`)
    // debugger;
  }
  
  delay();
}
  airportAnnouncement()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.c
  let counter = 0;
  let myCounter = function() {
    counter = counter + 1
    return counter
  }
  return myCounter
};
const newCounter = counter()
// const counter1 = newCounter();
// const counter2 = newCounter();
// const counter3 = newCounter();
// console.log(counter1, counter2, counter3)
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

