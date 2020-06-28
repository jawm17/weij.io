import React from 'react';
import {  Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/feedPage";
import SignIn from "./components/SignIn";
import PPPage from "./pages/PPPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Register from './components/Register';
import Wallet from "./pages/walletPage";
import NoMatch from "./pages/noMatchPage";
import PrivateRoute from './hocs/PrivateRoute';
import UserRestrictedRoute from './hocs/UserRestrictedRoute';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <UserRestrictedRoute exact path="/login" component={SignIn} />
        <UserRestrictedRoute exact path="/register" component={Register} />
        <Route path="/user/:user" component={ProfilePage} />
        <PrivateRoute path="/profile" component={PPPage} />
        <PrivateRoute path="/user" component={ProfilePage} />
        <PrivateRoute exact path={["/", "/home"]} component={Feed} />
        <PrivateRoute exact path={["/wallet"]} component={Wallet} />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
