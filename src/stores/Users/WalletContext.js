import { createContext, useContext, useReducer } from "react";
import WalletReducer from 'utils/reducers/WalletReducer';

const WalletContext = createContext();
const WalletSetContext = createContext();
const initialState = {
    loading: false,
    isLoggedIn: false,
    connected: false,
    address: "",
    host: "",
    node: "",
    trx_balance: 0,
    bandwidth: 0,
    energy: 0,
    unsignedTrx: 0
};

export function WalletProvider({children}) {
    const [walletState, dispatchWallet] = useReducer(WalletReducer, initialState); 

    return (
        <WalletContext.Provider value={walletState}>
            <WalletSetContext.Provider value={dispatchWallet}>
                {children}
            </WalletSetContext.Provider>
        </WalletContext.Provider>
    )
}

export function useWallet() {
    const walletState = useContext(WalletContext);
    const dispatchWallet = useContext(WalletSetContext);

    if(!dispatchWallet){
        throw new Error("The UserProvider is missing");
    }

    return [walletState, dispatchWallet];
}