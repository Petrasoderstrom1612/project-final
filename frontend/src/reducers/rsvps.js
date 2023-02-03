import { createSlice } from "@reduxjs/toolkit";

const rsvpdata = createSlice({
  name: "rsvpdata",
  initialState: {
    attendance: null,
    guestname: null,
    guestemail: null,
    accommodation: null,
    foodrestrictions: null,
    guestcomment: null,
    error: null,
    repeatguestpassword: null,
    isLoading: false
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
    setAccommodation: (store, action) => {
      store.accommodation = action.payload
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
    setRepeatGuestPassword: (store, action) => {
      store.repeatguestpassword = action.payload;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    }
  }
}
);

export default rsvpdata;