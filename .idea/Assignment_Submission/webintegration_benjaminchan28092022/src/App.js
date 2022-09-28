import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/about" element={<About/>}/> */}
          {/* <Route path="/contact" element={<Contact/>}/> */}
          
      </Routes>
   </Router>
  );
}

export default App;
