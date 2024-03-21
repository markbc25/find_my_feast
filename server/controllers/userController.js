const User = require("../models/userModel.js");
// TODO: We may add more things to user like email, password. May add changes later
exports.getUser = async (req, res) => {
    try {
      const { id } = req.body;
      console.log(id);
      const user = await User.findByPk(id); 

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({user});
    } catch (error) {
      console.error('Error getting user name:', error);
      res.status(500).json({ error: 'Server error' });
        }
}
  
exports.updateUser = async (req, res) => {
    try {
      const { id, user_name, restrictions } = req.body;
  
      const user = await User.findByPk(id); 
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

    if(user_name) {
      user.user_name = user_name;
    }

    if(restrictions) {  
        user.restrictions = restrictions;
    }

      user.save();

      // Send a success response
      res.json({ message: 'Username updated successfully' });
    }
    
    
    catch (error) {
      console.  error('Error updating user name:', error);
      res.status(500).json({ error: 'Server error' });
    }
}