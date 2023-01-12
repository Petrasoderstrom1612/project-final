import { createSlice } from "@reduxjs/toolkit";

const rsvpdata = createSlice({
  name: "rsvpdata",
  initialState: {
    attendance: null,
    guestname: null,
    guestemail: null,
    accomodation: null,
    foodrestrictions: null,
    guestcomment: null,
    error: null,
  },
  reducers: {
    setAttendance: (store, action) => {
      store.attendance = action.payload;
    },
    setGuestName: (store, action) => {
      store.guestname = action.payload;
    },
    setGuestEmail: (store, action) => {
      store.guestemail = action.payload;
    },
    setAccomodation: (store, action) => {
      store.accomodation = action.payload
    },
    setFoodrestrictions: (store, action) => {
      store.foodrestrictions = action.payload
    },
    setGuestComment: (store, action) => {
      store.guestcomment = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  }
}
);

export default rsvpdata;