import React, { useContext, useEffect, useState } from "react";
import '../CSS/Login_Register.css'
import {getUser} from "../../Controller/APICall";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context";
import Header from "../Header";
import { Alert } from "../AlertComponent/Alert";
import logo from '../img/logo_tournoi_des_boys_png.png'
function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null);
    const [responseData, setResponseData] = useState(null);
    const [alertType, setAlertType] = useState("");
    const [showAlert, setShowAlert] = useState(false)  
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);

    useEffect(() => {
        switch(responseData){
            case false:
                setAlertType("error")
                setShowAlert(true)
                break;
            case true:
                setIsLoggedIn(true);
                setAlertType("success")
                setShowAlert(true)
                setTimeout(handleNavigate,1000)//need to show that the operation worked
                break;
            default:
                setAlertType('')
                setShowAlert(false)
        }
    },[responseData])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = {
            username: username,
            password: password
        }
        try{
            const result = await getUser(user);
            setResponseData(result.success)
            if(result.success){
                const userData = JSON.parse(result.user);
                setUser(userData)
                sessionStorage.setItem('user', JSON.stringify(userData))
            }
        }catch(err){
            console.error("Problème occure: " + err)
        }
    }

    const handleNavigate = () => {
        navigate("/")
    }
    const notValidate = () =>{
        return(
            <div className="contenerValidation">
                <div className="divNotValidationLeft"></div>
                <div className="divNotValidationRight">
                    <p className="validationTxt">Erreur, l'utlisateur n'a pas été trouvé, vérifier le mot de passe ou le nom d'utilisateur</p>
                </div>
            </div>
        )
    }
    return(
        <div className="dimension topdiv">
            <Header/>
            <Alert type={alertType} show={showAlert} close={setShowAlert}/>
            <div className="formdiv fulldisplay">
            <form className="fulldisplay form" onSubmit={(e) => handleSubmit(e)}>
                <img className="login_register_logo" src={logo} alt="logo"/>
                <h3>Login</h3>
                <div>    
                    <label for="username">Username: </label>
                    <input type="text" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                </div>
                <div>    
                    <label for="password" >Password: </label>
                    <input type="text" id="password" onChange={e=>setPassword(e.target.value)} value={password}/>
                </div>
                <button type="submit">Submit</button>
                <p>Si tu n'as pas un compte, cliquez <a href="/register">ici</a> pour en créer un</p> {/**sûrement temporaire, à revoir quand je ferai l'interface graphique */}
                {/*success === true ? (
                    <div className="contenerValidation"></div>
                ) :(
                    notValidate()
                )*/}
            </form>
            </div>
        </div>
    )
}
export {Login}