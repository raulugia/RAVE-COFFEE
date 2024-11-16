import { useContext, createContext, useReducer } from "react";

const BasketContext = createContext();

export const ContextProvider = ({ children }) => {

    return (
        <BasketContext.Provider>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasket = () => useContext(BasketContext)