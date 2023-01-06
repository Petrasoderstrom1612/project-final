import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Header from 'components/HeaderNav/Header';
import Main from 'components/UnauthorizedStartPage/Main';
import Login from 'components/RegLog/Login';
import WeddingForm from 'components/Authorized/WeddingForm/WeddingForm';
import NotFound from 'components/NotFound/NotFound';
import RSVP from 'components/Authorized/RsvpForm/RSVP';
import Toastmasters from 'components/Authorized/Toastmasters';
import Location from 'components/Authorized/Location/Location';

import user from 'reducers/user';

const reducer = combineReducers({
  user: user.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/weddingform' element={<WeddingForm />}></Route>
            <Route path='/location' element={<Location />}></Route>
            <Route path='/toastmasters' element={<Toastmasters />}></Route>
            <Route path='/rsvp' element={<RSVP />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
