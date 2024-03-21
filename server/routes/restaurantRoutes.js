const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', restaurantController.getRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
// TODO: 4 more routes for the restaurant for FAVOIRTE and DONOTSHOW

module.exports = router;
