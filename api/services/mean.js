module.exports = () => {
  const mean = {};

  mean.calculate = (numbers) => {
    if (!Array.isArray(numbers)) {
      return '0.00';
    }

    const count = numbers.length;
    const meanValue = numbers.reduce((total, value) => total + value / count, 0);

    return meanValue.toFixed(2);
  };

  return mean;
}