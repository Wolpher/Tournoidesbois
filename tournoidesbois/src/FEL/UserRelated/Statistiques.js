import React, {useEffect, useRef, useState } from "react";
import Header from "../Header";
import '../CSS/Statistique.css';
import CoCSwords from '../img/CoCSwords.png'
import CoC from '../img/coc.png'
import OW from '../img/overwatch2.png'
import RL from '../img/rl.png'
import CR from '../img/clashroyale.png'
import {GetAllPlayersSpecificTournament } from "../../Controller/APICall";
import { GiMoneyStack } from "react-icons/gi";
import { FaSortNumericDownAlt, FaSortNumericUpAlt, FaBrain, FaAward, FaChartLine, FaSkull, FaHandsHelping, FaCrown, FaCrosshairs, FaFutbol, FaBan} from "react-icons/fa";
import { GiCastle, GiBrightExplosion, GiStoneTower } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import {SiElixir} from "react-icons/si";

//faire minecraft
//ajouter quelque chose proche de la souris quand tu hover les icons pour dire exactements c'est quoi
// rajouter quelque chose quand les données sont entrain de load
//peut-être rajouter quelque chose en relation des différentes phases dans chaque jeux?
//dans la barre de recherche par jeu rajouter un icon win loose? (surement utilisé la même fonction que pour le mvp vu que c'Est également un boolean) (bouton toggle)?
//Pour la recherche de nom, si tu as un jeu de sélectionner et la personnes n'a pas participé à ce jeu, dois montrer quelque chose
//show something for each situation available (noPlayers, noPlayer with those character, ect, ect)
//à la place des photos de jeux, mettre les photos de profile
//l'UI de COC à changé et je ne sais pas pourquoi mais bon va falloir fix ça
//pour le dernier joueur dans clash royale j,ai un bug au niveau de la bordure c'est assez weird à fix plus tard
export default function Statistiques(){
    const [selectValue, setSelectValue] = useState("none");
    const [order, setOrder] = useState("ascending");
    const [recherchePlayer, setRecherchePlayer] = useState("");
    const handleSelectOnChange = (e) => {
        setSelectValue(e)
    }

    const handleChangeSelectValue = () => {
        switch(selectValue){
            case "COC":
                return <StatistiqueClashOfClan order={order} setOrder={setOrder} recherchePlayer={recherchePlayer}/>
            case "Overwatch 2":
                return <StatistiqueOverwatch2 order={order} setOrder={setOrder} recherchePlayer={recherchePlayer}/>
            case "Clash Royale":
                return <StatistiqueClashRoyale order={order} setOrder={setOrder} recherchePlayer={recherchePlayer}/>
            case "Rocket League":
                return <StatistiqueRocketLeague order={order} setOrder={setOrder} recherchePlayer={recherchePlayer}/>
            case "Minecraft":
                return <StatistiqueMinecraft order={order} setOrder={setOrder} recherchePlayer={recherchePlayer}/>
            default:
                return <StatistiqueGeneral order={order} setOrder={setOrder} recherchePlayer={recherchePlayer}/>
        }
    }

    const handleChangeRecherchePlayer = (player) => {
        setRecherchePlayer(player)
    }
    
    return(
        <div className="maxPage">
            <Header/>
            <div className="statistiquePage">
                <div className="rechercheSection">
                    <input type="text" placeholder="Entrez le nom d'un utilisateur" onChange={(player) => handleChangeRecherchePlayer(player.target.value)}/>
                    <select onChange={(e) => handleSelectOnChange(e.target.value)}>
                        <option>Général</option>
                        <option>COC</option>
                        <option>Overwatch 2</option>
                        <option>Clash Royale</option>
                        <option>Rocket League</option>
                        <option>Minecraft</option>
                    </select>
                </div>
                <div className="joueursSection">
                    {handleChangeSelectValue()}
                </div>
            </div>
        </div>
    )
}

