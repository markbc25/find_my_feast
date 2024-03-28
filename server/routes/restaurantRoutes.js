const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

router.post('/', restaurantController.getRestaurants);
router.post('/:id', restaurantController.getRestaurantById);


module.exports = router;
