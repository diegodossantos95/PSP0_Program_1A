var variance = require('./variance')();

module.exports = () => {
  const standardDeviation = {};

  standardDeviation.calculate = (numbers) => {
    if (!Array.isArray(numbers)) {
      return '0.00';
    }

    const varianceValue = variance.calculate(numbers);
    const stdDeviation = Math.sqrt(varianceValue);

    return stdDeviation.toFixed(2);;
  };

  return standardDeviation;
}