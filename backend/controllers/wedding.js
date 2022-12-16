import bcrypt from 'bcrypt';

const { Wedding } = require('../models/models.js');

//Här måste vi nog lägga till någon authentication så att bara inloggade kan posta wedding forms?

 export const createWedding = async (req, res) => {
        const { firstperson, secondperson, email, guestpassword } = req.body; //do not forget destructuring from the WeddingSchema
        try {
          const newWedding = await new Wedding({ firstperson, secondperson, email, guestpassword }).save();  //do not forget destructuring from the WeddingSchema
          res.status(201).json({ success: true, response: newWedding }); 
        }
        catch (error) {
          res.status(400).json({ success: false, response: error });
        }
      };

      export const viewWedding = async (req, res) => {
            const weddingform = await Wedding.find({});
            res.status(200).json({ success: true, response: weddingform });
          };


          //This does not work ATM... empty array
    export const updateWedding = async (req, res) => {
                const { id } = req.params;
                const opts = { runValidators: true };
                try{
                  const adjustToUpdate = await Wedding.findByIdAndUpdate(id, {firstperson, secondperson, email, registrationdate, guestpassword}, opts);
                  res.status(200).json({success: true, response:`this information: ${adjustToUpdate.id} has been updated`})
                } catch (error) {
                  res.status(400).json({success: false, response: error});
                }
              };
            