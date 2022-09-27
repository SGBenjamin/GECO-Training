import logo from './logo.svg';
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import GetAPI from './GetAPI';
import PostAPI from './PostAPI';
import UserList from './GetUserList';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
      <div>
        <Header/>
        <Router>
          <Routes>
            <Route path ='/getapi' element={<GetAPI />}/>
            <Route path='/postapi' element={<PostAPI />}/>            
          </Routes>
        </Router>
        <Footer/>
        
      </div>


  );
}

export default App;
