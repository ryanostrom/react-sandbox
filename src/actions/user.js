export const USER_LOGIN_START = 'USER_LOGIN_START'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'

export const RESET_PASSWORD_START = 'RESET_PASSWORD_START'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR'

export const USER_LOGOUT_START = 'USER_LOGOUT_START'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR'

export function userLoginStart(payload) {
  return {
    type: USER_LOGIN_START,
    payload
  }
}

export function userLoginSuccess(payload) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload
  }
}
export function userLoginError(payload) {
  return {
    type: USER_LOGIN_ERROR,
    payload
  }
}
export function resetPasswordStart(payload) {
  return {
    type: RESET_PASSWORD_START,
    payload
  }
}
export function resetPasswordSuccess(payload) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload
  }
}
export function resetPasswordError(payload) {
  return {
    type: RESET_PASSWORD_ERROR,
    payload
  }
}
export function userLogoutStart(payload) {
  return {
    type: USER_LOGOUT_START,
    payload
  }
}
export function userLogoutSuccess(payload) {
  return {
    type: USER_LOGOUT_SUCCESS,
    payload
  }
}
export function userLogoutError(payload) {
  return {
    type: USER_LOGOUT_ERROR,
    payload
  }
}
