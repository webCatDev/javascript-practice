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

function whoWon(dolphinsScore = [], koalasScores = []) {
  if (!Array.isArray(dolphinsScore) || !Array.isArray(koalasScores)) {
    return console.log("Please send scores as array (dolphins first)");
  }

  const averageScoreDolphins =
    dolphinsScore.reduce((acc, score) => acc + score) / dolphinsScore.length;

  const averageScoreKoalas =
    koalasScores.reduce((acc, score) => acc + score) / koalasScores.length;

  if (
    dolphinsScore.length > 3 ||
    dolphinsScore.length !== koalasScores.length
  ) {
    return console.log("Illegal scores, please re-write scores");
  }

  if (dolphinsScore.length < 3 && averageScoreDolphins > averageScoreKoalas) {
    console.log("Match didn't finished yet");
    return console.log("Dolphins are ahead");
  }

  if (dolphinsScore.length < 3 && averageScoreDolphins < averageScoreKoalas) {
    console.log("Match didn't finished yet");
    return console.log("Koalas are ahead");
  }

  if (dolphinsScore.length < 3 && averageScoreDolphins === averageScoreKoalas) {
    console.log("Match didn't finished yet");
    return console.log("It is draw now");
  }

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
whoWon([96, 108, 89], [88, 91, 110]);

console.log("Case 2");
whoWon([150, 120, 100], [90, 80, 75]);

console.log("Case 3");
whoWon([97, 112, 101], [109, 95, 123]);

console.log("Case 4");
whoWon([97, 112, 101], [109, 95, 106]);

console.log("Case 5");
whoWon(0, 0);

console.log("Case 6");
whoWon([90, 110], [111, 120]);
