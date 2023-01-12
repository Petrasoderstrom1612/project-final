import { Wedding } from '../models/models.js';

export const createWedding = async (req, res) => {
  const {
    firstperson,
    secondperson,
    email,
    phonenumber,
    guestpassword,
    date,
    time,
    location,
    comment
  } = req.body;

  if (
    firstperson,
    secondperson,
    email,
    phonenumber,
    guestpassword,
    date,
    time,
    location) {
    const singleWedding = await Wedding.findOne({ guestpassword: guestpassword }) // FirstOne - databasen : SecondOne - incomming
    if (singleWedding === null) {
      try {
        const newWedding = await new Wedding({ firstperson, secondperson, email, phonenumber, guestpassword, date, time, location, comment }).save();  // ! do not forget destructuring from the WeddingSchema
        res.status(201).json({ success: true, response: newWedding });
      } catch (error) {
        res.status(400).json({ success: false, response: error.stack });
      }
    }
    else if (singleWedding.guestpassword === guestpassword) { // FirstOne - databasen === SecondOne - incomming
      res.status(400).json({
        success: false,
        response: 'Password already exists, choose another password.'
      })
    } else {
      res.status(400).json({ success: false, response: 'Some required fields are missing' });
    }
  }
}
export const viewSpecificWedding = async (req, res) => {
  try {
    const singleWedding = await Wedding.findOne({ guestpassword: req.params.guestpassword })
    if (singleWedding) {
      res.status(200).json({
        success: true,
        body: singleWedding
      });
    } else {
      res.status(404).json({
        success: false,
        body: {
          message: "Could not find the wedding"
        }
      });
    }
  }
  catch (error) {
    res.status(400).json({
      success: false,
      body: {
        message: "Invalid id"
      }
    });
  }
};


// * This does not work ATM... empty array
// ! Remember to remove
export const updateWedding = async (req, res) => {
  const { id } = req.params;
  const opts = { runValidators: true };
  try {
    const adjustToUpdate = await Wedding.findByIdAndUpdate(id, { firstperson, secondperson, email, registrationdate, guestpassword }, opts);
    res.status(200).json({ success: true, response: `this information: ${adjustToUpdate.id} has been updated` })
  } catch (error) {
    res.status(400).json({ success: false, response: error.stack });
  }
};
