`Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

`;

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  vowels.forEach((vowel) =>
    [...str].forEach((letter) => {
      vowel === letter ? count++ : count;
    })
  );
  return count;
}

`another answers 
1-  function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (vowels[i] === str[j]) {
        count++;
      }
    }
  }
  return count;
}

2- function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

3- or using includes
`;

module.exports = getCount;
