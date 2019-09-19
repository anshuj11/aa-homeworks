function swap(a, i1, i2) {
  let t = a[i1];
  a[i1] = a[i2];
  a[i2] = t;
  return a;
}

function selectionSort(a) {
  let sorted = false;
  for (let i = 0; i < a.length && !sorted; i++) {
    sorted = true;
    for (let j = i; j < a.length - 1; j++) {
      if (a[j + 1] < a[j]) {
        a = swap(a, j, j + 1);
        sorted = false;
      }
    }
  }
}

module.exports = {
  selectionSort,
  swap
};
