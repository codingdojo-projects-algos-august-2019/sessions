var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pushFront(array, value) {
  // console.log(array, value);

  // for (var index = array.length; index > 0; index--) {
  //   var currentValue = array[index - 1];

  //   array[index] = currentValue;

  //   console.log(array);
  // }

  // array[0] = value;

  console.log('pushing to front');


  // return array;
  return insertAt(array, 0, value);
}

array = pushFront(array, 99);

console.log('afterPush front', array);

function insertAt(array, position, value) {
  console.log('insert at', array);

  for (var index = array.length; index > position; index--) {
    var currentValue = array[index - 1];
    array[index] = currentValue;
  }

  array[position] = value;

  console.log('insert at', array);

  return array;
}


array = insertAt(array, 4, 99)

console.log('this is done', array);


function popFront(array) {
  // var value = array[0];
  // console.log(array);

  // for (var index = 0; index < array.length - 1; index++) {
  //   var currentValue = array[index + 1];
  //   array[index] = currentValue;


  // }
  // console.log(array);

  // // array.pop();

  // array.length--;
  // console.log(array);

  // return value;


  return removeAt(array, 0);
}
console.log(popFront(array));


function removeAt(array, position) {
  var value = array[position];

  for (var index = position; index < array.length; index++) {
    var currentValue = array[index + 1];

    array[index] = currentValue;
  }

  array.length--;

  return value;
}


var minArr = [89, 10, 1, 2, 3, 4, 45, 6, 7, -9, 8];

console.log(removeAt(array, 4));


function min2Front(array) {
  var minPosition = 1;

  for (var index = 1; index < array.length; index++) {
    if (array[index] < array[minPosition]) {
      console.log('found new mindex', index);
      minPosition = index;
    }
  }

  // var removed = removeAt(array, minPosition);
  console.log('min position is ', minPosition, array);

  return pushFront(array, removeAt(array, minPosition));
}

console.log(min2Front(minArr));