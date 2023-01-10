import React, { Component, Fragment } from 'react';
import './App.css';
import SomeComponent from './components/SomeComponent';


class App extends Component {
  state = {
    showComponent: false
  };

  handleClick = () => {
    this.setState({
      showComponent: true
    });
  }
}

export default App;
