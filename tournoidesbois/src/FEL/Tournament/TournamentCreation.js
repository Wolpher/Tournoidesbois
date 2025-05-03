import React, {useRef} from "react";
import '../CSS/TournementCreation.css'

export default function TournamentCreation({tournament,forma}){
    //rajouter un switch pour prendre les fonctions dépendamment des formas ou des jeux?



    //Pour tester:
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
                teamName:"TopG",
                members:[
                    "Wolpher",
                    "Admin",
                    "test3",
                    "test4",
                    "test5"
                ]
            },{
                teamName:"DownG",
                members:[
                    "Test",
                    "Test2",
                    "test6",
                    "test7",
                    "test8",
                ]
            }]
    })    
    return(
        <>
            <ClashOfClan tournament={tournament5.current}/>
        </>
    )
}
//étape 1, avoir un bon visuel que je suis satisfait avec
//étape 2, réussir à le faire fonctionner avec des données
//étape 3, réussir à faire en sorte que ça affiche juste le nombre de match live (si y'a aucun match de joué ça affiche le match 1/3, si y,en a 1, ça affiche le 2/3, si y,en a 2, ça affiche le 3/3)
//étape 4, réussir à faire en sorte que le display ne fuck pas tout à cause du nombre de match
//étape 5, avoir un moyen d'afficher les matchs déjà terminé
//étape 6, si y,a des noms trop long pour la longueur du div, trouver une façon de fix ça sans changer la longueur du div
//étape 7, faire quelque chose pour pouvoir ajouter les données du tournoi, décidé qui a win, combien d'étoile vs combien de pourcent, rentrez les stats des joueurs.
//étape 8, trouver un moyen d'afficher clairement quel équipe à gagné (changer de color?,ect)
//étape 9, tester en masse et fix les bugs?
function ClashOfClan({tournament}){
    //always only 2 teams
    //bug, plus que j'ajoute de match, pour plus la partie à gauche va vers la gauche, peut-être mettre le display en column?
    //prob si le nom est fuck trop long, idk peut-être un overflow???
    //comment garder les donner de qui à win en mémoire?? nouvelle table de db appelé historique à voir plus tard quand j'aurais finit de faire les choses?
    console.log("COc tournament: " + JSON.stringify(tournament))
    const nbGame = new Array(1).fill(null);
    //est toujours une équipe pair
    return(
    <div className="tournament">
        {nbGame.map((game,nbGame) => (
            <>
                <p className="gameDisplay">Game: {nbGame + 1}/3</p>
                <div className="teamsDisplay">
                {tournament.teams.map((team, index) => (
                <>
                    {/**table pour display les teams??? */}
                    <div className="singleTeamDisplay" key={index}>
                        <div className="teamNameDisplay">
                            {team.teamName}
                            <div>étoiles</div>
                            <div>%</div>
                        </div>
                        {team.members.map((member) => (
                            <div className="membersDisplay">{member}</div>
                        ))}
                    </div>
                    {index ===0 ? (
                        <div className="vs">vs</div>
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

