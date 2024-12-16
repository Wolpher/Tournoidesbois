import React from "react";
import ReactPlayer from 'react-player'
import GeneralInformation from "./InformationGeneral";
import Jeux from "./Jeux";
import './CSS/Main.css'

function MainPage(){
    return(
        <div>
            <header className="header">
                <p className="headertxt">Information générale</p>
                <p className="headertxt">jeux</p>
                <p className="headertxt">trophée/médailles</p>
                <p className="headertxt">trailer</p>
            </header>
            <div className="center mainPage">    
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