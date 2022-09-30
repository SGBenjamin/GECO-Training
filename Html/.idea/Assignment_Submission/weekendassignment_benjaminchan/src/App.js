import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Blog from './Blog';
import About from './About';
import Singlepost from './Singlepost';
import Products from './Products';
import React from 'react';


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/singlepost" element={<Singlepost/>}/>
          <Route path="/products" element={<Products/>}/>

          
      </Routes>
   </Router>
  );
}

