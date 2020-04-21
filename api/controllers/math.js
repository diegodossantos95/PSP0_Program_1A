module.exports = app => {
  const controller = {};
  const standardDeviation = app.services.standardDeviation;
  const mean = app.services.mean;
  const variance = app.services.variance;

  controller.standardDeviation = (req, res) => {
    const numbers = req.body.numbers;

    if (!Array.isArray(numbers)) {
      res.status(404).send("Incorrect body object format.");
    }

    const stdDevValue = standardDeviation.calculate(numbers);
    const meanValue = mean.calculate(numbers);
    const result = {
      "mean": meanValue,
      "standardDeviation": stdDevValue
    };

    res.status(200).json(result);
  };

  controller.variance = (req, res) => {
    const numbers = req.body.numbers;

    if (!Array.isArray(numbers)) {
      res.status(404).send("Incorrect body object format.");
    }

    const varianceValue = variance.calculate(numbers);
    const result = {
      "variance": varianceValue
    };

    res.status(200).json(result);
  };

  return controller;
}