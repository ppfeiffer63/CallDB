const express = require('express');
const router = express.Router();

const customerController = require('../controllers/callsController');

router.get('/', callsController.list);

router.post('/add', callsController.save);

router.get('/delete/:id', callsController.delete);

router.get('/update/:id', callsController.edit);

router.post('/update/:id', callsController.update);

module.exports = router;