var removeDigit = function (number, digit) {
  let maxNumber = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let newNumber = number.slice(0, i) + number.slice(i + 1);

      if (newNumber > maxNumber) {
        maxNumber = newNumber;
      }
    }
  }
  return maxNumber;
};
