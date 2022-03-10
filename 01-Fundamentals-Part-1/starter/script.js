//You can run this file with this comman if you have node.js
// But you should toggle comments with shortcut first
// command to execute=> node 01-Fundamentals-Part-1/starter/script.js

// Little Showcase of What JavaScript Can Do

/* Showcase 

let js="amazing"
if(js==="amazing") alert("js is fun")
js="boring"
if(js==="amazing") alert("js is fun")

*/

// Assignin Values and Naming Conventions 

/* Assignment Operator

let firstName="hamza"
let PI=3.14
console.log(firstname)
console.log(23)
console.log(4 + 4 - 2);

*/

// Data Types

/* Data Types Samples

let isJavaScriptFun= true
const myFunction=()=>{return true}
console.log(isJavaScriptFun)
console.log(typeof true)
console.log(typeof "kediler" )
console.log(typeof 2)
console.log(typeof myFunction)
console.log(typeof {})
console.log(typeof [])

// This is a bug, type should be null
console.log(typeof null) 

*/

// Difference of let, const and var

/* Explanation about variables

let is mutable(can be reassignned) and block scoped. 
It can be hoisted but 
will give an error cuz of no initialization.

const is immutable and block scoped. 
It can be hoisted but 
will give an error cuz of no initialization.

var is mutable and function scoped. 
May cause memory leaks
It can be hoisted

*/

/*  Let-Const Samples

let age=30;
age=32;

const BIRTHYEAR=1996;
// BIRTHYEAR=1998; will give an type error

// const job; You need to initialize it

// Use const everytime if possible

*/

// Operators

/* Operator Samples

const getAge=(birthYear)=>{
    const currentYear=new Date().getFullYear();
    return currentYear-birthYear;
};


const ageOfHamza=getAge(1996);
console.log("Hamza is "+ageOfHamza+" years old.")
console.log(2+2, 7-8, 96%8, 45/5, 3**3 )
console.log(true||true, true||false, false||true, false||false, null||true, null||false, undefined||true)
console.log(true&&true, true&&false, false&&true, false&&false, false&&undefined, false&&null)

*/

// Strings and Template Literals

/* Samples

const firstName="Hamza"
const job="student"
const birthYear=1996
const year=2201

const hamza="I'm " + firstName + ", a " + (year-birthYear) + " years old " + job +"!"

console.log(hamza)

const betterHamza=`I'm ${firstName}, a ${year-birthYear} years old ${job}!`

console.log(betterHamza)

*/

// Decision Making -If .. else

/* Samples


const age=15;
const isOldEnough=age>=18

if(isOldEnough) console.log("You can get driver license😁")
else {
    const yearsLeft=18-age
    console.log("You are not old enough to get a license. You need to wait "+ yearsLeft + " more years😉")
}

*/

// Truthy and Falsy Values 

// Falsy values: NaN, undefined, "", null , 0
/* Samples

console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean("kedi"))

*/

// Equality Operators

/*

console.log(18===18, "Number 18 equals to number 18")
console.log(18==="18", "Number 18 not equals to string 18")
console.log(18 == "18", "Number 18 equals to string 18 cuz == sucks");

*/


// Logical Operators
// && and
// || or
// > greater than
// < smaller than
// >= greater or equal
// <=smaller or equal
// ! not (invert boolean value)

/* Samples

let hasDriverLicense=true;
let hasGoodVision=true;

console.log(hasDriverLicense&&hasGoodVision); // true
console.log(hasDriverLicense||hasGoodVision); // true

hasDriverLicense=false
hasGoodVision=true

console.log(hasDriverLicense&&hasGoodVision); // false
console.log(hasDriverLicense||hasGoodVision); // true

hasDriverLicense=true
hasGoodVision=false

console.log(hasDriverLicense&&hasGoodVision); // false
console.log(hasDriverLicense||hasGoodVision); // true

hasDriverLicense=false
hasGoodVision=false

console.log(hasDriverLicense&&hasGoodVision); // false
console.log(hasDriverLicense||hasGoodVision); // false

*/

