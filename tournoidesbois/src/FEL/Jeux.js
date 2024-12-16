import React from "react";
import './CSS/Main.css'
import coc from '../img/coc.png'
import ow from '../img/overwatch2.png'
import cr from '../img/clashroyale.png'
import rl from '../img/rl.png'
import mc from '../img/minecraft.png'
import {FcCancel, FcCheckmark } from "react-icons/fc"
function Jeux(){
    return(
        <div className="center mainPage">
            <h3>Clash of clan:</h3>
            <ClashOfClan />
            <h3>Overwatch:</h3>
            <Overwatch />
            <h3>Clash Royale</h3>
            <ClashRoyale />
            <h3>Rocket League:</h3>
            <RocketLeague />
            <h3>Minecraft: </h3>
            <MineCraft />
        </div>
    )
}

function ClashOfClan(){
    return(
    <div className="center border">
        <img src={coc} alt="Clash of Clan"/>
        <h4>Durée: 2 semaines</h4>
        <h4>Format: 2 de 3</h4>

        <h4>Récompenses:</h4>
        <ul>
            <li>Les joueurs de l'équipe gagnante reçoivent tous une médaille de bronze</li>
            <li>cash prize = 50$</li>
        </ul>

        <h4>Matchmaking:</h4>
        <ul>
            <li>
                Les équipes vont être séparé par le QI, l'expérience et le village. 
                <br/>
                <em>** Vous ne pouvez pas être mis contre quelqu'un qui n'est pas du même hdv à moins que vous êtes trop fort au jeu.</em>
                <br/>
                <em>** Pour les hdv 2 à 10, certains règlement et balancement seront ajoutés au fur et à mesure, à cause de l'incapabilité de déterminer l'hdv de chaque joueur avant le tournoi.</em>
            </li>
        </ul>
        <h4>Règlements: </h4>
        <ul className="nodotlist">
            <li><FcCheckmark/> 2 nouveaux clans seront créer pour être sur le même pieds d'égalité lorsqu'on donne des troupes.</li>
            <li><FcCancel/> Les troupes d'évènements et les équipements épiques sont bannis.</li>
            <li><FcCancel/> Pas le droit à nat de donner des villages de pro ligue à son équipe.</li>
            <li><FcCancel/> Pas le droit aux super troupes que ton adversaire n'a pas débloqué (selon l'hdv). 
                <br/>
                <em>** ajustement possible par les organisateurs.</em>
            </li>
            <li><FcCancel/> L'utilisation de la potion pour max tes troupes est interdite si ton opposant est un hdv en dessous de toi. 
                <br/>
                <em>** Peut être interdit pour certain joueurs au désir des organisateurs.</em>
            </li>
        </ul>
    </div>
    )
}

