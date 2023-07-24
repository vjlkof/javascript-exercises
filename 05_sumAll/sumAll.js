const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  if (num1 === num2) {
    return num1 + num2;
  }
  if (num1 > num2) {
    let aux = num1;
    num1 = num2;
    num2 = aux;
  }

  let totalSum = 0;
  console.log(num1 + " " + num2);
  for (let i = num1; i <= num2; i++) {
    totalSum = totalSum + i;
  }
  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
