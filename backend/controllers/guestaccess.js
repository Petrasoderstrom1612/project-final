import { Wedding } from '../models/models.js';



const guestpassword = Wedding.guestpassword;
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
      response: error.stack
    });
  }
};