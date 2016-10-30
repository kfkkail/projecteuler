// This one works for first, but the 1000001st prime number is too big for Array A

var answer = 0;
limit = 6;
var awwww = 1300;
var squareroot = Math.round(Math.sqrt(awwww));

var A = new Array(squareroot).fill(true);
A[0] = false;
A[1] = false;
var primeDivisibles = new Array();

//Sieve of Eratosthenes
for (counter=2; counter <= squareroot; counter++) {
  if(A[counter] === true) {
    for (j = 0; j < awwww; j++) {
      A[Math.pow(counter,2)+j*counter]=false;
    }
  }
}

for (yeah=0; yeah <= A.length; yeah++) {
  if(A[yeah] === true) {
    primeDivisibles.push(yeah);
    if(primeDivisibles.length === limit) {
      answer = yeah;
      break;
    }
  }
}

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
