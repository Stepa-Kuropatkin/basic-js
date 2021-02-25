const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = 2 ** disksNumber - 1;
  let speed = Math.floor((3600 / turnsSpeed) * turn);

  return {turns: turn, seconds: speed};
};
