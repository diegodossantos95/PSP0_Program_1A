var mean = require('./mean')();

module.exports = () => {
  const variance = {};

  variance.calculate = (numbers) => {
    if (!Array.isArray(numbers)) {
      return '0.00';
    }

    const count = numbers.length;
    const meanValue = mean.calculate(numbers);
    const varianceValue = numbers.reduce((total, value) => total + Math.pow(meanValue - value, 2) / (count - 1), 0);

    return varianceValue.toFixed(2);
  };

  return variance;
}