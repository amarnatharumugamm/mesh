import React from 'react';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Navbar/Hero/Login';
import Home from '../src/pages/Home';
import Signup from '../src/pages/Signup';
import Api from '../src/pages/Api';
import './App.css';
function App (){
  return (
   <>
   <Router> 
  <Navbar />
  <Switch>
  <Route exact path="/" > <Home /> </Route>
  <Route path="/Login" > <Login /> </Route>
  <Route path="/Signup" > <Signup /> </Route>
  <Route path="/Api" > <Api /> </Route>



    
  </Switch>
  </Router >
  
   </>
  );
}

export default App;
