fs = require('fs');
var data = require('./data.json');

exports.test = function (req, res) {
  res.send({data: data});
};

exports.changeState = (req, res) => {
  var name = 'data.json';
  var m = JSON.parse(fs.readFileSync(__dirname + "\\"+ name).toString());
  m.state = req.body.state;
  fs.writeFileSync(__dirname + "\\"+ name, JSON.stringify(m));
  res.send({data: m});
}

