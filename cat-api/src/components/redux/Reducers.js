import { combineReducers } from 'redux'

const setCats = (state=[], action) => {
  switch(action.type){
    case "SET_CATS":
    return state.concat(action.value);
    default:
    return state
  }
}

export default combineReducers({
  catArr: setCats
})