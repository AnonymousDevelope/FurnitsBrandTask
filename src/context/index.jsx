import { createContext, useState } from "react";

export const FurnitContext = createContext()
export const FurnitContextProvider = ({children})=>{
    const [search,setSearch] = useState('');
    const [filter,setFilter] = useState([]);
    const contextValue = {
        search,
        setSearch,
        filter,
        setFilter
    }
    return (
        <FurnitContext.Provider value={contextValue}>
            {children}
        </FurnitContext.Provider>
    )
}