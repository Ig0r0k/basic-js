const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    for (let item of arr) {
      if (Object.prototype.toString.call(item) === '[object Array]') {
        let currentDepth = this.calculateDepth(item) + 1;
        if (currentDepth > maxDepth) maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
};