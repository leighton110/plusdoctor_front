import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './routes/Login';
import JoinUser from './routes/JoinUser';
import JoinHospital from './routes/JoinHospital';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/join/user" component={JoinUser} />
        <Route path="/join/hospital" component={JoinHospital} />
        <Route path="/login/user" component={Login} />
      </div>
    );
  }
}

export default App;
