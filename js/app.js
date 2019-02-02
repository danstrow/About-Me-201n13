'use strict';
var tacos = prompt('Hello and welcome! How many tacos do you think I can eat?');
console.log('Number of tacos, ', tacos);
var name = prompt('Now that we have that out of the way, what is your name?');
console.log(name);
var userTacos = prompt('Nice to meet you ' + name + ' . Let\'s play a game. Do you think you can eat more tacos than me? Please say Y or N').toUpperCase();
console.log(userTacos);
if (userTacos == 'Y') {
  alert('Holy crap!');
} else {
  alert('you will get me next time');
}
var kids = prompt('Do I have more than 1 kid? Please answer Y or N').toUpperCase();
console.log(kids);
if (kids == 'Y') {
  alert('Nope!');
} else {
  alert('ding ding ding that is right');
}
var hair = prompt('Question two. Do I have hair, y or n?').toUpperCase();
console.log(hair);
if (hair == 'Y') {
  alert('Negative, Nancy');
} else {
  alert('That is right. I am bald. Give yourself a point');
}
var vacation = prompt('Number three. Did I go to the Bahamas in 2018?').toUpperCase();
console.log(vacation);
if (vacation == 'Y') {
  alert('winner winner chicken dinner give yourself a point');
} else {
  alert('wrong! do not be jealous');
}
var parking = prompt('Am I good at parallel parking? Y or N please').toUpperCase();
console.log(parking);
if (parking == 'Y') {
  alert('That is correct! I am the best');
} else {
  alert('I pity the fool that thinks I am bad at parking');
}


var tries = 4;

while (tries > 0) {
  var birthDate = prompt('What day of the month is my birthday?');
  console.log(birthDate);
  if (birthDate === 19) {
    alert('Genius! How did you know?');
    //some sort of breaking out of a loop

  } else if (birthDate < 19) {
    alert('Wrong! Too low. Try again.');
    tries--;
  } else {
    alert('Wrong. Too high. Try again');
    tries--;
  }

}


// var food = ['tacos', 'pizza'];
// var tries = 4;
// while (tries > 0) {
//   var favoriteFood = prompt('What is my favorite food?').toLowerCase;
//   if (food.includes('tacos', 'pizza')) {
//     tries = 0;
//     alert('You read me like a book. Nice!');
//     correctGuesses++;
//     break;

//   } else {
//     alert('Nah, try again brosef or brosefina.');
//   }
//   tries--;
// };

// var closing = prompt('Thank you for playing. If you answered 3 or more right, you re a genius');
// console.log(closing);
