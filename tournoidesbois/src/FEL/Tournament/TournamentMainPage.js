import React, {useState, useRef } from "react";
import ClashOfClan from "./ClashOfClan";
import CLashRoyale from "./ClashRoyale";
import Overwatch2 from "./Overwatch";
import RocketLeague from "./RocketLeague";
import Minecraft from "./Minecraft";
import '../CSS/Tournament.css'
import '../CSS/Main.css'
import { FcInfo } from "react-icons/fc";
import { CreateTournament, GetAllPlayers } from "../../Controller/APICall";

function TournamentMainPage(){
    const [game, setGame] = useState('')

    const handleClick = (e) =>{
        setGame(e)
    }

    const rightDivSwitch = (param) =>{
        switch(param){
            case 'ClashOfClan':
                return <ClashOfClan />
            case 'ClashRoyale':
                return <CLashRoyale/>
            case 'Overwatch2':
                return <Overwatch2/>
            case 'RocketLeague':
                return <RocketLeague/>
            case 'Minecraft':
                return <Minecraft/>
            default:
                return <h3>No Game selected</h3>
        }
    }
    return(
        <div className="maxPage">
            <div className="display cheh leftdiv ">
                {/**doit check si je ne peux pas changer la façon que je fais ça */}
                <h3>Liste de jeux:</h3>
                <ul className="uljeuxList nodotlist">
                    <li>
                        <button className="display headerButton" onClick={() => handleClick('ClashOfClan')}>Clash of clan</button>
                    </li>
                    <li>
                        <button className="display headerButton" onClick={() => handleClick('ClashRoyale')}>Clash royale</button>
                    </li>
                    <li>
                        <button className="display headerButton" onClick={() => handleClick('Overwatch2')}>Overwatch 2</button>
                    </li>
                    <li>
                        <button className="display headerButton" onClick={() => handleClick('RocketLeague')}>Rocket League</button>
                    </li>
                    <li>
                        <button className="display headerButton" onClick={() => handleClick('Minecraft')}>Minecraft</button>
                    </li>
                </ul>
            </div>
            <div className="cheh rightdiv">
                {rightDivSwitch(game)}
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
        tournament:{
            nbEquipe: nbEquipe,
            nbUserPerTeam: nbJoueur,
            teams:[]
        }
        
        
    })

    const teamIndexFound = useRef(false)
    {/**fuck react c'est de la criss de merrde pour du json besoin de tout check pour être sûr que rien en fuck up à 100% et que tout soit bien codé*/}
    const allPlayers = GetAllPlayers()

    const handleInfoTournoiSubmit = () => {
        setNext(true)
    }

    const handleInfoTournoiNextSubmit = (e) =>{
        e.preventDefault();
        //work like this so I need to be able to change this shit so it work with my other shit maybe with like 2 maps where it all go idk bro need to do some testing but I don,t think it will be that hard
        /*test2.current.teams = {ca:{
            members:[{
                username:12313
            },{
                username:'dadas'
            }]
        },
        caa:{
            username:'dasda',
            username:123123
        }}*/
       const sortteamPlayer = teamPlayer.sort((a,b) => a.teamId>b.teamId ? 1:-1)  //maybe change it to go somewhere else??
       const test223 = test.map((test) => {
        const player = sortteamPlayer.map((player) => {
            if(test.id === player.teamId){
                return {...player}
            }
        }).filter(Boolean)
        return {...test, members:player}
       })
       console.log(test223)
       tournament.current.tournament.teams = test223
       console.log(tournament.current)
       //CreateTournament({gameTitle:gameTitle,tournament:tournament.current}) //still fuck up at the create but need just to clean my code because now that's ugly af
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
                return {...item, id:index, teamName:teamName}
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
                    </table>
                    <button type="submit">Continue</button>
                </form>
            </div>
        )
    }

    const infoTournoiNext = () => {
        /**maybe change later to something better but for now thats good enough need to see if I can change it when I am at the point of doing the frontend*/
        const test = new Array(nbEquipe).fill(null).map((_,index) => (
            <div className="test" key={index}>
                <h1>Équipe {index + 1 }</h1>
                <label>name:</label>
                <input type="text" onChange={(e) => handleTeamName(e.target.value)}/> {/**maybe change for useRef but need to do some testing later to be sure everything is alright */}
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
            
        ))
        return(
            <>
                <form id="infoTournament" onSubmit={(e) => handleInfoTournoiNextSubmit(e)}>
                    {test}
                    <button type="submit">create</button>
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
