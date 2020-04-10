module.exports = app => {
  const controller = {};

  controller.calculate = (req, res) => {
    res.status(200).json({});
  };

  return controller;
}