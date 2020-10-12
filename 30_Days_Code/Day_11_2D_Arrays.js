// 30 Days Code > Day 11: 2D Arrays

const processData = matrix => {
  let matrix_length_i = matrix.length;
  let maximum_hourglass_sum = 0;
  for (let i = 0; i < matrix_length_i; i++) {
    let matrix_length_j = matrix[i].length;
    for (let j = 0; j < matrix_length_j; j++) {
      if (j + 2 < matrix_length_j && i + 2 < matrix_length_i) {
        const element_1 = matrix[i][j];
        const element_2 = matrix[i][j + 1];
        const element_3 = matrix[i][j + 2];
        const element_4 = matrix[i + 1][j + 1];
        const element_5 = matrix[i + 2][j];
        const element_6 = matrix[i + 2][j + 1];
        const element_7 = matrix[i + 2][j + 2];
        const sum = element_1 + element_2 + element_3 + element_4 + element_5 + element_6 + element_7;
        if (sum > maximum_hourglass_sum || (i === 0 && j === 0)) {
          maximum_hourglass_sum = sum;
        }
      }
    }
  }
  console.log(maximum_hourglass_sum);
};

const raw_data_1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const raw_data_2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

processData(raw_data_1);
processData(raw_data_2);
