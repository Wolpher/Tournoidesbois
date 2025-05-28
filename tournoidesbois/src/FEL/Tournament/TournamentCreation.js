import React, {useEffect, useRef} from "react";
import { AiFillStar } from "react-icons/ai";
import '../CSS/TournementCreation.css'
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import {GetTournament} from "../../Controller/APICall.js";
import '../CSS/ToggleButton.css'

export default function TournamentCreation({tournament,forma}){
    //rajouter un switch pour prendre les fonctions dépendamment des formas ou des jeux?


    //Pour tester:
    const tournament3 = GetTournament({gameTitle:"Clash of clan"});

    const tournament2 = useRef({
                nbEquipe: 2,
                nbUserPerTeam: 5,
                teams:[{
                    teamName:"TopG",
                    members:[
                        "Wolpher",
                        "Admin"
                    ]
                },{
                    teamName:"DownG",
                    members:[
                        "Test",
                        "Test2"
                    ]
                }]
        })
        const tournament5 = useRef({
            nbEquipe: 2,
            nbUserPerTeam: 5,
            teams:[{
                teamName:"Les casseurs de rotules",
                members:[
                    "Wolpher",
                    "Admin",
                    "test3",
                    "test4",
                    "test5",
                    "cheh",
                    "dijasdioajsdijsadioasjd asjdkoiajskdajsdoajd"
                ]
            },{
                teamName:"DownG",
                members:[
                    "Test",
                    "Test2",
                    "test6",
                    "test7",
                    "test8",
                    "cheh"
                ]
            }]
    })
    //need time to load the data
    if(!tournament3){
        return(
        <>
        <h1>...Loading</h1>
        </>)
    }    
    return(
        <>
            <ClashOfClan tournament={JSON.parse(tournament3)}/>
        </>
    )
}
//étape 3, réussir à faire en sorte que ça affiche juste le nombre de match live (si y'a aucun match de joué ça affiche le match 1/3, si y,en a 1, ça affiche le 2/3, si y,en a 2, ça affiche le 3/3)
//étape 5, avoir un moyen d'afficher les matchs déjà terminé
//-------> étape 7, faire quelque chose pour pouvoir ajouter les données du tournoi, décidé qui a win, combien d'étoile vs combien de pourcent, rentrez les stats des joueurs. (rajoutez une alerte pour si je dépasses le nb max d'étoiles et le nbMax de destructions et si les 2 équipes sont à false)
//étape 8, trouver un moyen d'afficher clairement quel équipe à gagné (changer de color?,ect)
//étape 9, trouver un moyen de montrer clairement s'il y a eu une égalité (très peu probable, mais on ne sait jamais)
//étape 10, tester en masse et fix les bugs?
function ClashOfClan({tournament}){
    //always only 2 teams
    const divRef = useRef(null);
    const nbGame = new Array(2).fill(null);

    useEffect(() => {//when there is only one thing to load, I want it to load in the middle of the div
        if(nbGame.length === 1 && divRef !== null) {
            divRef.current.classList.add("Middle")
        }else{
            divRef.current.classList.remove("Middle")
        }
    },[nbGame, divRef])
    
    return(
    <div className="parentDiv" ref={divRef}>
        {nbGame.map((game,nbGame) => (
            <>
                <p key={nbGame +1} className="gameDisplay">Game: {nbGame + 1}/3</p>
                <div className="teamsDisplay">
                {tournament.teams.map((team, index) => (
                <>
                    <div className="singleTeamDisplay" key={index}>
                        <div className="teamNameDisplay">
                            <p className="teamName">{team.teamName}</p>
                            <div className="etoile">
                                <div className="nbEtoiles_Destructions">
                                    3
                                    </div>
                                <AiFillStar className="etoilesSpecs"/>
                                </div>
                            <div className="destructions">
                                <div className="nbEtoiles_Destructions">100</div>
                                %
                            </div>
                        </div>
                        {team.members.map((member) => (
                            <div className="membersDisplay">{member}</div>
                        ))}
                    </div>
                    {index ===0 ? (
                        <div className="swords"><Icon icon={"game-icons:sword-clash"}/></div>
                        
                    ):(
                        <>
                        </>
                    )}
                </>
                ))}
                </div>
            </>
        ))}
    </div>
)
}

