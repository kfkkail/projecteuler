
var answer = 0;


var naturalNumbers = 100;
var sumOfSquares = 0;
var squareOfSums = 0;


for (counter=1; counter <= naturalNumbers; counter++) {
  sumOfSquares += Math.pow(counter,2);
  squareOfSums += counter;
}

squareOfSums = Math.pow(squareOfSums,2);

answer = squareOfSums - sumOfSquares;

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
