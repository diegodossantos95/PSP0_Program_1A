var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  consign = require('consign'),
  port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign({cwd: 'api'})
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(port, function(){
    console.log(`RESTful API server started on port ${port}.`);
});