// //notes regarding changes I made sice the initial homework submission
// //re-did the code for generating random values for each crystal - commented out my original attempt
// //moved the wins/losses/totals variables up to the top - unsure if this affects the flow but did it to bring it up before the functions



// Create Icon object and Variables within to store the values
var icon = {
  mushroom:
  {
    name: "mushroom",
    value: 0
  },

  coin:
  {
    name: "coin",
    value: 0
  },

  star:
  {
    name: "star",
    value: 0
  },

  flower:
  {
    name: "flower",
    value: 0
  }
  
};

// create variables to contain the player scores as well as tracking the number of games they have won and lost
var yourScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;


// generate a random number function
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// make a function to start and retart the game
var startGame = function() {

  // Reset the Current Score, target score and the icon values when a new game gets started 
  yourScore = 0;
  targetScore = getRandom(20, 100);
  icon.mushroom.value = getRandom(1, 10);
  icon.star.value = getRandom(1, 10);
  icon.coin.value = getRandom(1, 10);
  icon.flower.value = getRandom(1, 10);

  // write to HTML the score changes
  $("#your-score").text(yourScore);
  $("#target-score").text(targetScore);
};

//how to handle losses
var checkWin = function() {

  if (yourScore > targetScore) {
    alert("You lose! Bowser Wins!");
    console.log("You Lose");
    losses++;
    $("#loss-count").text(losses);
    startGame();
  }

  //how to handle wins
  else if (yourScore === targetScore) {
    alert("Yay! You Win!");
    console.log("You Win!");
    wins++;
    $("#win-count").text(wins);
    startGame();
  }};

// Respond to clicks on the icons
var addValues = function(clickedIcon) {
  yourScore += clickedIcon.value;
  $("#your-score").text(yourScore);
  checkWin();
};
startGame();

$("#mushroom").click(function() {
  addValues(icon.mushroom);
}
);

$("#star").click(function() {
  addValues(icon.star);
}
);

$("#coin").click(function() {
  addValues(icon.coin);
}
);

$("#flower").click(function() {
  addValues(icon.flower);
}
  )
;
