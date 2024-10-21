const express = require('express');
const router = express.Router();

const calldbController = require('../controllers/calldbController');

router.get('/', calldbController.list);


module.exports = router;