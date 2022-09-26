import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import './App.css'


function Array(){
    let persons =[
        {"name": "Adam", "age":56},
        {"name": "Bob", "age":65},
        {"name": "Charlie", "age":29},
        {"name": "Dave", "age":45},
        {"name": "Ed", "age":84},
        {"name": "Fred", "age":33},
        {"name": "Gary", "age":50},

    ];

    return(
        <div align='center'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    persons.map((personObj, index)=>{
                        return <tr className={personObj.age>50?"table_red": ""}>
                            <td>{personObj.name}</td>
                            <td>{personObj.age}</td>
                        </tr>
                    })
                }
            </table>
        </div>
        
    )

}

export default Array;