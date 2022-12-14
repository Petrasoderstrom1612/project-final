import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv"

dotenv.config()

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

const User = mongoose.model("User", UserSchema);


// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello girls!");
});

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

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await User.findOne({ accessToken: accessToken });
    if (user) {
      next();
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
  }
})

const Wedding = mongoose.model("Wedding", WeddingSchema)

app.get("/weddingform", authenticateUser);
app.get("/weddingform", async (req, res) => {
  const weddingform = await Wedding.find({});
  res.status(200).json({ success: true, response: weddingform });
});

app.post("/weddingform", authenticateUser)
app.post("/weddingform", async (req, res) => {
  const { firstperson, secondperson, email } = req.body; //do not forget destructuring from the WeddingSchema
  try {
    const newWedding = await new Wedding({ firstperson, secondperson, email }).save();  //do not forget destructuring from the WeddingSchema
    res.status(201).json({ success: true, response: newWedding }); 
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
});

//create patch
app.patch("/weddingform/:id/adjust", async (req, res) => {
  const { id } = req.params;
  const opts = { runValidators: true };
  try{
    const adjustToUpdate = await Wedding.findByIdAndUpdate(id, {firstperson, secondperson, email}, opts);
    res.status(200).json({success: true, response:`this information: ${adjustToUpdate.id} has been updated`})
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
})

const RSVPSchema = new mongoose.Schema({
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
  }
})

const RSVP = mongoose.model("RSVP", RSVPSchema)

app.get("/rsvpform", authenticateUser);
app.get("/rsvpform", async (req, res) => {
  const rsvpform = await RSVP.find({});
  res.status(200).json({ success: true, response: rsvpform });
});

app.post("/rsvpform", authenticateUser)
app.post("/rsvpform", async (req, res) => {
  const { firstperson, secondperson, email } = req.body; //do not forget destructuring from the RSVPSchema
  try {
    const newRSVP = await new RSVP({ firstperson, secondperson, email }).save();  //do not forget destructuring from the RSVPSchema
    res.status(201).json({ success: true, response: newRSVP }); 
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});