import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    
    </Router>
  );
}

export default App;
