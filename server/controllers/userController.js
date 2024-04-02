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
  const { id } = req.body;
  if (!User.findOne({ _id: _id }))
    return res.status(404).send('User not found');

  const favoriteRestaurants = await User.findOne({ email: "anna.brooks@tamu.edu" }).populate("favoriteRestaurant");
  res.status(200).json(favoriteRestaurants);
}

exports.addFavorites = async (req, res) => {
  try {
    if (!req.body.user || !req.body.restaurant)
      return res.status(400).send('Invalid request');
    console.log("information user and restaurant passed")
    console.log(req.body)
    let restaurant = await Restaurant.findOne({ id: req.body.restaurant.id });
    const user = await User.findOne({ email: req.body.user.email });

    if (!user)
      res.status(404).send('User not found');
    console.log("Checking if restaurant is in user's fav...")
    if (restaurant && user.favoriteRestaurant.includes(restaurant._id)) {
      return res.status(400).send('Restaurant already in favorites');
    }
    else {
      console.log("Attempting to create restautnt...")
      restaurant = await Restaurant.create(req.body.restaurant);
      console.log("CREATED")
    }

    const userDoc = await User.findOneAndUpdate(
      { email: req.body.user.email }, // Query
      { $push: { favoriteRestaurant: restaurant._id } }, // Update
      { new: true } // Return the modified document
    );

    res.status(200).json(`Added ${restaurant.id} to favorites`);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

exports.deleteFavorites = async (req, res) => {
  const userDoc = await User.findOneAndUpdate(
    { email: email }, // Query
    { $pull: { favoriteRestaurant: restaurant._id } }, // Update
    { new: true } // Return the modified document
  );
  res.status(204).send("Deleted from favorites");
}
// Do Not Show controllers
exports.getDoNotShow = async (req, res) => {

}

exports.addDoNotShow = async (req, res) => {

}

exports.deleteDoNotShow = async (req, res) => {

}

