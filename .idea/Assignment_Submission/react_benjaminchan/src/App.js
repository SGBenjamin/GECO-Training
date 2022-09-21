import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js'
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path ='/home' element={<Home />}/>
            <Route path ='/about' element={<About />}/>
            <Route path ='/contact' element={<Contact />}/>
            <Route path ='/' element={<Home />}/>
            
          </Routes>
        </Router>
        








      </div>


  );
}

export default App;
