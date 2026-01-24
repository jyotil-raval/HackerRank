function getSecondLargest(numbs) {
  // Complete the function
  const max = Math.max(...numbs);

  numbs = numbs.filter((num) => num !== max);

  return Math.max(...numbs);
}
