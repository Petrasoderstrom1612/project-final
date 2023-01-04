import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/Unauthorized/Main';
import Login from 'components/Login';
import NotFound from 'components/NotFound';
import RSVP from 'components/Authorized/RSVP';
import Toastmasters from 'components/Authorized/Toastmasters';
import WeddingForm from 'components/Authorized/WeddingForm';
import Location from 'components/Authorized/Location';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'reducers/user';
import MapLocation from 'components/MapLocation';

const reducer = combineReducers({
  user: user.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />}></Route>
            <Route path='/RSVP' element={<RSVP />}></Route>
            <Route path='/WeddingForm' element={<WeddingForm />}></Route>
            <Route path='/Location' element={<Location />}></Route>
            <Route path='/Toastmasters' element={<Toastmasters />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
