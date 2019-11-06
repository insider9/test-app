import { combineReducers } from 'redux'

import { authReducer } from 'ducks/auth'

export const reducer = combineReducers({
  auth: authReducer,
})
