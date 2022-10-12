import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './login';
import Register from './register';
import Delete from './delete';


function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path='/registeruser' element={<Register/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/deleteuser' element={<Delete/>}></Route>
            <Route path='/delete' element={<Delete/>}></Route>
          </Routes>
        </Router>
        
      </div>


  );
}

export default App;