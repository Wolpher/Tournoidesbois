import React, { useEffect, useState } from "react";
import { HaveTournament } from "../../Controller/APICall";
import { AlreadyHaveTournament, FormTournament } from "./TournamentMainPage";
import '../CSS/Tournament.css'

function RightDivRocketLeague() {
    const [data, setData] = useState(null);

    const result = HaveTournament({gameTitle:'Rocket League'})
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

function CenterDivRocketLeague(){
    return(
        <h1>THIS IS ROCKET LEEEAGUE</h1>
    )
}
export {RightDivRocketLeague, CenterDivRocketLeague}