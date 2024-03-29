import bcrypt from "bcryptjs";
import { User } from '../models/models.js';

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          username: user.username,
          id: user._id,
          accessToken: user.accessToken
        }
      });
    } else {
      res.status(400).json({
        success: false,
        response: "Your username or password was incorrect"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      response: error.stack
    });
  }
};