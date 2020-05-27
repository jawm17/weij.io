import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from "./pages/feedPage";
import SignIn from "./components/SignIn";
import Profile from "./pages/profilePage";
import Register from './components/Register';
import Wallet from "./pages/walletPage";
import PrivateRoute from './hocs/PrivateRoute';
import UserRestrictedRoute from './hocs/UserRestrictedRoute';

function App() {
  return (
    <Router>
      <UserRestrictedRoute exact path="/login" component={SignIn} />
      <UserRestrictedRoute exact path="/register" component={Register} />
      <PrivateRoute path="/profile" component={Profile}/>
      <PrivateRoute exact path={["/", "/home"]} component={Feed} />
      <PrivateRoute exact path={["/wallet"]} component={Wallet} />
    </Router>
  );
}

export default App;
