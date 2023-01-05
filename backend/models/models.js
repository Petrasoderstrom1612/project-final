import mongoose from 'mongoose'
import crypto from 'crypto';


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

//WEDDING SCHEMA
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
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
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


// SCHEMA FOR GUEST AUTHENTICATION
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


//RSVP SCHEMA
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
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },
  registrationdate: {
    type: String, //date picker
    default: () => new Date()
  } ,
    attending: {
      type: Boolean,
      default: true,
      required: true,
    }/*,
    foodrestrictions: {
      type: String
    },
    accommodation: {
      type: Boolean
    },
    message: {
      type: String
    } */
})

const Guest = mongoose.model("Guest", GuestSchema);
const User = mongoose.model("User", UserSchema);
const RSVP = mongoose.model("RSVP", RSVPSchema);
const Wedding = mongoose.model("Wedding", WeddingSchema);

module.exports = { Guest, User, RSVP, Wedding };
