import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv"

dotenv.config();

const mongoUrl = process.env.MONGO_URL || `mongodb+srv://Paprika:${process.env.STRING_PW}@cluster0.6gvgrxz.mongodb.net/project-final?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;


// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8090;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

                              // ALL THE SCHEMAS //

//SCHEMA FOR COUPLE REGISTRATION/LOGIN
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});

// SCHEMA FOR GUEST AUTHENTICATION
const GuestSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  guestAccessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});

const User = mongoose.model("User", UserSchema);
const RSVPSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  registrationdate: {
    type: String, //date picker
    default: () => new Date()
  }/* ,
  attending: {
    type: Boolean,
    default: true,
    required: true,
  },
  foodrestrictions: {
    type: String
  },
  accommodation: {
    type: Boolean
  } */
})

const RSVP = mongoose.model("RSVP", RSVPSchema)

const WeddingSchema = new mongoose.Schema({
  firstperson: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    trim: true
  },
  secondperson: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  registrationdate: {
    type: String,
    default: () => new Date()
  },
  guestpassword: {
    type: String,
    required: true,
    unique: true
  }/* ,
  weddingdate: {
    type: String,
    //validate: YYYY-MM-DD?,
    required: true
  },
  venuename: {
    type: String
  },
  venueadress: {
    venueaddressstreet: {
      type: String
    },
    venueaddressstreetnumber: {
      type: Number
    },
    venueaddresspostalcode: {
      type: Number
    },
    venueaddresscity: {
      type: String
    }
} */
})

//Aspstigen 2 , Stockholm, 16869

const Wedding = mongoose.model("Wedding", WeddingSchema)


                                          // ALL THE FUNCTIONS //
//Function for authenticate the couple
const authenticateUser = async (req, res, next) => {
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
  }
}

//Function for authenticate guest 
const authenticateGuest = async (req, res, next) => {
  const guestAccessToken = req.header("Authorization");
  try {
    const user = await User.findOne({ guestAccessToken: guestAccessToken });
    if (user) {
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

                                  // ALL THE ROUTES //

//THE GET REQUEST FOR START PAGE
app.get("/", (req, res) => {
  res.send("Hello girls!");
});


//THE POST REQUEST FOR REGISTER AS COUPLE
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const salt = bcrypt.genSaltSync();
    if (password.length < 8) {
      res.status(400).json({
        success: false,
        response: "Password must be at least 8 characters long"
      });
    } else {
      const newUser = await new User({ username: username, password: bcrypt.hashSync(password, salt) }).save();
      res.status(201).json({
        success: true,
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          id: newUser._id
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: "The username is already in use"
    });
  }
});

//The POST REQUEST for login as couple
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          username: user.username,
          id: user._id,
          accessToken: user.accessToken
        }
      });
    } else {
      res.status(400).json({
        success: false,
        response: "Credentials didn't match"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      response: error
    });
  }
});

app.get("/weddingform", authenticateUser); //login as authorized couple
app.get("/weddingform", async (req, res) => { //get all weddings info 
  const weddingform = await Wedding.find({});
  res.status(200).json({ success: true, response: weddingform });
});

app.post("/weddingform", authenticateUser) //post information as authenticated couple
app.post("/weddingform", async (req, res) => {
  const { firstperson, secondperson, email, guestpassword } = req.body; //do not forget destructuring from the WeddingSchema
  try {
    const newWedding = await new Wedding({ firstperson, secondperson, email, guestpassword }).save();  //do not forget destructuring from the WeddingSchema
    res.status(201).json({ success: true, response: newWedding }); 
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
});

//create patch for wedding form
app.patch("/weddingform/:id/adjust", async (req, res) => {
  const { id } = req.params;
  const opts = { runValidators: true };
  try{
    const adjustToUpdate = await Wedding.findByIdAndUpdate(id, {firstperson, secondperson, email, registrationdate, guestpassword}, opts);
    res.status(200).json({success: true, response:`this information: ${adjustToUpdate.id} has been updated`})
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
})

app.get("/rsvpform", authenticateGuest);   //login as authenticated guest
app.get("/rsvpform", async (req, res) => { //???
  const rsvpform = await RSVP.find({});
  res.status(200).json({ success: true, response: rsvpform });
});

app.post("/rsvpform", authenticateGuest) //post as authenticated guest
app.post("/rsvpform", async (req, res) => {
  const { firstname, lastname, email } = req.body; //do not forget destructuring from the RSVPSchema
  try {
    const newRSVP = await new RSVP({ firstname, lastname, email }).save();  //do not forget destructuring from the RSVPSchema
    res.status(201).json({ success: true, response: newRSVP }); 
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
});


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