
import './App.css';
import Greet from './components/Greet';
import React, { Component } from 'react';
import Welcome from './components/welcome';
import Hello from './components/Hello';
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Greet/>
      <Welcome /> */}
      <Hello />
      </div>
    );

  }
}
 
export default App;
