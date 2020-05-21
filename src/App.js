import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './routes/Login';
class App extends Component {
  render() {
    return (
      <div>
        기본페이지입니다
        <Login />
      </div>
    );
  }
}

export default App;
