import { alertConstants, userConstants } from './constants'
import { appService } from './services'

function alertSuccess(message) {
    return { type: alertConstants.SUCCESS, message };
}

function alertError(message) {
    return { type: alertConstants.ERROR, message };
}

function alertClear() {
    return { type: alertConstants.CLEAR };
}

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }))
    appService.login(username, password)
    .then(response => {
        dispatch(success(response.user))
        dispatch(alertSuccess(response.message))
        setTimeout(() => {
          dispatch(alertClear())
          window.location.href = '/'
        }, 500)
      },
      error => {
        dispatch(failure(error))
        dispatch(alertError(error))
        setTimeout(() => {
          dispatch(alertClear())
        }, 5000)
      }
    )
  }

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  return { type: userConstants.LOGOUT }
}

export const userActions = {
  login,
  logout,
}
