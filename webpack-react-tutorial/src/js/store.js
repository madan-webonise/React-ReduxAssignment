import {createStore} from 'redux'
import combineReducer from './reducer'
import {
  READ_JSON,
  SEARCH_STUDENT
} from './action' 

const store =createStore(combineReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(READ_JSON);


store.dispatch(READ_JSON);
