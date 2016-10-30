
//This algorithim is too slow for the big number that they are wanting.
var answer = 0;
var listOfNumbers = new Array(2, 3, 5, 7);
var primeDivisibles = new Array();
var limit = 16366195;
var squareroot = Math.round(Math.sqrt(limit));

var A = new Array(squareroot).fill(true);
A[0] = false;
A[1] = false;
var athis = Math.pow(2,2);

//Sieve of Eratosthenes
for (counter=2; counter <= squareroot; counter++) {
  if(A[counter] === true) {
    for (j = 0; j < limit; j++) {
      A[Math.pow(counter,2)+j*counter]=false;
    }
  }
}

for (yeah=0; yeah <= A.length; yeah++) {
  if(A[yeah] === true && limit%yeah === 0) {
    primeDivisibles.push(yeah);
  }
}


answer = primeDivisibles[primeDivisibles.length-1];

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
