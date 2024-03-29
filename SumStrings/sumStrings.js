`Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a million digits), converting to int will not work.

`;

// convert string to number using BigInt for too large numeric values
//sum two inputs
// convert the result to string

function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

module.exports = sumStrings;
