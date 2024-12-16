import React from "react";
import './CSS/InformationGeneral.css'
import './CSS/Main.css'
import coc from '../img/coc.png'
import ow from '../img/overwatch2.png'
import cr from '../img/clashroyale.png'
import rl from '../img/rl.png'
import mc from '../img/minecraft.png'
import fakegold from '../img/fakegold.png'
import fakesilver from '../img/fakesilver.png'
import fakebronze from '../img/fakebronze.png'
import {FcCancel, FcCheckmark } from "react-icons/fc"
export default function GeneralInformation(){
    return(
        <>
            <InformationGeneral />
            <div className="border center">
                <Equipe />
                <Regle />
            </div>
        </>
    )
}

function InformationGeneral(){
    return(
        <div>
            <div className="center border">
                <h3>But: </h3>
                <p>Le but premier de cette nouvelle version du tournoi des boys est de créer plus de hype pour le tournoi et 
                    de s'assurer qu'il se déroule plus efficacement et rapidement avec des règlements plus clairs et précis.
                </p>
                <h3>Prix d'entrée: 20$</h3>
                <h3>Durée totale du tournoi: 10 mois</h3>
                <h3>Deux objectifs majeurs pour les joueurs: </h3>
                <ul>
                    <li>Tenter d’obtenir le plus de cash prize possible afin de dépouiller son cercle d’amis de manière considérable.</li>
                    <li>Tenter de gagner le saint trophée du tournoi des boys ou une médaille en obtenant le plus de points possible</li>
                </ul>
            </div>    
            <ListJeux />
            <Explication />
            <Medaille />
            
        </div>
        
    )
}

function Explication(){
    return(
        <div className="center border">
            <h3>Comment obtenir du cash prize:</h3>
                <p>
                    Chaque jeu aura un prize pool qui sera distribué parmi les 3 premières positions.
                    Il ne s’agit donc pas d’un cash prize unique pour le tournoi tout entier, mais bien d’un cash prize différent pour chacun des jeux du tournoi.
                </p>
                <h3>Comment obtenir les médailles:</h3>
                <p>
                    Les médailles seront attribués aux équipes ayant le mieux performées dans les tournoi et chaque médaille compte pour un certain nombre de points. 
                    Le joueur ayant amassé le plus de point se mérite une médaille d’or personnalisée ainsi que le saint trophée. Pour ce qui est de la deuxième et troisième position, 
                    les joueurs se verront également attribuer une médaille d’argent et de bronze personnalisée. 
                    <br/>
                    <em>** En cas d’égalité parfaite en ce qui concerne le nombre de points, la dite égalité sera brisée par un roche papier ciseau légendaire dont nous allons parler dans les générations futures.</em>
                </p>
        </div>
    )
}

function Equipe(){
    return(
        <>
            <h3>Les équipes:</h3>
            <p>
                 Il est important de noter que les équipes sont faites pour être le plus fair possible pour favoriser l’égalité des chances de gagner le tournoi, peut-importe le niveau et peut-importe le jeu joué.
                 Ceci étant dit, le tournoi implique donc des risques de perdre à cause de son ou ses coéquipiers et les joueurs doivent en être au courant et accepter.
                  <br/>
                  <em>** Il est de votre responsabilité de pratiquer avec votre coéquipier.</em>
            </p>
            <p>
                 De plus , il est du devoir des équipes de se contacter entres-elles afin de prévoir leur match dans un certain délai donné sous faute de recevoir des pénalités ou une disqualification
                lorsque les équipes d’un certain jeu sont formées officiellement. Les joueurs ont le droit de manifester leur désaccord et de donner leurs opinions pour des potentiels changements dans les 24h suivant la création (on est pas monstres bordel vous avez le droit de donner votre avis, mais après 24h on vous emmerde).
                Si un joueur estime qu’un règlement quelconque viens directement le désavantager ou aurait comme impact d’avantager considérablement un autre participant, il est dans son droit de contacter les organisateurs du tournoi pour les aviser afin que des changements soient fait.
                Cependant, notez qu'il va vous falloir des arguments valables qui démontre très clairement l'injustice et non de venir se plaindre sans aucune préparation.
                Malgré le fait que les équipes soient créés de la manière la plus équitable possible, il est toutefois impossible d’atteindre la perfection et donc de créer des équipes 100% équitables.
                En participant à ce tournoi, les joueurs doivent être conscients qu’ils pourraient potentiellement faire partie d’une équipe trop forte ou trop faible en raison d’un manque de jugement des organisateurs ou de l’amélioration rapide d’un des joueurs.
            </p>
        </>
    )
}

function Regle(){
    return(
        <>
            <h3>Règlement Générale:</h3>
                <ul className="nodotlist">
                    <li><FcCheckmark/> À savoir que le gagnant du trophée de ce tournoi sera détenteur du trophée jusqu’à la prochaine édition du tournoi soit gagnée. S’il n’y a finalement pas de prochaine édition, le gagnant pourra garder le trophée indéfiniment.</li>
                    <li><FcCheckmark/> Chaque joueur doit avoir installé le jeu et doit avoir pris les mesures nécéssaires pour être pouvoir jouer le jour de votre match sans faire attendre les autres participants. Le tournoi <strong>ne</strong> sera <strong>pas</strong> retardé ou annulé si un joueur ne respect pas cet engagement.</li>
                    <li><FcCheckmark/> Le cash prize est distribué <strong>équitablement</strong> entre les membres de l'équipe, donc aucune personne recevra plus d'argent du cash prize suite à une meilleure performance.</li>
                    <li><FcCancel/> Si un joueur enfraint une des règles du tournoi ou throw volontairement dans un jeu, il perdra la chance de recevoir une médaille ou une partie du cash prize dans le cas où son équipement est victorieuse.</li>
                    <li><FcCancel/> Si un joueur déclare qu'il sera présent et que celui ci s'absente sans donner de nouvelle dans un délai de 15 minutes après le début du tournoi, il déclare forfait par défaut.</li>
                </ul>
        </>
    )
}
function Medaille(){
    return(
        <div className="center border">
            
                <h3>Médailles:</h3>
                <div className="medaillediv">
                <p className="medailletxt">
                    médaille d'or:
                    <img className="medailleimg" src={fakegold} alt="fakeagold"/>
                    points: 2
                 </p>
                <p className="medailletxt">
                    médaille argent:
                    <img className="medailleimg" src={fakesilver} alt="fakesilver"/>
                    points: 1.5
                </p>
                <p className="medailletxt">
                    médaille bronze:
                    <img className="medailleimg" src={fakebronze} alt="fakebronze"/>
                    point: 1
                    </p>
                </div>
        </div>

    )
}
function ListJeux(){
    return(
        <div className="center border">
                <h3>Voici les jeux présents dans le tournoi:</h3>
                    <ul className="width100 nodotlist">
                        <li className="listjeux ">
                            <img className="jeuximg" src={coc} alt="Clash of Clan "/>
                            Clash of clan
                        </li>
                        <li className="listjeux">
                             <img className="jeuximg" src={ow} alt="Overwatch2 "/>
                             Overwatch 2
                        </li>
                            <li className="listjeux">    
                                <img className="jeuximg" src={cr} alt="Clash royale "/>    
                                Clash royale
                            </li>
                            <li className="listjeux">
                                <img className="jeuximg" src={rl} alt="Rocket league "/>
                                Rocket league
                            </li>
                            <li className="listjeux">
                                <img className="jeuximg" src={mc} alt="Minecraft "/> 
                                Minecraft
                            </li>
                    </ul>
            </div>
    )
}
