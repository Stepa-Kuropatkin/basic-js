const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  options.separator = options.separator === undefined ? '+' : options.separator;
  options.addition = options.addition === null ? 'null' : options.addition;

  let arr = Array(options.repeatTimes).fill(str);
  let addArr = Array(options.additionRepeatTimes).fill(options.addition);

  addArr = addArr.join(options.additionSeparator);

  let finalArr;

  for (let i = 0; i < arr.length; i++) {
    finalArr = Array(options.repeatTimes).fill(`${arr[i]}${addArr}`);
  }
  return finalArr.join(options.separator);
};
