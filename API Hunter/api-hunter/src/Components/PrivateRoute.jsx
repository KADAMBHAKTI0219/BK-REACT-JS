import { Navigate } from "react-router-dom";
import { AuthContextApi } from "../Context/AuthContext";
import { useContext } from "react";

function PrivateRoute({children}) {
    const {token} = useContext(AuthContextApi)
    return !token ? <Navigate to="/login" /> : children
}

export default PrivateRoute;
