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
      {label: "北海道", value: "hokkaido" },
      {label: "青森県", value: "aomori" },
      {label: "岩手県", value: "iwate" },
      {label: "宮城県", value: "miyagi" },
      {label: "秋田県", value: "akita" },
      {label: "山形県", value: "yamagata" },
      {label: "福島県", value: "fukushima" },
      {label: "茨城県", value: "ibaraki" },
      {label: "栃木県", value: "tochigi" },
      {label: "群馬県", value: "gunma" },
      {label: "埼玉県", value: "saitama" },
      {label: "千葉県", value: "chiba" },
      {label: "東京都", value: "tokyo" },
      {label: "神奈川県", value: "kanagawa" },
      {label: "新潟県", value: "niigata" },
      {label: "富山県", value: "toyama" },
      {label: "石川県", value: "ishikawa" },
      {label: "福井県", value: "fukui" },
      {label: "山梨県", value: "yamanashi" },
      {label: "長野県", value: "nagano" },
      {label: "岐阜県", value: "gifu" },
      {label: "静岡県", value: "shizuoka" },
      {label: "愛知県", value: "aichi" },
      {label: "三重県", value: "mie" },
      {label: "滋賀県", value: "shiga" },
      {label: "京都府", value: "kyoto" },
      {label: "大阪府", value: "osaka" },
      {label: "兵庫県", value: "hyogo" },
      {label: "奈良県", value: "nara" },
      {label: "和歌山県", value: "wakayama" },
      {label: "鳥取県", value: "tottori" },
      {label: "島根県", value: "shimane" },
      {label: "岡山県", value: "okayama" },
      {label: "広島県", value: "hiroshima" },
      {label: "山口県", value: "yamaguchi" },
      {label: "徳島県", value: "tokushima" },
      {label: "香川県", value: "kagawa" },
      {label: "愛媛県", value: "ehime" },
      {label: "高知県", value: "kochi" },
      {label: "福岡県", value: "fukuoka" },
      {label: "佐賀県", value: "saga" },
      {label: "長崎県", value: "nagasaki" },
      {label: "熊本県", value: "kumamoto" },
      {label: "大分県", value: "oita" },
      {label: "宮崎県", value: "miyazaki" },
      {label: "鹿児島県", value: "kagoshima" },
      {label: "沖縄県", value: "okinawa" }
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
            <select　
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
              placeholder = "市町村"
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
              placeholder = "番地"
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
              placeholder = "ビル名"
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