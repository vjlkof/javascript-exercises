const palindromes = function (palin) {
  let stringLength = palin.length - 1;
  if (stringLength < 1) return false;
  const palinString = palin.toLowerCase();
  let i = 0;
  while (i <= stringLength) {
    if (
      !(
        (palinString.codePointAt(i) >= 48 &&
          palinString.codePointAt(i) <= 57) ||
        (palinString.codePointAt(i) >= 97 && palinString.codePointAt(i) <= 122)
      )
    ) {
      i++;
      continue;
    }

    if (
      !(
        (palinString.codePointAt(stringLength) >= 48 &&
          palinString.codePointAt(stringLength) <= 57) ||
        (palinString.codePointAt(stringLength) >= 97 &&
          palinString.codePointAt(stringLength) <= 122)
      )
    ) {
      stringLength--;
      continue;
    }

    if (palinString[i] !== palinString[stringLength]) {
      return false;
    }
    i++;
    stringLength--;
    console.log("final");
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
