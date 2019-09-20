import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"; 
import logo from './logo.svg';
import { subscribeToTimer } from './connection/api'
import './App.css';
import Map from './components/Map';
// import Menu from './components/MenuMain';
// import Login from './components/Login';
// import Register from './components/Register';
import Loading from './components/Loading';
import Menu from './components/Play';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timestamp: 'no time yet'
    }
    subscribeToTimer((err,timestamp)=> this.setState({
      timestamp
    }))
  }
render(){
  return (
  <Router>
      <p className="App-intro">
        Timer: {this.state.timestamp}
      </p>
    <Redirect from="/" to="/game/menu"/>
      {/* <Route path="/menu" component={Menu}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>*/}
      <Route path="/game/loading" component={Loading}/>
      <Route path="/game/menu" component={Menu}/>
    <Route path="/game" component={Map}/>
      
  </Router>
    );
  }
}




export default App;