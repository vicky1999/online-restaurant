import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Components/Header";
import Slides from "./Components/Slides";
import About from './Components/About';
import Menus from './Components/Menus';
import Bookings from './Components/Bookings';
import Private from './Components/Private';
import WellBeing from './Components/WellBeing';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Slides />
      <About /><hr/>
      <Menus /><hr/>
      <Bookings /><hr/>
      <Private /><hr/>
      <WellBeing /><hr/>
      <Contact />
    </div>
  );
}

export default App;
