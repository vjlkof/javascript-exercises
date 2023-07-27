const fibonacci = function (num) {
  num = Number(num);
  if (num <= 0) {
    return "OOPS";
  }
  if (num === 1 || num === 2) return 1;
  let fibonacciNum = 2;
  let auxNum = 1;
  let auxNum2 = 0;
  for (let i = 3; i < num; i++) {
    auxNum2 = fibonacciNum;
    fibonacciNum = fibonacciNum + auxNum;
    auxNum = auxNum2;
  }
  return fibonacciNum;
};

// Do not edit below this line
module.exports = fibonacci;
