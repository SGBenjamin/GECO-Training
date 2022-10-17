import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Buy from './Buy';
import Service from './Service';
import Pet from './Pet';
import Clinic from './Clinic';
import React from 'react';
import Login from './login';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/pet" element={<Pet/>}/>
          <Route path="/clinic" element={<Clinic/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/buy" element={<Buy/>}/>
          <Route path="/login" element={<Login/>}/>

          
      </Routes>
   </Router>
  );
}

export default App;
