import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/Unauthorized/Main';
import Login from 'components/Login';
import NotFound from 'components/NotFound';
import RSVP from 'components/Authorized/RSVP';
import Toastmasters from 'components/Authorized/Toastmasters';
import WeddingForm from 'components/Authorized/WeddingForm';
import Location from 'components/Authorized/Location/Location';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'reducers/user';
import Navbar from 'components/Navbar';



const reducer = combineReducers({
  user: user.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
            <Navbar/>
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
