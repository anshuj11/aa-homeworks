function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}

function bubbleSort(array) {
  let sorted = false;
  for (let i = 0; i < array.length - 1; i++) {
    sorted = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        array = swap(array, i, j);
        sorted = false;
      }
    }
  }
  return array;
}

module.exports = {
  bubbleSort,
  swap
};
