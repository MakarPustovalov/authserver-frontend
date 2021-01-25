import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import AuthPage from './Components/AuthPage';
import MainPage from './Components/MainPage';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Unathorized from './Components/Unathorized';

const App = () => {
  return (
    <BrowserRouter>

      <Route exact path="/">
        <MainPage />
      </Route>

      <Route exact path="/auth/login">
        <AuthPage />
      </Route>

      <Route exact path="/auth/register">
        <Register />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route exact path="/unathorized">
        <Unathorized />
      </Route>

    </BrowserRouter>
  );
}

export default App;