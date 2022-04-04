'use strict';

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section 😉
// GOOD LUCK 😀

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}
// ${this.options.join("\n")}
// (Write option number)`)
//     );

//     const type=prompt("Select display type of results: string or number")||"array"

//     if(answer < 4 && answer > -1 ) this.answers[answer]++;
//     this.displayResults(type)
//   },
//   displayResults(type="array"){

    

//     type === 'string' && console.log(`Poll results are ${[...this.answers]}`);
//     type === 'array' && console.log(this.answers);
//   }
// };

// document.
// querySelector(".poll").
// addEventListener("click", poll.registerNewAnswer.bind(poll)) 

// poll.displayResults()

// const data1 = {
//   answers: [5, 2, 3],
// };

// const data2 = {answers: [1, 5, 3, 9, 6, 1]};

// poll.displayResults.call(data1,"string")
// poll.displayResults.call(data2,"string")

// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

// GOOD LUCK 😀

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.body.addEventListener("click", ()=>{
//     header.style.color = 'blue';
//   })
// })();

// It's because we added event listener with IIFE and since our arrow 
// function was inside that immediately invoked function
// it took header as closure variable so it can reach this variable
// everytime we click body element

// const array = [
//   {
//     name: 'Store1',
//     price: ['10'],
//     somethingElse: null,
//   },
//   {
//     name: 'Store2',
//     price: ['5'],
//     somethingElse: 6,
//   },
//   {
//     name: 'Store2',
//     price: ['15'],
//     somethingElse: 6,
//   },
// ];
// const newArray=[]
//  array.forEach(( currentObject) => {
//     const i = newArray.findIndex(item => item.name === currentObject.name);
//    // if object name not exist in array then push object to array
//    if (i === -1) {
//     newArray.push(currentObject);
//   } else {
//     // if it exist in array then just push the values inside current object price
//     newArray[i].price.push(...currentObject.price);
//   }
// });

// console.log(newArray);

