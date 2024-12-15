import React from "react";

function Jeux(){
    return(
        <div>
            <h3>Clash of clan:</h3>
            <ClashOfClan />
            <Overwatch />
            <RocketLeague />
            <MineCraft />
        </div>
    )
}

function ClashOfClan(){
    return(
    <div>
        <p>image coc</p>
        <h4>Durée: 2 semaines</h4>
        <h4>Format: 2 de 3</h4>

        <h4>Récompenses:</h4>
        <p>Les joueurs de l'équipe gagnante reçoivent tous une médaille de bronze</p>
        <p>cash prize de 50$</p>

        <h4>Matchmaking:</h4>
        <p> Les équipes vont être séparé par le QI, l'expérience et le village. 
        <br/>
        <em>vous ne pouvez pas être mis contre quelqu'un qui n'est pas du même hdv à moins que vous êtes trop fort au jeu</em>
        </p>
        <p><em><strong>Pour les hdv 2 à 10, certains règlement et balancement seront ajoutés au fur et à mesure, car incapabilité de déterminer l'hdv de chaque joueur avant le tournoi</strong></em></p>
        <h4>Règlements: </h4>
        <ul>
            <li>2 nouveaux clans de créer pour être sur le même pieds d'égalité lorsqu'on donne des troupes.</li>
            <li>Les troupes d'évènements et les équipements épiques sont bannis.</li>
            <li>Pas le droit au super troupes que ton adversaire n'a pas débloqué (selon l'hdv). <em>ajustement possible par les organisateurs</em></li>
            <li>L'utilisation de potion pour max tes troupes est interdit si ton opposant est un hdv en dessous de toi et il peut être interdit pour certain joueurs au désir des organisateurs</li>
            <li>Pas le droit à nat de donner des villages de pro ligue à son équipe</li>
        </ul>
    </div>
    )
}

function Overwatch(){
    return(
        <div>
            <p>image overwatch</p>
            <h4>Durée: 2 mois</h4>
            <h4>Forma: 2 phases</h4>
            <ul>
                <li>phase 1: toutes les équipes jouent contre (en cas d'égalité absolue, toutes les équipes ont une fiche de 1/1, on recommence la phase 1). <strong>Durée: 6 semaines</strong></li>
                <li>phase 2: L'équipe en première position et deuxième position font un match pour déterminé qui gagne. <strong>Durée: 2 semaines</strong></li>
            </ul>

            <h4>2 ou 3 équipes dépendamment du nombre de joueurs</h4>
            <p><em>Dépendamment du nombre de joueurs, les équipes pourront avoir un ou plusieurs remplaçant dans la mesure ou les joueurs de l'équipe font une rotation dans leur joueurs et que tout le monde jouent le même nombre de match. </em></p>

            <h4>Récompenses: </h4>
            <p>cash prize de 115$ <em>(bonus de 10$ a la personne qui obtient le play of the game lors de la game décisive du tournoi)</em></p>
            <p>L'équipe gagnante reçoit une médaille d'or, la 2ieme équipe reçoit une médaille d'argent et la 3ieme équipe, une médaille de bronze.</p>

            <h4>Matchmaking: </h4>
            <ul>
                <li>En fonction de l'expérience</li>
                <li>En fonction de si tu joues sur pc ou console</li>
            </ul>
            <h4>Règlements: </h4>
            <ul>
                <li>Widow (Fatale en français) est interdite aux joueurs pc</li>
            </ul>
        </div>
    )
}

function RocketLeague(){
    return(
        <div>
            <p>Image rocket league</p>
            <h4>Durée: 2 mois</h4>
            <h4>Format: double élimination bracket (lotterie pour les équipes qui joue contre qui en premier)</h4>
            <p>Le type de match est à être déterminer entre les 2 équipes.</p>

            <h4>Récompenses: </h4>
            <ul>
                <li>Cash prize de 100$, l'équipe gagnante obtiens 50$, la numéro 2 obtiens 30$ et la numéro 3 obtiens 20$.</li>
                <li>L'équipe gagnante obtiens une médaille d'or, la numéro 2 obtiens une médaille d'argent et la numéro 3 obtiens une médaille de bronze.</li>
            </ul>

            <h4>Matchmaking: </h4>
            <ul>
                <li>Va se faire en fonctione du tournoi précédent, dépendamment du nombre de joueurs, certaines équipes vont changer.</li>
            </ul>
            <h4>Règlements: </h4>
            <ul>
                <li>Pas le droit de chase bump</li>
            </ul>
        </div>
    )
}

function MineCraft(){ {/* va devoir changer, les informations ne sont pas à 100% accurate */}
    return(
        <div>
            <h4>image minecraft</h4>
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
            <ul>
                <li>Pour la phase 1, pas le droit à des tutoriels (ça doit sortir de ton cerveau et de tes skills)</li>
                <li>Pour la phase 2, pas le droit de prendre le loot sur le sol.(faut voir si on peut activer le keepinventory)</li>
                <li>Pour la phase 2, les joueurs seront équipés d'une armure, 64 steaks, un arc, 32 flèches et une épée</li>
            </ul>
        </div>
    )
}
export default Jeux