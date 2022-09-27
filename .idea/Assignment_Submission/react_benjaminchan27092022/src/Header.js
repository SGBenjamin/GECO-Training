import './App.css';
import { useEffect,useState } from 'react';
function Header(prop){
    console.log(window.location.pathname)
    
    const[isExist, setIsExist] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("username")!= null && localStorage.getItem("password")!=""){
            setIsExist(true);
        }else{
            setIsExist(false);
        }
    },[localStorage.getItem("username")])

    return(
        <div align="center">
            <ul className='menu'>
                <li className={window.location.pathname == "/getapi"?"current":''}><a href='getapi'>GetAPI</a></li>
                <li className={window.location.pathname == "/postapi"?"current":''}><a href='postapi'>PostAPI</a></li>
                {isExist?<li><a href="#">Logout</a></li>: null}
            </ul>

        </div>
        
        
    )
}

export default Header;