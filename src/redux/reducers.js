import { combineReducers } from 'redux'
import { userConstants, alertConstants } from './constants'

const initialState = {}
const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      }
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGOUT:
      return {}
    default:
      return state
  }
}

const alert = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}

const rootReducer = combineReducers({
  authentication,
  alert
})

export default rootReducer
