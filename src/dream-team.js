const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  let arr = [];

  if (Array.isArray(members) === true) {
    for (let i of members) {
      if (typeof i == 'string') {
        arr.push(i.split(' ').join('').slice(0, 1).toUpperCase());
      }
    }

    return arr.sort().join('').toString();
  } else {
    return false;
  }
};
