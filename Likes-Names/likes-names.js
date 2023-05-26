`You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.`;

function likes(names) {
  `
  - check the array length
  - if length < 1 --> 'no one likes this'
  - if length === 1 --> 'Peter likes this'
  - if length < 3 --> 'Jacob and Alex like this'
  - if length < 4 --> 'Max, John and Mark like this'
  - if length more than 3 we will display the first two names and the number of the length of the array - 2 --> 'Alex, Jacob and 2 others like this'
`;

  if (names.length < 1) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length < 3) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length < 4) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

`or:
 function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return names[0] + ' likes this';
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    default:
      return (
        names[0] +
        ', ' +
        names[1] +
        ' and ' +
        (names.length - 2) +
        ' others like this'
      );
  }
}`;

module.exports = likes;
