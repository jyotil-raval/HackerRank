// 30 Days Code > Day 10: Binary Numbers

const processData = n => {
  let binary = `${toBinary(n)}`;
  let binary_array = binary.split('');
  let consecutive = 0;
  let max_consecutive = 0;
  binary_array.forEach((el, idx) => {
    if (el == 1) {
      consecutive++;
    } else {
      if (max_consecutive < consecutive) {
        max_consecutive = consecutive;
      }
      consecutive = 0;
    }
    if (idx + 1 === binary_array.length && max_consecutive < consecutive) {
      max_consecutive = consecutive;
    }
  });
  console.log(max_consecutive);
};

const toBinary = n => {
  let binary = '';
  while (Math.ceil(n / 2) > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary;
};

processData(5);
processData(13);
processData(439);
