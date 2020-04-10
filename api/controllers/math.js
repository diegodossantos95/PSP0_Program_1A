module.exports = app => {
  const controller = {};
  const standardDeviation = app.services.standardDeviation;

  controller.standardDeviation = (req, res) => {
    const numbers = req.body.numbers;

    if (!Array.isArray(numbers)) {
      res.status(404).send("Incorrect body object format.");
    }

    const stdDev = standardDeviation.calculate(numbers);

    res.status(200).json(stdDev);
  };

  return controller;
}