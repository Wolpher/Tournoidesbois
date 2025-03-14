import React, { useContext, useState } from "react";
import '../CSS/Login_Register.css'
import {getUser} from "../../Controller/APICall";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Context";


function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState(true);
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = {
            username: username,
            password: password
        }
        
        try{
            const result = await getUser(user);
            if(result.success){
                setSuccess(true)
                console.log("result: " + JSON.stringify(result))
                const userData = JSON.parse(result.user);

                setUser(userData)
                sessionStorage.setItem('user', JSON.stringify(userData))
                console.log(userData)
                setIsLoggedIn(true);
                navigate("/")
            }else{
                setSuccess(false);
            }
        }catch(err){
            console.error("Problème occure: " + err)
        }
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
        <div className="fulldisplay dimension">
            <form className="fulldisplay form" onSubmit={(e) => handleSubmit(e)}>
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
                {success === true ? (
                    <div className="contenerValidation"></div>
                ) :(
                    notValidate()
                )}
            </form>
        </div>
    )
}
export {Login}