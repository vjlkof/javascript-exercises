const add = function (num1 = 0, num2 = 0) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }
  return num1 + num2;
};

const subtract = function (num1 = 0, num2 = 0) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }
  return num1 - num2;
};
const sum = function (arrayNum) {
  return arrayNum.reduce((accum, item) => (accum += item), 0);
};

const multiply = function (arrayNum) {
  return arrayNum.reduce((accum, item) => (accum = accum * item), 1);
};

const power = function (num1 = 0, num2 = 0) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }
  return num1 ** num2;
};

const factorial = function (num = 0) {
  if (typeof num !== "number" && num < 0) return "ERROR";
  if (num === 0) return 1;
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
