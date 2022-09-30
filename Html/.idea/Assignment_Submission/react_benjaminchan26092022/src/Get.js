import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";


function Get(){
    const [userList,setUserList] = useState("");//to store the value from the server.
    const [fname, setfname] = useState("");
    const [avatar, setAvatar] = useState(""); 
    const [id, setId]=useState("");
    const [lastname, setLastName]=useState("");
    const [email, setEmail]=useState("");



    let html=''
    const getApiResponse = (pageNo)=>{
        fetch("https://reqres.in/api/users?page="+pageNo)
        .then(res=>res.json())
        .then(res2=>{
            setUserList(res2.data);
            console.log(res2)
            
        }) 
        
    }

    const employeeDetails = (e) =>{
        setAvatar(e.avatar);
        setLastName(e.last_name);
        setfname(e.first_name);
        setEmail(e.email);
        setId(e.id);

        let x = document.getElementById("empDetailBox");
        x.style.display="block";
    }
    const reset =() =>{
        setAvatar("");
        setLastName("");
        setfname("");
        setEmail("");
        setId("");
        
        let x = document.getElementById("empDetailBox");
        x.style.display="none";
    }


    return(
        
        <div align='center'>
            <select onChange={(e)=>getApiResponse(e.target.value)}>
                <option defaultValue={""}hidden></option>
                <option value="1"> Page 1</option>
                <option value="2"> Page 2</option>
                <option value="3"> Page 3</option>
                <option value="4"> Page 4</option>
                <option value="5"> Page 5</option>
            </select>
            {(userList && userList.length<=0)?<h1>No Data Available</h1>:
                <table>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Profile Picture</th>
                    </tr>
                    {userList && userList.map((user, index)=>{
                        return<tr onClick={()=>employeeDetails(user)} key={index}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar}/></td>
                        </tr>
                    })
                    }
                    
                </table>}

                <div id = "empDetailBox" className="empDetailBox">
                    <p>ID: {id}</p>
                    <p>First Name: {fname}</p>
                    <p>Last Name: {lastname}</p>
                    <p>Email: {email}</p>
                    <p>Profile Picture: <img src={avatar}/></p>
                    <button type="reset" onClick={reset}>Reset</button>
                </div>
            
        </div>
    )

}

export default Get;