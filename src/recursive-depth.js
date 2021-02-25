const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i of arr) {
      if (Array.isArray(i)) {
        let newDepth = this.calculateDepth(i) + 1;
        if (newDepth > depth) {
          depth = newDepth;
        }
      }
    }
    return depth;
  }
};
