/* ---> HOOK <--- */
import { useWallet } from 'stores/Users/WalletContext';

/* ---> ICONS <---*/
import { Rings } from 'react-loading-icons';
import logo from 'logo.svg';

/* ---> STYLES <--- */
import 'App.css';


export default function Home() {
    const [walletState] = useWallet();

    return (    
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            {walletState.connected ?
            <p>
                Network: {walletState.node}
                <br/>
                User address: {walletState.address}
            </p>
            :<p>
                Network loading:
                <br/><Rings/>
            </p>
            }
        </div>
    )
}