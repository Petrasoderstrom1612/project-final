import { createSlice } from "@reduxjs/toolkit";

const rsvpdata = createSlice({
  name: "rsvpdata",
  initialState: {
    firstname: null,
    lastname: null,
    email: null,
    attending: false,
    error: null,
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload;
    },
    setFirstName: (store, action) => {
      store.firstname = action.payload;
    },
    setLastName: (store, action) => {
      store.lastname = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setAttending: (store, action) => {
      store.attending = action.payload
    }
  }
}
);

export default rsvpdata;