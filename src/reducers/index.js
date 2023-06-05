import { combineReducers  } from 'redux';



const IsMobileReducer = (isMobile=false, action) => {                  // Holds Status of viewving device.
    if (action.type === process.env.REACT_APP_IS_MOBILE) {
      return action.value;
    }
    return isMobile;
}
  
const modals = { LOGIN_MODAL: false };

const modalReducer = (state=modals, action) => {    
  if (action.type === 'MODAL') {
    return {...state, [action.payload.name]: action.payload.status};
  }    
  return state;  
}





export default combineReducers({
    isMobile: IsMobileReducer,
    modals: modalReducer
})