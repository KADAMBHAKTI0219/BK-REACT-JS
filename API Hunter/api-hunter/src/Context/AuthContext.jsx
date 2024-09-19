import { createContext, useState } from "react";

export const AuthContextApi = createContext();
function AuthContextProvider({children}) {
    const [token,setToken] = useState('')
    const login = (value)=>{
        setToken(value)
    }
    const logOut = ()=>{
        setToken('')
    }
    return <AuthContextApi.Provider value={{token,login,logOut}}>{children}</AuthContextApi.Provider>
}

export default AuthContextProvider;
