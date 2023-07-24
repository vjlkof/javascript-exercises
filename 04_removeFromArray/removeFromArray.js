const removeFromArray = function (array, ...arg) {
  return array.filter((item) => !arg.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
