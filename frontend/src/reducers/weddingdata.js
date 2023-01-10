import { createSlice } from "@reduxjs/toolkit";

const weddingdata = createSlice({
  name: "weddingdata",
  initialState: {
    items: [],
    firstperson: null,
    secondperson: null,
    email: null,
    userId: null,
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

export default weddingdata;