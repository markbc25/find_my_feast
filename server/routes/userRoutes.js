const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUser);
router.put('/', userController.updateUser);


router.get('/favorites', userController.getFavorites);
router.post('/favorites', userController.addFavorites);
router.delete('/favorites', userController.deleteFavorites);

router.get('/doNotShow', userController.getDoNotShow);
router.post('/doNotShow', userController.addDoNotShow);
router.delete('/doNotShow', userController.deleteDoNotShow);


module.exports = router;
