import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { loginUser } from './controllers/login.js';
import { registerCouple } from './controllers/register.js';
import { giveGuestAccess } from "./controllers/guestaccess.js";
import { createWedding, viewWedding, updateWedding } from "./controllers/wedding.js";
import { authenticateUser , authenticateGuest } from './controllers/authentication.js'


dotenv.config();

const { User, Wedding } = require('./models/models.js');

const mongoUrl = process.env.MONGO_URL || `mongodb+srv://Paprika:${process.env.STRING_PW}@cluster0.6gvgrxz.mongodb.net/project-final?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8090;
export const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

                                  // ALL THE ROUTES //

//THE GET REQUEST FOR START PAGE
app.get("/", (req, res) => {
  res.send({
  "Message": "Blissfull beginnings agency welcomes you to this API",
  "RoutesAndMethods": 
    [{"/register": "a new couple registers here via POST method",
      "/login": "the couple logs in to access the wedding form via POST method",
      "/weddingform": "the couple can GET the API information of the wedding form",
      "/weddingform": "the couple can POST information on the wedding form",
      "/weddingform/:id/adjust": "the couple can change info on the wedding form via PATCH",
      "/rsvpform": "the guests GET the entire API for RSVP",
      "/rsvpform": "the guests POST their RSVP answer"}]
  });
});

//REGISTER AS A COUPLE
app.post('/register', registerCouple);

//LOGIN AS A COUPLE
app.post('/login', loginUser);

//POST THE WEDDINGFORM API AS A COUPLE
app.post('/weddingform', createWedding, authenticateUser); //Osäker på authenticateUser här....
//GET THE WHOLE WEDDINGFORM API AS A COUPLE |DELETE?|
app.get("/weddingform", viewWedding, authenticateUser); //login as authorized couple

//UPDATE THE WEDDING FORM AS A COUPLE |NOT WORKING| //I get an empty array when I try to update and include all the fields, otherwise error
app.patch('/weddingform/:id/adjust', updateWedding);

app.post('/guestaccess', giveGuestAccess);

//REGISTER AS A GUEST
/* app.post("/guestregister", async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();
    if (password.length < 8) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 8 characters long"
      });
    } else {
      const newGuest = await new Guest({ username: username, password: bcrypt.hashSync(password, salt) }).save();
      res.status(201).json({
        success: true,
        response: {
          username: newGuest.username,
          accessToken: newGuest.guestAccessToken,
          id: newGuest._id
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: "The username is already in use"
    });
  }
}); */

//GET THE ENTIRE API FOR RSVP FORM AS A GUEST |DELETE?|
/* app.get("/rsvpform", authenticateGuest);   
app.get("/rsvpform", async (req, res) => { //???
  const rsvpform = await RSVP.find({});
  res.status(200).json({ success: true, response: rsvpform });
}); */

//POST ON THE RSVP FORM AS A GUEST
/* app.post("/rsvpform", authenticateGuest) 
app.post("/rsvpform", async (req, res) => {
  const { firstname, lastname, email } = req.body; //do not forget destructuring from the RSVPSchema
  try {
    const newRSVP = await new RSVP({ firstname, lastname, email }).save();  //do not forget destructuring from the RSVPSchema
    res.status(201).json({ success: true, response: newRSVP }); 
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
}); */


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



                                                        //QUESTIONS
//Questions thursday 15/12: 👌
//1. row 216 : How do we display the Wedding-form instead of the db response? answer: added through the frontend but must be mapped with schema objects
//2. How to authenticate guest by only one secret word? [answered by daniel thursday 15/12 around 10:40 in recording] 
//3. How can the couple get an email when rsvpform is submitted? 
//4. How to validate date input in schema?




