import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Main from 'components/UnauthorizedStartPage/Main';
import Login from 'components/UnauthorizedStartPage/RegLog/Login';
import WeddingForm from 'components/Authorized/WeddingForm/WeddingForm';
import NotFound from 'components/NotFound/NotFound';
import RSVP from 'components/Authorized/RSVP/RSVP';
import Toastmasters from 'components/Authorized/Toastmasters/Toastmasters';
import Location from 'components/Authorized/Location/Location';
import AuthorizedMain from 'components/Authorized/AuthorizedMain';

import user from 'reducers/user';
import rsvpdata from 'reducers/rsvps';
import weddingdata from 'reducers/weddingdata';

const reducer = combineReducers({
  user: user.reducer,
  weddingdata: weddingdata.reducer,
  rsvpdata: rsvpdata.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/weddingform' element={<WeddingForm />}></Route>
          <Route path='/weddingform/guestpassword/:guestpassword/location' element={<Location />}></Route>
          <Route path='/weddingform/guestpassword/:guestpassword/toastmasters' element={<Toastmasters />}></Route>
          <Route path='/weddingform/guestpassword/:guestpassword/rsvp' element={<RSVP />}></Route>
          <Route path='/weddingform/guestpassword/:guestpassword' element={<AuthorizedMain />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
