import React, { useEffect, useState, useRef } from "react";
import { HaveTournament, GetTournament, AddHistorique } from "../../Controller/APICall";
import { FormTournament } from "./TournamentMainPage";
import TournamentCreation from "./TournamentCreation";
import '../CSS/ToggleButton.css'
import '../CSS/ClashOfClan.css'

function RightDivClashOfClan() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState([{id:0,value:false},{id:1,value:false}])//always two team
    const result = HaveTournament({gameTitle:'Clash of clan'})
    const tournament3 = GetTournament({gameTitle:"Clash of clan"}); //need to change later but for now it's only to do testing maybe but each tournament in the context???
    let tournament;

    const gameHistorique = useRef({
        "gameTitle":"Clash Of Clans",
        "clashOfClans":[{
            "nbGame":"",
            "teams":[{
                "teamName":"",
                "members":[""],
                "win":"",
                "nbEtoiles":"",
                "nbDestructions":""
            },{
                "teamName":"",
                "members":[""],
                "win":"",
                "nbEtoiles":"",
                "nbDestructions":""
            }]  
        }]
    })
    const nbEtoiles = useRef([{value:0},{value:0}])
    const nbDestructions = useRef([{value:0},{value:0}])

    useEffect(() => {
            setData(result)
    },[result])

    const changeToggle = ({id,value}) => {
        const newToggle = toggle.map((toggle) => {
            if(id === toggle.id){
                return {id:id, value:value}
            }else{
                return {...toggle, value:false};
            }
        })
        setToggle(newToggle)
    }
    const HandleAddHistorique = () => {
        gameHistorique.current.clashOfClans[0].nbGame = 1; /* à changer plus tard quand j'aurai une idée de comment faire mes affaires et surement de mon contexte.*/
        tournament.teams.map((team,index) => {
            gameHistorique.current.clashOfClans[0].teams[index].teamName = team.teamName;
            gameHistorique.current.clashOfClans[0].teams[index].members = team.members;
            gameHistorique.current.clashOfClans[0].teams[index].nbEtoiles = nbEtoiles.current[index].value;
            gameHistorique.current.clashOfClans[0].teams[index].nbDestructions = nbDestructions.current[index].value;
            gameHistorique.current.clashOfClans[0].teams[index].win = toggle[index].value;
        })
        AddHistorique({historique:gameHistorique.current})
    }

    const handleNbEtoiles = ({index, value}) => {
        nbEtoiles.current[index].value = value;
    }

    const handleNbDestructions = ({index, value}) => {
        nbDestructions.current[index].value = value;
    }

    if(data === null || data.game === null && tournament){
        return(
            <h1>...Loading</h1>
        )
    }
    if(tournament3){
        tournament = JSON.parse(tournament3)
    }
    if(data != null && data.game != null && tournament)
    return (
        <>
            {data.haveTournament ? (
                <div className="matchInformation">
                    <button>Rentrez les stats des joueurs</button>
                    {tournament.teams.map((team,_) => (
                        
                        <table key={_}>
                            <tbody>
                                <tr>
                                    <th colSpan={2}>{team.teamName}</th>
                                </tr>
                                <tr>
                                    <td className="win">
                                        win:
                                    </td>
                                    <td>
                                        <button className={`toggle-btn ${toggle[_].value ? "toggled" : ""}`} onClick={() => changeToggle({id:_,value:!toggle[_].value})}>
                                            <div className="thumb"/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>nbÉtoiles:</td>
                                    <td>    
                                        <input className="input" type="txt" onChange={(e) => handleNbEtoiles({index:_, value:e.target.value})}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>nbDestructions:</td>
                                    <td><input className="input" type="text" onChange={(e) => handleNbDestructions({index:_, value:e.target.value})}/></td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                    <button onClick={() => HandleAddHistorique()}>update the tournament</button>
                </div>
            ) : (
                <FormTournament gameTitle={data.game.title} forma={data.game.forma} duree={data.game.duration}/>
            )}
        </>
    );
}

function CenterDivClashOfClan(){
    return(
        <>
            <TournamentCreation/>
        </>
    )
}
export {RightDivClashOfClan, CenterDivClashOfClan}