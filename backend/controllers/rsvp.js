import { RSVP } from '../models/models.js';


export const createRSVP = async (req, res) => {
  const { attendance, guestname, guestemail, accommodation, foodrestrictions, guestcomment } = req.body;
  try {
    const newRSVP = await new RSVP({ attendance, guestname, guestemail, accommodation, foodrestrictions, guestcomment }).save();
    res.status(201).json({ success: true, response: newRSVP });
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
};

export const viewRSVP = async (req, res) => {
  const rsvpform = await RSVP.find({});
  res.status(200).json({ success: true, response: rsvpform });
};

