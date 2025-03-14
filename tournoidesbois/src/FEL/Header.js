import React, { useState } from "react";
import './CSS/Main.css';
import {FaUserCheck, FaUserTimes, FaAngleDown, FaAngleUp} from "react-icons/fa";
import { useContext } from "react";
import { LoginContext } from "../Context";


export default function Header(){
    const [showGames, setShowGames] = useState(false);
    const {isLoggedIn} = useContext(LoginContext)

    const handleOnClick = (e) => {
        setShowGames(e);
    }
    const showALLGames = () => {
        return(
            <header>
                <div className="jeuxListContainer">
                    <a className="display2 jeuxListHeaderButton " href="/#coc">Clash of clan</a>
                    <a className="display2 jeuxListHeaderButton " href="/#ow">Overwatch 2</a>
                    <a className="display2 jeuxListHeaderButton " href="/#cr">Clash royale</a>
                    <a className="display2 jeuxListHeaderButton " href="/#rl">Rocket league</a>
                    <a className="display2 jeuxListHeaderButton " href="/#mc">Minecraft</a>
                </div>
            </header>
            
        )
    }
    
    return(
     <header className="display header">
        <div className="display2 headerDiv">
            <div className="display2 headerJeuxParentDiv column">
                <div className="display2 headerButton column">
                    <a className="display2" href="/#listJeux" style={{width: "100%"}}>Jeux </a>
                    {showGames === false ? (
                    <a className="HeaderAIcon" onClick={() => handleOnClick(true)}><FaAngleDown/></a>
                    ):(
                        <a className="HeaderAIcon" onClick={() => handleOnClick(false)}><FaAngleUp/></a>
                    )}
                </div>
                 
                {showGames === true ? (
                    showALLGames()
                ) : (
                    <></>
                )}
            </div>
            <a className="display2 headerButton" href="/tournament">Bracket</a>
            <a className="display2 headerButton" href="/statistiques">Statistiques</a>
        </div>
        {isLoggedIn === false ? (
            <a className="display2 headerLoginRegisterButton floatRight" href="/login"><FaUserTimes/></a>
        ): (
            <a className="display2 headerLoginRegisterButton floatRight" href="/userProfile"><FaUserCheck/></a>
        )}
     </header>
    )
}