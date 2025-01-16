import React from "react";
import ReactPlayer from 'react-player'
import GeneralInformation from "./InformationGeneral";
import Jeux from "./Jeux";
import '../CSS/Main.css'

function MainPage(){
    return(
        <div>
             {/**Checker header avec bootstrap. fix bug ctrl + ou - ça fuck up tout*/}
            <header className="display header">
                <div className="display jeuxListContainer">
                    <a className="display headerButton" href="#listJeux">jeux</a>
                    <div className="visible">
                    <a className="display headerButton" href="#coc">Clash of clan</a>
                    <a className="display headerButton" href="#ow">Overwatch 2</a>
                    <a className="display headerButton" href="#cr">Clash royale</a>
                    <a className="display headerButton" href="#rl">Rocket league</a>
                    <a className="display headerButton" href="#mc">Minecraft</a>
                    </div>
                </div>
                <a className="display headerButton" href="/register">Register</a>
                <a className="display headerButton" href="/login">Login</a>
                <a className="display headerButton" href="/tournament">Tournament</a>
            </header>
            <div className="display center mainPage"> 
             
                {/**la border cool de la vid? */}
                <h1 className="title">Tournoi des bois</h1>
                <div className="video">
                    <ReactPlayer url="https://www.youtube.com/watch?v=_oL42WQm3dQ&ab_channel=PMUHUB" controls={true} />
                </div>
                <GeneralInformation />
                <Jeux />
            </div>
           
        </div>
    )
}
export default MainPage;