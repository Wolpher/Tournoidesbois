import React from "react";
import GeneralInformation from "./InformationGeneral";
import Jeux from "./Jeux";
import './CSS/MainPage.css'

function MainPage(){
    return(
        <div>
            <header className="header">
                <p className="headertxt">Information générale</p>
                <p className="headertxt">jeux</p>
                <p className="headertxt">trophée/médailles</p>
                <p className="headertxt">trailer</p>
            </header>
            <div>    
                <h1 className="title">Tournoi des bois</h1>
                <p>Photo du tournoi</p>
            </div>
            <GeneralInformation />
            <Jeux />
            <p>trailer du tournoi</p>
        </div>
    )
}
export default MainPage;