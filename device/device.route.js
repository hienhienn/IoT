const express = require('express');
const router = express.Router();

const device_controller = require('../device/device.controller');

router.get('/getInfo', device_controller.getInfo);
router.post('/changeState', device_controller.changeState);
module.exports = router;