
var answer = 0;
limit = 10001;
var awwww = 1300;
var squareroot = Math.round(Math.sqrt(awwww));
var primeNumbers = new Array();
var counterArray = new Array();
var primecount = 0;

for (counter=2; primecount < limit; counter++) {
  //is the limit divisilble by the counter
  var isPrime = false;
  var number = counter;

  counterArray.push(counter);
  //check if that number is prime
  if(number === 2) {
    isPrime = true;
  } else if (number === 3) {
    isPrime = true;
  } else if (number%2 === 0) {
    isPrime = false;
  } else if (number%3 === 0) {
    isPrime = false;
  } else {
    var i = 5;
    var w = 2;
    while (i*i <= number) {
      if(number%i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
      i += w;
      w = 6-w;
    }
    if(i*i > number) {
      isPrime = true;
    }
  }

  //wait for the "limit" prime number
  if (isPrime === true) {
    primecount += 1;
    primeNumbers.push(number);
    answer = number;
  } else {
    answer = "none";
  }
}

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
