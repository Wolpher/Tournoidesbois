import React, {useState, useRef} from "react";
import {RightDivClashOfClan, CenterDivClashOfClan} from "./ClashOfClan";
import {RightDivClashRoyale, CenterDivClashRoyale} from "./ClashRoyale";
import {RightDivOverwatch2, CenterDivOverwatch2} from "./Overwatch";
import {RightDivRocketLeague, CenterDivRocketLeague} from "./RocketLeague";
import {RightDivMinecraft, CenterDivMinecraft} from "./Minecraft";
import TournamentCreation from "../../Controller/TournamentCreation";
import '../CSS/Tournament.css'
import '../CSS/Main.css'
import { FcInfo } from "react-icons/fc";
import { CreateTournament, GetAllPlayers } from "../../Controller/APICall";
import Header from "../Header";
import { Icon } from '@iconify-icon/react';

function TournamentMainPage(){
    //TODO LIST (will probably add stuff later):
    // quand j'appuie ou je hover sur un icon, surement essayer de voir si je peux faire en sorte que la bordure de droite ce regroupe sur un point pour faire une genre de flèche pour un meilleur visuel (aucune idée)
    // dans le left div, essayer de voir si je peux rendre la grander des images et la hauteur des images (dans les icons) en vh ou en %, ect, mais pas en pixel car ça cause des prob juste en ouvrant la console (aucune idée)
    // -------> refaire le backend pour les formulaires pour les différents jeux (difficile)
    // faire un bon frontend pour pour leftDiv,centerDiv,rightDiv (moyen) (c'est legit en casi permanence cette affaire là)
    // quand je créé le bracket, avoir une confirmation s'il y a au moins 1 équipe qui n'a pas le même nombre de joueur qu'une autre (facile)
    // change the allPlayer to a dto in the backend (facile)
    // à la toute fin, regarder ce que je n'utilise pas dans le css (facile mais ultra chiant)
    // ajouter une alerte lorsqu'on créé le tournoi si on a réussi à le faire ou non (facile)
    //---------------------------ClashOfClan-------------------------------
    // faire un algo qui créé le bracket pour clash of clan (difficile)
    // quand je créé mon tournoi, avoir un preview du bracket (moyen)
    // dans le preview de mon bracket, avoir le choix de faire les teams aléatoirements ou manuellement (moyen) en vrai le mettre dans le formulaire en dessous de nb joueurs/équipe. avoir un choix entre un bouton aléatoire ou non
    // dans le preview de mon bracket, avoir un bouton save tournament pour pouvoir le save et créé le tournoi et besoin d'avoir une confirmation comme quelque chose qui pop dans ton écran: veux-tu vraiment sauvegarder le tournoi (difficle)
    // faire un bon frontend (moyen)
    //---------------------------Clash Royale-------------------------------
    // faire un algo qui créé le bracket pour clash royale (très très difficile) (à cause des 2 phases)
    // quand je créé mon tournoi, avoir un preview du bracket (moyen)
    // dans le preview de mon bracket, avoir le choix de faire les teams aléatoirements ou manuellement (moyen) en vrai le mettre dans le formulaire en dessous de nb joueurs/équipe. avoir un choix entre un bouton aléatoire ou non
    // dans le preview de mon bracket, avoir un bouton save tournament pour pouvoir le save et créé le tournoi et besoin d'avoir une confirmation comme quelque chose qui pop dans ton écran: veux-tu vraiment sauvegarder le tournoi (difficle)
    // faire un bon frontend (moyen)
    // sur le center div, ajouter une façon de switch entre phase 1 et phase 2 (facile)
    // quand j'appuie sur une équipe du bracket afficher quelque chose qui montre les joueurs (difficile)
    //---------------------------Overwatch2------------------------------------------
    // faire un algo qui créé le bracket pour overwatch 2 (difficile)
    // quand je créé mon tournoi, avoir un preview du bracket (moyen)
    // dans le preview de mon bracket, avoir le choix de faire les teams aléatoirements ou manuellement (moyen) en vrai le mettre dans le formulaire en dessous de nb joueurs/équipe. avoir un choix entre un bouton aléatoire ou non
    // dans le preview de mon bracket, avoir un bouton save tournament pour pouvoir le save et créé le tournoi et besoin d'avoir une confirmation comme quelque chose qui pop dans ton écran: veux-tu vraiment sauvegarder le tournoi (difficle)
    // faire un bon frontend (moyen)
    //---------------------------Rocket League------------------------------------------
    // faire un algo qui créé le bracket pour rocket league (très difficile)
    // quand je créé mon tournoi, avoir un preview du bracket (moyen)
    // dans le preview de mon bracket, avoir le choix de faire les teams aléatoirements ou manuellement (moyen) en vrai le mettre dans le formulaire en dessous de nb joueurs/équipe. avoir un choix entre un bouton aléatoire ou non
    // dans le preview de mon bracket, avoir un bouton save tournament pour pouvoir le save et créé le tournoi et besoin d'avoir une confirmation comme quelque chose qui pop dans ton écran: veux-tu vraiment sauvegarder le tournoi (difficle)
    // faire un bon frontend (moyen)
    // quand j'appuie sur une équipe du bracket afficher quelque chose qui montre les joueurs (difficile)
    //---------------------------Minecraft------------------------------------------
    // faire un algo qui créé le bracket pour  minecraft (très très difficile) (à cause des 2 phases)
    // quand je créé mon tournoi, avoir un preview du bracket (moyen)
    // dans le preview de mon bracket, avoir un bouton save tournament pour pouvoir le save et créé le tournoi et besoin d'avoir une confirmation comme quelque chose qui pop dans ton écran: veux-tu vraiment sauvegarder le tournoi (difficle)
    // dans le preview de mon bracket, avoir le choix de faire les teams aléatoirements ou manuellement (moyen) en vrai le mettre dans le formulaire en dessous de nb joueurs/équipe. avoir un choix entre un bouton aléatoire ou non
    // faire un bon frontend (moyen)
    // sur le center div, ajouter une façon de switch entre phase 1 et phase 2 (facile)
    // quand j'appuie sur une équipe du bracket afficher quelque chose qui montre les joueurs (difficile)
    //---------------------------------------------------------------------
    // quand les tournoi sont créés et qu'on voit les brackets, avoir un boutons pour rentrez en phase update du tournoi et pouvoir changer le nom des équipes, les joueurs, ect (aucune idée)
    // dans les tournoi avoir un endroit pour attribuer son vote (ne peux pas voter pour son équipe) (moyen)
    // peux être montrer un timer au dessus pour la durée du tournoi? (facile)
    const [game, setGame] = useState('')
   
    const [lastGameRef, setLastGameRef] = useState(null)
    const refClashOfClan = useRef(null)
    const refClashRoyale = useRef(null)
    const refOverwatch2 = useRef(null)
    const refRocketLeague = useRef(null)
    const refMinecraft = useRef(null)
    const ref = useRef(null)

    const handleClick = ({game, gameRef}) =>{
        setGame(game)
        switch(lastGameRef){
            case null:
                gameRef.classList.add("selected")
                setLastGameRef(gameRef)
                break;
            case gameRef:
                gameRef.classList.remove("selected")
                setGame('')
                setLastGameRef(null)
                break;
            default:
                lastGameRef.classList.remove("selected")
                gameRef.classList.add("selected")
                setLastGameRef(gameRef)
        }
    }

    const rightDivSwitch = () =>{
        switch(game){
            case 'ClashOfClan':
                return <RightDivClashOfClan />
            case 'ClashRoyale':
                return <RightDivClashRoyale/>
            case 'Overwatch2':
                return <RightDivOverwatch2/>
            case 'RocketLeague':
                return <RightDivRocketLeague/>
            case 'Minecraft':
                return <RightDivMinecraft/>
            default:
                return <h3>Aucun jeu sélectionné</h3>
        }
    }
    const centerDivSwitch = () => {
        switch(game){
            case 'ClashOfClan':
                return <CenterDivClashOfClan />
            case 'ClashRoyale':
                return <CenterDivClashRoyale/>
            case 'Overwatch2':
                return <CenterDivOverwatch2/>
            case 'RocketLeague':
                return <CenterDivRocketLeague/>
            case 'Minecraft':
                return <CenterDivMinecraft/>
            default:
                return <h3>Aucun jeu sélectionné</h3>
        }
    }

    const onMouseDown = React.useCallback((e) =>{
        const startPos = {
            left: ref.current.scrollLeft,
            top: ref.current.scrollTop,
            x: e.clientX,
            y: e.clientY,
        }

        const handleMouseMove = (e) =>{
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            ref.current.scrollTop = startPos.top - dy;
            ref.current.scrollLeft = startPos.left - dx;
            updateCursor(ref.current)
        }

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup',handleMouseUp);
            resetCursor(ref.current)
        }
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, []);
    
    const updateCursor = (ref) =>{
        ref.style.cursor = 'grabbing';
        ref.style.userSelect = 'none';
    }
    const resetCursor = (ref) =>{
        ref.style.cursor = 'context-menu';
        ref.style.removeProperty('user-select');
    }
    return(
        <div className="maxPage">
            <Header/>
            <div className="tournamentDisplay leftdiv ">
                
                <Icon ref={refClashOfClan} className="icons" title="clash of clan" icon="arcticons:clash-mini" width={45} height={50} onClick={() => handleClick({game:"ClashOfClan", gameRef:refClashOfClan.current})}/>
                <Icon ref={refClashRoyale} className="icons" title="clash royale" icon="arcticons:clash-royale" width={45} height={50} onClick={() => handleClick({game:"ClashRoyale", gameRef:refClashRoyale.current})}/>
                <Icon ref={refOverwatch2} className="icons" title="temporary overwatch icon" icon="game-icons:gamepad" width={45} height={50} onClick={() => handleClick({game:"Overwatch2", gameRef:refOverwatch2.current})}/> {/**temporary overwatch icon */}
                <Icon ref={refRocketLeague} className="icons" title="rocket league" icon="arcticons:rocket-league-sideswipe" width={45} height={50} onClick={() => handleClick({game:"RocketLeague", gameRef:refRocketLeague.current})}/>
                <Icon ref={refMinecraft} className="icons" title="minecraft" icon="arcticons:minecraft" width={45} height={50} onClick={() => handleClick({game:"Minecraft", gameRef:refMinecraft.current})}/>
            </div>
            <div ref={ref} className="tournamentDisplay centerdiv " onMouseDown={(e) => onMouseDown(e)} >
                <div className="testrealquick">
                    {centerDivSwitch()}
                {/**<TournamentCreation  gameTitle={"Clash of clan"}/>*/}
                </div>
            </div>
            <div className="rightdiv">
                {rightDivSwitch()}
            </div>
        </div>
    )
    
}

