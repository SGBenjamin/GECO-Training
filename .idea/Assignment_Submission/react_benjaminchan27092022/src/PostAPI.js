import React from "react";
import { Component } from "react";
import PostUserList from "./PostUserList";

class PostAPI extends React.Component{

    constructor(){
        super();
        this.state={ 
            "name":"",
            "job":""
         }
    }

    render(){
        return(
            <div align='center'>
                <form onSubmit={PostUserList}>
                    <input type="text" name = "name" onSubmit={(e)=> this.setState({"name":e.target.input})} placeholder="Enter the Name" />
                    <input type="text" name = "job" onSubmit={(e)=> this.setState({"job":e.target.input})} placeholder="Enter the Job Title"/>
                    <button type="submit">Submit</button> 
                </form>
                    
            <PostUserList userList={this.state.userList}/>
            </div>
            
           
        )
    }

    


}

export default PostAPI;