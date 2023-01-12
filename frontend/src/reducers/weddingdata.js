import { createSlice } from "@reduxjs/toolkit";

// TODO: Uppdatera!

const weddingdata = createSlice({
  name: "weddingdata",
  initialState: {
    firstperson: null,
    secondperson: null,
    email: null,
    date: null,
    time: null,
    location: null,
    guestpassword: null,
    comment: null,
    accessToken: null,
    error: null
  },
  reducers: {
    setFirstPerson: (store, action) => {
      store.firstperson = action.payload;
    },
    setSecondPerson: (store, action) => {
      store.secondperson = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setPhonenumber: (store, action) => {
      store.phonenumber = action.payload;
    },
    setDate: (store, action) => {
      store.date = action.payload;
    },
    setTime: (store, action) => {
      store.time = action.payload;
    },
    setLocation: (store, action) => {
      store.location = action.payload;
    },
    setGuestpassword: (store, action) => {
      store.guestpassword = action.payload;
    },
    setComment: (store, action) => {
      store.comment = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  }
});

export default weddingdata;