// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*

Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀

*/

function printForecast(array) {
  let temporaryString = "";

  for (let index = 0; index < array.length; index++) {
    let temperature = array[index];
    let day = index + 1;

    temporaryString += `... ${temperature}ºC in ${day} ${day === 1 ? "day" : "days"}`;
  }

  temporaryString += " ...";
  const weatherForecast=temporaryString
  console.log(weatherForecast);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);



