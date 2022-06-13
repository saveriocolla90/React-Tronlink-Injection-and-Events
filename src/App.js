/* ---> HOOKS <--- */
import { useEffect } from 'react';
import { Fragment } from 'react';
import { useWallet } from 'stores/Users/WalletContext';
import useTronWeb from 'utils/Hooks/useTronWeb';

/* ---> LAYOUTS <--- */
import SideNavBar from 'components/layout/navigation/NavBar/SideNavBar';

/* ---> VIEWS <---*/
import Home from 'views/Home/Home';
import Wallet from 'views/Account/Wallet';
import WalletSettings from 'views/Account/WalletSettings';

/* ---> LINKING <---*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* ---> STYLES <--- */
import './App.css';
import './Validation.css'
import 'animate.css';
import "sweetalert2/dist/sweetalert2.min.css";


export default function App() {
  const {isTronWeb, userAddress, event} = useTronWeb();
  const [walletState, dispatchWallet] = useWallet();
  
  /* Catching Tronlink events */
  useEffect(() => {
    //console.log("TronWeb state:", isTronWeb);
    //console.log("TWB: ", window.tronWeb);
    if (event.type !== ""){
      if (event.type !== "tabReply" && event.data?.code !== 200){
        console.log("Event:", event);

        if (event.type === "setAccount") {
          window.tronWeb.trx.getBalance(userAddress).then(balance => {
            dispatchWallet({
              type: "SET_PROPERTY",
              prop: "trx_balance",
              payload: balance / 1e6
            })
          }).catch(e => console.error(e));  
        }
      }  
    }
  },[event]);

  /* Account data settings */
  useEffect(() => {
    if (userAddress) {
      dispatchWallet({ type: "RESET" }) 
      dispatchWallet({ type: "LOGIN_WLT",  payload: userAddress })

      if (window.tronWeb && window.tronWeb.ready){
        window.tronWeb.trx.getBalance(userAddress).then(balance => {
          dispatchWallet({
            type: "SET_PROPERTY",
            prop: "trx_balance",
            payload: balance / 1e6
          })
        }).catch(e => console.error(e));
        window.tronWeb.trx.getBandwidth(userAddress).then(bandwidth => {
          dispatchWallet({
            type: "SET_PROPERTY",
            prop: "bandwidth",
            payload: bandwidth
          })
        }).catch(e => console.error(e));
        window.tronWeb.trx.getAccountResources(userAddress).then(res => {
          dispatchWallet({
            type: "SET_PROPERTY",
            prop: "energy",
            payload: res.EnergyLimit
          })
        }).catch(e => console.error(e));  
      }
      /**
       * In order to get the list of unconfirmed transaction:
       * - request all the transactions from this address to the contract address 
       * - check each transaction using: tronWeb.trx.getConfirmedTransaction(txID)
       */
      if (walletState.host !== isTronWeb.host){
        dispatchWallet({
          type: "SET_PROPERTY",
          prop: "host",
          payload: isTronWeb.host
        })  
      }
      
      isTronWeb.connected
      ? dispatchWallet({ type: "CONNECTED" })
      : dispatchWallet({ type: "DISCONNECTED" })
    }
    else dispatchWallet({ type: "RESET" }) 
  },[isTronWeb.connected, isTronWeb.host, userAddress])

  /* Return the app is user is logged*/
  return (
      <Router>
        <Fragment>
        <div className="App">
          <main className='App-main'>
            <SideNavBar />
          </main>
          <div className="app">
            <header className="App-body">
              <Routes>
                <Route path='/'
                  element={<Home />}/> 
                <Route path='/wallet'
                  element={<Wallet />}/>
                <Route path='/walletSettings'
                  element={<WalletSettings />}/>            
              </Routes>
            </header>
          </div>
        </div>
        </Fragment>
      </Router>
  );
}
