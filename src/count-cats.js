const CustomError = require('../extensions/custom-error');

module.exports = function countCats(backyard) {
  let arr = [];
  for (let i = 0; i < backyard.length; i++) {
    for (let e of backyard[i]) {
      if (e == '^^') {
        arr.push(e);
      }
    }
  }
  return arr.length == 0 ? 0 : arr.length;
};
