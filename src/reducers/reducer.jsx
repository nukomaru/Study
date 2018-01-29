import { combineReducers } from 'redux'
import {
  INPUT_TEXT,
} from '../actions/action'

function input(state = [], action) {
  switch (action.type) {
    case INPUT_TEXT:
    console.log(action.text);
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}

const Rducers = combineReducers({
  input
})

export default Rducers