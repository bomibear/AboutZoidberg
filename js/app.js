'use strict';

//Q1
var hasDoctorate = prompt('Do I have a doctorate in Art History?').toLowerCase();
if(hasDoctorate === 'yes' || hasDoctorate === 'y'){
  alert('Why, yes.  I am quite the art connoisseur');
}
if(hasDoctorate === 'no' || hasDoctorate === 'n'){
  alert('I am quite the accomplished doctor, of the art history kind!!!');
}
console.log('Q1 asks if Zoidberg has an art history doctorate and the User said ' + hasDoctorate);

//Q2
var hasKids = prompt('Do I have kids?').toLowerCase();
if(hasKids === 'yes' || hasKids === 'y'){
  alert('Sadly, I have not found a mate of the same species :(');
}
if(hasKids === 'no' || hasKids === 'n'){
  alert('Zoidberg has no offspring!!!');
}
console.log('Q2 asks if Zoidberg has kids and the User said ' + hasKids);

//Q3
var hasHair = prompt('Do I have hair').toLowerCase();
if(hasHair === 'no' || hasHair === 'n'){
  alert('My exoskeleton is so nice and shiny!');
}
if(hasHair === 'yes' || hasHair === 'y'){
  alert('Only Zoidberg Jesus has hair!');
}
console.log('Q3 asks if Zoidberg hair and the User said ' + hasHair);

//Q4
var livesInSeattle = prompt('Do I live in Seattle?').toLowerCase();
if(livesInSeattle === 'yes' || livesInSeattle === 'y'){
  alert('That was so 2000 years ago.  Nope.');
}
if(livesInSeattle === 'no' || livesInSeattle === 'n'){
  alert('New New York is the place to be!');
}
console.log('Q4 asks if Zoidberg lives in Seattle and the User said ' + livesInSeattle);

//Q5
var deliveryCompany = prompt('Do I work for a delivery company?').toLowerCase();
if(deliveryCompany === 'no' || deliveryCompany === 'n'){
  alert('Being a distinguished doctor does not make Zoidberg enough money.');
}
if(deliveryCompany === 'yes' || deliveryCompany === 'y'){
  alert('Zoidberg loves Planet Express!');
}
console.log('Q5 asks if Zoidberg works for Planet Express and the User said ' + deliveryCompany);
