import React from 'react';
import Popup from 'reactjs-popup';
import Map from "./Map";
import { useState } from 'react';
import Geocode from 'react-geocode';
import './form.css'


 
export class Select extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      prefecture: 'Tokyo',
      city: 'Shibuya', 
      addrs: 'ekimae',
      building: '',
      showMap: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onAddrsChange = this.onAddrsChange.bind(this);
    this.onBuildingChange = this.onBuildingChange.bind(this);
    this.resetText = this.resetText.bind(this);
  }

  onChange(e){
    console.log(e.target.value);
    this.setState({ prefecture: e.target.value});
    
  }

  handleClick = (event) =>{
    this.state.showMap = true;
    console.log("clicked");
    this.setState({showMap: event.target.value});
  }

  resetText = (event)=>{
    console.log("reset !")
    this.state.prefecture = ' ';
    this.state.city = ' ';
    this.state.addrs = ' ';
    this.state.building = ' ';
    this.setState({prefecture: event.target.value});
    this.setState({ city: event.target.value });
    this.setState({ addrs: event.target.value });
    this.setState({ building: event.target.value });
    //this.setState();
  }

  onSubmit(e){
    e.preventDefault();
    console.log("onSubmit");
    console.log(this.state);
    return(
    <Map location = {this.state.city + this.state.addrs + this.state.building}/> 
    );
  }

  onChangeAddress = (event) => {
    alert("Change to  " + this.state.prefecture  + " " + this.state.city + " " + this.state.addrs + " " + this.state.building );
    <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  }

  onTextAreaChange = (event) =>{
    this.setState({ city: event.target.value });
  }

  onAddrsChange = (event)=>{
    this.setState({ addrs: event.target.value });
  }

  onBuildingChange = (event) =>{
    this.setState({ building: event.target.value });
  }

  render() {
    const toSend = (this.state);
    var states = [
      {label: "?????????", value: "hokkaido" },
      {label: "?????????", value: "aomori" },
      {label: "?????????", value: "iwate" },
      {label: "?????????", value: "miyagi" },
      {label: "?????????", value: "akita" },
      {label: "?????????", value: "yamagata" },
      {label: "?????????", value: "fukushima" },
      {label: "?????????", value: "ibaraki" },
      {label: "?????????", value: "tochigi" },
      {label: "?????????", value: "gunma" },
      {label: "?????????", value: "saitama" },
      {label: "?????????", value: "chiba" },
      {label: "?????????", value: "tokyo" },
      {label: "????????????", value: "kanagawa" },
      {label: "?????????", value: "niigata" },
      {label: "?????????", value: "toyama" },
      {label: "?????????", value: "ishikawa" },
      {label: "?????????", value: "fukui" },
      {label: "?????????", value: "yamanashi" },
      {label: "?????????", value: "nagano" },
      {label: "?????????", value: "gifu" },
      {label: "?????????", value: "shizuoka" },
      {label: "?????????", value: "aichi" },
      {label: "?????????", value: "mie" },
      {label: "?????????", value: "shiga" },
      {label: "?????????", value: "kyoto" },
      {label: "?????????", value: "osaka" },
      {label: "?????????", value: "hyogo" },
      {label: "?????????", value: "nara" },
      {label: "????????????", value: "wakayama" },
      {label: "?????????", value: "tottori" },
      {label: "?????????", value: "shimane" },
      {label: "?????????", value: "okayama" },
      {label: "?????????", value: "hiroshima" },
      {label: "?????????", value: "yamaguchi" },
      {label: "?????????", value: "tokushima" },
      {label: "?????????", value: "kagawa" },
      {label: "?????????", value: "ehime" },
      {label: "?????????", value: "kochi" },
      {label: "?????????", value: "fukuoka" },
      {label: "?????????", value: "saga" },
      {label: "?????????", value: "nagasaki" },
      {label: "?????????", value: "kumamoto" },
      {label: "?????????", value: "oita" },
      {label: "?????????", value: "miyazaki" },
      {label: "????????????", value: "kagoshima" },
      {label: "?????????", value: "okinawa" }
    ];
    
    var options = states.map(
      (n)=>(
        <option key={n.label} value={n.value}>
          {n.label}
        </option>
      )
    );

    return (
      <div >
        <form onSubmit={this.onSubmit} className = 'form-box'>
          <div>
            <h3 className = 'menu-text'>
              Prefecture
            </h3>
            <select???
              className = "drop-list"
              value={this.state.prefecture}
              onChange={this.onChange}>
              {options}
            </select>
          </div>
          
          <div>
          <h3 className = 'menu-text'>
              City
            </h3>
            <input 
              placeholder = "?????????"
              className = "address-box"
              type = 'text'
              value = {this.state.value}
              onChange={this.onTextAreaChange}
            />
            <br></br>
            <h3 className = 'menu-text'>
              Address
            </h3>
            <input 
              placeholder = "??????"
              className = "address-box"
              type = 'text'
              value = {this.state.value}
              onChange={this.onAddrsChange}
            />
            <br></br>
            <h3 className = 'menu-text'>
              Building and other
            </h3>
            <input 
              placeholder = "?????????"
              className = "address-box"
              type = 'text'
              value = {this.state.value}
              onChange={this.onBuildingChange}
            />
          </div>
          <div>
            <button
              className = "send-btn"
              type="submit"
              // onClick = {() => setBtnClick(true)}
              onClick = {this.handleClick}
              >
                Show on Map !
            </button>
            <button
              className = "cncl-btn"
              type="submit"
              onClick = {this.resetText}
              >
                Cancel
            </button>
            <br></br>
            <button
              className = "change-btn"
              type="submit"
              onClick = {this.onChangeAddress}
              >
                Change !
            </button>
          </div>
          
        </form>,
        <div>
        <h1>
            {this.state.prefecture + ' ' + this.state.city + ' ' + this.state.addrs + ' ' + this.state.building}
            <Map location = {this.state.city + ' ' + this.state.addrs + ' ' + this.state.building}/>

          </h1>
        </div>
      </div>

    );
  }
}



export default Select; 

//this.state.label + ' ' + 