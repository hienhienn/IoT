const express = require('express');
const bodyParser = require('body-parser');
const device = require('./device/device.route');
// initialize our express app
const app = express();

let port = 1234;

app.use(express.json());
app.use(bodyParser.json());
app.use('/device', device);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});