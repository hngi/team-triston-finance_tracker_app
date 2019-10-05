import React, { useState } from 'react';
import { Footer } from "./components";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { UserContextProvider } from './UserContext';

// pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Expense from './pages/Expense';
import Report from './pages/Report';
import ForgotPassword  from './pages/ForgotPassword';
import Team from './pages/Team.js';


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
              <Route path="/team" component={ Team } />
            </Switch>
          </BrowserRouter>
        </section>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
