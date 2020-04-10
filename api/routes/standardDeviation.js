module.exports = app => {
  const controller = app.controllers.standardDeviation;

  app.route('/api/standard-deviation')
    .post(controller.calculate);
}