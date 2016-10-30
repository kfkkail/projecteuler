var answer;
var a, b, c;
var k = 2;

var endthis = false;

var limit = 1001;

var nBranch1 = 1;
var mBranch1 = 2;
var nBranch2 = 1;
var mBranch2 = 2;
var nBranch3 = 1;
var mBranch3 = 2;

var coPrimeArrayBranch1 = new Array([nBranch1,mBranch1]);
var coPrimeArrayBranch2 = new Array([nBranch2,mBranch2]);
var coPrimeArrayBranch3 = new Array([nBranch3,mBranch3]);
var newnBranch1, newmBranch1;
var newnBranch2, newmBranch2;
var newnBranch3, newmBranch3;



var sumofABC=0;

for (counter=0; sumofABC < limit; counter++) {
  //Branch 1
  newnBranch1 = 2*mBranch1-mBranch1;
  newmBranch1 = 2*mBranch1-nBranch1;
  coPrimeArrayBranch1.push([newnBranch1,newmBranch1]);
  nBranch1 = newnBranch1;
  mBranch1 = newmBranch1;

  //Branch 2
  newnBranch2 = 2*mBranch2+nBranch2;
  newmBranch2 = 2*mBranch2+mBranch2;
  coPrimeArrayBranch2.push([newnBranch2,newmBranch2]);
  nBranch2 = newnBranch2;
  mBranch2 = newmBranch2;

  //Branch 3
  newnBranch3 = mBranch3+nBranch3;
  newmBranch3 = mBranch3+2*nBranch3;
  coPrimeArrayBranch3.push([newnBranch3,newmBranch3]);
  nBranch3 = newnBranch3;
  mBranch3 = newmBranch3;

  //Euclid's formula
  var m = mBranch1;
  var n = nBranch1;
  a = k*(Math.pow(m,2) - Math.pow(n,2));
  b = k*(2*m*n);
  c = k*(Math.pow(m,2) + Math.pow(n,2));

  var sum = Math.pow(a,2) + Math.pow(b,2);
  var csquared = Math.pow(c,2);
  console.log(c + ": " + sum + " =? " + csquared);
  console.log(a+" "+b+" "+c);
  sumofABC = a+b+c;
  console.log(sumofABC);
}



answer = false;

if (document.getElementsByClassName('return').length > 0) {
	$('.return').html(answer);
}
