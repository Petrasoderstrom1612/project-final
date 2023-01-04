const { Wedding } = require('../models/models.js')

//Vi måste validera mot rätt wedding-id på något sätt här.... 

const guestpassword = Wedding.guestpassword;
//Function for authenticate guest const authenticateUser = async (req, res, next) => {
export const giveGuestAccess = async (req, res) => {
  const guestAccess = req.body;
  try {
    if (guestAccess === guestpassword) {
      res.status(200).json({
        success: true,
        response: 'you are allowed in'

      });
    } else {
      res.status(400).json({
        success: false,
        response: "Not correct password"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      response: error
    });
  }
};