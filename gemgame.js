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
 generateTargetScore();
}
function setUpGem1() {
// Each crystal should have a random hidden value between 1 - 12.
 console.log("here 1");
 var tempnum = Math.round(Math.random()*10);
 gem1.value = tempnum  % 13;
 console.log("gem1 has a value of " + gem1.value);
}
function setUpGem2() {
 console.log("here 2");
}
function setUpGem3() {
 console.log("here 3");
}
function setUpGem4() {
 console.log("here 4");
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
}
