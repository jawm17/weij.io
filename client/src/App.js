import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/FeedPage/FeedPage";
import SignIn from "./components/SignIn";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import TreasureHunt from "./pages/TreasureHunt/TreasureHunt";
import Register from './components/Register';
import Wallet from "./pages/WalletPage/WalletPage";
import SearchPage from "./pages/SearchPage";
import NoMatchPage from "./pages/NoMatchPage";
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
        <PrivateRoute path="/profile" component={UserProfilePage} />
        <PrivateRoute exact path="/search" component={SearchPage} />
        <PrivateRoute path="/user" component={ProfilePage} />
        <PrivateRoute exact path={["/", "/home"]} component={Feed} />
        <PrivateRoute exact path={["/wallet"]} component={Wallet} />
        <Route path="/17830921898230" component={TreasureHunt} />
        <Route>
          <NoMatchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
