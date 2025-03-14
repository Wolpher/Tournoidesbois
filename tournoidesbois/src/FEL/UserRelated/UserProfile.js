import React, { useRef, useState } from "react";
import Header from "../Header";
import '../CSS/UserPage.css'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { GetAllPlayers, Promotion, Demotion } from "../../Controller/APICall";

export default function UserProfile(){
    const [hidePassword, setHidePassword] = useState(true)
    const [informationGeneral, setInformationGeneral] = useState(true)
    const refInfo = useRef(null);
    const refStats = useRef(null);
    const refUsers = useRef(null);
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();

    const handleInformationGeneral = () => {
        setInformationGeneral(true)
        refInfo.current.style.backgroundColor = '#737373'
        refStats.current.style.backgroundColor = '#c8c3c3'
        if(refUsers.current != null){ 
            refUsers.current.style.backgroundColor = '#c8c3c3'
        }
    }

    const handleStatistique = () => {
        setInformationGeneral(false)
        refInfo.current.style.backgroundColor = '#c8c3c3'
        refStats.current.style.backgroundColor = '#737373'
        if(refUsers.current != null){
            refUsers.current.style.backgroundColor = '#c8c3c3'
        }
    }
    
    const handleHidePassword = (e) =>{
        setHidePassword(e)
    }

    const handleDisconnect = () =>{
        sessionStorage.setItem('user', null);
        sessionStorage.setItem('isLoggedIn', false);
        navigate("/")
    }
    const handleUsers = () => {
        setInformationGeneral(null) 
        refUsers.current.style.backgroundColor = '#737373'
        refStats.current.style.backgroundColor = '#c8c3c3'
        refInfo.current.style.backgroundColor = '#c8c3c3'
    }

    return(
        <div className="maxPage">
            <Header/>
            <div className="underHeader">
                <div className="leftDiv">
                        <div ref={refInfo} className="leftDivButton" style={{backgroundColor:'#737373'}} onClick={() => handleInformationGeneral()}>Informations Générales</div>
                        <div ref={refStats} className="leftDivButton" onClick={() => handleStatistique()}>Statistiques</div>
                        {storedUser.perms === 'ADMIN' ? (
                            <div ref={refUsers} className="leftDivButton" onClick={() => handleUsers()}>users</div>
                        ): (
                            <></>
                        )}
                </div>
                <div className="rightDiv">
                    {informationGeneral ? (
                        <table className="infoGeneralTable">
                            <tbody>
                                <tr>
                                    <td >Username:</td>
                                    <td >{storedUser.username}</td>
                                </tr>
                                <tr>
                                    <td>Password:</td>
                                    {hidePassword ? (
                                        <> 
                                        <td>*****</td>
                                        <td onClick={() => handleHidePassword(false)}><FaEyeSlash/></td>
                                        </>
                                    ): (
                                        <>
                                            <td>{storedUser.password}</td>
                                            <td onClick={() => handleHidePassword(true)}> <FaEye/> </td>
                                        </>
                                    )
                                    }
                                </tr>
                                <tr>
                                    <td>cash prize: </td>
                                    <td>{storedUser.cashPrize}</td>
                                    <td><GiMoneyStack className="money"/></td>
                                </tr>
                                <tr>
                                    <td>points obtenus:</td>
                                    <td>{storedUser.medaille}</td>
                                    <td>pts</td>
                                </tr>
                                <tr>
                                    <td>Win rate:</td>
                                    <td>get good</td>
                                    <td>%</td>
                                </tr>
                                <tr>
                                    <td className="tdButtonDeconnecter" onClick={() => handleDisconnect()}>Déconnecter</td>
                                </tr>
                            </tbody>
                        </table>
                    ):informationGeneral === false ? (
                        <h1>Faire une function statistique</h1>
                    ): (
                        <Users/>
                    )}
                </div>
            </div>
        </div>
    )
}

function Users(){
    const allUsers = GetAllPlayers();

    const HandlePromotion = async (e) =>{
        console.log(e)
        if(e.perms !== "ADMIN"){
            const username = e.username;
            const success = await Promotion(username)
            console.log(success)
        }else{
            console.log("can't")
        }
    }

    const handleDemotion = async (e) =>{
        console.log(e)
        if(e.perms !== "MEMBER"){
            const success = await Demotion(e.username)
            console.log(success)
        }else{
            console.log("can")
        }
    }
    //TODO bug que la valeur afficher ne s,update pas (normal et que si on recliques sur le boutons, ça ne prends pas la nouvelle valeurs qui est quand même assez normal)
    //TODO afficher une alert custom qui montre si j'ai réussi ou non à faire ma promotion ou ma demotion
    return(
        <div className="allUsersMotherdiv">
            {allUsers.map((_) => (
                <div className="allUsersdiv" key={_.username}>
                    
                    <table className="allUserstable">
                        <tbody>
                            <tr className="allUserstd">
                                <td className="allUserstd">{_.username}</td>
                                <td className="allUserstd">{_.perms}</td>
                                <td className="allUserstd allUsersButtons" >
                                    <div className="button" onClick={() => HandlePromotion(_)}>Promotion</div>
                                    <div className="button" onClick={() => handleDemotion(_)}>Rétrograder</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}