'use strict';

var correct = 'Correct!!!';
var notCorrect = 'NO!!!';
var tally = 0;

//Q1
var q1 = function() {
  var hasDoctorate = prompt('Does Zoidberg have a doctorate in Art History?').toLowerCase();
  if(hasDoctorate === 'yes' || hasDoctorate === 'y'){
    alert(correct);
    tally++;
    console.log(tally + ' correct so far.');
  }
  if(hasDoctorate === 'no' || hasDoctorate === 'n'){
    alert(notCorrect);
  }
  console.log('Q1 asks if Zoidberg has an art history doctorate and the User said ' + hasDoctorate);
};

q1();

//Q2
var q2 = function() {
  var hasKids = prompt('Does Zoidberg have kids?').toLowerCase();
  if(hasKids === 'yes' || hasKids === 'y'){
    alert(notCorrect);
  }
  if(hasKids === 'no' || hasKids === 'n'){
    alert(correct);
    tally++;
    console.log(tally + ' correct so far.');
  }
  console.log('Q2 asks if Zoidberg has kids and the User said ' + hasKids);
};

q2();

//Q3
var q3 = function() {
  var hasHair = prompt('Does Zoidberg have hair?').toLowerCase();
  if(hasHair === 'no' || hasHair === 'n'){
    alert(correct);
    tally++;
    console.log(tally + ' correct so far.');
  }
  if(hasHair === 'yes' || hasHair === 'y'){
    alert(notCorrect);
  }
  console.log('Q3 asks if Zoidberg hair and the User said ' + hasHair);
};

q3();

//Q4
var q4 = function() {
  var livesInSeattle = prompt('Does Zoidberg live in Seattle?').toLowerCase();
  if(livesInSeattle === 'yes' || livesInSeattle === 'y'){
    alert(notCorrect);
  }
  if(livesInSeattle === 'no' || livesInSeattle === 'n'){
    alert(correct);
    tally++;
    console.log(tally + ' correct so far.');
  }
  console.log('Q4 asks if Zoidberg lives in Seattle and the User said ' + livesInSeattle);
};

q4();

//Q5
var q5 = function() {
  var deliveryCompany = prompt('Does Zoidberg work for a delivery company?').toLowerCase();
  if(deliveryCompany === 'no' || deliveryCompany === 'n'){
    alert(notCorrect);
  }
  if(deliveryCompany === 'yes' || deliveryCompany === 'y'){
    alert(correct);
    tally++;
    console.log(tally + ' correct so far.');
  }
  console.log('Q5 asks if Zoidberg works for Planet Express and the User said ' + deliveryCompany);
};

q5();

//Q6
var q6 = function() {
  var randomNum = Math.floor(Math.random() * 10);
  console.log('random number is ' + randomNum);
  for(var i = 4; i > 0; i--){
    var userGuessNumber = parseInt(prompt('Friend, guess a number between 0 and 10.'));
    console.log('user guessed ' + userGuessNumber);
    if(userGuessNumber === randomNum){
      alert(correct);
      tally++;
      console.log(tally + ' correct so far.');
      break;
    } else if(i - 1 === 0){
      alert('Oh, ZERO guesses left.  The random number was ' + randomNum);
    } else {
      if (userGuessNumber > randomNum){
        alert('Go lower!  You have ' + (i - 1) + ' guesses left.');
      } else {
        alert('Go higher! you have ' + (i - 1) + ' guesses left.');
      }
    }
  }
};

q6();

//Q7
var q7 = function() {
  var lifeCycle = ['coral', 'hydra', 'starfish', 'urchin', 'anglerfish', 'lamprey', 'clam', 'trilobyte', 'cuttlefish', 'humanoid', 'mating' ];
  var lifeCycleChoices = ['orca', 'coral', 'catfish', 'hydra', 'shark', 'starfish', 'trash', 'urchin', 'anglerfish', 'Edna', 'lamprey', 'clam', 'pearl', 'trilobyte', 'cuttlefish', 'humanoid', 'mating', 'algae'];
  console.log('The stages are: ' + lifeCycle);
  for(var j = 6 ; j > 0; j--){
    var userGuess = prompt('Friend, name a stage in the Decapodian life cycle. Your choices are: ' + lifeCycleChoices.join(' '));
    if(lifeCycle.includes(userGuess)){
      alert(correct);
      tally++;
      console.log(tally + ' correct so far.');
      break;
    } else {
      alert(notCorrect + ' ' + (j - 1) + ' guesses left.');
    }
  }
};

q7();

alert(tally + ' out of ' + '7.  Not bad, friend!');
