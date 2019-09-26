import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar}/>
      <Route exact path="/"component={Home}/>
    </Router>
  );
}

export default App;
