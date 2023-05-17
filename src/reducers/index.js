import { combineReducers  } from 'redux';



const IsMobileReducer = (isMobile=false, action) => {                  // Holds Status of viewving device.
    if (action.type === process.env.REACT_APP_IS_MOBILE) {
      return action.value;
    }
    return isMobile;
  }
  














export default combineReducers({
    isMobile: IsMobileReducer
})