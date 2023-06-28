const express = require('express');
const router = express.Router();

const errorController = require('../controllers/404');

router.use('/404',errorController.get404Controller);

module.exports = router;