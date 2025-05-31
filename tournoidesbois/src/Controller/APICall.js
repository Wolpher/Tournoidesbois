import { useEffect, useState } from "react"


async function PostUser (user){
        const response = await fetch('http://localhost:8083/postUser', {
        method: "POST",
        headers:
            {
                 'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user),
        })
        const responseData = await response.json();
        return responseData.success
}

async function getUser(user){
    const response = await fetch(`http://localhost:8083/getUser?username=${user.username}&password=${user.password}`,{
        method: "GET",
        headers:
        {
            'Content-Type' : 'application/json'
        },
    })
    const responseData = await response.json();
    console.log("responseData: " + JSON.stringify(responseData));
    return responseData;
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
    return allPlayers;
}

async function Promotion(username){
    const response = await fetch(`http://localhost:8083/AdminPerms?username=${username}`,{
        method:"PUT",
        headers:{
             'Content-Type':'application/json'
             }
        })
    const responseData = await response.json()
    return responseData.success;
}

async function Demotion(username){
    const response = await fetch(`http://localhost:8083/MemberPerms?username=${username}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        }
    })
    const responseData = await response.json();
    return responseData.success;
}

function HaveTournament({gameTitle}) {
    const [data, setData] = useState({
        haveTournament:null,
        game:null
    });

    useEffect(() => {
        const FetchTournament = async () => {  
            const response = await fetch(`http://localhost:8083/haveTournament?gameTitle=${gameTitle}`,{
                method:"GET",
                headers:
                {
                    'Content-Type' : 'application/json'
                }
                });
                const responseData = await response.json()
                setData({haveTournament:responseData.haveTournament, game:JSON.parse(responseData.game)})
            }
            FetchTournament()
        }, [gameTitle])
    return data
    
}


async function CreateTournament({gameTitle, tournament}){
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

function GetTournament({gameTitle}){
    const [tournament, setTournament] = useState();
    useEffect(() => {
        const fetchTournament = async () => {
            const response = await fetch(`http://localhost:8083/getTournament?gameTitle=${gameTitle}`,{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const responseData = await response.json();
            setTournament(responseData.tournament)
        }
        fetchTournament()
    },[gameTitle])
    return tournament
}
function GetAllPlayersSpecificTournament({gameTitle}){
    const [allPlayers, setAllPlayers] = useState();
    useEffect(()=> {
        const fetchAllPlayers = async () => {
            const response = await fetch(`http://localhost:8083/GetAllUsersSpecificTournament?tournament=${gameTitle}`,{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const responseData = await response.json();
            if(responseData.success === true){
                setAllPlayers(JSON.parse(responseData.users))
            }else{
                setAllPlayers([])
            }
        }
        fetchAllPlayers();
    },[gameTitle])
    return allPlayers;
}

function AddHistorique({historique}){
        const AddHistorique = async () => {
            const response = await fetch(`http://localhost:8083/addHistorique`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(historique)
            })
        }
        AddHistorique()
}

function GetHistorique({gameTitle}){
    const [historique, setHistorique] = useState();
    useEffect(() => {
        const GetHistorique = async () => {
        const response = await fetch(`http://localhost:8083/getHistorique?gameTitle=${gameTitle}`,{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        const responseData = await response.json()
        setHistorique(responseData)
    }
    GetHistorique();
    },[gameTitle])
    
    return historique;
}
export{
    PostUser,
    getUser,
    GetAllPlayers,
    HaveTournament,
    CreateTournament,
    GetTournament,
    Promotion,
    Demotion,
    GetAllPlayersSpecificTournament,
    AddHistorique,
    GetHistorique
}