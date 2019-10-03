import React, { useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UserContextProvider } from './UserContext';
import { Footer } from "./components";

import { PrivateRoute } from './components/PrivateRoute';
import Expense from './pages/Expense';
import ForgotPassword  from './pages/ForgotPassword';
import Login from './pages/Login';
import Report from './pages/Report';
import Signup from './pages/Signup';


function App() {

  const authUser = localStorage["_authuser"] ? JSON.parse(localStorage["_authuser"]) : {isLoggedIn:false, userData:{}};

  const [user, updateUser] = useState(authUser);

  return (
    <UserContextProvider value={{ user, updateUser }}>
        <section className="main">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route path="/forgot-password" component={ ForgotPassword } />
              <Route path="/get-started" component={ Signup } />
              <PrivateRoute isAuthenticated = { user.isLoggedIn } path="/add-expense" component={ Expense } />
              <PrivateRoute isAuthenticated = { user.isLoggedIn } path="/report" component={ Report } />
            </Switch>
          </BrowserRouter>
        </section>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
