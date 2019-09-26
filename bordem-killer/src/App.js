import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
    </Router>
  );
}

export default App;
