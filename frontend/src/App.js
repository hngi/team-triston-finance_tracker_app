import React from 'react';
import { Footer } from "./components";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

// pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Expense from './pages/Expense';
import Report from './pages/Report';
import ForgotPassword  from './pages/ForgotPassword';
import dashboard from './pages/dashboard';

function App() {
  return (
    <>
      {/* <Header /> */}
        <section className="main">
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={ Login } />
              <Route exact path="/forgot-password" component={ ForgotPassword } />
              <Route exact path="/get-started" component={ Signup } />
              <PrivateRoute exact path="/add-expense" component={ Expense } />
              <PrivateRoute exact path="/report" component={ Report } />
              <PrivateRoute exact path="/dashboard" component={ dashboard } />
            </Switch>
          </BrowserRouter>
        </section>
      <Footer />
    </>
  );
}

export default App;
