import { createSlice } from "@reduxjs/toolkit";

const weddings = createSlice({
  name: "weddings",
  initialState: {
    items: [],
    firstname: null,
    lastname: null,
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
    setFirstName: (store, action) => {
      store.username = action.payload;
    },
    setLastName: (store, action) => {
      store.error = action.payload;
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