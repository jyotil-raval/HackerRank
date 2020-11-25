process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_current_line = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split('\n');
  main();
});

function readLine() {
  return input_stdin_array[input_current_line++];
}

const printNumber = S => {
  try {
    console.log(parseInt(S).toString().replace('NaN', 'Bad String'));
  } catch (e) {
    console.log('Bad String');
  }
};

function main() {
  const S = readLine();
  printNumber(S);
}
