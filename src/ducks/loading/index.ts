import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

import { AuthActions } from 'ducks/auth'

const auth = handleActions<boolean>({
  [AuthActions.authRequest]: () => true,
  [AuthActions.authFailure]: () => false,
  [AuthActions.authSuccess]: () => false,
}, false)

export const loadingReducer = combineReducers({
  auth,
})
