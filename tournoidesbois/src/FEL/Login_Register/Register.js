import React, { useEffect, useState } from "react";
import '../CSS/Login_Register.css'
import logo from '../img/logo_tournoi_des_boys_png.png'
import {PostUser} from "../../Controller/APICall";
import { Alert } from "../AlertComponent/Alert";
import Header from "../Header";
import { useNavigate } from "react-router-dom";


export default function Register(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [responseData, setResponseData] = useState(null)
    const [alertType, setAlertType] = useState("");
    const [showAlert, setShowAlert] = useState(false)    
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = {
            username: username,
            password: password
        }
            const result = await PostUser(user)
            setResponseData(result)
    }
    useEffect(()=> {
        switch(responseData){
            case false:
                setAlertType("error")
                setShowAlert(true)
                break;
            case true:    
                setAlertType("success")
                setShowAlert(true)
                setTimeout(handleNavigate,1000) //to show the alert that the operation is a successs
                break;
            default:
                setAlertType('')
                setShowAlert(false)
        }
    },[responseData])
    const handleNavigate = () => {
        navigate('/login')
    }

    return(
        <div className="dimension topdiv">
            <Header/>
            <Alert type={alertType} show={showAlert} close={setShowAlert}/>
            <div className="formdiv fulldisplay">
            <form className="fulldisplay form" onSubmit={(e) => handleSubmit(e)}>
                <img className="login_register_logo" src={logo} alt="logo"/>
                <h3>Register:</h3>
                <div>    
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                </div>
                <div>    
                    <label htmlFor="password" >Password: </label>
                    <input type="text" id="password" onChange={e=>setPassword(e.target.value)} value={password}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}