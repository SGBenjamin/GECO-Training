import logo from './logo.svg';
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Array from "./Array";
import Post from "./Post";
import Get from "./Get";


import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
      <div>
        <Header/>
        <Router>
          <Routes>
            <Route path ='/post' element={<Post />}/>
            <Route path ='/array' element={<Array />}/>
            <Route path ='/Get' element={<Get />}/>            
          </Routes>
        </Router>
        <Footer/>
        








      </div>


  );
}

export default App;
