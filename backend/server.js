import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import crypto from "crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv"

dotenv.config()

const mongoUrl = process.env.MONGO_URL || `mongodb+srv://Font:${process.env.STRING_PW}@cluster0.8xh88s6.mongodb.net/projectAuth?retryWrites=true&w=majority`;
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
  res.send("Hello Technigo!");
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

const ThoughtSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  },
  hearts: {
    type: Number,
    default: 0
  }
});


const Thought = mongoose.model("Thought", ThoughtSchema);

app.get("/thoughts", authenticateUser);
app.get("/thoughts", async (req, res) => {
  const thoughts = await Thought.find({});
  res.status(200).json({ success: true, response: thoughts });
});

app.post("/thoughts", authenticateUser)
app.post("/thoughts", async (req, res) => {
  const { message } = req.body;
  try {
    const newThought = await new Thought({ message }).save();
    res.status(201).json({ success: true, response: newThought });
  } catch (error) {
    res.status(400).json({ success: false, response: error });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});