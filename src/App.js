import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Material from './components/Navbar Components/Material';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Material />
      {routes}
      </div>
    );
  }
}

export default App;
