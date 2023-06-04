/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;

console.log('1.');

// Assign variable, highScore, to integer 29.
let highScore = 29;

// Test variable highScore.
console.log(highScore);

// 2. Make a new empty array called myScrabbleTiles.

console.log('2.');

// Create empty array called myScrabbleTiles.
let myScrabbleTiles = [];

// Test empty array.
console.log(myScrabbleTiles);

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/

console.log('3.');

// Assign 6 tile objects to variable, tiles, as an array.
let tiles = [
{ tile: 'N', score: 1 },
{ tile: 'K', score: 5 },
{ tile: 'Z', score: 10 },
{ tile: 'X', score: 8 },
{ tile: 'D', score: 2 },
{ tile: 'A', score: 1 }
];

// Wrote for loop to push tiles into empty(myScrabbleTiles) array.
for (let i = 0; i < tiles.length; i++) {
  myScrabbleTiles.push(tiles[i]);
}

// Test array if objects have been added.
console.log(myScrabbleTiles);


// 4. Remove the last tile from myScrabbleTiles.

console.log('4.');

// Remove last tile from my ScrabbleTiles using .pop().
tiles.pop();

//Test if last tile, { tile: 'A', score: 1 }, has been removed.
console.log(tiles);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/

console.log('5.');

// Assign { tile: 'F', score : 4 } to variable fTile.
let fTile = { tile: 'F', score : 4 };

// Add fTile to tiles array using .push().
tiles.push(fTile);

// Test if fTile has been added to tiles.
console.log(tiles);


// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.

console.log('6.');

// Create function
function sumTiles(allTiles) {
  let scoreSum = 0;
  // 1. loops through entire array.
  for (let i = 0; i < myScrabbleTiles.length; i++) {
    // 2. Adds score of each tiles.
    scoreSum += tiles[i].score;
  }
  // 3. returns the sum of all tile scores.
  return scoreSum;
};

//Testing function
// console.log(sumTiles(tiles));

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".

console.log('7.');

// Test function
console.log(sumTiles(tiles)); //EXPECTED: 30

// Assign value of function to variable myScore.
let myScore = sumTiles(tiles);

//Testing myScore value
console.log(myScore); // EXPECTED: 30

// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.

console.log('8.');

// Use if statement to check if myScore is greater than highScore.
if (myScore > highScore) {
  // myScore becomes highScore if myScore if greater than highScore.
  highScore = myScore;
};

//Testing if statement
console.log(highScore); // EXPECTED: 30

// DONE!