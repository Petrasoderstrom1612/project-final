import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/Unauthorized/Main';
import Login from 'components/Login';
import NotFound from 'components/NotFound';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thoughts from 'reducers/thoughts';
import user from 'reducers/user';

const reducer = combineReducers({
  user: user.reducer,
  thoughts: thoughts.reducer
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
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
};
