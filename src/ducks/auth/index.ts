import { handleActions } from 'redux-actions'
import { takeEvery, call } from 'redux-saga/effects'

enum AuthActions {
  authRequest = 'APP / AUTH / REQUEST',
  authSuccess = 'APP / AUTH / SUCCESS',
  authFailure = 'APP / AUTH / FAILURE',
}

export const authReducer = handleActions({

}, {})

function* auth() {
  yield call(() => fetch('/me'))
}

export function* authSagas() {
  yield takeEvery(AuthActions.authRequest, auth)
}
