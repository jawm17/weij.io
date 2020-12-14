import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/FeedPage/FeedPage";
import SignIn from "./components/SignIn";
import Profile from "./pages/NewPages/Profile";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import TreasureHunt from "./pages/TreasureHunt/TreasureHunt";
import Register from './components/Register';
import Wallet from "./pages/WalletPage/WalletPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NoMatchPage from "./pages/NoMatchPage/NoMatchPage.js";
import PrivateRoute from './hocs/PrivateRoute';
import UserRestrictedRoute from './hocs/UserRestrictedRoute';
import history from './history';
import SendPage from './pages/SendPage/SendPage';
import Landing from "./pages/NewPages/Landing";
import Media from "./components2/media";
import NewProfile from "./pages/NewPages/NewProfile";
import Music from "./pages/NewPages/Music";
import Games from "./pages/NewPages/Games";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <UserRestrictedRoute exact path="/login" component={SignIn} />
        <UserRestrictedRoute exact path="/register" component={Register} />
        <PrivateRoute path="/user/:user" component={ProfilePage} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute exact path="/search" component={SearchPage} />
        <PrivateRoute path="/user" component={ProfilePage} />
        <Route exact path={["/", "/landing"]} component={Landing} />
        <PrivateRoute path={["/send/to/:user"]} component={SendPage} />
        <PrivateRoute path={["/send"]} component={SendPage} />
        <PrivateRoute exact path={["/wallet"]} component={Wallet} />
        <Route path="/17830921898230" component={TreasureHunt} />
        <Route path="/music" component={Music} />
        <Route path="/games" component={Games} />
        <Route path="/p/:id" component={Media} />
        <Route path="/">
          <NoMatchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
