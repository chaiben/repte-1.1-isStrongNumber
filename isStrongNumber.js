const NOT_STRONG = "Not Strong !!"
const STRONG = "STRONG!!!!"

function factorial(n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorial (n-1); 
}

function isStrongNumber(number){
  if(typeof number !== 'number')
    return NOT_STRONG

  let total = 0;
  number.toString().split("").map(n => total = total + factorial(n));

  return total === number ? STRONG : NOT_STRONG;
}

module.exports = isStrongNumber;