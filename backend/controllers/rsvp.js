const { RSVP } = require('../models/models.js');

export const createRSVP = async (req, res) => {
  const { firstname, lastname, email } = req.body; //do not forget destructuring from the RSVPSchema
  try {
    const newRSVP = await new RSVP({ firstname, lastname, email }).save();  //do not forget destructuring from the RSVPSchema
    res.status(201).json({ success: true, response: newRSVP });
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
};

export const viewRSVP = async (req, res) => {
  const rsvpform = await RSVP.find({});
  res.status(200).json({ success: true, response: rsvpform });
};
