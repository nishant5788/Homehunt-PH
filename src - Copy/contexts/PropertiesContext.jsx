import { createContext } from "react";



const BASE_URL = "http://localhost:8000";

const PropertiesContext = createContext();


function PropertiesProvider({children}) {

    return <PropertiesContext.Provider>
        {children}
    </PropertiesContext.Provider>

}