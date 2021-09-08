import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map";
//import GeoCode from './components/GeoCode';

class App extends Component{
    render(){
      return(
        <React.Fragment>
          <Map location = "東京都渋谷区道玄坂1丁目16-6 二葉ビル3階"/>,
        </React.Fragment>
      );
  }
}

export default App;