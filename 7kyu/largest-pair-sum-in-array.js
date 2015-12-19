/*
  Kata written by: sudheer594
  =====
  Given an array of numbers, find the largest pair sum in the array.

  For example

  [10,14,2,23,19] should return 42 (i.e. sum of 23,19)
  [99,2,2,23,19] should return 122 (i.e. sum of 99,23)
  Input array contains minimum two elements and every element is a number.
*/

function largestPairSum(numbers) {
  var sorted = numbers.sort(function(a, b) { return b - a; });
  return sorted[0] + sorted[1];
}
