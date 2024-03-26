const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const authRoutes =  require('./authRoute');

router.use('/users', userRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/auth', authRoutes);


module.exports = router;
