import React from "react";
import './CSS/InformationGeneral.css'

export default function GeneralInformation(){
    return(
        <div>
            <p>Le but premier de cette nouvelle version du tournoi des boys est de créer plus de hype et 
                de s'assurer que le tournoi se déroule plus efficacement et rapidement en plus d'avoir des règlements plus clairs et précis.
            </p>
            <h3>Durée totale du tournoi: 10 mois</h3>
            <h3>Deux objectifs majeurs pour les joueurs: </h3>
            <ul>
                <li>tenter d’obtenir le plus de cash prize possible afin de dépouiller son cercle d’amis de manière considérable</li>
                <li>tenter de gagner le saint trophée du tournoi des boys ou une médaille en obtenant le plus de points possible</li>
            </ul>
            
            <h3>Comment obtenir du cash prize:</h3>
            <p>
                Chaque jeu aura un prize pool qui sera distribué parmi les 3 premières positions.
                Il ne s’agit donc pas d’un cash prize unique pour le tournoi tout entier, mais bien d’un cash prize différent pour chacun des jeux du tournoi
            </p>
            <h3>Comment obtenir des médailles: :</h3>
            <p>
                Les médailles seront attribués aux équipes ayant le mieux performées dans les tournoi et chaque médaille compte pour un certain nombre de point. 
                Le joueur ayant amassé le plus de point se mérite une médaille d’or personnalisée ainsi que le saint trophée. Pour ce qui est de la deuxième et troisième position, 
                les joueurs se verront également attribuer une médaille d’argent et de bronze personnalisée. 
                <br/>
                <em>** En cas d’égalité parfaite en ce qui concerne le nombre de points, la dite égalité sera brisée par un roche papier ciseau légendaire dont nous allons parler dans les générations futures</em>
            </p>
            <div>
            <p className="medaille">Médaille d'or</p>
            <p className="medaille">Médaille d'argent</p>
            <p className="medaille">Médaille de bronze</p>
            </div>
            <div >
            <p className="medaille">image or</p>
            <p className="medaille">image argent</p>
            <p className="medaille">image bronze</p>
            </div>
            <div>
                <p className="medaille">points: 2</p>
                <p className="medaille">points: 1.5</p>
                <p className="medaille">point: 1</p>
            </div>
            <h3>Voici les jeux présents dans le tournoi:</h3>
            <ul> 
                {/*ajouter des photos à coté des chaque jeux*/}
                <li>Clash of clan</li>  
                <li>Overwatch 2</li>
                <li>Clash royale</li>
                <li>Rocket league</li>
                <li>Minecraft</li>
            </ul>
            <h3>Les équipes</h3>
            <p>
                Il est important de noter que les équipes sont faites pour êtrent le plus fair possible pour favoriser l’égalité des chances peut-importe le niveau et peut-importe le jeu.
                Ceci étant dit, le tournoi implique donc des risques de perdre à cause de son ou ses coéquipiers et les joueurs doivent en être au courant et accepter.
                Il est de votre responsabilité de pratiquer avec votre coéquipier.
            </p>
            <p>
                De plus , il est du devoir des équipes de se contacter entres-elles afin de prévoir leur match dans un certain délai sous faute de recevoir des pénalité ou un disqualification
                Lorsque les équipes d’un certain jeu sont formées officiellement. Les joueurs ont le droit de manifester leur désaccord et de donner leur opinions pour des potentiels changements dans les 24h suivant la création (on est pas monstres bordel vous avez le droit de donner votre avis, mais après 24h on vous emmerde).
                Si un joueur estime qu’un règlement quelconque viens directement le désavantager ou aurait comme impact d’avantager considérablement un autre participant, il est dans son droit de contacter les organisateurs du tournoi pour les aviser afin que des changements soient fait.
                Malgré le fait que les équipes soient créés de la manière la plus équitable possible, il est toutefois impossible d’atteindre la perfection et donc de créer des équipes 100% équitables. En participant à ce tournoi, les joueurs doivent être conscients qu’ils pourraient potentiellement faire partie d’une équipe trop forte ou trop faible en raison d’un manque de jugement des organisateurs ou de l’amélioration rapide d’un des joueurs.
            </p>
            <h3>Règlement Générale:</h3>
            <ul>
                <li>Si un joueur déclare qu'il sera présent et que celui ci s'absente sans donné de nouvelle, il déclare forfait par défaut dans un délai de 15 minutes apres le début du tournoi</li>
                <li>À savoir que le gagnant du trophée de ce tournoi sera détenteur du trophée jusqu’à ce que la prochaine édition du tournoi sois gagnée. S’il n’y a finalement pas de prochaine édition, le gagnant pourra garder le trophée indéfiniment</li>
                <li>Chaque joueur doit avoir installé le jeu et doit avoir pris les mesures nécéssaires pour être en mesure de jouer le jour de votre match. Le tournoi <strong>ne</strong> sera <strong>pas</strong> retardé ou annulé si un joueur ne respect pas cet engagement.</li>
                <li>Le cash prize est distribué <strong>équitablement</strong> entre les membres de l'équipe (tous les membres de l'équipe recoivent le même montant)</li>
                <li><strong>Pénalité en cas d'enfreint aux règlements ou throw volontaire dans un jeu: impossibilité de recevoir une médaille ou un cash prize dans le cas de la victoire de son équipe</strong></li>
            </ul>
        </div>
    )
}