import React from "react";
import ReactPlayer from 'react-player'
import GeneralInformation from "./InformationGeneral";
import Jeux from "./Jeux";
import '../CSS/Main.css';
import logo from '../img/logo_tournoi_des_boys_png.png'
import { FaLongArrowAltDown } from "react-icons/fa";
import Header from "../Header";
export default function MainPage(){
    return(
        <div>
            <Header/>
            <div className="display center mainPage"> 
                {/*<h1 className="title">Tournoi des bois</h1>*/}
                <img className="logo" src={logo} alt="logo"/>
                
                
                <div className="video">
                    <h1 style={{textAlign: 'center'}}>Checkez moi ça!</h1>
                    <a href="/stfy">stfu</a>
                    
                    <h1 className="display2"><FaLongArrowAltDown/></h1>
                    {/*<ReactPlayer url="https://www.youtube.com/watch?v=_oL42WQm3dQ&ab_channel=PMUHUB" controls={true} />*/}
                </div>
                <GeneralInformation />
                <Jeux />
            </div>
        </div>
    )
}
