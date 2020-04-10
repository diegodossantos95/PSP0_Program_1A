module.exports = app => {
  const controller = app.controllers.math;

  app.route('/api/math/standard-deviation')
    .post(controller.standardDeviation);
}