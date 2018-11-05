import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Material from './components/Navbar Components/Material';
import Particles from 'react-particles-js';


const particleOpt = {
  particles: {
    number:{
      value: 75,
      density:{
        enable: true,
        value_area: 800,
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="particles">
      <Material />
      {routes}
      <Particles params={particleOpt}>
      
      </Particles>

      </div>
    );
  }
}

export default App;
