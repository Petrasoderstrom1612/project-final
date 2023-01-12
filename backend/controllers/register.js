import bcrypt from 'bcryptjs';
import { User } from '../models/models.js';

const salt = bcrypt.genSaltSync();

export const registerCouple = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (password.length >= 8) {
      const newUser = await new User({ username: username, password: bcrypt.hashSync(password, salt) }).save();
      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: newUser._id
        }
      });

    } else {
      res.status(400).json({
        success: false,
        response: "Password must be at least 8 characters long"
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error.stack
    });
  }
};
