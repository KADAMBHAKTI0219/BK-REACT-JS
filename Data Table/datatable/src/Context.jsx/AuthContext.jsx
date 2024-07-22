// CPC=Create,Producer,Consume

import { createContext, useState } from "react";

// Create
export const AuthenticationContext = createContext()
// Producer
export const AuthenticationContextProvider = ({children})=>{

    const [token,setToken] = useState('')

    const login=(value)=>{
        setToken(value)
    }

    const logOut=()=>{
        setToken("")
    }
    return(
        <AuthenticationContext.Provider value={{token,login,logOut}}>{children}</AuthenticationContext.Provider>
)}
