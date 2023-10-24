fs = require("fs");
var data = require("./data.json");

exports.getInfo = function (req, res) {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

exports.changeState = (req, res) => {
  try {
    var name = "data.json";
    var m = JSON.parse(fs.readFileSync(__dirname + "\\" + name).toString());
    m.state = req.body.state;
    fs.writeFileSync(__dirname + "\\" + name, JSON.stringify(m));
    res.status(200).json(m);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
