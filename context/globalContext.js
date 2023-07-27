import React  from "react";
import axios from "axios";



const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
};