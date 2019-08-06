var myStr = 'this is a string';

console.log(myStr);

myStr = 345;

console.log(myStr);

//            0      1       2        3
var array = ['cat', 'dog', 'horse', 'mouse'];

console.log(array[3]);

// function push () {
//   return array.push(234);
// }

// for (var index = 0; index < array.length; index++) {
//   console.log(array[index]);
// }

// for (var index in array) {
//   console.log('index is ' + index, array[index]);
// }

// for (var element of array) {
//   console.log('element is ' + element);
// }

// var person = ['blue', 'brown', 5.6, 23];
var person = {
  "eyes": 'blue',
  hair: 'brown',
  height: 5.6,
  age: 23,
  key: 'this is a key'
};

person.shoeSize = 9;

// console.log(person['age']);

// for (var key in person) {
//   console.log('key is ', key, person[key]);
// }
sayHello('Jason', true, 234234234, 'moar stringz');

function sayHello(name, ...rest) {
  console.log(...rest);
  console.log('Hello ' + name.toUpperCase());
}



function sum(...numbers) {
  var count = 0;

  for (var index = 0; index < numbers.length; index++) {
    count += numbers[index];
  }

  return count;
}



console.log(sum(3, 10, 345, 123));
