import React, { useEffect, useState } from "react";
import { HaveTournament } from "../../Controller/APICall";
import { AlreadyHaveTournament, FormTournament } from "./TournamentMainPage";
import '../CSS/Tournament.css'

function RightDivClashOfClan() {
    const [haveTournament, setHaveTournament] = useState(null);

    useEffect(() => {
        const checkTournament = async () => {
            const result = await haveTournament('Clash of clan')
            setHaveTournament(result)
        }
        //besoin de check car j'appel jamais la fonction donc c'est tout le temps null, mais j'ai erreur quand je l'appel
    },[])


    return (
        <>
            {haveTournament ? (
                AlreadyHaveTournament()
            ) : (
                FormTournament({gameTitle: "Clash of clan", forma: "TWOOFTHREE", duree:"2 mois"})
            )}
        </>
    );
}

export {RightDivClashOfClan}