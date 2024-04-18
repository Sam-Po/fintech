const User = require('../model/User');

class UserController {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Server error' });
    }
  }

  async getUserById(req, res) {
    try {
      const { userId } = req.params; 
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Server error' });
    }
  }
  
  async deleteUser(req, res) {
    try {
      const { userId } = req.params; 
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Server error' });
    }
  }
}

module.exports = new UserController();
