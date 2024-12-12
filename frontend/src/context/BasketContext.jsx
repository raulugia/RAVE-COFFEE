import { useContext, createContext, useReducer, useEffect, useState } from "react";

const BasketContext = createContext();

const basketReducer = (basket, action) => {
    switch(action.type) {
        case "ADD":
            //check if item already exists
            const existingItem = basket.find(item => item.id === action.payload.id);

            //case item exists - update amount
            if(existingItem) {
                return basket.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + action.payload.quantity} : item)
            //case item is new - add to basket
            }else {
                return [...basket, {...action.payload, price: action.payload.price.toFixed(2)}];
            }
        case "REMOVE ALL":
            return basket.filter(item => item.id !== action.payload.id);
        case "REMOVE ONE":
            return basket.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity - 1} : item);
        case "UPDATE QUANTITY":
            return basket.map(item => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item);
        case "EMPTY":
            localStorage.setItem("basket", "");
            return [];
        default:
            return basket;
    }
}

export const ContextProvider = ({ children }) => {
    const [basket, dispatch] = useReducer(basketReducer, [], () => {
        const storedBasket = localStorage.getItem("basket");
        return storedBasket ? JSON.parse(storedBasket) : [];
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [displayModal, setDisplayModal] = useState(false);
    const [errorData, setErrorData] = useState(null);

    const getTotalPrice = () => {
        return basket.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    const getTotalItemsQuantity = () => {
        return basket.reduce((total, item) => total + item.quantity, 0);
    }

    //update price and items quantity when basket changes
    useEffect(() => {
        const newTotal = getTotalPrice();
        const newItemsQuantity = getTotalItemsQuantity();

        setTotalPrice(newTotal);
        setItemsQuantity(newItemsQuantity);

        // Save the updated basket to localStorage
        localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket])

    return (
        <BasketContext.Provider value={{basket, dispatch, totalPrice, itemsQuantity, displayModal, setDisplayModal, errorData, setErrorData}}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasket = () => useContext(BasketContext)