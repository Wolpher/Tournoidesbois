import React, { useEffect, useState } from "react";
import { HaveTournament } from "../../Controller/APICall";
import { AlreadyHaveTournament, FormTournament } from "./TournamentMainPage";
import '../CSS/Tournament.css'

function RightDivOverwatch2() {
    const [data, setData] = useState(null);

    const result = HaveTournament({gameTitle:'Overwatch 2'})
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

function CenterDivOverwatch2(){
    return(
        <h1>OVERWATCH BETTER THAN OVERWATCH 2</h1>
    )
}
export {RightDivOverwatch2, CenterDivOverwatch2}