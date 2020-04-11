module.exports = () => {
  const standardDeviation = {};

  standardDeviation.calculate = (numbers) => {
    var result = {
      "mean": "0.00",
      "standardDeviation": "0.00"
    };

    if (!Array.isArray(numbers)) {
      return result;
    }

    const count = numbers.length;
    const mean = numbers.reduce((total, value) => total + value / count, 0);
    const variance = numbers.reduce((total, value) => total + Math.pow(mean - value, 2) / (count - 1), 0);
    const stdDeviation = Math.sqrt(variance);

    result.mean = mean.toFixed(2);
    result.standardDeviation = stdDeviation.toFixed(2);

    return result;
  };

  return standardDeviation;
}