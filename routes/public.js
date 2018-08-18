const express = require('express');
const router = express.Router();
const ctrlHome = require('../controllers/main');

router.get('/', ctrlHome.home);
router.post('/create', ctrlHome.save);
router.get('/find', ctrlHome.find);
router.get('/find/:id', ctrlHome.findById);
router.get('/findOne/:name', ctrlHome.findOne);
router.delete('/delete/:id', ctrlHome.remove);



module.exports = router;