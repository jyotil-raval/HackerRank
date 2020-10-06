/*
 * Complete the timeConversion function below.
 */
function timeConversion(time) {
  let meridiem = time.substr(8, 2);
​
  if (meridiem === "AM" && time.substr(0, 2) === "12") {
    return `00${s.substr(2, 6)}`;
  }
​
  if (meridiem === "AM") {
    return s.substr(0, 8);
  }
​
  if (meridiem === "PM" && time.substr(0, 2) === "12") {
    return `${(Number(s.substr(0, 2)) % 12) + 12}${s.substr(2, 6)}`;
  }
​
  if (meridiem === "PM") {
    return `${Number(s.substr(0, 2)) + 12}${s.substr(2, 6)}`;
  }
}


timeConversion('12:40:22PM');
