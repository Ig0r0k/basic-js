const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let row of matrix) {
    for (let item of row) {
      if (item === '^^') {
        count++;
      }
    }
  }
  return count;
};
