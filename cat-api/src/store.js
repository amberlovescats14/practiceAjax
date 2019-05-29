import { createStore, applyMiddleware } from 'redux'
import rootReducers from './components/redux/Reducers'
import thunk from 'redux-thunk'
import state from './state'

const store = createStore(
  rootReducers,
  state,
  applyMiddleware(thunk)
)

export default store