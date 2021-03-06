const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw 'THROWN';
  }

  let month = date.getMonth();

  if (month < 2 || month == 11) {
    return 'winter';
  }
  if (month >= 2 && month < 5) {
    return 'spring';
  }
  if (month >= 5 && month < 8) {
    return 'summer';
  }
  if (month >= 8 && month < 11) {
    return 'autumn';
  }
};
