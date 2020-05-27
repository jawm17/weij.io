import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/feedPage";
import SignIn from "./components/SignIn";
import UserProfile from "./pages/userProfilePage";
import Register from './components/Register';
import Wallet from "./pages/walletPage";
import Search from "./pages/searchPage";
import NoMatch from "./pages/noMatchPage";
import PrivateRoute from './hocs/PrivateRoute';
import UserRestrictedRoute from './hocs/UserRestrictedRoute';

function App() {
  return (
    <Router>
       <Switch>
      <UserRestrictedRoute exact path="/login" component={SignIn} />
      <UserRestrictedRoute exact path="/register" component={Register} />
      <PrivateRoute path="/profile" component={UserProfile}/>
      <PrivateRoute exact path={["/", "/home"]} component={Feed} />
      <PrivateRoute exact path={["/wallet"]} component={Wallet} />
      <PrivateRoute exact path={["/search"]} component={Search} />
      <Route>
            <NoMatch />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
