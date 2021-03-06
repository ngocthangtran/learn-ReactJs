import React, { Component } from 'react';
import './app.css';
import io from 'socket.io-client';
class App extends Component {
  constructor(){
    super();
    this.state={
      message:[
        'hello'
      ]
    }
    this.socket =null;
    this.sendMessage = this.sendMessage.bind(this);
    // this.newMessage = this.newMessage.bind(this);
  }
  componentWillMount(){
    // this.socket = io('http://192.168.1.6:3000');
    this.socket = io('http://localhost:3000');
    this.socket.on('newMessage', (res)=>{
      this.newMessage(res)
    })
  }
  newMessage(res){
    var a = this.state.message;
    a.push(res);
    this.setState({
      message:a
    })
  }
  sendMessage(){
    this.socket.emit("test123345", 'Tao vua gui cho m mot cai gi do');
  }
  render() {
    console.log(this.socket)
    return (
      <div className='app'>
        <input></input>
        <button onClick={this.sendMessage}>Nhaap</button>
        {this.state.message.map(elment=>{
          return(
            <li key={Math.random}>
              {elment}
            </li>
          )
        })}
      </div>
    );
  }
}

export default App;