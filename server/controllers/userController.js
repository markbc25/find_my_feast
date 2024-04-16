const { Restaurant } = require("../models/restaurantModel.js");
const {User} = require("../models/userModel.js");

// General User controllers
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await User.findByIdAndUpdate(id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
}
// Favorites controllers
exports.getFavorites = async (req, res) => {
  try {
    if (!req.query.email)
      return res.status(400).send('Invalid request');

    const user = await User.findOne({ email: req.query.email });

    if (!user)
      return res.status(404).send('User not found');

    const favoriteRestaurants = await User.findOne({ email: req.query.email }).populate("favoriteRestaurant");

    res.status(200).json(favoriteRestaurants);
  }
  catch (error) {
    res.status(500).json(error.message);
  }
}

exports.addFavorites = async (req, res) => {
  try {
    if (!req.body.user || !req.body.restaurant)
      return res.status(400).send('Invalid request');
    let restaurant = await Restaurant.findOne({ id: req.body.restaurant.id });
    const user = await User.findOne({ email: req.body.user.email });

    if (!user)
      res.status(404).send('User not found');
    if (restaurant && user.favoriteRestaurant.includes(restaurant._id)) {
      return res.status(400).send('Restaurant already in don`t show');
    }
    if(!restaurant){
      restaurant = await Restaurant.create(req.body.restaurant);
    }

    const userDoc = await User.findOneAndUpdate(
      { email: req.body.user.email }, // Query
      { $push: { favoriteRestaurant: restaurant._id } }, // Update
      { new: true } // Return the modified document
    );

    res.status(200).json(`Added ${restaurant.id} to favorites.`);
  } catch (error) {
    res.status(500).json(error.message);
  }
}


exports.deleteFromFavorites = async (req, res) => {
  try {
    if (!req.body.user || !req.body.restaurant)
      return res.status(400).send('Invalid request');
    let restaurant = await Restaurant.findOne({ id: req.body.restaurant.id });
    const user = await User.findOne({ email: req.body.user.email });

    if (!user)
      res.status(404).send('User not found');
    //console.log("Checking if restaurant is in user's fav...")
    if (restaurant && !user.favoriteRestaurant.includes(restaurant._id)) {
      return res.status(400).send('Restaurant not in favorites');
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: req.body.user.email }, // Query
      { $pull: { favoriteRestaurant: restaurant._id } }, // Update
      { new: true } // Return the modified document
    );

    res.status(200).json(`Removed ${restaurant._id} from favorites`);
  } catch (error) {
    res.status(500).json(error.message);
  }
};




// Do Not Show controllers
exports.getDoNotShow = async (req, res) => {
  try {
    if (!req.query.email)
      return res.status(400).send('Invalid request');

    const user = await User.findOne({ email: req.query.email });

    if (!user)
      return res.status(404).send('User not found');

    const doNotShow = await User.findOne({ email: req.query.email }).populate("doNotShow");

    res.status(200).json(doNotShow);
  }
  catch (error) {
    res.status(500).json(error.message);
  }
}

exports.addDoNotShow = async (req, res) => {
  try {
    if (!req.body.user || !req.body.restaurant)
      return res.status(400).send('Invalid request');
    let restaurant = await Restaurant.findOne({ id: req.body.restaurant.id });
    const user = await User.findOne({ email: req.body.user.email });

    if (!user)
      res.status(404).send('User not found');
    if (restaurant && user.doNotShow.includes(restaurant._id)) {
      return res.status(400).send('Restaurant already in don`t show');
    }
    if(!restaurant){
      restaurant = await Restaurant.create(req.body.restaurant);
    }

    const userDoc = await User.findOneAndUpdate(
      { email: req.body.user.email }, // Query
      { $push: { doNotShow: restaurant._id } }, // Update
      { new: true } // Return the modified document
    );

    res.status(200).json(`Added ${restaurant.id} to don't show`);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

exports.deleteDontShow = async (req, res) => {
  try {
    if (!req.body.user || !req.body.restaurant)
      return res.status(400).send('Invalid request');
    let restaurant = await Restaurant.findOne({ id: req.body.restaurant.id });
    const user = await User.findOne({ email: req.body.user.email });

    if (!user)
      res.status(404).send('User not found');
    //console.log("Checking if restaurant is in user's fav...")
    if (restaurant && !user.doNotShow.includes(restaurant._id)) {
      return res.status(400).send('Restaurant not in dont show.');
    }

    const updatedUser = await User.findOneAndUpdate(
      { email: req.body.user.email }, // Query
      { $pull: { doNotShow: restaurant._id } }, // Update
      { new: true } // Return the modified document
    );

    res.status(200).json(`Removed ${restaurant._id} from dont show`);
  } catch (error) {
    res.status(500).json(error.message);
  }
};