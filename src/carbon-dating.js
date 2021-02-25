const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let num = 0.693 / HALF_LIFE_PERIOD;
  let result = Math.ceil(
    Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / num
  );

  return result !== NaN ||
    result <= 0 ||
    typeof sampleActivity !== 'string' ||
    isFinite(result)
    ? false
    : result;
};
