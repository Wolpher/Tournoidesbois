import { useEffect, useState } from "react"


async function postUser (user){
    const response = await fetch('http://localhost:8083/postUser', {
        method: "POST",
        headers:
        {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(user),
    }) 
    {/**Doit pouvoir handle la rep mais ça c'Est à faire avec le frontend bitch */}
    console.log(response.status)
}

async function getUser(user){
    const response = await fetch(`http://localhost:8083/getUser?username=${user.username}&password=${user.password}`,{
        method: "GET",
        headers:
        {
            'Content-Type' : 'application/json'
        },
    })
    console.log(response)
    {/**Doit pouvoir handle la rep mais ça c'Est à faire avec le frontend bitch */}
}
function HaveTournament(gameTitle) {
    const [haveTournament, setHaveTournament] = useState();

    useEffect(() => {
        const fetchTournament = async () => {  
            const response = await fetch(`http://localhost:8083/haveTournament?gameTitle=${gameTitle}`,{
                method:"GET",
                headers:
                {
                    'Content-Type' : 'application/json'
                }
                });
                const responseData = await response.json()
                setHaveTournament(responseData.haveTournament)
            }
            fetchTournament()
        }, [gameTitle])
    return haveTournament
    
}


async function CreateTournament({gameTitle, tournament}){
    console.log(gameTitle)
    console.log("-------------")
    console.log(tournament)
    const response = await fetch(`http://localhost:8083/createTournament?gameTitle=${gameTitle}`,{
        method:"PUT",
        headers:
        {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(tournament)
    })
    const responseData = await response.json()
    console.log(responseData)
}

function GetAllPlayers(){
    const [allPlayers, setAllPlayers] = useState([])

    useEffect(() => {
        const fetchAllPlayers = async () => {
            const response = await fetch("http://localhost:8083/getAllUsers", {
                method:"GET",
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            const allUsers = await response.json()
            setAllPlayers(allUsers)
    }
    fetchAllPlayers()
    }, [])
    return allPlayers
}

export{
    postUser,
    getUser,
    HaveTournament,
    CreateTournament,
    GetAllPlayers
}