import { createContext, useContext, useReducer } from "react";

export const context = createContext()

export const ContextProvider = ({reducer, initialState, children}) => (
    <context.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </context.Provider>
) 

export const useStateValue = () => useContext(context)