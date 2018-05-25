import { combineReducers } from 'redux'
// import {
//   READ_JSON,
//   SEARCH_STUDENT
// } from './action' 
import * as actions from './action'
import results from './results.json'

var obj = JSON.parse(JSON.stringify(results));

function searchstudentReducerFunction(state = {}, action) {
  switch (action.type) {
    case SEARCH_STUDENT:
      return null
    default:
      return state
  }
}


export default combineReducer



