import React from "react";
import { GetTournament } from "./APICall";
export default function TournamentCreation({gameTitle}){
    const tournament = GetTournament({gameTitle:gameTitle})
    if(tournament){
        console.log(tournament)
    }else{
        console.log("false")
    }
    return(
        <>
            <p>{gameTitle}</p>
        </>
    )
}
