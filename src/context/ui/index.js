import { createContext, useContext, useState } from "react";


export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [itemNumber, setItemNumber] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    const value = {
        drawerOpen,setDrawerOpen,itemNumber, setItemNumber,cartProducts, setCartProducts
    }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>

}