/*
  Kata written by: pitieu
  =====
  You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

  The function should contain at least 1 argument per set.

  calculate(1)(1) // should return 2
  calculate(1,1)(1) // should return 3
  calculate(1,1)(1,-1) // should return 2
  calculate(2,4)(3,7,1) // should return 17
*/

// a bit ugly but it works
function calculate() {
  var total = 0;
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function (val) {
    total += val;
  });
  return function () {
    var argsIn = Array.prototype.slice.call(arguments);
    argsIn.forEach(function (val) {
      total += val;
    });
    return total;
  };
}
