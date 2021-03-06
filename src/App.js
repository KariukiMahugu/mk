import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Service from './components/pages/Service';


function App() {
  return (
    <>
      <Router>
         <Navbar />
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path='/about' exact component = {About}/>
          <Route path='/services' exact component = {Service}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
