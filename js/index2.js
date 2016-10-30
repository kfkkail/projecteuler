

var answer = 0;
var listOfNumbers = new Array(1,2);
var newNumber = 0;
var limit = 4000000;

for (i=1; newNumber < limit; i++) {
  newNumber = listOfNumbers[i] + listOfNumbers[i-1];
  if(newNumber < limit) {
    listOfNumbers.push(newNumber);
  }
}

for (j=0; j < listOfNumbers.length; j++) {
  if(listOfNumbers[j]%2 === 0) {
    answer += listOfNumbers[j];
  }
}

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
