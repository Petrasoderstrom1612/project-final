

//Här måste vi importera User och Guest från 
const { User, Guest } = require('../models/models.js')

//Function for authenticate guest const authenticateUser = async (req, res, next) => {
  export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await User.findOne({ accessToken: accessToken });
    if (user) {
      next(); //here we want them to access the wedding form??? 
    } else {
      res.status(401).json({
        response: "Please log in",
        success: false
      })
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false
    })
  };
}

  //Added export on each function
export const authenticateGuest = async (req, res, next) => {
    const guestAccessToken = req.header("Authorization");
    try {
      const guest = await Guest.findOne({ guestAccessToken: guestAccessToken });
      if (guest) {
        next(); //here we want to send guest to rsvp-form??
      } else {
        res.status(401).json({
          response: "Please log in",
          success: false
        })
      }
    } catch (error) {
      res.status(400).json({
        response: error,
        success: false
      })
    }
  }