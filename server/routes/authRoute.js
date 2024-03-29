const router = require('express').Router();

const authController = require('../controllers/authController');

//TODO: Define routes for Login, SignUp, Logout, Google OAuth.
router.post('/signup', authController.signup); 
router.post('/login', authController.login);
router.post('/logout', authController.logout);


module.exports = router;
