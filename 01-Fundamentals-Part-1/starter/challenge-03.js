/*

Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀

*/

function whoWon(d1,d2,d3,k1,k2,k3) {
  if (
  typeof d1 !== "number" &&
  typeof d2 !== "number" &&
  typeof d3 !== "number" &&
  typeof k1 !== "number" &&
  typeof k2 !== "number" &&
  typeof k3 !== "number"&&
  d1===undefined|| 
  d2===undefined|| 
  d3===undefined|| 
  k1===undefined|| 
  k2===undefined|| 
  k3===undefined 
  ) {
    return console.log("Please send scores as dolphin score(1,2,3) and koalas score(1,2,3), 6 numbers in total");
  }

  const averageScoreDolphins = (d1+d2+d3) / 3;

  const averageScoreKoalas = (k1+k2+k3) / 3;


  if (
    averageScoreDolphins > averageScoreKoalas &&
    averageScoreDolphins >= 100
  ) {
    return console.log(
      `Winner is dolphins with ${parseInt(averageScoreDolphins)} points`
    );
  }

  if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
    return console.log(
      `Winner is koalas with ${parseInt(averageScoreKoalas)} points`
    );
  }

  if (
    averageScoreDolphins === averageScoreKoalas &&
    averageScoreDolphins >= 100 &&
    averageScoreKoalas >= 100
  ) {
    return console.log("It is a draw");
  }
  return console.log("No winner this time");
}

console.log("Case 1");
whoWon(96, 108, 89, 88, 91, 110);

console.log("Case 2");
whoWon(150, 120, 100, 90, 80, 75);

console.log("Case 3");
whoWon(97, 112, 101, 109, 95, 123);

console.log("Case 4");
whoWon(97, 112, 101, 109, 95, 106);

console.log("Case 5");
whoWon("hello", "dolphins");

console.log("Case 6")
whoWon(1,1,1)
