import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import WeatherScreen from './app_component/weather/weatherScreen.js';
import Welcome from "./app_component/welcome/welcome.js";
import Login from "./app_component/login/login.js";
import About from "./app_component/about/about.js";
import Contact from "./app_component/contact/contact.js";



class App extends React.Component {
  render() {
    return (
      // full name: THANH VINH THANG
      // student number: 1601801
      // app name: eWeather App
      // implemented with: react, bootstrap, font-awesome
      <div className="App">
        <BrowserRouter>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/weather" render={props => <WeatherScreen {...props} />} />
          <Route path="/about" render={props => <About {...props} />} />
          <Route path="/contact" render={props => <Contact {...props} />} />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
