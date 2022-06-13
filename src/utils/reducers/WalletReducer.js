export default function WalletReducer (state, action) {
  switch (action.type){
    case "SET_PROPERTY":
      return {
        ...state,
        [action.prop]: action.payload
      };
    case "LOGIN_WLT":
      return {
        ...state,
        loading: true,
        isLoggedIn: true,
        address: action.payload
      };
    case "LOGOUT_WLT":
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
      };
    case "CONNECTED":
      return {
        ...state,
        loading: false,
        connected: true,
      };  
    case "DISCONNECTED":
      return {
        ...state,
        loading: false,
        connected: false
      };    
    case "RESET":
      return {
        ...state,
        address: "",
        host: "",
        node: "",
        trx_balance: 0,
        bandwidth: 0,
        energy: 0,
        unsignedTrx: 0,
        connected: false,
        isLoggedIn: false,
        loading: false
      };
    default:
      return state;
  }
}
