import React, {useEffect, useRef, useState} from "react";
import { AiFillStar } from "react-icons/ai";
import '../CSS/TournementCreation.css'
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import {GetHistorique, GetTournament} from "../../Controller/APICall.js";
import '../CSS/ToggleButton.css'

export default function TournamentCreation({tournament,forma}){
    //rajouter un switch pour prendre les fonctions dépendamment des formats ou des jeux?

    //Pour tester:
    //TODO NEED TO CHANGE ALL THIS FUCKING SHIT LATER WHEN DOING MORE GAMES!!!!!
    const [testTournament, setTestTournament] = useState({
        teams:[{
            nbEtoiles:0,
            nbDestructions:0,
            team:{
                teamName:"",
                members:[""]
            }
        },{
            nbEtoiles:0,
            nbDestructions:0,
            team:{
                teamName:"",
                members:[""]
            }
        }]
    });
    const formatTournament = useRef({
        teams:[{
            nbEtoiles:0,
            nbDestructions:0,
            team:{
                teamName:"",
                members:[""]
            }
        },{
            nbEtoiles:0,
            nbDestructions:0,
            team:{
                teamName:"",
                members:[""]
            }
        }]
    })

    const tournament3 = GetTournament({gameTitle:"Clash of clan"});
    const historique = GetHistorique({gameTitle:"Clash of Clans"});
    useEffect(() => { 
        console.log("tournament3: " + JSON.stringify(tournament3))
        if(tournament3){
            const tournament21 = JSON.parse(tournament3)
            console.log("tournament21: "+ JSON.stringify(tournament21))
            formatTournament.current.teams[0].team.teamName = tournament21.teams[0].teamName
            formatTournament.current.teams[0].team.members = tournament21.teams[0].members
            formatTournament.current.teams[1].team.teamName = tournament21.teams[1].teamName
            formatTournament.current.teams[1].team.members = tournament21.teams[1].members
            console.log("formatTournament: " + JSON.stringify(formatTournament))
            setTestTournament(formatTournament.current)
        }
    },[tournament3])

    //need time to load the data
    if(!tournament3){
        return(
        <>
        <h1>...Loading</h1>
        </>)
    }    
    return(
        <>
            <ClashOfClan tournament={testTournament} historique={historique}/>
        </>
    )
}
//étape 8, trouver un moyen d'afficher clairement quel équipe à gagné (changer de color?,ect)
//étape 9, trouver un moyen de montrer clairement s'il y a eu une égalité (très peu probable, mais on ne sait jamais)
//étape 10, être satisfait du visuel (peut-être essayer de mettre les tournois au milieu milieu s'il est le seul, peut être les affiché de gauche à droite, idk)
//étape 11, tester en masse et fix les bugs?
function ClashOfClan({tournament, historique}){
    //always only 2 teams
    const divRef = useRef(null);
    let historiqueGame = new Array(2).fill(null); //need to change this shit too
    console.log("tournament: " + JSON.stringify(tournament))
    //change useEffect and might not even need it (étape 10)
    /*useEffect(() => {//when there is only one thing to load, I want it to load in the middle of the div
        if(historiqueGame.games.length === 1 && divRef !== null) {
            divRef.current.classList.add("Middle")
        }else{
            divRef.current.classList.remove("Middle")
        }
    },[historiqueGame, divRef])*/
    if(historique.success){
        historiqueGame = JSON.parse(historique.historique)
        historiqueGame.games.push(tournament)
    }
    console.log(JSON.stringify(historiqueGame))
    return(
    <div className="parentDiv" ref={divRef}>
        {historique.success ? (
            <>
                {historiqueGame.games.map((game,nbGame) => (
                    <>
                    {console.log("game: " + JSON.stringify(game) )}
                        <p key={nbGame +1} className="gameDisplay">Game: {nbGame + 1}/3</p>
                        <div className="teamsDisplay">
                        {game.teams.map((team, index) => (
                        <>
                            <div className="singleTeamDisplay" key={index}>
                                <div className="teamNameDisplay">
                                    <p className="teamName">{team.team.teamName}</p>
                                    <div className="etoile">
                                        <div className="nbEtoiles_Destructions">
                                            {team.nbEtoiles}
                                            </div>
                                        <AiFillStar className="etoilesSpecs"/>
                                        </div>
                                    <div className="destructions">
                                        <div className="nbEtoiles_Destructions">{team.nbDestructions}</div>
                                        %
                                    </div>
                                </div>
                                {team.team.members.map((member) => (
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
            </>
        ): (
            <>
                <p className="gameDisplay">Game: 1/3</p>
                <div className="teamsDisplay">
                {tournament.teams.map((team, index) => (
                <>
                    <div className="singleTeamDisplay" key={index}>
                        <div className="teamNameDisplay">
                            <p className="teamName">{team.team.teamName}</p>
                            <div className="etoile">
                                <div className="nbEtoiles_Destructions">0</div>
                                <AiFillStar className="etoilesSpecs"/>
                                </div>
                            <div className="destructions">
                                <div className="nbEtoiles_Destructions">0</div>
                                %
                            </div>
                        </div>
                        {team.team.members.map((member) => (
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
        )}
        {/*{nbGame.map((game,nbGame) => (
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
        ))}*/}
    </div>
)
}

