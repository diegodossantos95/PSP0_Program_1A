module.exports = () => {
  const standardDeviation = {};

  standardDeviation.calculate = (numbers) => {
    const count = numbers.length;
    const mean = numbers.reduce((total, value) => total + value / count, 0);
    const variance = numbers.reduce((total, value) => total + Math.pow(mean - value, 2) / (count - 1), 0);
    const stdDeviation = Math.sqrt(variance);

    return {
      "mean": mean.toFixed(2),
      "standardDeviation": stdDeviation.toFixed(2)
    };
  };

  return standardDeviation;
}