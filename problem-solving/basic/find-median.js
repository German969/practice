function findMedian(arr) {
  // Write your code here
  const sorted = arr.sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2);
  return sorted[middle];
}
