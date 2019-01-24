import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll'
import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueInfo from './components/venueInfo/VenueInfo'
import Highlights from './components/highlights/Highlights'
import Pricing from './components/pricing/Pricing'
import Location from './components/location/Location'
import Footer from './components/header_footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Element name="eventStarts">
          <Featured />
        </Element>

        <Element name="venueInfo">
          <VenueInfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;


// adresse surge gigantic-basketball.surge.sh
