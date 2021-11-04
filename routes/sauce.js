const express = require('express');
const router = express.Router(); //Permet de créer un router express


const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const sauceCtrl = require('../controllers/sauce')

router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauce);

module.exports = router;