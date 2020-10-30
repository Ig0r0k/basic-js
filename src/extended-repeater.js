const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition;
  if (str === null) {
    str = 'null';
  }
  if (options.addition === null) {
    addition = 'null';
  } else {
    addition = options.addition;
  }
  let postfix = new Array(options.additionRepeatTimes).fill(addition).join(options.additionSeparator);
  return new Array(options.repeatTimes).fill(str + postfix).join(options.separator || '+');
};
  