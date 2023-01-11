import mongoose from 'mongoose'
import crypto from 'crypto';


// * WEDDING COUPLE AS THE USER
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

// * SCHEMA FOR COUPLE'S FORM
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
  guestpassword: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },
  date: {
    type: String,
    // TODO: validate: YYYY-MM-DD?,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  comment: {
    type: String
  }
})


// * SCHEMA FOR GUEST AUTHENTICATION
// ! Is this needed?
const GuestSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  guestAccessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
});


// * SCHEMA FOR RSVP FORM
const RSVPSchema = new mongoose.Schema({
  attendance: {
    type: Boolean,
    default: true,
    required: true,
  },
  guestname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    trim: true
  },
  guestemail: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },
  accommodation: {
    type: Boolean
  },
  foodrestrictions: {
    type: String
  },
  guestcomment: {
    type: String
  }
})

const Guest = mongoose.model("Guest", GuestSchema);
const User = mongoose.model("User", UserSchema);
const RSVP = mongoose.model("RSVP", RSVPSchema);
const Wedding = mongoose.model("Wedding", WeddingSchema);

module.exports = { Guest, User, RSVP, Wedding };