function StatistiqueGeneral({order, setOrder, recherchePlayer}){
    const [whatOrder, setWhatOrder] = useState()
    const [allPlayersOrder, setAllPlayersOrder] = useState([]);
    const [showRecherchePlayers, setShowRecherchePlayers] = useState([])
    const allPlayers = GetAllPlayersSpecificTournament({gameTitle:"General"});
    const refPointTotaux = useRef(null);
    const refMedailleBronze = useRef(null);
    const refMedailleArgent = useRef(null);
    const refMedailleOr = useRef(null);
    const refPrediction = useRef(null);
    const refMoney = useRef(null);
    const [lastRef, setLastRef] = useState(null);

    useEffect(() => {
        orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder, setShowRecherchePlayers:setShowRecherchePlayers})
    },[allPlayers])

    useEffect(() => {
        orderByWhat({what:whatOrder})
    },[order])

    useEffect(() => {
        if(allPlayersOrder.length !== 0){
            const rechercherPlayers = filterPlayerByUsername({allPlayers:allPlayersOrder, username:recherchePlayer})
            setShowRecherchePlayers(rechercherPlayers);
        }
    },[recherchePlayer, allPlayersOrder])

    const changeOrder = (newOrder) => {
        setOrder(newOrder)
    }

    const orderByWhat = ({what}) => {
        switch(what){
            case "money":
                orderByCategorie({gameStats:"generalStats",stat:"cashPrize",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            case "prediction":
                orderByCategorie({gameStats:"generalStats",stat:"prediction",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setShowRecherchePlayers});
                break;
            case "medailleOr":
                orderByCategorie({gameStats:"generalStats",stat:"nbMedailleOr",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            case "medailleArgent":
                orderByCategorie({gameStats:"generalStats",stat:"nbMedailleArgent",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            case "medailleBronze":
                orderByCategorie({gameStats:"generalStats",stat:"nbMedailleBronze",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            case "pointsTotaux":
                orderByCategorie({gameStats:"generalStats",stat:"pointTotaux",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            default:
                orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
                break;
        }
    }

    if(showRecherchePlayers.length === 0){ //the msg is different since it is about users in general and not about user in a game tournament
        return(
            <h1>Il y a eu une erreur lors de la récupération des utilisateurs</h1>
        )
    }
    return(
        <>
        <div className="GeneralAdvanceBar">
            <div title="points totaux" ref={refPointTotaux} className="points" onClick={() => ChangeWhatOrder({what:"pointsTotaux",ref:refPointTotaux.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}> <FaChartLine/></div>
            <div title="médaille de bronze" ref={refMedailleBronze} className="medailleBronze" onClick={() => ChangeWhatOrder({what:"medailleBronze",ref:refMedailleBronze.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaAward/></div>
            <div title="médaille d'argent" ref={refMedailleArgent} className="medailleArgent" onClick={() => ChangeWhatOrder({what:"medailleArgent",ref:refMedailleArgent.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaAward/></div>
            <div title="médaille d'or" ref={refMedailleOr} className="medailleOr" onClick={() => ChangeWhatOrder({what:"medailleOr",ref:refMedailleOr.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})} ><FaAward/></div>
            <div title="prédiction" ref={refPrediction} className="brain" onClick={() => ChangeWhatOrder({what:"prediction",ref:refPrediction.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaBrain /></div>
            <div title="cash prize" ref={refMoney} className="money moneyButton" onClick={() => ChangeWhatOrder({what:"money",ref:refMoney.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><GiMoneyStack /></div>
            {order === "ascending" ? (
                <div title="ordre croissant" className="orderBy" onClick={() => changeOrder("descending")}><FaSortNumericUpAlt/></div>
            ): (
                <div title="ordre décroissant" className="orderBy" onClick={() => changeOrder("ascending")}><FaSortNumericDownAlt/></div>
            )}
            
        </div>
        <div className="joueursSectionMainDiv">
            {showRecherchePlayers.map((user, _) => (
                <div className="PlayerStatistique" key={_}>
                    <p>Username: {user.username}</p>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={"2"}>points totaux: {user.generalStats.pointTotaux} pts</td>
                            </tr>
                            <tr>
                                <td>médaille de bronze: {user.generalStats.nbMedailleBronze}</td>
                                <td>médaille d'argent: {user.generalStats.nbMedailleArgent}</td>
                            </tr>
                            <tr>
                                <td className="medailleSeparation" colSpan={"2"}>médaille d'or: {user.generalStats.nbMedailleOr}</td>
                            </tr>
                            <tr>
                                <td colSpan={"2"}>prédiction: {user.generalStats.prediction}%</td>
                            </tr>
                            <tr>
                                <td colSpan={"2"}>Cash prize: {user.generalStats.cashPrize} <GiMoneyStack className="money"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
        </>
        
    )
}

function StatistiqueClashOfClan({order, setOrder, recherchePlayer}){
    const [allPlayersOrder, setAllPlayersOrder] = useState([])
    const [showRecherchePlayers, setShowRecherchePlayers] = useState([])
    const [whatOrder, setWhatOrder] = useState("");

    const [lastRef,setLastRef] = useState(null)
    const refHdv = useRef(null)
    const refEtoiles = useRef(null)
    const refDestruction = useRef(null)

    const allPlayers = GetAllPlayersSpecificTournament({gameTitle:"Clash Of Clan"});

    useEffect(() => {
        orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
    },[allPlayers])

    useEffect(() => {
        orderByWhat({what:whatOrder})
    },[order])
    
    useEffect(() => {
        if(allPlayersOrder.length !== 0){
            const rechercherPlayers = filterPlayerByUsername({allPlayers:allPlayersOrder, username:recherchePlayer})
            setShowRecherchePlayers(rechercherPlayers);
        }
    },[recherchePlayer, allPlayersOrder])

    const orderByWhat = ({what}) => {
        switch(what){
            case "hdv":
                orderByCategorie({gameStats:"statsClashOfClan",stat:"hdv",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            case "etoiles":
                orderByCategorie({gameStats:"statsClashOfClan",stat:"nbEtoiles", order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder})
                break;
            case "destruction":
                orderByCategorie({gameStats:"statsClashOfClan",stat:"nbPourcentage", order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder})
                break;
            default:
                orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
                break;
            }
    }

    const changeOrder = (order) => {
        setOrder(order)
    }


    if(showRecherchePlayers.length === 0){
        return(
            NoPlayer()
        )
    }
    return(
        <>
        <div className="GeneralAdvanceBar">
            <div title="hdv" ref={refHdv} className="hdv" onClick={() => ChangeWhatOrder({what:"hdv",ref:refHdv.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><GiCastle/></div>
            <div title="étoiles" ref={refEtoiles} className="etoiles" onClick={() => ChangeWhatOrder({what:"etoiles",ref:refEtoiles.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><AiFillStar/></div>
            <div title="pourcentage" ref={refDestruction} className="destruction" onClick={() => ChangeWhatOrder({what:"destruction",ref:refDestruction.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><GiBrightExplosion/></div>
            {order === "ascending" ? (
                <div title="ordre croissant" className="orderBy" onClick={() => changeOrder("descending")}><FaSortNumericUpAlt/></div>
            ): (
                <div title="ordre décroissant" className="orderBy" onClick={() => changeOrder("ascending")}><FaSortNumericDownAlt/></div>
            )}
        </div>
        <div className="joueursSectionMainDiv">
            {showRecherchePlayers.map((user,_) => (
                <div key={_} style={{backgroundColor: GetBackgroundColor({win:user.statsClashOfClan.matchupsInformation.win})}} className="clashOfClanChildDiv">           
                    <img className="ClashOfClanPic" src={CoC} alt="Clash of Clan"/> {/* might need to change this, either have different picture or put the picture on the two sides of the screen... to meditate*/}
                    <div className="clashOfClanPlayerStats">
                        <p>username: {user.username}</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>hdv: {user.statsClashOfClan.hdv}</td>
                                    <td><img className="clashOfClanSwords" src={CoCSwords} alt="épée"/></td>
                                    <td>hdv: {user.statsClashOfClan.adversaireHdv}</td>
                                </tr>
                                <tr>
                                    <td colSpan={"3"}>étoile : {user.statsClashOfClan.nbEtoiles}</td>
                                </tr>
                                <tr>
                                    <td colSpan={"3"}>Destruction : {user.statsClashOfClan.nbPourcentage} %</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4>VS {user.statsClashOfClan.matchupsInformation.adversaireName}</h4>
                </div>
            ))}
        </div>
        </>
    )
}

function StatistiqueRocketLeague({order, setOrder, recherchePlayer}){
    const [allPlayersOrder, setAllPlayersOrder] = useState([])
    const [showRecherchePlayers, setShowRecherchePlayers] = useState([])
    const [whatOrder, setWhatOrder] = useState("");
    
    const [lastRef,setLastRef] = useState(null)
    const refGoals = useRef(null)
    const refAssists = useRef(null)
    const refArrets = useRef(null)

    const allPlayers = GetAllPlayersSpecificTournament({gameTitle:"Rocket League"})

    useEffect(() => {
        orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
    },[allPlayers])

    useEffect(() => { //need to do the useEffect since useState is async, need to change the order of the stats I want when the new order is there
        orderByWhat({what:whatOrder})
    },[order])

    useEffect(() => {
        if(allPlayersOrder.length !== 0){
            const rechercherPlayers = filterPlayerByUsername({allPlayers:allPlayersOrder, username:recherchePlayer})
            setShowRecherchePlayers(rechercherPlayers);
        }
    },[recherchePlayer, allPlayersOrder])

    const orderByWhat = ({what}) => {
        switch(what){
            case "goals":
                orderByCategorie({gameStats:"statsRocketLeague",stat:"nbButs",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            case "assists":
                orderByCategorie({gameStats:"statsRocketLeague",stat:"nbPasse", order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder})
                break;
            case "arrets":
                orderByCategorie({gameStats:"statsRocketLeague",stat:"nbArret", order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder})
                break;
            default:
                orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
                break;
            }
    }

    const changeOrder = (order) => {
        setOrder(order)
    }


    if(showRecherchePlayers.length === 0){
        return(
            NoPlayer()
        )
    }
    return(
        <>
        <div className="GeneralAdvanceBar">
            <div title="buts" ref={refGoals} className="goals" onClick={() => ChangeWhatOrder({what:"goals",ref:refGoals.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaFutbol/></div>
            <div title="assits" ref={refAssists} className="assists" onClick={() => ChangeWhatOrder({what:"assists",ref:refAssists.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaHandsHelping/></div>
            <div title="arrêts" ref={refArrets} className="arrets" onClick={() => ChangeWhatOrder({what:"arrets",ref:refArrets.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaBan/></div>
            {order === "ascending" ? (
                <div title="ordre croissant" className="orderBy" onClick={() =>  changeOrder("descending")}><FaSortNumericUpAlt/></div>
            ): (
                <div title="ordre décroissant" className="orderBy" onClick={() => changeOrder("ascending")}><FaSortNumericDownAlt/></div>
            )}
        </div>
        <div className="joueursSectionMainDiv">
            {
                showRecherchePlayers.map((user,_) => (
                    <div key={_} style={{backgroundColor: GetBackgroundColor(user.statsRocketLeague.matchUpsInformation)}} className="rocketLeagueChildDiv">
                        <img src={RL} alt="Rocket League"/>
                        <div className="rocketLeaguePlayerStats">
                        <p>username: {user.username}</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>buts: {user.statsRocketLeague.nbButs}</td>
                                        <td>arrêt: {user.statsRocketLeague.nbArret}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={"2"}>passe: {user.statsRocketLeague.nbPasse}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h4>VS {user.statsRocketLeague.matchUpsInformation.adversaireName}</h4>
                    </div>                
                ))
            }
        </div>
        </>
    )
}
function StatistiqueOverwatch2({order, setOrder, recherchePlayer}){
    const [allPlayersOrder, setAllPlayersOrder] = useState([])
    const [showRecherchePlayers, setShowRecherchePlayers] = useState([])
    const [whatOrder, setWhatOrder] = useState("");

    const [lastRef, setLastRef] = useState(null);
    const refKills = useRef(null);
    const refAssists = useRef(null);
    const refDeaths = useRef(null);
    const refMVP = useRef(null);

    const allPlayers = GetAllPlayersSpecificTournament({gameTitle:"Overwatch 2"});
    
    useEffect(() => {
        orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
    },[allPlayers])

    useEffect(() => { //need to do the useEffect since useState is async, need to change the order of the stats I want when the new order is there
        orderByWhat({what:whatOrder})
    },[order])

    useEffect(() => {
        if(allPlayersOrder.length !== 0){
            const rechercherPlayers = filterPlayerByUsername({allPlayers:allPlayersOrder, username:recherchePlayer})
            setShowRecherchePlayers(rechercherPlayers);
        }
    },[recherchePlayer, allPlayersOrder])

    const changeOrder = (order) => {
        setOrder(order)
    }

    const orderByWhat = ({what}) => {
        
        switch(what){
            case "kills":
                orderByCategorie({gameStats:"statsOverwatch",stat:"nbKills",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            case "assists":
                orderByCategorie({gameStats:"statsOverwatch",stat:"nbAssists", order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder})
                break;
            case "deaths":
                orderByCategorie({gameStats:"statsOverwatch",stat:"nbDeath", order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder})
                break;
            case "mvp":
                orderByMVP({gameStats:"statsOverwatch",stat:"mvp", order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder})
                break;
            default:
                orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
                break;
            }
    }
    

    if(showRecherchePlayers.length === 0){
        return(
            NoPlayer()
        )
    }
    return(
        <>
        <div className="GeneralAdvanceBar">
            <div title="kills" ref={refKills} className="kills" onClick={() => ChangeWhatOrder({what:"kills",ref:refKills.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaCrosshairs/></div>
            <div title="assists" ref={refAssists} className="assists" onClick={() => ChangeWhatOrder({what:"assists", ref:refAssists.current, lastRef: lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaHandsHelping/></div>
            <div title="morts" ref={refDeaths} className="deaths" onClick={() => ChangeWhatOrder({what:"deaths", ref:refDeaths.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaSkull/></div>
            <div title="mvp" ref={refMVP} className="mvp" onClick={() => ChangeWhatOrder({what:"mvp",ref:refMVP.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><FaCrown/></div>
            {order === "ascending" ? (
            <div title="ordre croissant" className="orderBy" onClick={() => changeOrder("descending")}><FaSortNumericUpAlt/></div>
            ): (
            <div title="ordre décroissant" className="orderBy" onClick={() => changeOrder("ascending")}><FaSortNumericDownAlt/></div>
            )}
        </div>
        <div className="joueursSectionMainDiv">
            {showRecherchePlayers.map((user,_) => (
                <div key={_} style={{backgroundColor: GetBackgroundColor({win:user.statsOverwatch.matchUpsInformation.win})}} className="overwatchChildDiv">
                    <img src={OW} alt="Overwatch 2"/>
                    <div className="overwatchPlayerStats">
                        <p>username: {user.username}</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>kills: {user.statsOverwatch.nbKills}</td>
                                    <td>assists: {user.statsOverwatch.nbAssists}</td>
                                </tr>
                                <tr>
                                    <td>Death: {user.statsOverwatch.nbDeath}</td>
                                    <td>MVP: {"" + user.statsOverwatch.mvp}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4>VS {user.statsOverwatch.matchUpsInformation.adversaireName}</h4>
                </div>
            ))}
        </div>
        </> 
    )
}

function StatistiqueClashRoyale({order, setOrder, recherchePlayer}){
    const [allPlayersOrder, setAllPlayersOrder] = useState([])
    const [showRecherchePlayers, setShowRecherchePlayers] = useState([])
    const [whatOrder, setWhatOrder] = useState("");
    const [lastRef, setLastRef] = useState(null);
    
    const refTower = useRef(null);
    const refElixir = useRef(null);
    const allPlayers = GetAllPlayersSpecificTournament({gameTitle:"Clash Royale"})

    useEffect(() => {
        orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
    },[allPlayers])

    useEffect(() => {
        orderByWhat({what:whatOrder})
    },[order])

    useEffect(() => {
        if(allPlayersOrder.length !== 0){
            const rechercherPlayers = filterPlayerByUsername({allPlayers:allPlayersOrder, username:recherchePlayer})
            setShowRecherchePlayers(rechercherPlayers);
        }
    },[recherchePlayer, allPlayersOrder])

    const changeOrder = (order) => {
        setOrder(order)
    }

    const orderByWhat = ({what}) => {
        switch(what){
            case "tower":
                orderByCategorie({gameStats:"statsClashRoyales",stat:"nbToursDetruite",order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder});
                break;
            case "elixir":
                orderByCategorie({gameStats:"statsClashRoyales",stat:"deckConsumption", order:order, allPlayersOrder:allPlayersOrder, setAllPlayersOrder:setAllPlayersOrder})
                break;
            default:
                orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
                break;
            }
        
    }

    if(showRecherchePlayers.length === 0){
        return(
            NoPlayer()
        )
    }
    return(
        <>
            <div className="GeneralAdvanceBar">
                <div ref={refTower} title="Nombre de tours détruite" className="tower" onClick={() =>  ChangeWhatOrder({what:"tower",ref:refTower.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><GiStoneTower/></div>
                <div ref={refElixir} title="consommation du deck" className="elixir" onClick={() =>  ChangeWhatOrder({what:"elixir",ref:refElixir.current, lastRef:lastRef, setLastRef:setLastRef, setWhatOrder:setWhatOrder, orderByWhat:orderByWhat})}><SiElixir/></div>
            {order === "ascending" ? (
                <div title="ordre croissant" className="orderBy" onClick={() =>  changeOrder("descending")}><FaSortNumericUpAlt/></div>
            ): (
                <div title="ordre décroissant" className="orderBy" onClick={() => changeOrder("ascending")}><FaSortNumericDownAlt/></div>
            )}
            </div>
            <div className="joueursSectionMainDiv">
                {showRecherchePlayers.map((user,_) => (
                <div key={_} style={{backgroundColor: GetBackgroundColor({win:user.statsClashRoyales.matchUpsInformation.win})}} className="clashRoyaleChildDiv" >
                    <img src={CR}/>
                    <div className="clashRoyalePlayerStats">
                        <div className="clashRoyalePlayerInformation">
                            <p>username: {user.username}</p>
                            <p>Nombre de tours détruite: {user.statsClashRoyales.nbToursDetruite}</p>
                            <p>Consommation du deck: {user.statsClashRoyales.deckConsumption} <SiElixir style={{color:"rgb(245, 66, 227)"}}/></p>
                        </div>
                        <div className="clashRoyaleDeckDiv">
                            {user.statsClashRoyales.clashRoyaleDeck ? (
                                <div className="clashRoyaleChildDeckDiv">
                                    {user.statsClashRoyales.clashRoyaleDeck.map((deckCard,_) => (
                                        <div key={_} className="cardsDiv" style={_ === 7 ? ({borderRight:"groove"}) : ({borderRight:"ridge"})}>
                                            <img title={deckCard.iconName} className="clashRoyaleDeckCards" src={deckCard.iconUrl}/>
                                        </div>
                                        
                                    ))}
                                </div>
                            ):(
                                <div className="clashRoyaleChildDeckDiv">
                                    <p>Ce joueur à aucun deck présentement</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <h4>VS {user.statsClashRoyales.matchUpsInformation.adversaireName}</h4>
                </div>
                ))}
            </div>
            
        </>
    )
}

function StatistiqueMinecraft({order, setOrder, recherchePlayer}){
    const [allPlayersOrder, setAllPlayersOrder] = useState([])
    const [showRecherchePlayers, setShowRecherchePlayers] = useState([])
    const [whatOrder, setWhatOrder] = useState("");
    const [lastRef, setLastRef] = useState(null);

    const allPlayers = GetAllPlayersSpecificTournament({gameTitle:"Minecraft"})
    console.log(allPlayers)

    useEffect(() => {
        orderByAlphabetical({allPlayers:allPlayers, setAllPlayersOrder:setAllPlayersOrder})
    },[allPlayers])

    const changeOrder = (order) =>{
        setOrder(order)
    }

    useEffect(() => {
        if(allPlayersOrder.length !== 0){
            const rechercherPlayers = filterPlayerByUsername({allPlayers:allPlayersOrder, username:recherchePlayer})
            setShowRecherchePlayers(rechercherPlayers);
        }
    },[recherchePlayer, allPlayersOrder])

    if(showRecherchePlayers.length === 0){
        return(
            NoPlayer()
        )
    }
    return(
        <>
            <div className="GeneralAdvanceBar">
            {order === "ascending" ? (
                <div title="ordre croissant" className="orderBy" onClick={() =>  changeOrder("descending")}><FaSortNumericUpAlt/></div>
            ): (
                <div title="ordre décroissant" className="orderBy" onClick={() => changeOrder("ascending")}><FaSortNumericDownAlt/></div>
            )}
            </div>
            {showRecherchePlayers.map((user,_) => (
                <div key={_}>{user.username}</div>
            ))}
        </>
    )
}

const LoadingData = () => {
    return(
        <h1>Loading...</h1>
    )
}

const NoPlayer = () => { //show a msg in case there is no player participating in the tournament of a game
    return(
        <div>
            <h1>Il n'y a actuellement aucun joueur qui participe au tournoi de ce jeu</h1>
        </div>
    )
}

function GetBackgroundColor({win}){
    return win ? '#5CB660' : 'rgba(255, 0, 0, 0.48)'
}

const orderByUsername = ({a,b}) => {
    return a.username.toLowerCase() > b.username.toLowerCase() ? 1: -1;
}

const orderByAlphabetical = ({allPlayers, setAllPlayersOrder}) => {
    if(allPlayers){    
        const newAllPlayersOrder = [...allPlayers].sort((a,b) => orderByUsername({a:a,b:b}))
        setAllPlayersOrder(newAllPlayersOrder)
    }
}

const ChangeWhatOrder = ({what,ref, lastRef, setLastRef, setWhatOrder, orderByWhat}) =>{
    setWhatOrder(what)
    switch(lastRef){
        case null:
            setLastRef(ref);
            ref.classList.add("selected")
            orderByWhat({what:what}); //allow the order to be done when you clique on the button on the first time and not when you clique the div to change the order to ascending or descending
            break;
        case ref:
            setLastRef(null)
            ref.classList.remove("selected")
            orderByWhat({what:"default"})
            setWhatOrder(null) //so when the user clique the ascending or descending button, it doesn't do something if nothing is selected
            break;
        default:
            lastRef.classList.remove("selected")
            setLastRef(ref);
            ref.classList.add("selected")
            orderByWhat({what:what}); //allow the order to be done when you click on the button on the first time and not when you clique the div to change the order to ascending or descending
    }
}

const orderByCategorie = ({gameStats,stat, order, allPlayersOrder, setAllPlayersOrder}) => {
    if(order === "ascending"){
        const newAllPlayersOrder = [...allPlayersOrder].sort((a,b) => {
            if(a[gameStats][stat] === b[gameStats][stat]){    
                return orderByUsername({a:a,b:b});
            }
            return a[gameStats][stat] > b[gameStats][stat] ? 1 : -1
        })
        setAllPlayersOrder(newAllPlayersOrder)
    }else{
        const newAllPlayersOrder = [...allPlayersOrder].sort((a,b) => {
            if(a[gameStats][stat] === b[gameStats][stat]){    
                return orderByUsername({a:a,b:b});
            }
            return a[gameStats][stat] < b[gameStats][stat] ? 1 : -1
        })
        setAllPlayersOrder(newAllPlayersOrder)
    }
}

const orderByMVP = ({gameStats,stat, order, allPlayersOrder, setAllPlayersOrder}) => {
    console.log(allPlayersOrder)
    if(order === "ascending"){
        const newAllPlayersOrder = [...allPlayersOrder].sort((a,b) => {
            if(a[gameStats][stat] === b[gameStats][stat]){   
                return orderByUsername({a:a,b:b})
            }
            return a[gameStats][stat] === true ? -1:1
        })
        console.log(newAllPlayersOrder)
        setAllPlayersOrder(newAllPlayersOrder)
    }else{
        const newAllPlayersOrder = [...allPlayersOrder].sort((a,b) => {
            if(a[gameStats][stat] === b[gameStats][stat]){   
                return orderByUsername({a:a,b:b})
            }
            return a[gameStats][stat] === false ? -1:1
        })
        setAllPlayersOrder(newAllPlayersOrder)
    }
}

const filterPlayerByUsername = ({allPlayers,username}) => {
    const result = allPlayers.filter((player) => player.username.includes(username))
    return result;
}