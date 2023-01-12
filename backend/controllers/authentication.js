import { User } from '../models/models.js';

export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  console.log('dethär är accesstoken', accessToken)
  try {
    const user = await User.findOne({ accessToken: accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({
        response: "Please log in",
        success: false
      })
    }
  } catch (error) {
    res.status(400).json({
      response: error.stack,
      success: false
    })
  };
}