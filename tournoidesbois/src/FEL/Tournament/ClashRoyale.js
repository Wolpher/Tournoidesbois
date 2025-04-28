import React, { useEffect, useState } from "react";
import { HaveTournament } from "../../Controller/APICall";
import { AlreadyHaveTournament, FormTournament } from "./TournamentMainPage";
import '../CSS/Tournament.css'

function RightDivClashRoyale() {
    const [data, setData] = useState(null);

    const result = HaveTournament({gameTitle:'Clash royale'})
    useEffect(() => {
            setData(result)
    },[result])
    
    if(data === null || data.game === null){
        return(
            <h1>...Loading</h1>
        )
    }
    if(data != null && data.game != null)
    return (
        <>
            {data.haveTournament ? (
                <AlreadyHaveTournament/>
            ) : (
                <FormTournament gameTitle={data.game.title} forma={data.game.forma} duree={data.game.duration}/>
            )}
        </>
    );
}

function CenterDivClashRoyale(){
    return(
        <h1>OOOOHNOOOOOO</h1>
    )
}
export {RightDivClashRoyale, CenterDivClashRoyale}