//Decimal cannot handle large numbers that are needed for 100 terms

var answer = 0;
var numberOfTerms = 250;
var goldenRatio = new Decimal((1+Math.sqrt(5))/2);
var goldenRatioMinus = new Decimal((1-Math.sqrt(5))/2);
var index;

var stringNumber = "1";
//generate the first numberOfTerms number and evalute index
for (j = 1; j <= (numberOfTerms-1); j++) {
  stringNumber += "0";
}
var possibleFibNumber = new Decimal(parseInt(stringNumber));

var firstTerm = possibleFibNumber.mul(Math.sqrt(5));
var secondTerm = possibleFibNumber.mul(possibleFibNumber).mul(5).minus(4).sqrt();
var compare = Math.sqrt(5*Math.pow(possibleFibNumber, 2)-4);
var formula = firstTerm.add(secondTerm).div(2);

var formulaCompare = (possibleFibNumber*Math.sqrt(5) + Math.sqrt(5*Math.pow(possibleFibNumber, 2)-4))/2;
var indexActual = getBaseLog(goldenRatio, formula);
var indexCompare = formula.log().div(goldenRatio.log());
index = indexCompare.floor();

//Need to generate the first fibonacci number with numberOfTerms
answer = index.add(1).toString();
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
