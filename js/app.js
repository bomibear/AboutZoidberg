'use strict';

var correct = 'Correct!!!';
var notCorrect = 'NO!!!';

//Q1
var hasDoctorate = prompt('Do I have a doctorate in Art History?').toLowerCase();
if(hasDoctorate === 'yes' || hasDoctorate === 'y'){
  alert(correct);
}
if(hasDoctorate === 'no' || hasDoctorate === 'n'){
  alert(notCorrect);
}
console.log('Q1 asks if Zoidberg has an art history doctorate and the User said ' + hasDoctorate);

//Q2
var hasKids = prompt('Do I have kids?').toLowerCase();
if(hasKids === 'yes' || hasKids === 'y'){
  alert(correct);
}
if(hasKids === 'no' || hasKids === 'n'){
  alert(notCorrect);
}
console.log('Q2 asks if Zoidberg has kids and the User said ' + hasKids);

//Q3
var hasHair = prompt('Do I have hair').toLowerCase();
if(hasHair === 'no' || hasHair === 'n'){
  alert(correct);
}
if(hasHair === 'yes' || hasHair === 'y'){
  alert(notCorrect);
}
console.log('Q3 asks if Zoidberg hair and the User said ' + hasHair);

//Q4
var livesInSeattle = prompt('Do I live in Seattle?').toLowerCase();
if(livesInSeattle === 'yes' || livesInSeattle === 'y'){
  alert(notCorrect);
}
if(livesInSeattle === 'no' || livesInSeattle === 'n'){
  alert(correct);
}
console.log('Q4 asks if Zoidberg lives in Seattle and the User said ' + livesInSeattle);

//Q5
var deliveryCompany = prompt('Do I work for a delivery company?').toLowerCase();
if(deliveryCompany === 'no' || deliveryCompany === 'n'){
  alert(notCorrect);
}
if(deliveryCompany === 'yes' || deliveryCompany === 'y'){
  alert(correct);
}
console.log('Q5 asks if Zoidberg works for Planet Express and the User said ' + deliveryCompany);
