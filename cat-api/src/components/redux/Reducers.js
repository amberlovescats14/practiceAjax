import { combineReducers } from 'redux'

const setCats = (state=[], action) => {
  switch(action.type){
    case "SET_CATS":
    return state.concat(action.value);
    default:
    return state
  }
}

const setThreeCats = (state = [], action) => {
  switch(action.type){
    case "THREE_CATS":
    return state.concat(action.value);
    default:
    return state
  }
}


export default combineReducers({
  catArr: setCats,
  threeCats: setThreeCats,
})