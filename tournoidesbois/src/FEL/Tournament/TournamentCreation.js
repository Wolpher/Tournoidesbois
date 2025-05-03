import React from "react";

export default function TournamentCreation({tournament,forma}){
    
    //rajouter un switch pour prendre les fonctions dépendamment des formas
    
    return(
        <>
            <FormaThwoOfThree nbEquipe={2} nbJoueur={5}/>
        </>
    )
}

function FormaThwoOfThree({nbEquipe,nbJoueur}){
return(
    <>
    <h1>...Loading</h1>
    </>
)
}
