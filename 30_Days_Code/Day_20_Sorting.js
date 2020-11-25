// Day 20: Sorting

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const bubbleSort = arr => {
  const N = arr.length;
  let numberOfSwaps = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j, j + 1);
        numberOfSwaps++;
      }
    }
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
  console.log(`First Element: ${Math.min(...arr)}`);
  console.log(`Last Element: ${Math.max(...arr)}`);
};

bubbleSort([1, 2, 3]);
bubbleSort([3, 2, 1]);