function Overwatch(){
    return(
        <div className="center border">
            <img src={ow} alt="Overwatch"/>
            <h4>Durée: 2 mois</h4>
            <h4>Forma: 2 phases</h4>
            <ul>
                <li>phase 1: toutes les équipes jouent contre (en cas d'égalité absolue, toutes les équipes ont une fiche de 1/1, on recommence la phase 1). <strong>Durée: 6 semaines</strong></li>
                <li>phase 2: L'équipe en première position et deuxième position font un match pour déterminé qui gagne. <strong>Durée: 2 semaines</strong></li>
            </ul>
            {/*à changer mais je vais devoir demander à nat quoi faire avec tout ça*/}
            <h4>2 ou 3 équipes dépendamment du nombre de joueurs</h4>
            <p><em>Dépendamment du nombre de joueurs, les équipes pourront avoir un ou plusieurs remplaçant(s) dans la mesure où les joueurs de l'équipe font une rotation afin que tout le monde jouent le même nombre de match.</em></p>

            <h4>Récompenses: </h4>
            <p>Cash prize de 115$ <em>avec un bonus de 10$ à la personne qui obtient le play of the game lors de la game décisive du tournoi.</em></p>
            <p>L'équipe gagnante reçoit une médaille d'or, la 2ième équipe reçoit une médaille d'argent et la 3ième équipe, une médaille de bronze.</p>

            <h4>Matchmaking: </h4>
            <ul>
                <li>En fonction de l'expérience.</li>
                <li>En fonction de si tu joues sur pc ou console.</li>
            </ul>
            <h4>Règlements: </h4>
            <ul className="nodotlist">
                <li><FcCancel/> Widow (Fatale en français) est interdite aux joueurs pc.</li>
            </ul>
        </div>
    )
}

function RocketLeague(){
    return(
        <div className="center border">
            <img src={rl} alt="Rocket league"/>
            <h4>Durée: 2 mois</h4>
            <h4>Format: double élimination bracket (lotterie pour les équipes qui joue contre qui en premier)</h4>
            <p>Le type de match est à être déterminer entre les 2 équipes.</p>

            <h4>Récompenses: </h4>
            <ul>
                <li>Cash prize de 100$, l'équipe gagnante obtient 50$, la numéro 2 obtient 30$ et la numéro 3 obtient 20$.</li>
                <li>L'équipe gagnante obtient une médaille d'or, la numéro 2 obtient une médaille d'argent et la numéro 3 obtient une médaille de bronze.</li>
            </ul>

            <h4>Matchmaking: </h4>
            <ul>
                <li>Va se faire en fonction du tournoi précédent, dépendamment du nombre de joueurs, certaines équipes vont changer.</li>
            </ul>
            <h4>Règlements: </h4>
            <ul className="nodotlist">
                <li><FcCancel/> Pas le droit de chase bump</li>
            </ul>
        </div>
    )
}

function MineCraft(){ 
    
    return(
        <div className="center">
            {/* va devoir changer, les informations ne sont pas à 100% accurate */}
            <img src={mc} alt="Minecraft"/>
            <h4>Durée: 3 mois</h4>
            <h4>Format: 2 phases</h4>
            <ul>
                <li>Phase 1: build battle (thème Halloween, temps: 1h (1h25 si l'équipe est juste avec des personnes manettes))</li>
                <li>Phase 2: joueurs distribués dans 2 équipes différentes et font un gros team fight </li>
            </ul>
            <h4>Récompenses: </h4>
            <ul>
                <li>Cash prize pour la phase 1 est de 25$</li>
                <li>Cash prize pour la phase 2 est 100$</li>
                <li>Pour la phase 2, l'équipe reçoivent une médaille d'argent</li>
            </ul>
            <h4>Matchmaking: </h4>
            <ul>
                <li>à décidé</li>
            </ul>
            <h4>Règlements: </h4>
            <ul className="nodotlist">
                <li><FcCancel/> Pour la phase 1, pas le droit à des tutoriels (ça doit sortir de ton cerveau et de tes skills)</li>
                <li><FcCancel/> Pour la phase 2, pas le droit de prendre le loot sur le sol.(faut voir si on peut activer le keepinventory)</li>
                <li><FcCheckmark/> Pour la phase 2, les joueurs seront équipés d'une armure, 64 steaks, un arc, 32 flèches et une épée</li>
            </ul>
        </div>
    )
}
function ClashRoyale(){
    return(
        <div className="center border">
            <img src={cr} alt="Clash Royale"/>
            <h4>Durée: 2 mois (1 mois pour faire les équipes et 1 mois pour faire le tournoi)</h4>
            <h4>Format: double élimination bracket 2v2 (gamemode au choix des équipes)</h4>
            <h4>Récompenses: </h4>
            <ul>
                <li>Cash prize de 100$, l'équipe gagnante obtient 50$, la deuxième équipe obtient 30$ et la troisième équipe obtient 20$.</li>
                <li>La première équipe obtient la médaille d'or, la deuxième équipe obtient la médaille d'argent et la troisième équipe obtient la médaile de bronze.</li>
            </ul>
            <h4>Matchmaking:</h4>
            <ul>
                <li>La première phase est un swiss 1v1 pour faire les équipes.</li>
            </ul>
            <h4>Règlements: </h4>
            <ul className="nodotlist">
                <li><FcCheckmark/> On s'adapte aux troupes débloquées par nos adversaires.</li>
                <li> <FcCancel/> Interdiction aux évolutions, aux héros et aux tours évoluées.</li>
            </ul>
        </div>
    )
}
export default Jeux