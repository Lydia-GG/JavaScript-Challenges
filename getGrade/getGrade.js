`Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

`;

// input three numbers
// get the average of them --->  score
// return the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  let grade = '';

  if (score <= 100 && score >= 90) {
    grade = 'A';
  } else if (score < 90 && score >= 80) {
    grade = 'B';
  } else if (score < 80 && score >= 70) {
    grade = 'C';
  } else if (score < 70 && score >= 60) {
    grade = 'D';
  } else if (score < 60 && score >= 0) {
    grade = 'F';
  }
  return grade;
}

// other answers
// function getGrade(s1, s2, s3) {
//   var grade = (s1 + s2 + s3) / 3;

//   return grade >= 90
//     ? 'A'
//     : grade >= 80
//     ? 'B'
//     : grade >= 70
//     ? 'C'
//     : grade >= 60
//     ? 'D'
//     : 'F';
// }

// function getGrade(s1, s2, s3) {
//   let score = (s1 + s2 + s3) / 3;
//   return score >= 90
//     ? 'A'
//     : score >= 80
//     ? 'B'
//     : score >= 70
//     ? 'C'
//     : score > 60
//     ? 'D'
//     : 'F';
// }

module.exports = getGrade;
