module.exports = app => {
  const controller = app.controllers.math;

  app.route('/api/math/standard-deviation')
    .post(controller.standardDeviation);

  app.route('/api/math/variance')
    .post(controller.variance);
}