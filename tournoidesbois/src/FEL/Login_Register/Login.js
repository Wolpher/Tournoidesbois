import React, { useState } from "react";
import '../CSS/Login_Register.css'
import {getUser} from "../../Controller/APICall";




export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const user = {
            username: username,
            password: password
        }
        try{
            getUser(user)
        }catch(err){
            console.error("Problème occure: " + err)
        }
    }
    return(
        <div className="fulldisplay dimension">
            <form className="fulldisplay form" onSubmit={(e) => handleSubmit(e)}>
                <div>    
                    <label for="username">Username: </label>
                    <input type="text" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                </div>
                <div>    
                    <label for="password" >Password: </label>
                    <input type="text" id="password" onChange={e=>setPassword(e.target.value)} value={password}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}