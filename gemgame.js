var targetScore = 0;
var currentScore = 0;
var numbWins = 0;
var numbLoses = 0;
var gem1 = {
   name: "gem1",
   value: 0
}
var gem2 = {
   name: "gem2",
   value: 0
}
var gem3 = {
   name: "gem3",
   value: 0
}
var gem4 = {
   name: "gem4",
   value: 0
}
function initialize() {
 targetScore = 0;
 currentScore = 0;
 gem1.value = 0;
 gem2.value = 0;
 gem3.value = 0;
 gem4.value = 0;
 setUpGem1();
 setUpGem2();
 setUpGem3();
 setUpGem4();
 resetYourScore();
 generateTargetScore();
}
function setUpGem1() {
// Each crystal should have a random hidden value between 1 - 12.
 var tempnum = Math.round(Math.random()*10);
 gem1.value = tempnum  % 13;
 console.log("gem1 has a value of " + gem1.value);
}
function setUpGem2() {
 var tempnum = Math.round(Math.random()*10);
 gem2.value = tempnum  % 13;
 console.log("gem2 has a value of " + gem2.value);
}
function setUpGem3() {
 var tempnum = Math.round(Math.random()*10);
 gem3.value = tempnum  % 13;
 console.log("gem3 has a value of " + gem3.value);
}
function setUpGem4() {
 var tempnum = Math.round(Math.random()*10);
 gem4.value = tempnum  % 13;
 console.log("gem4 has a value of " + gem4.value);
}

function generateTargetScore() {
// The random number shown at the start of the game should be between 19 - 120.
// $("#random-number").html(rnd);
    var tempnum = Math.round(Math.random()*1000);
    targetScore = tempnum % 120;
    if (targetScore < 19 ) {
      targetScore = 19;
    }    
    console.log("targetScore = " + targetScore);
    $("#target").html("target " + targetScore);

}
function process1() {
  console.log("process1 called");
  currentScore = currentScore + gem1.value;
  $("#totalscore").html("Your total score is " + currentScore);
  assesTheGame();
}
function process2() {
  console.log("process2 called");
  currentScore = currentScore + gem2.value;
  $("#totalscore").html("Your total score is " + currentScore);
  assesTheGame();
}
function process3() {
  console.log("process3 called");
  currentScore = currentScore + gem3.value;
  $("#totalscore").html("Your total score is " + currentScore);
  assesTheGame();
}
function process4() {
  console.log("process4 called");
  currentScore = currentScore + gem4.value;
  $("#totalscore").html("Your total score is " + currentScore);
  assesTheGame();
}
function assesTheGame() {
 console.log("in assesTheGame");
 if (currentScore == targetScore) {
   numbWins++;
   $("#wins").html("wins " + numbWins);
   initialize();
 }
 if (currentScore > targetScore) {
   console.log("in assesTheGame loser code");
   numbLoses++;
   $("#loses").html("loses " + numbLoses);
   initialize();
 }
}
function resetYourScore() {

   $("yourscore").html("Your total score is " + currentScore);
}
