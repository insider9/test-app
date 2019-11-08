import {Action, createAction, handleActions} from 'redux-actions'
import { takeEvery, put, delay } from 'redux-saga/effects'
import { AuthData, AuthState } from 'interfaces'

//#region Actions
export enum AuthActions {
  authRequest = 'APP / AUTH / REQUEST',
  authSuccess = 'APP / AUTH / SUCCESS',
  authFailure = 'APP / AUTH / FAILURE',
}

export const authRequest = createAction<AuthData>(AuthActions.authRequest)
export const authSuccess = createAction(AuthActions.authSuccess)
export const authFailure = createAction(AuthActions.authFailure)
//#endregion

//#region Reducer
const initialState: AuthState = {
  jwt: localStorage.getItem('jwt') || null,
}

export const authReducer = handleActions<AuthState>({
  [AuthActions.authSuccess]: (state: AuthState, action: Action<AuthState>) => ({ ...state, ...action.payload }),
}, initialState)
//#endregion

//#region Sagas
function* auth(action: Action<AuthData>) {
  try {
    // TODO switch to real API POST method with data as body
    const data = action.payload
    // eslint-disable-next-line
    console.log(data)

    const response = yield fetch(`${process.env.REACT_APP_API_URL}/auth`)
      .then(response => response.json())
    yield delay(2000)
    yield put(authSuccess(response))
  } catch (e) {
    yield put(authFailure(e))
  }
}

export function* authSagas() {
  yield takeEvery(AuthActions.authRequest, auth)
}
//#endregion
