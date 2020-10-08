// 30_Days_Code > Day_07_Arrays

function main() {
  const n = parseInt(readLine(), 10);
  const arr = readLine()
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10));

  //write code from here
  console.log(arr.reverse().join(' '));
}
