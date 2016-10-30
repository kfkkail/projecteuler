
var answer = 0;

var limit = 999;
var firstNumber, secondNumber;
var primeDivisibles = new Array();
var firstNumberArray = new Array();
var secondNumberArray = new Array();

for (counter=0; counter <= limit; counter++) {
  firstNumber = limit - counter;
  firstNumberArray.push(firstNumber);

  for(j=0; j <= limit; j++) {
    secondNumber = limit - j;
    secondNumberArray.push(secondNumber);

    var multiplication = firstNumber * secondNumber;
    primeDivisibles.push(multiplication);
    if (secondNumber <= firstNumber) {
      break;
    }
  }
  if (answer !== 0) {
    break;
  }
}

//since the primeDivisibles was not sorted from min to max, was returning incorrect max value of 888888
primeDivisibles.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
    return a - b
})

//go through the sorted array and find the max palindrome
for (i=0; i < primeDivisibles.length; i++) {
  var multiplication2 = primeDivisibles[primeDivisibles.length-1-i];
  var frontEnd = multiplication2.toString().substring(0,3);
  var backEnd = multiplication2.toString().substring(3,6).split("").reverse().join("");
  // check to see if the product of the numbers is a palindrome
  if (frontEnd === backEnd) {
    answer = multiplication2;
    break;
  }
}
if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
