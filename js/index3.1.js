
var answer = 0;

var limit = 600851475143;

for (counter=2; counter <= limit; counter++) {
  //is the limit divisilble by the counter
  if(limit%counter === 0) {
    var isPrime = false;
    var number = limit/counter;

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

    //Stop processing after finding the prime number
    if (isPrime === true) {
      answer = number;
      break;
    } else {
      answer = "none";
    }
  }
}

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
