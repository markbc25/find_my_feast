mongoose = require("mongoose");
const Joi = require("joi");

// Define schema for user
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  email: { type: String, unique: true },
  restrictions: [{ type: String }],
  token: { type: String },
  favoriteRestaurant: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
});

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    restrictions: Joi.array().items(Joi.string()),
  });
  return schema.validate(user);
};

const User = mongoose.model('User', userSchema);
module.exports = { User, validateUser };