var answer = 0;
var firstTermNumber = 3;

var theLastThree = new Array();
var lengthOfNumber = 0;
var index = 2;
theLastThree[0] = 1;
theLastThree[1] = 1;

//takes way too long for large numbers!!
while(lengthOfNumber < firstTermNumber) {
  theLastThree.push(theLastThree[0] + theLastThree[1]);
  lengthOfNumber = theLastThree[2].toString().length;
  theLastThree.shift();
  index++;
}

answer = index;

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
