import { createSlice } from "@reduxjs/toolkit";

const weddings = createSlice({
  name: "wedding",
  initialState: {
<<<<<<< HEAD
=======
    items: [],
>>>>>>> forms
    firstperson: null,
    secondperson: null,
    email: null,
    userId: null,
    accessToken: null
  },
  reducers: {
<<<<<<< HEAD

=======
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
>>>>>>> forms
    setFirstPerson: (store, action) => {
      store.firstperson = action.payload;
    },
    setSecondPerson: (store, action) => {
      store.secondperson = action.payload;
    },
    setEmail: (store, action) => {
      store.email = action.payload;
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    }
  }
});

export default weddings;