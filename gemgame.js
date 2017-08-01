var targetScore = 0;
var currentScore = 0;
var gem1 = {
   name: "gem1",
   value: 0
}
var gem2 = {
   name: "gem1",
   value: 0
}
var gem3 = {
   name: "gem1",
   value: 0
}
var gem4 = {
   name: "gem1",
   value: 0
}
function initialize() {
 console.log("i started");
 targetScore = 0;
 currentScore = 0;
 gem1.value = 0;
 gem2.value = 0;
 gem3.value = 0;
 gem4.value = 0;
 setValueOfGems();
}
function setValueOfGems() {
  for (i=1;i<5;i++) {
   var fncgToCall= " ";
   //gem1();
   fnctToCall = "gem"+ "()";
   console.log(fnctToCall);
  }
}
function gem1() {
 console.log("here 1");
}
function gem2() {
 console.log("here 2");
}
function gem3() {
 console.log("here 3");
}
function gem4() {
 console.log("here 4");
}

