import { createContext, useReducer } from "react";
import { PokeReducer } from "./PokeReducer";

const PokeContext = createContext()

export const PokeProvider = ({ children }) => {

    const initialState = {
        pokemon: null,
        life: 3,
        visible:false
    }


    const [state, dispatch] = useReducer(PokeReducer, initialState)


    return (
        <PokeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PokeContext.Provider>
    )
}


export default PokeContext