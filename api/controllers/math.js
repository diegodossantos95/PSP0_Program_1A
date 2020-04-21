module.exports = app => {
  const controller = {};
  const standardDeviation = app.services.standardDeviation;
  const mean = app.services.mean;

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

  return controller;
}