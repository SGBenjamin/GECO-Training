import { useState } from "react";
import React from "react";
import { renderMatches } from "react-router-dom";
import UserList from "./GetUserList";

class GetAPI extends React.Component{
    constructor(){
        super();
        this.state = {
            "fname":"",
            "lastName":"",
            "email":"",
            "avatar":"",
            "id":"",
            "pageNo":0
        }
    }
    
    render(){
        return(
            <div align='center'>
                <select onChange={(e)=>this.setState({"pageNo":e.target.value})}>
                    <option defaultValue={""}hidden></option>
                    <option value="1"> Page 1</option>
                    <option value="2"> Page 2</option>
                    <option value="3"> Page 3</option>
                    <option value="4"> Page 4</option>
                    <option value="5"> Page 5</option>
                </select>
                <UserList userList={this.state.userList}/>
                {
                    (this.state.pageNo!=0)?<UserList pageNo ={this.state.pageNo}/>:<h1>No Data</h1> 
                }

            </div>
        )
    }
}

export default GetAPI;