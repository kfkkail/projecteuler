
var answer = 0;

var limit = 1000000000;
var firstNumber, secondNumber;
var primeDivisibles = new Array();
var firstNumberArray = new Array();
var secondNumberArray = new Array();

for (counter=1; counter <= limit; counter++) {
  var itsdivisble = false;
  var minNumber = 0;
  //firstNumberArray.push(counter);
  for(j=1; j <= 20; j++) {
    //secondNumberArray.push(j);
    if(counter%j === 0) {
      itsdivisble = true;
      minNumber = counter;
    } else {
      itsdivisble = false;
      break;
    }
  }
  if(itsdivisble === true) {
    answer = minNumber;
    break;
  }
}

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
