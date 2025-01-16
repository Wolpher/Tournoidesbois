import React from "react";
import { HaveTournament } from "../../Controller/APICall";
import { AlreadyHaveTournament, FormTournament } from "./TournamentMainPage";
import '../CSS/Tournament.css'

export default function ClashOfClan() {
    
    const haveTournament = HaveTournament('Clash of clan')


    return (
        <>
            {haveTournament ? (
                AlreadyHaveTournament()
                  // Si true, afficher ce message ///// faudra check je vois le il n'y a pas detournoi pendant 1 sec
            ) : (
                FormTournament({gameTitle: "Clash of clan", forma: "TWOOFTHREE", duree:"2 mois"})
            )}
        </>
    );
}
