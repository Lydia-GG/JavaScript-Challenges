/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
  //code here
  const x = str
    .toLowerCase()
    .split('')
    .filter((x) => x == 'x').length;
  const o = str
    .toLowerCase()
    .split('')
    .filter((o) => o == 'o').length;
  return x == o;
}

console.log(XO('xo')); // true
console.log(XO('xxOo')); //true
console.log(XO('xxxm')); //false
console.log(XO('Oo')); //false
console.log(XO('ooom')); //false

// function XO(str) {
//   const z = str.toLowerCase();
//   return z.split('x').length == z.split('o').length;
// }

module.exports = XO;
