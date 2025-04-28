import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import '../CSS/UserPage.css'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { GetAllPlayers, Promotion, Demotion } from "../../Controller/APICall";
import { Alert } from "../AlertComponent/Alert";

//TODO bug que quand je me déconnecte, l'icon ne s'update pas
export default function UserProfile(){
    const [hidePassword, setHidePassword] = useState(true)
    const [informationGeneral, setInformationGeneral] = useState(true)
    const [showAlert, setShowAlert] = useState(false)
    const [alertType, setAlertType] = useState("");
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
                        <Users alertType={setAlertType} show={setShowAlert}/>
                    )}
                    
                </div>
            </div>
            <Alert type={alertType} show={showAlert} close={setShowAlert}/>
        </div>
    )
}

function Users({alertType, show}){
    const [users, setUsers] = useState();
    const allUsers = GetAllPlayers();

    useEffect(() => {
        setUsers(allUsers)
    },[allUsers])


    const OperationError = () => {
        alertType("error")
        show(true)
    }

    const OperationSuccess = () => {
        alertType("success")
        show(true)
    }

    const HandlePromotion = async (e) =>{
        if(e.perms === "MEMBER"){
            if(await Promotion(e.username)){
                OperationSuccess();
                changeUserPerms(e.username,"ADMIN")
            }
        }else{
            OperationError()
        }
    }

    const handleDemotion = async (e) =>{
        if(e.perms === "ADMIN"){
            const success = await Demotion(e.username)
            console.log(success)
            if(await Demotion(e.username)){
                OperationSuccess();
                changeUserPerms(e.username, "MEMBER")
            }
        }else{
            OperationError();
        }
    }

    //Allow the user to see the change in the perms on the website without having to reload the page
    const changeUserPerms = (username,newPerms) => {
        const newAllUsers = allUsers.map((user) => {
            if(user.username === username){
                return {...user, perms:newPerms}
            }else{
                return user;
            }
        })
        setUsers(newAllUsers)
    }

    if(users) //to be sure we have something to show
        return(
            <div className="allUsersMotherdiv">
                {users.map((_) => (
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