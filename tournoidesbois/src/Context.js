import { createContext, useState, useEffect} from "react";
export const LoginContext = createContext();


export function LoginProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
        return storedIsLoggedIn === 'true'
    })
    useEffect(() =>{
        sessionStorage.setItem('isLoggedIn', isLoggedIn ? 'true': 'false');
    },[isLoggedIn])
    return(
        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}