import { createContext, useState } from "react";

// CPC
export const AuthContextApi = createContext();
export const AuthContextApiProvider = ({children})=>{
    const [token,setToken] = useState('')
    const login = (value)=>{
        setToken(value)
    }
    const logOut = ()=>{
        setToken('')
    }
    return <AuthContextApi.Provider value={{token,login,logOut}}>{children}</AuthContextApi.Provider>
}
