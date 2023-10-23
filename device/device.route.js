const express = require('express');
const router = express.Router();

const device_controller = require('../device/device.controller');

router.get('/test', device_controller.test);
router.post('/changeState', device_controller.changeState);
module.exports = router;