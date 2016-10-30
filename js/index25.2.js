var answer = 0;
var numberOfTerms = 3;
var goldenRatioCompare = (1+Math.sqrt(5))/2;
var goldenRatio = new BigNumber(goldenRatioCompare.toString());
var goldenRatioMinusCompare = (1-Math.sqrt(5))/2;
var goldenRatioMinus = new BigNumber(goldenRatioMinusCompare.toString());
var index;

var stringNumber = "1";
//generate the first numberOfTerms number and evalute index
for (j = 1; j <= (numberOfTerms-1); j++) {
  stringNumber += "0";
}
var possibleFibNumber = new BigNumber(stringNumber);
var possibleFibNumberCompare = parseInt(stringNumber);

var firstTerm = possibleFibNumber.times(Math.sqrt(5));
var firstTermCompare = possibleFibNumberCompare*Math.sqrt(5);
var secondTerm = possibleFibNumber.toPower(2).times(5).minus(4).squareRoot();
var secondTermCompare = Math.sqrt(5*Math.pow(possibleFibNumber, 2)-4);
var secondTermCompare1 = 5*Math.pow(possibleFibNumberCompare, 2)-4

var formula = firstTerm.plus(secondTerm).dividedBy(2);
var formulaCompare = (possibleFibNumberCompare*Math.sqrt(5) + Math.sqrt(5*Math.pow(possibleFibNumberCompare, 2)-4))/2;

// This is the most difficult part, there doesn't seem to be any good way to get a logarithm of large numbers in javascript
var indexActualCompare = getBaseLog(goldenRatioCompare, formulaCompare);

//var indexCompare = formula.log().div(goldenRatio.log());
index = Math.floor(indexActualCompare);

//Need to generate the first fibonacci number with numberOfTerms
answer = index+1;
//var fibNumberGenerated = Math.round((Math.pow(goldenRatio,answer)-Math.pow(goldenRatioMinus,answer))/(Math.sqrt(5)));

// while (lengthOfNumber < numberOfTerms) {
//   fibNumberGenerated = Math.round((Math.pow(goldenRatio,n)-Math.pow(goldenRatioMinus,n))/(Math.sqrt(5)));
//   lengthOfNumber = fibNumberGenerated.toString().length;
//
//   n = n+1;
// }

//Last step in formula, this will return the index of the fibonacci number discovered


//answer = index;

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}

function getBaseLog(x, y) {
  //x is base of log and y is the number of the log
  return Math.log(y) / Math.log(x);
}
