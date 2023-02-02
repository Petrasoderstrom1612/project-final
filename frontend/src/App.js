import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import UnauthorizedMain from 'components/UnauthorizedStartPage/UnauthorizedMain';
import WeddingForm from 'components/Authorized/WeddingForm/WeddingForm';
import NotFound from 'components/NotFound/NotFound';
import RSVP from 'components/Authorized/RSVPform/RSVPform';
import Location from 'components/Authorized/Location/Location';
import AuthorizedMain from 'components/Authorized/AuthorizedMain';
import RsvpConfirmation from 'components/Authorized/RSVPform/RsvpConfirmation';

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
          <Route path='/' element={<UnauthorizedMain />} />
          <Route path='/wedding' element={<WeddingForm />} />
          <Route path='/wedding/:guestpassword' element={<AuthorizedMain />} />
          <Route path='/wedding/location/:guestpassword' element={<Location />} />
          <Route path='/wedding/rsvp/:guestpassword' element={<RSVP />} />
          <Route path='/wedding/confirmation/:guestpassword' element={<RsvpConfirmation />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
