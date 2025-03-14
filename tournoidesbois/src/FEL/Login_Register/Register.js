import React, { useState } from "react";
import '../CSS/Login_Register.css'
import {PostUser} from "../../Controller/APICall";




export default function Register(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [responseData, setResponseData] = useState(null)

    
    const handleSubmit =async (e) => {
        e.preventDefault();
    
        const user = {
            username: username,
            password: password
        }
            const result = await PostUser(user) //need to wait because there is a promise :/
            setResponseData(result)
            //need to go to the pdf and so maybe delete the validation function since no msg would be need
    }
    const validation = () =>{
        return(
            <div className="contenerValidation">
                <div className="divValidationLeft"></div>
                <div className="divValidationRight">
                    <p className="validationTxt">L'utilisateur à été créé correctement.</p>
                </div>
            </div>
        )
    }
    const notValidate = () =>{
        return(
            <div className="contenerValidation">
                <div className="divNotValidationLeft"></div>
                <div className="divNotValidationRight">
                    <p className="validationTxt">Erreur, l'utilisateur est peut-être déjà dans la base de donnée. De plus, soyez sûr d'avoir au moins une lettre dans chaque champs de texte.</p>
                </div>
            </div>
        )
    }
    return(
        <div className="fulldisplay dimension">
            <form className="fulldisplay form" onSubmit={(e) => handleSubmit(e)}>
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
                { responseData === null ? (
                    <div className="contenerValidation"/>
                ) : responseData === true ?(
                    validation()
                ) : (
                    notValidate()
                )}
            </form>
        </div>
    )
}