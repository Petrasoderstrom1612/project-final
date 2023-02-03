import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { loginUser } from './controllers/login.js';
import { registerCouple } from './controllers/register.js';
import { createWedding, viewSpecificWedding } from "./controllers/wedding.js";
import { viewRSVP, createRSVP } from "./controllers/rsvp.js";
import { authenticateUser } from './controllers/authentication.js'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-mongo"

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const port = process.env.PORT || 8090;
export const app = express();

app.use(cors());
app.use(express.json());

// ALL THE ROUTES //

//THE GET REQUEST FOR START PAGE
app.get("/", (req, res) => {
  res.send({
    "Message": "Blissful Beginnings welcomes you to this API",
    "RoutesAndMethods":
      [{
        "/register": "a new couple registers here via POST method",
        "/login": "the couple logs in to access the wedding form via POST method",
        "/wedding": "the couple can GET the API information of the wedding form",
        "/wedding": "the couple can POST information on the wedding form",
        "/wedding/": "to GET a list of all weddings in db",
        "/rsvpform": "the guests GET the entire API for RSVP",
        "/rsvpform": "the guests POST their RSVP answer"
      }]
  });
});

//REGISTER AS A COUPLE
app.post('/register', registerCouple);

//LOGIN AS A COUPLE
app.post('/login', loginUser);

//POST THE WEDDINGFORM API AS A COUPLE
app.post('/wedding', authenticateUser, createWedding);

//GET THE WHOLE WEDDINGFORM API AS A COUPLE 
app.get("/wedding/:guestpassword", authenticateUser, viewSpecificWedding);

//GET THE ENTIRE API FOR RSVP FORM AS A GUEST |DELETE?|
app.get("/rsvpform", viewRSVP);

//POST ON THE RSVP FORM AS A GUEST (NEEDS to ADD AUTHENTICATION?)
app.post("/rsvpform", createRSVP);


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