const AlreadyHaveTournament = () => {
    return(
        <div className="alreadyHaveTournamentDiv">
           <FcInfo className="fcInfo"/>
            <h3>Il y a déjà un tournoi de créé</h3>
        </div>
    )
}

const FormTournament = ({gameTitle, forma, duree}) =>{
    const [next, setNext] = useState(false)
    const [nbEquipe, setNbEquipe] = useState(2);
    const [nbJoueur, setNbJoueur] = useState(1);

    const [teamPlayer, setTeamPlayer] = useState([])
    const [teamName, setTeamName] = useState();
    const [teams,setTeams] = useState([])

    //juste pour faire des test mais au final ça work so...
    const tournament = useRef({
            nbEquipe: nbEquipe,
            nbUserPerTeam: nbJoueur,
            teams:[]
    })

    const teamIndexFound = useRef(false)
    const allPlayers = GetAllPlayers()

    const handleInfoTournoiSubmit = () => {
        setNext(true)
    }

    const handleInfoTournoiNextSubmit = (e) =>{
        e.preventDefault();
       const sortteamPlayer = teamPlayer.sort((a,b) => a.teamId>b.teamId ? 1:-1)  //sort the list of player

       const newTeams = teams.map((team) => {
        const player = sortteamPlayer.map((player) => {
            if(team.id === player.teamId){
                return {...player}
            }
        }).filter(Boolean) //take out all the undefined
        console.log("Players:")
        console.log(player)

        const playerUsernameOnly = player.map((player) => { //I don't want any other information than the username of the player because the other information is useless
            return player.username
        })

        console.log(playerUsernameOnly)
        return {...team, members:playerUsernameOnly}
       })
       console.log(newTeams)
       tournament.current.teams = newTeams
       console.log(JSON.stringify(tournament.current))
       CreateTournament({gameTitle:gameTitle,tournament:tournament.current}) //still fuck up at the create but need just to clean my code because now that's ugly af
    }

    const handleTeamName = (e) =>{
        setTeamName(e)
    }
    const handleAddPlayerToTeam = ({e,teamId, playerId}) => { //work but need to check if I can change it later when everything will be done, there is way to many if/else and need to change everything
        let playerFound = false;
        let temp = false;
        
        const newTeamPlayer = teamPlayer.map((player) => {
            if(player.username === e){ //the player already exist in the list
                playerFound = true;
                if(player.teamId !== teamId){ //check if the player is on a different team
                    const newPlayers = deletePlayer({teamPlayer:teamPlayer,teamId:teamId, playerId:playerId})
                    const newPlayers2 = newPlayers.map((player) => {
                        if(player.username === e){
                            return{...player, teamId:teamId}
                        }else{
                            return player
                        }
                    })
                    setTeamPlayer(newPlayers2)
                    temp=true
                }else{
                    if(player.playerId !== playerId){  //check if the player is already on the team but have a different playerId
                        const newPlayers = deletePlayer({teamPlayer:teamPlayer,teamId:teamId, playerId:playerId})
                        const newPlayers2 = newPlayers.map((player) => {
                            if(player.username === e){
                                return {...player, playerId:playerId}
                            }else{
                                return player
                            }
                        })
                        setTeamPlayer(newPlayers2)
                        temp=true;
                        
                    }
                }
            }else{
                return player
            }
        })
        if(!playerFound){ //check if a player is in the list if not add it
            setTeamPlayer([...teamPlayer, {teamId:teamId,playerId: playerId,username:e}])
        }else{
            if(!temp){
                setTeamPlayer(newTeamPlayer)
            }
        }
    }

    const deletePlayer = ({teamPlayer,teamId, playerId}) => { // work but THATS IS TOTALLY FUCK UP (faaax)
         return teamPlayer.filter(player => !(player.teamId === teamId && player.playerId === playerId) )
    }


    //need to verify if they have the same name or not but will check this later
    const createTeams = (index) => { //work but seem kind of trash to me
        const newTeams = teams.map((item) => {
            if(item.id === index){
                teamIndexFound.current = true
                return {...item, id:index, teamName :teamName}
            }else{
                return item
            }
        })
        if(teamIndexFound.current === false){
            setTeams([
                ...teams,
                {id:index, teamName:teamName}
            ])
        }else{
            setTeams(newTeams)
            teamIndexFound.current = false
        }
        

    }
    const bigTesting = () =>{
        console.log(teams)
        console.log(teamPlayer)
    }
    const InfoTournoi = () => {
        return(
            <div className="divFormTournament">
                <h3>Informations du tournoi {gameTitle}:</h3>
                <form className="formTournament" onSubmit={() => handleInfoTournoiSubmit()}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Forma:</td>
                                <td> <input className="tdInput" type="text" name="forma" id="forma" value={forma} disabled/></td>
                            </tr>
                            <tr>
                                <td>Durée:</td>
                                <td ><input className="tdInput"  type="text" name="duree" id="duree" value={duree} disabled/></td>
                            </tr>
                            <tr>
                                <td>Nb équipe:</td>
                                <td><input className="tdInput"type="number" name="nbEquipe" id="nbEquipe" min={2} onChange={(e) => setNbEquipe(parseInt(e.target.value))} value={nbEquipe} /></td>
                            </tr>
                            <tr>
                                <td>Nb joueurs/équipe:</td>
                                <td> <input className="tdInput" type="number" name="nbJoueur" id="nbJoueur" min={1} onChange={(e) => setNbJoueur(parseInt(e.target.value))} value={nbJoueur}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">Continue</button>
                </form>
            </div>
        )
    }

    const infoTournoiNext = () => {
        let maxLoopNumber;
        const infoEquipe = new Array(nbEquipe).fill(null);
        if(nbJoueur %2 ===0){
            maxLoopNumber = nbJoueur/2;
        }else{
            maxLoopNumber = nbJoueur/2 + 0.5
        }
        /**maybe change later to something better but for now thats good enough need to see if I can change it when I am at the point of doing the frontend*/
        /*const test = new Array(nbEquipe).fill(null).map((_,index) => (
            <div className="test" key={index}>
                <h1>Équipe {index + 1 }</h1>
                <label>name:</label>
                <input type="text" onChange={(e) => handleTeamName(e.target.value)}/>
                <input onChange={() => createTeams(index)}/>
                <br/>
                <h3>Select your players</h3>
                {new Array(nbJoueur).fill(null).map((_,playerIndex) => (
                    <>
                        <select name="players" key={playerIndex} id="player-select" form="infoTournament" onChange={(e) => handleAddPlayerToTeam({e:e.target.value,teamId:index, playerId:playerIndex})}>
                            <option value="">Choose your player</option>
                            {allPlayers.map((player,index) => {
                                return <option key={index} name={player}>{player.username}</option>
                            })}
                        </select>
                        <input onChange={() => bigTesting()}/>
                    </>
                    
                ))}
            </div>
            
        ))*/
       //quand je fais les teams, je dois rajouter une protection contre les joeurs dupliqué dans chaque teams et les noms d'équipes duppliqué
        return(
            <>
                <form className="nextFormTournament" id="infoTournament" onSubmit={(e) => handleInfoTournoiNextSubmit(e)}>
                    <div>
                    {infoEquipe.map((_,index) => (
                            <table key={"équipe: " + index}>
                                <tbody>
                                    <tr>
                                        <th colSpan={2}>Équipe {index+1}:</th>
                                    </tr>
                                    <tr className="equipeTr">
                                        <td>Nom d'équipe:</td>
                                        <td><input className="tdInput" type="text"/></td>
                                    </tr>
                                    <tr>
                                        <th className="joueursTd" colSpan={2}>Joueurs:</th>
                                    </tr>
                                    {new Array(maxLoopNumber).fill(null).map((nb,_) => (
                                        <tr key={"a " +_}>
                                            { nbJoueur%2 ===0 || _+1 !== maxLoopNumber ? (
                                                <>
                                                    {new Array(2).fill(null).map((_,playerIndex) => (
                                                        <td key={playerIndex}>
                                                            <select form="infoTournament" onChange={(e) => handleAddPlayerToTeam({e:e.target.value, teamId:index, playerId:playerIndex})}>
                                                                <option value=""> Choisi un joueur</option>
                                                                {allPlayers.map((player,index) => {
                                                                    return <option key={index} name={player}>{player.username}</option>
                                                                })}
                                                            </select>
                                                        </td>
                                                    ) )}
                                                </>
                                            ): (
                                                <>
                                                {new Array(1).fill(null).map((_) => (
                                                    <td key={"b" + nbJoueur/2+0.5} colSpan={2}>
                                                        <select form="infoTournament" onChange={(e) => handleAddPlayerToTeam({e:e.target.value, teamId:index, playerId:nbJoueur/2+0.5})}>
                                                                <option value=""> Choisi un joueur</option>
                                                                {allPlayers.map((player,index) => {
                                                                    return <option key={index} name={player}>{player.username}</option>
                                                                })}
                                                            </select>
                                                    </td>
                                                ))}
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                    <tr>
                                    </tr>
                                </tbody>
                            </table>
                        
                    ))}
                    </div>
                    {/*{test}*/}
                    <button type="submit">créer le tournoi</button>
                </form>
            </>
        )
    }
    return(
        <>
            {next ? (
                infoTournoiNext()
            ): (
                InfoTournoi()
            )}
        </>
    )
}

export {TournamentMainPage, AlreadyHaveTournament, FormTournament}
