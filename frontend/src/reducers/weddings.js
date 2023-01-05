import { createSlice } from "@reduxjs/toolkit";

const weddings = createSlice({
  name: "weddings",
  initialState: {
    items: [],
    firstperson: null,
    secondperson: null,
    email: null,
    error: null,
    accessToken: null
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setFirstPerson: (store, action) => {
      store.firstperson = action.payload;
    },
    setSecondPerson: (store, action) => {
      store.secondperson = action.payload;
    },
    setEmail: (store, action) => {
      store.userId = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    }
  }
});

export default weddings;