import { useState } from "react";

function PostUserList(props){
    const [posts, setPosts] = useState([]);
    const[fname, setFname] = useState('');
    const[job, setJob] = useState('');

    fetch(
        "https://reqres.in/api/users",
        {method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':'application/json;charset=utf-8'
            },
        body:JSON.stringify({
            "name": "Benjamin", 
            "job": "SWE"})
        }).then(res=>res.json())
        .then(res2=>{
            console.log(res2);
        })
}

export default PostUserList;