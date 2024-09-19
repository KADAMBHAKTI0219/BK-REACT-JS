
import { createRoot } from "react-dom/client";

import App from "./App";
import AuthContextProvider from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <AuthContextProvider>
     <BrowserRouter>  
    <App />
    </BrowserRouter> 
    </AuthContextProvider>
    
);
