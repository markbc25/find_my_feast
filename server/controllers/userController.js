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
    console.log("information user and restaurant passed");
    console.log("FAVORITES : " +  JSON.stringify(req.body));
    let restaurant = await Restaurant.findOne({ id: req.body.restaurant.id });
    const user = await User.findOne({ email: req.body.user.email });

    if (!user)
      res.status(404).send('User not found');
    //console.log("Checking if restaurant is in user's fav...")
    if (restaurant && user.favoriteRestaurant.includes(restaurant._id)) {
      return res.status(400).send('Restaurant already in favorites');
    }
    else {
      //console.log("Attempting to create restautnt...")
      restaurant = await Restaurant.create(req.body.restaurant);
      //console.log("CREATED")
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
    console.log("passed body and restaurant");
    console.log("restaurant: " + JSON.stringify(req.body.restaurant));

    let restaurant;
    try {
      restaurant = await Restaurant.findOne({ id: req.body.restaurant.id });
    } catch (error) {
      throw new Error(`Error finding restaurant: ${error.message}`);
    }
    
    let user;
    try {
      user = await User.findOne({ email: req.body.user.email });
    } catch (error) {
      throw new Error(`Error finding user: ${error.message}`);
    }
    console.log("restaurant and user")
    if (!user)
      return res.status(404).send('User not found');
    console.log("Checking if restaurant is already in doNotShow")
    if (restaurant && user.doNotShow.includes(restaurant._id)) {
      return res.status(400).send('Restaurant already in doNotShow');
    }
    else {
      console.log("Attempting to create restaurant")
      try {
        restaurant = await Restaurant.create(req.body.restaurant);
      } catch (error) {
        throw new Error(`Error creating restaurant: ${error.message}`);
      }
      console.log("Restaurant created")
    }

    try {
      const userDoc = await User.findOneAndUpdate(
        { email: req.body.user.email }, // Query
        { $push: { doNotShow: restaurant._id } }, // Update
        { new: true } // Return the modified document
      );
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }

    res.status(200).json(`Added ${restaurant.id} to doNotShow`);
  } catch (error) {
    res.status(500).json(error.message);
  }
}


exports.deleteDoNotShow = async (req, res) => {

}

