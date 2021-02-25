const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === '--discard-prev') {
      newArr.pop();
    } else if (arr[i] === '--double-prev') {
      newArr.push(newArr[newArr.length - 1]);
    } else if (arr[i] === '--discard-next') {
      if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
        i += 2;
      } else {
        i += 1;
      }
    } else newArr.push(arr[i]);
  }
  return newArr.filter((item) => item !== undefined);
};
