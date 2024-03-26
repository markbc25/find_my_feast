const { Restaurant } = require("../models/restaurantModel.js");
const User = require("../models/userModel.js");

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
  if(!User.findOne({_id: _id}))
    return res.status(404).send('User not found');
  
  const favoriteRestaurants = await User.findOne({email: "anna.brooks@tamu.edu"}).populate("favoriteRestaurant");
  res.status(200).json(favoriteRestaurants);
}

exports.addFavorites = async (req, res) => {
  try {
    if (!req.body.id || !req.body.restaurantId) 
      return res.status(400).send('Invalid request');

      const restaurant = await Restaurant.findOne({ id: "ChIJOy5yQWKERoYRVvWcfuDq2Ig" });
      const user = await User.findOne({ email: "anna.brooks@tamu.edu" });

      if(!user)
        res.status(404).send('User not found');
      if(!restaurant)
        restaurant = Restaurant.create();

      const userDoc = await User.findOneAndUpdate(
        { email: email }, // Query
        { $push: { favoriteRestaurant: restaurant._id } }, // Update
        { new: true } // Return the modified document
      );

      res.status(200).json("Added to favorites");
  } catch (error) {
    res.status(500).json(error.message);
  }

}
exports.deleteFavorites = async (req, res) => {
  const userDoc = await User.findOneAndUpdate(
    { email: email  }, // Query
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

